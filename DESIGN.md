# Portfolio Design System: Editorial Precision & Technical Authority

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Architect."** 

Standard developer portfolios often fall into two traps: the "Terminal/Matrix" cliché or the "Generic Bootstrap" template. This system rejects both. Instead, it treats code as high-end craftsmanship. By leveraging an editorial layout—characterized by dramatic typography scales, intentional white space, and asymmetric balance—we position the Full-stack Developer not just as a coder, but as a technical strategist. 

The goal is a "Single-View Architecture." On mobile and desktop, we utilize a modular "Card-in-Container" approach that allows the user to scan the developer’s entire value proposition without the fatigue of infinite scrolling.

---

## 2. Colors & Surface Philosophy
The palette is a sophisticated "White-Blue" study. It uses high-chroma blues for action and deep navy for authority, set against a pristine, multi-layered neutral base.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries are defined strictly through background color shifts. A section should never be "boxed in" by a stroke; it should exist as a distinct plane of color.

### Surface Hierarchy & Nesting
To create depth without clutter, we use the `surface-container` tiers to simulate physical layers of fine paper:
*   **Base Layer:** `surface` (#f7f9fb) – The canvas.
*   **Secondary Sectioning:** `surface-container-low` (#f2f4f6) – Used for large background blocks.
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) – Pure white cards sitting on low-tier backgrounds to create a "lifted" effect.
*   **Emphasis Layers:** `surface-container-high` (#e6e8ea) – Reserved for inset elements like code snippets or tags.

### The "Glass & Gradient" Rule
To break the "flat" feel, use Glassmorphism for floating headers or navigation bars:
*   **Token:** `surface` at 80% opacity with a `backdrop-filter: blur(12px)`.
*   **Signature Gradients:** For primary CTAs, use a linear gradient from `primary` (#003d9b) to `primary_container` (#0052cc) at a 135-degree angle. This adds "soul" and a sense of light source to the UI.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance technical precision with human-centric design.

*   **Display & Headlines (Manrope):** A geometric sans-serif that feels modern and architectural. Use `display-lg` (3.5rem) for hero statements to create an immediate "High-End" impression.
*   **Body & UI (Inter/Noto Sans KR):** Chosen for its exceptional legibility at small sizes. The tight tracking and tall x-height mirror the clean efficiency of well-written code.

**Hierarchy as Identity:**
*   **Large Scale:** Use `headline-lg` for project titles.
*   **Technical Data:** Use `label-md` in all-caps with 0.05rem letter spacing for metadata (e.g., "TECH STACK," "YEAR").

---

## 4. Elevation & Depth
In this system, depth is a function of light and tone, not structural lines.

### The Layering Principle
Achieve hierarchy by stacking. A `surface-container-lowest` (#ffffff) card placed on a `surface-container-low` (#f2f4f6) background creates a natural, soft lift. This is the primary method of separation.

### Ambient Shadows
Shadows must be invisible until noticed. 
*   **Shadow Token:** `box-shadow: 0 8px 32px rgba(25, 28, 30, 0.04);`
*   The color is a 4% tint of `on_surface`, ensuring the shadow looks like a natural occlusion of light rather than a "grey smudge."

### The "Ghost Border" Fallback
If contrast ratios require a boundary (e.g., a white card on a white background), use a **Ghost Border**:
*   **Token:** `outline-variant` (#c3c6d6) at 20% opacity. This provides a "suggestion" of a boundary without closing off the layout.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`), `md` (0.375rem) rounded corners. Text is `on_primary` (#ffffff).
*   **Secondary:** No background. `outline-variant` Ghost Border. High-contrast `primary` text.
*   **Tertiary:** Pure text-link style using `primary` color with a 2px underline offset.

### Chips (Tech Tags)
*   **Style:** Background `surface-container-high`, text `on_surface_variant`. 
*   **Shape:** `full` (9999px) roundedness for a friendly, modular look. 
*   **Interaction:** On hover, shift background to `secondary_container`.

### Single-View Cards
*   **Visual Style:** No borders. Use `xl` (0.75rem) rounded corners. 
*   **Padding:** Use `8` (1.75rem) for internal spacing to ensure the content "breathes."
*   **Constraint:** Forbid divider lines. Separate "Project Title" from "Description" using a `3.5` (0.75rem) vertical spacing gap.

### Input Fields
*   **Style:** Filled style using `surface-container-highest`. 
*   **Indicator:** A 2px bottom-bar in `primary` that animates from the center on focus. No full-box strokes.

### The "Status Indicator" (New Component)
*   A small pulsing dot using `primary` next to a `label-sm` reading "AVAILABLE FOR WORK." This adds a layer of "live" interactivity to the static portfolio.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Margins:** On desktop, offset your main content column slightly to the left to create an editorial, non-template feel.
*   **Embrace "Single View":** Ensure the most critical information (Bio, Top 3 Skills, Contact) is visible above the fold on mobile without scrolling.
*   **Micro-interactions:** Use subtle 200ms ease-in-out transitions for color shifts.

### Don't:
*   **Don't use 100% Black:** Always use `on_surface` (#191c1e) for text. It’s softer and more premium.
*   **Don't use Box Borders:** If you feel the need to add a border, use a background color shift instead.
*   **Don't Over-round:** Keep corners to `md` (0.375rem) or `lg` (0.5rem) for a professional, "structured" feel. Avoid "bubble" aesthetics.
*   **Don't use Default Shadows:** Never use the browser's default drop-shadow settings. Always use the Ambient Shadow formula.