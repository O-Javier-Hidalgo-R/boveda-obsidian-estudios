# 🎓 Bóveda de Ingeniería Informática (Plantilla para Obsidian)
 
[![GitHub release](https://img.shields.io/github/v/release/tu-usuario/boveda-ingenieria-informatica)](https://github.com/tu-usuario/boveda-ingenieria-informatica/releases)
[![Obsidian](https://img.shields.io/badge/Obsidian-483699?style=flat&logo=obsidian&logoColor=white)](https://obsidian.md/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

> Una plantilla completa y lista para usar de un sistema personal de gestión del conocimiento (PKM) para estudiantes de ingeniería, construida sobre Obsidian.  
> **Captura sin fricción, organiza después. Las notas atómicas se conectan — los carpetazos se olvidan.**

---

## 📋 Tabla de Contenidos

- [Casos de uso que cubre esta bóveda](#-casos-de-uso-que-cubre-esta-bóveda)
- [Características principales](#-características-principales)
- [Estructura de la bóveda](#-estructura-de-la-bóveda)
- [Flujo de trabajo resumido](#-flujo-de-trabajo-resumido)
- [Atajos de teclado](#-atajos-de-teclado)
- [Plugins necesarios](#-plugins-necesarios)
- [Cómo usar esta plantilla](#-cómo-usar-esta-plantilla)
- [Cómo contribuir / Actualizar la plantilla](#-cómo-contribuir--actualizar-la-plantilla)
- [Licencia](#-licencia)

---

## ✅ Casos de uso que cubre esta bóveda

Esta plantilla está diseñada para resolver las necesidades reales de un estudiante de ingeniería. A continuación, un checklist de lo que puedes hacer desde el primer momento:

- [x] **Tomar apuntes de clase** con un solo atajo, incluyendo metadatos (fecha, materia, estado de revisión).
- [x] **Capturar ideas rápidas** sin interrumpir el flujo de estudio (inbox `00-capturas`).
- [x] **Organizar por materias** con una estructura homogénea (clases, temas, proyectos, laboratorios, recursos).
- [x] **Profundizar conceptos** en notas de `temas/` con campo de dificultad (`🟢 baja`, `🟡 media`, `🔴 alta`) para priorizar repaso.
- [x] **Gestionar proyectos por fases** con overview, tareas operativas y tablero kanban, todo generado automáticamente.
- [x] **Crear tareas con subtareas, fechas, prioridades y asignaciones** gracias al plugin Tasks.
- [x] **Programar tareas recurrentes** (ej. estudio semanal) usando la sintaxis `🔁 every week`.
- [x] **Visualizar el avance de proyectos** con tableros kanban integrados.
- [x] **Llevar una bitácora de proyectos** (reuniones, decisiones) mediante entradas etiquetadas en el diario.
- [x] **Registrar prácticas de laboratorio** en una carpeta específica dentro de cada materia.
- [x] **Identificar conceptos difíciles** mediante queries que los muestran en los dashboards de materia y general.
- [x] **Crear mapas de contenido (MOCs)** para conectar temas transversales entre materias.
- [x] **Consolidar conocimiento permanente** moviendo notas dominadas a `06-conocimiento/`.
- [x] **Repasar con flashcards** integrando Obsidian con Anki (plugin Obsidian_to_Anki).
- [x] **Exportar cualquier nota a PDF** con un alias de Pandoc (`md2pdf`).
- [x] **Sincronizar la bóveda entre dispositivos** usando Git + GitHub (con el plugin Obsidian Git).
- [x] **Mantener un historial de cambios** gracias al control de versiones.
- [x] **Tener una visión global del progreso** con el `Dashboard General.md` y los informes por materia (dataview).

> Si necesitas algo más, la estructura es totalmente extensible.

---

## ✨ Características principales

- **Estructura probada** en carreras de ingeniería.
- **Automatización con QuickAdd y Templater**: scripts que crean la carpeta de una materia o de un proyecto con todo lo necesario.
- **Dashboards dinámicos** con Dataview: estado de clases, tareas, proyectos, dificultad, etc.
- **Gestión de tareas avanzada** con Tasks (recurrentes, fechas, prioridades).
- **Sincronización profesional** con Git/GitHub (opcional pero recomendada).
- **Exportación a PDF** mediante Pandoc.
- **Totalmente personalizable**: cambia plantillas, añade campos, crea nuevas queries.

---

## 🗂️ Estructura de la bóveda

![[estructura_general_boveda.excalidraw|800]]

---

## 🔄 Flujo de trabajo resumido

1. **Crear una materia** → `Ctrl+Shift+M` (ejecuta script que genera carpeta e `informe.md`).
2. **Tomar apuntes en clase** → `Ctrl+Shift+C` (crea nota en `clases/`).
3. **Revisar después de clase** → desde el `informe.md` se ven las clases pendientes; al terminarlas, cambiar estado a `🟢 revisado`.
4. **Iniciar un proyecto** → `Ctrl+Shift+P` (script que crea subcarpeta con overview, tareas y kanban).
5. **Gestionar tareas** → dentro de la nota de tareas del proyecto, usar sintaxis Tasks.
6. **Registrar en el diario** → `Ctrl+Shift+Y` (nota diaria con sección para bitácora etiquetada).
7. **Consultar el progreso** → el `Dashboard General.md` y los informes de materia se actualizan solos.
8. **Al final del semestre** → mover la materia a `08-archivo/`.

---

## ⌨️ Atajos de teclado
*(Configurados mediante QuickAdd; puedes cambiarlos en Ajustes → Atajos de teclado)*

| Atajo          | Acción                             | Mnemotecnia                  |
| -------------- | ---------------------------------- | ---------------------------- |
| `Ctrl+Shift+C` | Nueva nota de clase                | **C**lase                    |
| `Ctrl+Shift+E` | Nueva nota de tema / concepto      | **E** (por "tEma")           |
| `Ctrl+Shift+P` | Nuevo proyecto (ejecuta script)    | **P**royecto                 |
| `Ctrl+Shift+Y` | Entrada del diario de hoy          | **Y** (por "dIario" o "daY") |
| `Ctrl+Shift+A` | Captura rápida → `00-capturas/`    | **A**punte rápido            |
| `Ctrl+Shift+M` | Inicializar nueva materia (script) | **M**ateria                  |
| `Ctrl+Shift+O` | Abrir Omnisearch                   | **O**mnisearch               |

---

## 🔌 Plugins necesarios

Instala estos plugins desde la comunidad de Obsidian:

- **Templater**
- **Dataview**
- **QuickAdd**
- **Tasks**
- **Kanban**
- **Calendar**
- **Excalidraw**
- **Omnisearch**
- **Advanced Tables**
- **Obsidian_to_Anki** (opcional)
- **Obsidian Git** (opcional, pero recomendado)

> **Nota**: Después de instalar los plugins, revisa la configuración de cada uno siguiendo las indicaciones de la [Guía completa](00%20-%20Bienvenida%20y%20Guía.md) dentro de la bóveda.

---

## 🚀 Cómo usar esta plantilla

### Opción 1: Descargar para uso personal (sin Git)

1. Ve a [https://github.com/tu-usuario/boveda-ingenieria-informatica](https://github.com/tu-usuario/boveda-ingenieria-informatica)
2. Haz clic en **"Code" → "Download ZIP"**.
3. Descomprime el ZIP en la carpeta donde quieras tener tu bóveda.
4. Abre Obsidian, selecciona "Abrir carpeta como bóveda" y elige esa carpeta.
5. Sigue la [Guía de inicio rápido](00%20-%20Bienvenida%20y%20Guía.md) para instalar plugins y configurar los atajos.

### Opción 2: Usar como plantilla de GitHub (para crear tu propio repositorio)

Si quieres tener tu bóveda también versionada y poder recibir actualizaciones de la plantilla:

1. En GitHub, haz clic en **"Use this template"** (botón verde) y crea un nuevo repositorio con el nombre que quieras (ej. `mi-boveda-fisica`).
2. Clona **tu nuevo repositorio** en tu ordenador.
3. Abre Obsidian con esa carpeta.
4. Configura los plugins y empieza a usarla.
5. Si más adelante la plantilla original se actualiza con nuevas funcionalidades, puedes hacer un `merge` desde el repositorio original (explicado abajo).

---

## 🔄 Cómo contribuir / Actualizar la plantilla

### Si quieres proponer mejoras (para el repositorio original)

1. Haz un fork de este repositorio.
2. Crea una rama con tu mejora (`git checkout -b nueva-funcionalidad`).
3. Realiza los cambios (nuevos scripts, plantillas, documentación, etc.).
4. Haz commit y push a tu fork.
5. Abre un Pull Request describiendo los cambios y cómo mejoran la plantilla.

### Si has creado tu propia bóveda a partir de esta plantilla y quieres actualizarla con los últimos cambios de la plantilla

Asumiendo que creaste tu repositorio usando el botón "Use this template" (lo que mantiene un vínculo implícito, pero no automático), puedes hacer lo siguiente:

```bash
# Añade el repositorio original como upstream (solo una vez)
git remote add upstream https://github.com/tu-usuario/boveda-ingenieria-informatica.git
# Trae los cambios de la plantilla
git fetch upstream
# Fusiona los cambios en tu rama principal (main)
git checkout main
git merge upstream/main
# Resuelve conflictos si los hay y haz commit
git push origin main
```

De esta forma, puedes beneficiarte de las nuevas funcionalidades que se añadan a la plantilla sin perder tus notas personales (aunque pueden aparecer conflictos en archivos que hayas modificado, como el README o las plantillas; revíselos con cuidado).

> **Consejo**: Si personalizas mucho la estructura, quizá prefieras no actualizar automáticamente, sino tomar solo las mejoras que te interesen de forma manual.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usarlo, codificarlo y distribuirlo libremente, siempre que incluyas el aviso de copyright.

---

**¡Que tu conocimiento crezca en red!**  
Si tienes dudas o sugerencias, abre un [issue](https://github.com/tu-usuario/boveda-ingenieria-informatica/issues).