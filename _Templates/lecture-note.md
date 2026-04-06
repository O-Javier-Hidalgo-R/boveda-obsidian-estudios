%% ============================================================
PLANTILLA: NOTA DE CLASE (formato Cornell)

CUÁNDO USARLA: Al inicio de cada clase. Una nota por sesión.
DÓNDE GUARDARLA: 01_Notes/Lectures/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  clase-YYYY-MM-DD-tema-breve
  ej: clase-2026-04-08-introduccion-uml

FLUJO DE USO:
  1. Durante la clase → completar solo "Notas de Clase"
  2. Post-clase → completar "Preguntas" y "Resumen" SIN mirar las notas
  3. Después → crear las notas atómicas marcadas en "Conceptos para procesar"
  4. Cambiar estado a 🟢 procesada cuando todo esté hecho
============================================================ %%

---
%% El frontmatter son los metadatos de la nota.
   Dataview los usa para filtrar y mostrar información en el MOC y Dashboard.
   NO borrar ni renombrar estos campos. %%
tipo: clase
materia: 
%% ↑ Slug de la materia. Debe coincidir EXACTAMENTE con el nombre de carpeta
   ej: sistemas-informacion-2  (no "Sistemas de Información 2") %%
fecha: <% tp.date.now("YYYY-MM-DD") %>
%% ↑ Templater inserta la fecha de hoy automáticamente %%
docente: 
estado: 🟡 sin-revisar
%% ↑ Cambiar a 🟢 procesada cuando completes preguntas + resumen + conceptos %%
tags: [clase]
---

# <% tp.file.title %>
%% ↑ Templater usa el nombre del archivo como título %%

## 📋 Información
- **Materia:** `=this.materia`
- **Fecha:** `=this.fecha`
- **Tema central:** 
%% ↑ Una frase que resuma de qué trató la clase %%

---

## 📝 Notas de Clase
%% ZONA DE CAPTURA — Durante la clase, escribís aquí todo lo que el docente dice.
   No te preocupes por la estructura. Capturá todo sin filtrar.
   Podés usar viñetas, código, tablas, lo que sea más rápido. %%




---

## ❓ Preguntas y Palabras Clave
%% ZONA DE ACTIVE RECALL — Completar DESPUÉS de clase, SIN mirar las notas de arriba.
   El objetivo es intentar recordar los conceptos clave por tu cuenta.
   Si no podés responder una pregunta → ahí está tu laguna de conocimiento. %%

| Pregunta / Keyword | Respuesta corta |
|---|---|
|  |  |
|  |  |
|  |  |

---

## 💡 Resumen
%% ZONA DE SÍNTESIS — Explicar con tus propias palabras de qué trató la clase.
   Máximo 5-8 líneas. Sin copiar de las notas de arriba.
   Si no podés resumirlo, todavía no lo entendiste. %%




---

## 🔗 Conceptos para procesar en notas atómicas
%% Lista de conceptos de esta clase que merecen su propia nota atómica.
   Una vez que creés la nota atómica, marcás el checkbox como hecho [x].
   Cada [[link]] va a crear la nota cuando hagas clic en él. %%
- [ ] [[]]
- [ ] [[]]

---

## 🃏 Flashcards → Anki
%% Cada bloque START/END se convierte en una tarjeta en Anki.
   Para sincronizar: abrí Anki → en Obsidian Ctrl+P → "Obsidian to Anki: Sync"
   Tipo "Básico" = una pregunta, una respuesta. %%

START
Básico
¿Pregunta sobre el tema de la clase?
Back: Respuesta concisa y completa.
Tags: <% tp.frontmatter.materia %> clase
END

