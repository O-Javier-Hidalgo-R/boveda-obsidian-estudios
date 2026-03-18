---
tags: [dashboard, meta]
---
# 📊 Dashboard General de la Bóveda

> [!info]
> Visión global de tu progreso académico
> Este dashboard se actualiza automáticamente con Dataview y Tasks.  
> **Última actualización:** `= dateformat(date(today), "yyyy-MM-dd")`

---

## 📅 Clases pendientes de revisar (últimos 15 días)

```dataview
TABLE fecha AS Fecha, materia AS Materia, file.link AS Nota
FROM "01-materias"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar" AND fecha >= date(today) - dur(15 days)
SORT fecha DESC
LIMIT 10
```

> [!note] Nota
> Si no ves resultados, significa que no hay clases pendientes recientes. ¡Buen trabajo!

---

## 🚀 Proyectos activos

```dataview
TABLE materia AS Materia, estado-fase-1 AS "Estado Fase 1", fecha-entrega-fase-1 AS "Entrega Fase 1"
FROM "01-materias" OR "02-proyectos"
WHERE tipo = "proyecto" AND estado-fase-1 != "✅ entregado"
SORT fecha-entrega-fase-1 ASC
```

---

## ✅ Tareas próximas (7 días)

```tasks
not done
due before in 7 days
group by due
short mode
```

---

## 🧠 Últimas notas creadas en Conocimiento Permanente

```dataview
TABLE file.mtime AS "Última modificación"
FROM "06-conocimiento"
SORT file.mtime DESC
LIMIT 10
```

---

## 🔴 Conceptos con dificultad alta (todas las materias)

```dataview
LIST
FROM "01-materias" OR "06-conocimiento"
WHERE dificultad = "🔴 alta"
SORT file.name ASC
```

---

## 📁 Últimas 5 clases registradas

```dataview
TABLE fecha AS Fecha, materia AS Materia, estado AS Estado
FROM "01-materias"
WHERE tipo = "clase"
SORT fecha DESC
LIMIT 5
```

---

## 📔 Entradas recientes en el diario (con posibles bitácoras)

```dataview
LIST
FROM "05-diario"
SORT file.name DESC
LIMIT 7
```

## 📌 Accesos rápidos

- [[readme|📘 Guía de la bóveda]]
- [[04-plantillas/plantilla_clase|📝 Plantilla de clase]]
- [[04-plantillas/plantilla_proyecto|📋 Plantilla de proyecto]]
- [[04-plantillas/plantilla_tarea|✅ Plantilla de tarea]]
- [[04-plantillas/plantilla_nota_diaria|📅 Plantilla de diario]]

---

> [!tip] Personaliza este dashboard  
> Puedes agregar más consultas según tus necesidades: materias específicas, tareas por prioridad, etc. Consulta la [documentación de Dataview](https://blacksmithgu.github.io/obsidian-dataview/) y de [Tasks](https://obsidian-tasks-group.github.io/Obsidian-Tasks/) para más ideas.
