%% ============================================================
PLANTILLA: NOTA ATÓMICA DE CONCEPTO (Zettelkasten + Feynman)

CUÁNDO USARLA: Cada vez que procesás una clase y encontrás un
concepto que merece su propio archivo.
DÓNDE GUARDARLA: 01_Notes/Concepts/[slug-materia]/

NOMBRE DE ARCHIVO RECOMENDADO:
  nombre-del-concepto (en minúsculas con guiones)
  ej: mrp-material-requirements-planning
      arquitectura-cliente-servidor

REGLA FUNDAMENTAL:
  UNA nota = UNA sola idea.
  Si la nota toca dos conceptos → partila en dos notas separadas.

FLUJO DE USO (Método Feynman):
  1. Definición simple → como si se lo explicaras a alguien que no sabe nada
  2. Explicación técnica → la versión precisa y completa
  3. Ejemplo concreto → preferiblemente del parcial o proyecto actual
  4. Errores comunes → qué confunde a la gente con este concepto
  5. Flashcards → completar los bloques START/END y sincronizar con Anki
============================================================ %%

---
tipo: concepto
materia: 
%% ↑ Slug de la materia. Mismo valor que en la nota de clase de origen. %%
fecha-creacion: <% tp.date.now("YYYY-MM-DD") %>
dificultad: 🟢 baja
%% ↑ Opciones: 🟢 baja | 🟡 media | 🔴 alta
   El MOC de la materia filtra los de dificultad alta para que los repases más. %%
estado: 🔵 borrador
%% ↑ Cambiar a 🟢 revisada cuando la nota esté completa y con flashcards. %%
tags: [concepto]
---

# <% tp.file.title %>

## 📖 Definición simple
%% Explicalo como si el que lo va a leer nunca oyó hablar del tema.
   Sin tecnicismos. Sin siglas sin explicar. Una o dos oraciones máximo.
   Si no podés hacerlo simple, todavía no lo entendiste del todo (Feynman dixit). %%



## 🧩 Explicación técnica
%% Ahora sí la versión completa: términos técnicos, fórmulas, estructura, etc.
   Podés usar tablas, listas, diagramas ASCII o bloques de código. %%



## 🔗 Se conecta con
%% Links a otras notas atómicas relacionadas.
   Esto es lo que convierte tus notas en una red (Zettelkasten) en vez de una lista.
   Agregá todos los conceptos que se relacionen con este. %%
- [[]]

## 🌍 Ejemplo concreto
%% Un caso real, de código o del proyecto/parcial que estés haciendo.
   Los ejemplos concretos son lo que hace que el concepto "enganche" en la memoria. %%

```
(código, diagrama o descripción del ejemplo aquí)
```

## ⚠️ Errores comunes
%% ¿Qué confunde a la gente con este concepto?
   ¿Con qué otro concepto se suele mezclar?
   ¿Qué pensabas vos antes de entenderlo bien? %%



---

## 🃏 Flashcards → Anki
%% Cada bloque START/END = una tarjeta en Anki.
   Regla: al menos 2 tarjetas por concepto.
     - Una para la definición
     - Una para un ejemplo o diferencia con otro concepto
   Sincronizar: Anki abierto → Ctrl+P → "Obsidian to Anki: Sync" %%

START
Básico
¿Qué es <% tp.file.title %>?
Back: (completar con la definición simple)
Tags: <% tp.frontmatter.materia %> concepto
END

START
Básico
¿Cuál es un ejemplo concreto de <% tp.file.title %>?
Back: (completar con el ejemplo)
Tags: <% tp.frontmatter.materia %> concepto ejemplo
END

