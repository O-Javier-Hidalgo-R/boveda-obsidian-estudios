// inicializar_proyecto.js (VERSIÓN CORREGIDA)
module.exports = async (params) => {
  const { quickAddApi: { inputPrompt, suggester } } = params;
  const app = this.app;
  const vault = app.vault;

  // 1. ¿Dónde crear el proyecto?
  const opciones = ["En una materia específica", "En proyectos generales (02-proyectos)"];
  const eleccion = await suggester(opciones, opciones);
  if (!eleccion) return;

  let basePath = "";
  if (eleccion === "En una materia específica") {
    // Obtener materias existentes (carpetas dentro de 01-materias)
    const todos = app.vault.getAllLoadedFiles();
    const materias = todos
      .filter(f => f.children && f.path.startsWith("01-materias/") && f.path.split("/").length === 2)
      .map(f => f.name);
    
    if (materias.length === 0) {
      new Notice("❌ No hay materias. Crea una primero con Ctrl+Shift+M");
      return;
    }
    
    const materia = await suggester(materias, materias);
    if (!materia) return;
    basePath = `01-materias/${materia}/proyectos`;
  } else {
    basePath = "02-proyectos";
  }

  // 2. Pedir nombre del proyecto
  const nombre = await inputPrompt("Nombre del proyecto (sin espacios, usa guiones)", "ej. taller-mrp");
  if (!nombre) return;

  // 3. Determinar número de proyecto (proy-XX)
  const todos = app.vault.getAllLoadedFiles();
  const proyectosExistentes = todos.filter(f => 
    f.path.startsWith(basePath) && f.name.startsWith("proy-") && f.extension === 'md'
  );
  
  let maxNum = 0;
  proyectosExistentes.forEach(f => {
    const match = f.name.match(/proy-(\d+)/);
    if (match) {
      const num = parseInt(match[1]);
      if (num > maxNum) maxNum = num;
    }
  });
  const nextNum = (maxNum + 1).toString().padStart(2, '0');

  // 4. Crear carpeta del proyecto
  const projectFolder = `${basePath}/proy-${nextNum}_${nombre}`;
  try {
    await vault.createFolder(projectFolder);
  } catch (e) {
    new Notice(`❌ Error: La carpeta ya existe (proy-${nextNum})`);
    return;
  }

  // 5. Crear archivo overview
  const overviewContent = `---
tipo: proyecto
nombre: "${nombre}"
materia: "${eleccion === "En una materia específica" ? materia : "General"}"
estado-fase-1: ⏳ pendiente
fecha-entrega-fase-1: ${new Date().toISOString().slice(0,10)}
integrantes: []
tags: [proy-${nextNum}]
---

# ${nombre}

## 📋 Descripción

- 

## 🎯 Objetivos

- 

## 📦 Entregables

- [ ] ...

## 📊 Fases

### Fase 1
- [ ] ...

### Fase 2
- [ ] ...
`;
  await vault.create(`${projectFolder}/proy-${nextNum}_${nombre}.md`, overviewContent);

  // 6. Crear archivo de tareas
  const tareasContent = `# Tareas de ${nombre}

## Fase 1
- [ ] Tarea 1 @persona 📅 ${new Date().toISOString().slice(0,10)} ⏫ #proy-${nextNum}/fase-1
- [ ] Tarea 2 @otro 📅 ... 🔼 #proy-${nextNum}/fase-1

## Fase 2
- [ ] Tarea 3 ... #proy-${nextNum}/fase-2
`;
  await vault.create(`${projectFolder}/proy-${nextNum}_tareas.md`, tareasContent);

  // 7. Crear kanban
  const kanbanContent = `---
kanban-plugin: board
tags: [proy-${nextNum}]
---

## Por hacer
- [ ] Tarea inicial

## En progreso

## Hecho

`;
  await vault.create(`${projectFolder}/proy-${nextNum}_kanban.md`, kanbanContent);

  new Notice(`✅ Proyecto "${nombre}" (proy-${nextNum}) creado en ${projectFolder}`);
};