---
tags: [dashboard, materia]
---

# 📊 Dashboard de sistemas-informacion-2

## 📅 Clases pendientes de revisar
```dataview
TABLE fecha AS Fecha, file.link AS Nota
FROM "01-materias/sistemas-informacion-2/clases"
WHERE tipo = "clase" AND estado = "🟡 sin-revisar"
SORT fecha DESC
```

## 🚀 Proyectos activos
```dataview
TABLE estado-fase-1 AS "Fase 1", fecha-entrega-fase-1 AS "Entrega"
FROM "01-materias/sistemas-informacion-2/proyectos"
WHERE tipo = "proyecto" AND estado-fase-1 != "✅ entregado"
```

## ✅ Tareas próximas
```tasks
not done
due before in 7 days
path includes sistemas-informacion-2
```

## 📈 Conceptos con dificultad alta
```dataview
LIST
FROM "01-materias/sistemas-informacion-2/temas"
WHERE dificultad = "🔴 alta"
```

## 📁 Laboratorios
```dataview
LIST
FROM "01-materias/sistemas-informacion-2/laboratorios"
SORT file.name DESC
```
