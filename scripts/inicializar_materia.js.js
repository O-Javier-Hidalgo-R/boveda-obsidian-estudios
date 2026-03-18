// inicializar_materia.js
module.exports = async (params) => {
  const { quickAddApi: { inputPrompt, suggester } } = params;
  const app = this.app;
  const vault = app.vault;

  // Pedir nombre de la materia
  const materia = await inputPrompt("Nombre de la materia", "ej. Sistemas Operativos");
  if (!materia) return;

  // Crear carpeta de la materia en 01-materias/
  const basePath = `01-materias/${materia}`;
  try {
    await vault.createFolder(basePath);
    await vault.createFolder(`${basePath}/clases`);
    await vault.createFolder(`${basePath}/temas`);
    await vault.createFolder(`${basePath}/proyectos`);
    await vault.createFolder(`${basePath}/tareas`);
    await vault.createFolder(`${basePath}/recursos`);
    await vault.createFolder(`${basePath}/laboratorios`); // Añadido para prácticas
  } catch (e) {
    new Notice("Error: La carpeta ya existe o no se pudo crear");
    return;
  }

  // Crear informe.md con contenido básico (luego lo personalizará)
  const informeContent = `---
tags: [dashboard, materia]
---

# 📊 Dashboard de ${materia}

## 📅 Clases pendientes de revisar
\`\`\`dataview
TABLE fecha AS Fecha, file.link AS Nota
FROM "${basePath}/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha DESC
\`\`\`

## 🚀 Proyectos activos
\`\`\`dataview
TABLE estado-fase-1 AS "Fase 1", fecha-entrega-fase-1 AS "Entrega"
FROM "${basePath}/proyectos"
WHERE tipo = "proyecto" AND estado-fase-1 != "✅ entregado"
\`\`\`

## ✅ Tareas próximas
\`\`\`tasks
not done
due before in 7 days
path includes ${materia}
\`\`\`

## 📈 Conceptos con dificultad alta
\`\`\`dataview
LIST
FROM "${basePath}/temas"
WHERE dificultad = "🔴 alta"
\`\`\`

## 📁 Laboratorios
\`\`\`dataview
LIST
FROM "${basePath}/laboratorios"
SORT file.name DESC
\`\`\`
`;
  await vault.create(`${basePath}/informe.md`, informeContent);

  new Notice(`Materia "${materia}" creada con éxito`);
};