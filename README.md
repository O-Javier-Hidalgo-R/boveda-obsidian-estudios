---

tags: [meta, guia]

---
# 🎓 Bienvenida a tu Bóveda de Estudios

**Autor:** [Osmar Javier Hidalgo Riffarachi](mailto:javierhidalgor99@gmail.com)  
**Versión:** 1.0  
**Última actualización:** 2026/03/18

> [!quote] Filosofía  
> _"Captura sin fricción, organiza después. Las notas atómicas se conectan — los carpetazos se olvidan."_
> Esta bóveda es un **sistema personal de gestión del conocimiento** diseñado para acompañarte durante toda tu carrera. No es una simple carpeta de archivos, sino una red de ideas conectadas que crece con cada clase, proyecto y concepto que dominas.

---

## 📚 ¿Qué encontrarás aquí?

- Una estructura clara para organizar **materias, proyectos y recursos**.
- Flujos de trabajo para tomar apuntes, revisarlos y convertirlos en conocimiento permanente.
- **Dashboards automáticos** que te muestran el estado de tu progreso.
- Integración con **tareas, kanban, diagramas, laboratorios y bitácora de proyectos**.
- Atajos de teclado y scripts para automatizar tareas repetitivas.
- Sincronización con **Git + GitHub** y posibilidad de exportar a PDF con Pandoc.

---

## 🗂️ Estructura de la bóveda

![[estructura_general_boveda.excalidraw.md|800]]

---

## 🔄 Flujo de trabajo detallado

### Durante la clase

- `Ctrl+Shift+C` → Crea una nueva nota de clase con la plantilla. Escribe libremente.
- Si surge una idea sin lugar claro, `Ctrl+Shift+A` la envía a `00-capturas/`.

### Después de clase (revisión diaria)

- Abre el `informe.md` de la materia y revisa las clases pendientes (estado `🟡 sin-revisar`).
- Enlaza la clase a temas existentes o crea nuevos temas (`Ctrl+Shift+T`).
- Cambia el estado de la clase a `🟢 revisado`.
- Procesa las capturas de `00-capturas/` y archívalas o conviértelas en notas permanentes.

### Gestión de proyectos

- `Ctrl+Shift+P` → Crea la estructura de un nuevo proyecto (overview, tareas, kanban) con numeración automática (`proy-XX`).
- Las tareas se gestionan con el plugin **Tasks**:
  - Usa fechas `📅 YYYY-MM-DD`, prioridades `⏫ 🔼 🔽`, asignados `@persona`.
  - Para tareas recurrentes: `🔁 every week` (u otro intervalo).
  - Etiqueta las tareas con `#proy-XX/fase-Y`.
- El tablero **Kanban** te da una vista visual del avance.

### Bitácora de proyectos (reuniones, decisiones)

- En tu nota diaria (`05-diario/YYYY-MM-DD.md`), usa una sección "Bitácora de proyectos" y añade el tag correspondiente, por ejemplo `#proy-01`.
- Luego, en el dashboard del proyecto, puedes incluir una query de Dataview que liste todas las entradas del diario con ese tag.

### Laboratorios y prácticas

- Dentro de cada materia, hay una carpeta `laboratorios/`. Allí puedes guardar:
  - Enunciados (en `recursos/`).
  - Notas con soluciones, código, resultados.
  - Si el laboratorio es largo, trátalo como un mini‑proyecto con sus propias tareas.

### Seguimiento de dificultad

- En las notas de tipo `tema` y `conocimiento`, incluye el campo `dificultad: 🟢 baja, 🟡 media, 🔴 alta`.
- El `informe.md` de cada materia muestra automáticamente los conceptos con dificultad alta para que priorices su repaso.

### Consolidación semanal (viernes)

- Revisa los dashboards de materia.
- Identifica conceptos que consideres **competencias profesionales duraderas** y muévelos a `06-conocimiento/` (manteniendo enlaces).
- Actualiza los MOCs en `07-mapas/` para reflejar conexiones transversales.
- Planifica la siguiente semana usando las tareas y el diario.

### Repaso espaciado (opcional, con Anki)

- Usa el plugin **Obsidian_to_Anki** para convertir fragmentos de tus notas en flashcards y sincronizarlos con Anki.

### Fin de semestre

- Mueve la carpeta de la materia completa a `08-archivo/`.
- Las notas de conocimiento permanecen en `06-conocimiento/` y `07-mapas/`.

### Exportación a PDF

- Usa Pandoc desde la terminal con tus alias:

  ```bash
  md2pdf nota.md          # genera nota.pdf
  slides2pdf presentacion.md  # genera diapositivas
  ```

---

## 🔌 Plugins necesarios

Asegúrate de instalar y configurar estos plugins desde la comunidad de Obsidian:

|Plugin|Función principal|
|---|---|
|Templater|Plantillas dinámicas con lógica|
|Dataview|Consultas automáticas sobre metadatos|
|QuickAdd|Macros y capturas rápidas|
|Tasks|Gestión avanzada de tareas (recurrentes incl.)|
|Kanban|Tableros kanban visuales|
|Calendar|Calendario integrado al diario|
|Excalidraw|Diagramas y mapas mentales|
|Omnisearch|Búsqueda global rápida|
|Advanced Tables|Edición cómoda de tablas Markdown|
|Obsidian_to_Anki|Crear flashcards y enviar a Anki|
|Obsidian Git|Sincronización automática con GitHub|

---

## ⌨️ Atajos de teclado (configurables en QuickAdd)

|Atajo|Acción|
|---|---|
|`Ctrl+Shift+C`|Nueva nota de clase|
|`Ctrl+Shift+T`|Nueva nota de tema / concepto|
|`Ctrl+Shift+P`|Nuevo proyecto (ejecuta script)|
|`Ctrl+Shift+D`|Entrada del diario de hoy|
|`Ctrl+Shift+A`|Captura rápida → `00-capturas/`|
|`Ctrl+Shift+M`|Inicializar nueva materia (script)|
|`Ctrl+Shift+O`|Abrir Omnisearch|

---

## 🔐 Sincronización y respaldo

- La bóveda está versionada con **Git** y conectada a un repositorio privado en GitHub.
- Usa el plugin **Obsidian Git** para hacer commit y push automáticos (o manuales) desde Obsidian.
- Antes de trabajar en otro dispositivo, haz pull de los cambios; al terminar, push.
- Esto te da historial completo y evita conflictos.

---

## 📖 Referencias útiles

- [Obsidian Help](https://help.obsidian.md/)
- [Dataview Documentation](https://blacksmithgu.github.io/obsidian-dataview/)
- [Templater Docs](https://silentvoid13.github.io/Templater/)
- [Tasks User Guide](https://obsidian-tasks-group.github.io/Obsidian-Tasks/)
- [Obsidian Git](https://github.com/denolehov/obsidian-git)

---

_¡Que tu conocimiento crezca en red!_
