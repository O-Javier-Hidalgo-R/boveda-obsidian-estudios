<div align="center">

# 🎓 Obsidian Student Vault

**Sistema de estudio y gestión académica para Obsidian**  
Diseñado para estudiantes universitarios de Ingeniería Informática

[![Obsidian](https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white)](https://obsidian.md)
[![Anki](https://img.shields.io/badge/Anki-0091EA?style=for-the-badge&logo=anki&logoColor=white)](https://apps.ankiweb.net)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Template](https://img.shields.io/badge/Use%20this%20template-2ea44f?style=for-the-badge)](../../generate)

</div>

---

## ¿Qué es esto?

Una bóveda de Obsidian lista para usar como sistema de estudio universitario.
Combina técnicas de aprendizaje respaldadas por evidencia científica con un flujo
de trabajo concreto y herramientas integradas.

**El problema que resuelve:** los estudiantes toman apuntes pasivos que nunca vuelven
a revisar, y estudian de forma desorganizada antes de cada examen. Este sistema convierte
cada clase en un ciclo activo de captura → procesamiento → memoria → repaso.

---

## ✨ Características

- 📝 **Apuntes en formato Cornell** — estructura que fuerza el active recall post-clase
- 🧩 **Notas atómicas (Zettelkasten)** — una idea por nota, interconectadas con `[[links]]`
- 🃏 **Flashcards integradas con Anki** — los bloques `START/END` se sincronizan directo a Anki
- 🚀 **Gestión de proyectos con Kanban** — tableros visuales dentro de cada nota de proyecto
- 📊 **Dashboard automático con Dataview** — consultas que muestran todo en tiempo real
- ⚡ **Automatización** — comando para crear una nueva materia completa con un atajo de teclado
- 📖 **Documentación interna** — cada plantilla tiene comentarios explicativos invisibles en lectura
- 🗺️ **MOC por materia** — índice maestro que conecta clases, conceptos y proyectos

---

## 🧠 Base científica

| Técnica | Implementación en este sistema |
|---|---|
| **Active Recall** | Columna de preguntas Cornell + flashcards Anki |
| **Spaced Repetition** | Algoritmo SM-2 de Anki |
| **Método Feynman** | Estructura de notas atómicas (definición simple → técnica → ejemplo) |
| **Zettelkasten** | Links `[[]]` entre notas atómicas |
| **Método Cornell** | Plantilla de clase con 3 zonas: notas / preguntas / resumen |

---

## 📁 Estructura del repositorio

```
obsidian-student-vault/
│
├── 00_Inbox/               # Captura rápida sin procesar
│   └── Daily/              # Notas diarias automáticas
├── 01_Notes/
│   ├── Lectures/           # Apuntes de clase (formato Cornell)
│   └── Concepts/           # Notas atómicas (una idea = un archivo)
├── 02_Projects/            # Proyectos, parciales y prácticos
├── 03_Areas/               # MOC (índice maestro) por materia
├── 04_Resources/           # PDFs, bibliografía, recursos externos
├── 05_Reviews/
│   └── Weekly/             # Revisiones semanales
├── 06_Archive/             # Contenido inactivo o terminado
│
├── _Templates/             # Todas las plantillas
│   ├── lecture-note.md     # Apunte de clase (Cornell)
│   ├── concept-note.md     # Nota atómica (Zettelkasten + Feynman)
│   ├── project-note.md     # Proyecto con Kanban integrado
│   ├── moc-materia.md      # Índice maestro de materia
│   ├── daily-note.md       # Nota diaria
│   ├── weekly-review.md    # Revisión semanal
│   └── scripts/
│       └── nueva-materia.js  # Automatización QuickAdd
│
├── Dashboard-Global.md     # Panel central con consultas Dataview
└── LEEME.md                # Guía de uso completa (en español)
```

---

## 🚀 Instalación y configuración

### Requisitos previos

- [Obsidian](https://obsidian.md) v1.4 o superior
- [Anki](https://apps.ankiweb.net) con el plugin [AnkiConnect](https://ankiweb.net/shared/info/2055492159) (código: `2055492159`)

### Paso 1 — Usar este template

Hacé clic en **"Use this template"** → **"Create a new repository"** en GitHub.  
Luego clonalo en tu máquina:

```bash
git clone https://github.com/TU-USUARIO/TU-REPO.git
```

O descargá el ZIP desde GitHub → Code → Download ZIP.

### Paso 2 — Abrir en Obsidian

`Obsidian → Abrir bóveda → Abrir carpeta como bóveda` → seleccionás la carpeta descargada.

### Paso 3 — Instalar plugins de comunidad

`⚙️ → Complementos de la comunidad → Desactivar modo seguro → Examinar`

Instalá estos 11 plugins:

| Plugin | Función |
|---|---|
| **Templater** | Plantillas dinámicas con variables |
| **Dataview** | Consultas automáticas en el Dashboard y MOC |
| **QuickAdd** | Automatización para crear materias |
| **Tasks** | Gestión de tareas con fechas |
| **Obsidian Kanban** | Tableros visuales en proyectos |
| **Calendar** | Vista de calendario lateral |
| **Periodic Notes** | Notas diarias y semanales automáticas |
| **Obsidian to Anki** | Sincronización de flashcards con Anki |
| **Minimal Theme Settings** | Configuración del tema visual |
| **Style Settings** | Personalización avanzada de CSS |
| **Hider** | Oculta elementos de UI innecesarios |

### Paso 4 — Configurar cada plugin

<details>
<summary><strong>Templater</strong></summary>

`⚙️ → Templater`
```
Template folder location: _Templates
✅ Trigger Templater on new file creation
```
</details>

<details>
<summary><strong>Dataview</strong></summary>

`⚙️ → Dataview`
```
✅ Enable inline queries
✅ Enable JavaScript queries
Date format: yyyy-MM-dd
```
</details>

<details>
<summary><strong>Periodic Notes</strong></summary>

`⚙️ → Periodic Notes`
```
Daily Notes:
  ✅ Enable
  Format:   YYYY-MM-DD
  Folder:   00_Inbox/Daily
  Template: _Templates/daily-note

Weekly Notes:
  ✅ Enable
  Format:   YYYY-[W]WW
  Folder:   05_Reviews/Weekly
  Template: _Templates/weekly-review
```
</details>

<details>
<summary><strong>Obsidian to Anki</strong></summary>

`⚙️ → Obsidian_to_Anki`
```
Anki address: localhost:8765
Scan folder:  01_Notes
```
Anki debe estar abierto con AnkiConnect activo para que la sincronización funcione.
</details>

<details>
<summary><strong>QuickAdd — automatización "Nueva Materia"</strong></summary>

1. `⚙️ → QuickAdd → Manage Macros` → nombre: `Nueva Materia` → **Add Macro**
2. En el macro: desplegable **User Script** → seleccionás `_Templates/scripts/nueva-materia` → **+**
3. Volvés a la pantalla principal → campo de texto: `Nueva Materia` → tipo: **Macro** → **Add Choice**
4. En la choice: ⚙️ → seleccionás el macro `Nueva Materia` → activás el toggle
5. `⚙️ → Atajos de teclado` → buscás `QuickAdd: Nueva Materia` → asignás `Ctrl+Alt+M`
</details>

### Paso 5 — Tema visual (opcional pero recomendado)

```
⚙️ → Apariencia → Temas → Minimal  (instalar y activar)

Minimal Theme Settings:
  Color scheme:        Flexoki
  Normal line width:   700
  Maximum line width%: 88

⚙️ → Apariencia → Fuentes:
  Interfaz:      Inter
  Editor:        Inter
  Monoespaciada: JetBrains Mono
  Tamaño:        16
```

**Instalación de fuentes en Linux (Fedora):**
```bash
sudo dnf install -y rsms-inter-fonts jetbrains-mono-fonts-all
```

**Instalación de fuentes en macOS:**
```bash
brew install --cask font-inter font-jetbrains-mono
```

**Instalación en Windows:** Descargar desde [rsms.me/inter](https://rsms.me/inter) y [jetbrains.com/mono](https://www.jetbrains.com/lp/mono/) → instalar haciendo doble clic en los `.ttf`.

---

## 📋 Flujo de trabajo

```
CLASE → INBOX → CORNELL → ATÓMICA → ANKI → REPASO DIARIO
```

### 1. Durante la clase
Creás una nota con la plantilla `lecture-note` y completás solo la sección **Notas de Clase**.

### 2. Post-clase (máx 24 horas) — el paso más importante
Sin mirar las notas: completás las **preguntas Cornell** y el **resumen**. Esto es active recall puro.

### 3. Procesamiento
Por cada concepto identificado: creás una nota atómica con `concept-note`, la completás con el método Feynman y la enlazás con `[[otros-conceptos]]`.

### 4. Sincronización con Anki
Con Anki abierto: `Ctrl+P → Obsidian to Anki: Sync`. Los bloques `START/END` de tus notas llegan automáticamente a Anki.

### 5. Repaso diario (15–20 min)
Abrís Anki cada mañana y repassás las tarjetas del día. El algoritmo SM-2 decide cuáles.

### 6. Revisión semanal (sábado, 1 hora)
La nota `weekly-review` se genera automáticamente. Las consultas Dataview muestran qué clases quedaron sin procesar y el estado de los proyectos.

---

## ⌨️ Atajos de teclado

| Acción | Atajo |
|---|---|
| Crear nueva materia | `Ctrl+Alt+M` |
| Paleta de comandos | `Ctrl+P` |
| Sincronizar con Anki | `Ctrl+P` → Obsidian to Anki: Sync |
| Insertar plantilla | `Ctrl+P` → Templater: Insert Template |
| Abrir nota diaria | Plugin Calendar (panel lateral) |

---

## 🃏 Sintaxis de flashcards para Anki

Las tarjetas van en cualquier nota usando este formato:

```
START
Básico
¿Pregunta?
Back: Respuesta completa.
Tags: materia tema
END
```

> **Nota:** el tipo de tarjeta es `Básico` si Anki está configurado en **español**.  
> Si tu Anki está en inglés, usá `Basic`.

---

## 📖 Documentación

La guía completa de uso (en español) está en [`LEEME.md`](LEEME.md) dentro de la bóveda.  
Cubre: estructura de carpetas, atajos, flujo completo, estados de notas, solución a problemas comunes.

---

## 🛠️ Stack

| Herramienta | Rol |
|---|---|
| [Obsidian](https://obsidian.md) | Editor de notas y base del sistema |
| [Anki](https://apps.ankiweb.net) | Motor de repetición espaciada (algoritmo SM-2) |
| [Dataview](https://github.com/blacksmithgu/obsidian-dataview) | Consultas dinámicas sobre las notas |
| [Templater](https://github.com/SilentVoid13/Templater) | Plantillas con lógica y variables |
| [QuickAdd](https://github.com/chhoumann/quickadd) | Automatización y macros |
| [Minimal Theme](https://github.com/kepano/obsidian-minimal) | Interfaz minimalista |

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si encontrás un bug o tenés una mejora:

1. Hacé un fork del repositorio
2. Creá una rama: `git checkout -b mejora/nombre-de-la-mejora`
3. Commiteá los cambios: `git commit -m 'Agrega: descripción de la mejora'`
4. Hacé push: `git push origin mejora/nombre-de-la-mejora`
5. Abrí un Pull Request

---

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver [`LICENSE`](LICENSE) para más detalles.

---

<div align="center">

Hecho con ❤️ para estudiantes de Ingeniería Informática

</div>
