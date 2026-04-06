%% ============================================================
PLANTILLA: PROYECTO / PRÁCTICO / PARCIAL

CUÁNDO USARLA: Para cada parcial, trabajo práctico o proyecto grupal.
DÓNDE GUARDARLA: 02_Projects/

NOMBRE DE ARCHIVO RECOMENDADO:
  MATERIA-nombre-del-proyecto
  ej: SI2-parcial1-auxilio-mecanico
      ALGO-proyecto-gestion-inventario

CÓMO USAR EL KANBAN:
  - Backlog: todo lo que hay que hacer pero aún no priorizaste
  - Por hacer esta semana: máximo 5–7 tareas para los próximos 7 días
  - En progreso: lo que estás haciendo AHORA (máximo 3 cosas simultáneas)
  - En revisión: terminado pero pendiente de revisión o entrega
  - Completado: listo. Archivá semanalmente para no acumular ruido visual
============================================================ %%

---
tipo: proyecto
materia: 
%% ↑ Slug de la materia. Debe coincidir con el usado en el resto de notas. %%
fecha-inicio: <% tp.date.now("YYYY-MM-DD") %>
fecha-entrega: 
%% ↑ Formato YYYY-MM-DD. El Dashboard lo usa para ordenar por urgencia. %%
estado: 🔵 en-progreso
%% ↑ Opciones: 🔵 en-progreso | ✅ entregado | ⏸️ pausado %%
tags: [proyecto]
---

# <% tp.file.title %>

## 🎯 Objetivo
%% Una o dos oraciones que describan exactamente qué hay que entregar.
   Leélo antes de cada sesión de trabajo para no perder el foco. %%



## 📋 Requisitos del docente
%% Lista exacta de lo que pidió el docente. Copiala literalmente si es posible.
   Es tu checklist de entregable mínimo. %%
- 
- 

## 👥 Equipo
%% Quiénes trabajan en este proyecto. %%
- 

---

## 🏗️ Kanban del proyecto
%% Este bloque lo renderiza el plugin Kanban como un tablero visual.
   Podés arrastrar las tarjetas entre columnas directamente en Obsidian.
   NO modificar las líneas "## NombreColumna" — son la estructura del tablero. %%

```kanban
---
kanban-plugin: basic
---

## 📥 Backlog
- [ ] 

## 📌 Por hacer esta semana
- [ ] 

## ⚙️ En progreso
- [ ] 

## 👀 En revisión
- [ ] 

## ✅ Completado
- [ ] 
```

---

## 📁 Archivos y recursos relacionados
%% Links a PDFs, repos de GitHub, documentos de Drive, etc. %%



## 🔗 Conceptos aplicados
%% Links a las notas atómicas de conceptos que usás en este proyecto.
   Útil para repasar la teoría cuando estás desarrollando. %%


