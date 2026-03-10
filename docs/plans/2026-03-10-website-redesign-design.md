# Vision Health Institute — Propozycja Designu

## Podsumowanie ustaleń z brainstormingu

| Decyzja | Wybór |
|---------|-------|
| Struktura | Hybrid — main scroll + podstrony |
| Technologia | React + Vite + Tailwind CSS |
| Zespół | 3 lekarzy równorzędnie: Dr. Bogusz OD, Thomas Weppelmann MD, Thao Ho OD |
| Bio | Profesjonalne z ludzkim akcentem, równe traktowanie |
| Paleta kolorów | Ciepły editorial (krem, szałwia, charcoal, stonowane złoto) |
| Typografia | Cormorant Garamond (nagłówki) + Outfit (body) |
| Rezerwacja | Pełny interaktywny mockup (kalendarz, time slots) |
| Zdjęcia | AI-generowane (do zamiany na realne później) |
| Zakres | Bez blogu, patient resources, promotions, sklepu online |

---

## Paleta kolorów — szczegóły

```
Tło główne:     #FAF7F2  (warm cream)
Tło sekcji alt: #F0EBE3  (warm sand)
Szałwia:        #7A8B6F  (sage green — akcent, CTA hover)
Złoto stłumione:#C4A77D  (muted gold — akcenty, linie dekoracyjne)
Charcoal:       #2C2C2C  (tekst główny, nagłówki)
Tekst muted:    #6B6560  (opisy, podtytuły)
Biel:           #FFFFFF  (karty, formularze)
Ciemna sekcja:  #2C2C2C  (footer, kontrastowe sekcje)
Tekst na ciemnym:#FAF7F2
```

## Typografia — hierarchia

```
H1 (Hero):        Cormorant Garamond, 72px, font-weight: 300 (light)
H2 (Section):     Cormorant Garamond, 48px, font-weight: 400
H3 (Card/Block):  Cormorant Garamond, 32px, font-weight: 500
Body:             Outfit, 16px, font-weight: 300, line-height: 1.7
Body large:       Outfit, 18px, font-weight: 300
Caption/Small:    Outfit, 14px, font-weight: 400, uppercase, letter-spacing: 2px
Nav:              Outfit, 14px, font-weight: 500, uppercase, letter-spacing: 1.5px
```

---

## Struktura strony

### Główna strona (scroll) — `index` route

```
┌─────────────────────────────────────────────┐
│ NAVIGATION (sticky, minimal)                │
│ Logo left | Nav links right | CTA button    │
├─────────────────────────────────────────────┤
│ HERO                                        │
│ Full-bleed AI-generated eye/vision image    │
│ Overlay: "See Life Clearly"                 │
│ Subtitle + CTA "Book Appointment"           │
├─────────────────────────────────────────────┤
│ INTRO (asymmetric 2-col)                    │
│ Elegant intro text about VHI philosophy     │
│ Small accent image beside text              │
├─────────────────────────────────────────────┤
│ OUR TEAM                                    │
│ 3 równorzędne karty lekarzy                 │
│ Dr. Bogusz OD, Weppelmann MD, Thao Ho OD    │
│ CTA: "Meet Our Team" → /about subpage       │
├─────────────────────────────────────────────┤
│ SERVICES PREVIEW                            │
│ 4 featured categories (elegant cards):      │
│ "Comprehensive Eye Care"                    │
│ "Advanced Diagnostics"                      │
│ "Specialty Treatments"                      │
│ "Eyewear & Contacts"                        │
│ Each: image + title + 1-line desc + link    │
├─────────────────────────────────────────────┤
│ EXPERIENCE / WHY VHI                        │
│ Full-bleed image + overlay stats:           │
│ "30+ Years" | "Board-Certified" | "10,000+" │
│ patients served                             │
├─────────────────────────────────────────────┤
│ TESTIMONIALS (HALES style)                  │
│ Large serif quotes, italic                  │
│ Patient initials + subtle background        │
│ Carousel/slider or stacked                  │
├─────────────────────────────────────────────┤
│ BOOK APPOINTMENT (preview CTA)              │
│ Elegant section: "Ready to See Clearly?"    │
│ CTA → /book subpage                         │
├─────────────────────────────────────────────┤
│ CONTACT / FIND US                           │
│ Map | Hours | Phone | Address               │
│ Clean, minimal layout                       │
├─────────────────────────────────────────────┤
│ FOOTER                                      │
│ Newsletter signup | Quick links             │
│ Social icons | Copyright                    │
└─────────────────────────────────────────────┘
```

### Podstrony

| Route | Zawartość |
|-------|-----------|
| `/about` | Historia kliniki (Perry Eye Care 1990 → VHI 2013 → nowa właścicielka), filozofia, pełne bio 3 lekarzy (równorzędne) |
| `/services` | Strona przeglądu usług z linkami do podstron |
| `/services/eye-exams` | Comprehensive Eye Examinations + iWellness Exam |
| `/services/diagnostics` | Advanced Diagnostic Testing (OCT, topografia, pola widzenia, retinal photography, glaucoma test) |
| `/services/treatments` | Specialty Treatments: OptiLight (dry eye), Emergency Eye Care, Vision Correction, Eye Conditions/Diseases |
| `/services/eyewear` | Lenses & Frames + Contact Lenses |
| `/services/pediatric` | Pediatric Vision Care |
| `/book` | Pełny mockup formularza rezerwacji (kalendarz, time slots) |

---

## Sekcje — szczegółowy opis layoutu

### 1. Navigation

- **Pozycja:** Sticky top, przezroczyste → białe po scroll (z blur backdrop)
- **Logo:** "VISION HEALTH INSTITUTE" — Cormorant Garamond, uppercase, letter-spaced
- **Linki:** About | Services | Experience | Contact — Outfit uppercase
- **CTA:** "Book Appointment" — sage green button, rounded
- **Mobile:** Hamburger → slide-in panel

### 2. Hero

- **Layout:** Full-viewport, AI-generated image (abstrakcyjne oko/irys w ciepłych tonach)
- **Overlay:** Gradient ciemny od dołu, tekst na dole
- **H1:** "See Life Clearly" — Cormorant Garamond Light, 72px, biały
- **Subtitle:** "Comprehensive eye care in the heart of Orlando" — Outfit, 18px
- **CTA:** "Book Your Visit" — biały przycisk z sage hover
- **Animacja:** Subtle parallax na scroll, fade-in tekstu

### 3. Intro

- **Layout:** Asymetryczny — 60% tekst / 40% mały obraz z zaokrąglonymi rogami
- **Treść:** 2-3 zdania o filozofii VHI (personalized care, modern technology, trusted community)
- **Typography:** Cormorant Garamond H2 + Outfit body
- **Tło:** Cream `#FAF7F2`

### 4. Our Team

- **Layout:** 3 równorzędne karty w rzędzie (desktop), 1 kolumna (mobile)
- **Każda karta:** AI-generated portret, imię + tytuł, 2-3 zdania specjalizacji
- **Styl:** Białe karty, portret u góry (zaokrąglone rogi), tekst pod spodem
- **Hover:** Lekki lift + złoty border-bottom
- **CTA pod kartami:** "Meet Our Team" → /about
- **Tło:** Sand `#F0EBE3`

### 5. Services Preview

- **Layout:** 4 karty w 2x2 grid (desktop), 1 kolumna (mobile)
- **Karty:** Duży obraz górny, tytuł serif, 1-linia opis, "Learn more →"
- **Style:** Białe karty z cieniem, hover: lekki lift + złoty border-bottom
- **Tło:** Cream `#FAF7F2`
- **4 karty linkują do podstron:**
  - **Comprehensive Eye Care** → `/services/eye-exams` — badania, iWellness
  - **Advanced Diagnostics** → `/services/diagnostics` — OCT, topografia, pola widzenia
  - **Specialty Treatments** → `/services/treatments` — OptiLight, suche oko, emergency care
  - **Eyewear & Contacts** → `/services/eyewear` — oprawy, soczewki kontaktowe
- **+ link "Pediatric Care" pod gridem** → `/services/pediatric`

### 6. Experience / Why VHI

- **Layout:** Full-bleed ciemna sekcja (`#2C2C2C`)
- **Treść:** 3 statystyki w rzędzie z dużymi liczbami (Cormorant 64px) + opis (Outfit)
  - "30+" / Years Serving Orlando
  - "Board Certified" / American Board of Optometry
  - "State-of-the-Art" / Diagnostic Technology
- **Animacja:** Counter-up na scroll (liczby się "odliczają")

### 7. Testimonials

- **Layout:** Centered, max-width 700px
- **Style HALES:** Wielki cudzysłów `"` (Cormorant, 120px, sage green), italic serif cytat, imię pacjenta poniżej
- **Nawigacja:** Strzałki lub dots, auto-rotate
- **Tło:** Sand `#F0EBE3`
- **Treść:** 3 fikcyjne, realistyczne opinie

### 8. Book Appointment CTA

- **Layout:** Centered text + CTA button
- **H2:** "Ready to See Clearly?" — Cormorant
- **Podtytuł:** "Schedule your visit in seconds" — Outfit
- **CTA:** "Book Now" → /book
- **Tło:** Cream z dekoracyjną linią złota

### 9. Contact

- **Layout:** 2 kolumny — mapa (OpenStreetMap embed) + info
- **Info:** Adres, telefon, email, godziny w elegant table
- **Tło:** Białe

### 10. Footer

- **Tło:** Charcoal `#2C2C2C`
- **Layout:** 3 kolumny — newsletter signup | quick links | social + copyright
- **Newsletter:** Input + "Subscribe" button (sage green)

---

## Podstrona: `/book` — Mockup rezerwacji

### Design concept: "Spa Booking Experience"

```
┌─────────────────────────────────────────────┐
│ HEADER: "Book Your Visit"                   │
│ Subtitle: "Select a time that works"        │
├────────────────────┬────────────────────────┤
│ LEFT (form)        │ RIGHT (summary card)   │
│                    │                        │
│ Personal Info:     │ Your Appointment       │
│ • Name             │ ─────────────────      │
│ • Email            │ Dr. Edith Bogusz O.D.  │
│ • Phone            │ Type: [selected]       │
│                    │ Date: [selected]       │
│ Appointment Type:  │ Time: [selected]       │
│ [dropdown]         │                        │
│                    │ 400 N. Bumby Ave.      │
│ Date:              │ Orlando, FL 32803      │
│ [calendar widget]  │                        │
│                    │ ───────────────────    │
│ Time:              │ [Confirm Booking]      │
│ [slot pills]       │                        │
│                    │                        │
│ Notes:             │                        │
│ [textarea]         │                        │
├────────────────────┴────────────────────────┤
│ Confirmation modal (po submit):             │
│ ✓ "Appointment Requested"                   │
│ Summary + "We'll confirm within 24 hours"   │
└─────────────────────────────────────────────┘
```

- **Kalendarz:** Custom styled (Tailwind), current month view, szałwia na wybraną datę
- **Time slots:** Pill buttons w rzędach (9:00, 9:30, 10:00...), sage highlight na wybrany
- **Summary card:** Sticky po prawej (desktop), scrolluje z użytkownikiem
- **Formularz:** Białe tło, zaokrąglone inputy, bez standardowego medycznego look
- **Confirmation:** Modal z animacją checkmark, podsumowanie

---

## Animacje

- **Scroll reveal:** Fade-in + slide-up (20px), staggered na karty/sekcje, `IntersectionObserver`
- **Hero parallax:** Obraz przesuwa się wolniej niż scroll (~0.5x speed)
- **Counter-up:** Liczby w sekcji Experience animują się od 0 do wartości
- **Hover na kartach:** `translateY(-4px)` + głębszy cień
- **Nav transition:** Transparent → white backdrop-blur na scroll
- **Booking calendar:** Smooth transitions między miesiącami
- **Confirmation modal:** Scale-up z opacity fade

---

## Pliki / architektura komponentów (React + Vite)

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/          (sekcje strony głównej)
│   │   ├── Hero.jsx
│   │   ├── Intro.jsx
│   │   ├── Team.jsx        (was: About.jsx)
│   │   ├── Services.jsx
│   │   ├── Experience.jsx
│   │   ├── Testimonials.jsx
│   │   ├── BookCTA.jsx
│   │   └── Contact.jsx
│   └── booking/
│       ├── BookingForm.jsx
│       ├── Calendar.jsx
│       ├── TimeSlots.jsx
│       └── ConfirmationModal.jsx
├── pages/
│   ├── Home.jsx              (scroll — wszystkie sections)
│   ├── AboutPage.jsx         (pełne bio 3 lekarzy + historia kliniki)
│   ├── ServicesPage.jsx      (przegląd usług z linkami)
│   ├── ServiceDetailPage.jsx (reusable template dla podstron usług)
│   └── BookPage.jsx          (formularz rezerwacji)
├── data/
│   ├── doctors.js            (dane 3 lekarzy)
│   └── services.js           (dane 12 usług zgrupowanych w 5 kategorii)
├── hooks/
│   └── useScrollAnimation.js
├── assets/
│   └── images/               (AI-generated)
├── App.jsx                   (routing z react-router-dom)
├── index.css                 (Tailwind + custom)
└── main.jsx
```

---

## Podejścia — porównanie

### Podejście A: Immediate visual impact (Rekomendowane ✅)

Budujemy stronę główną jako pełny editorial scroll, zdjęcia AI-generowane w trakcie implementacji, podstrony minimalne. **Priorytet:** wow-factor strony głównej.

### Podejście B: Content-first

Skupiamy się najpierw na treści i strukturze, design dopracowujemy iteracyjnie. Mniej wow na początku, ale solidniejsza baza.

### Podejście C: Component-first

Budujemy design system (buttons, cards, inputs, typography) jako bibliotekę, potem składamy strony. Najbardziej inżynieryjne, ale wolniejsze.

**Rekomenduję Podejście A** — w projekcie tym typu visual impact jest kluczowy. Design system budujemy "po drodze" w Tailwind config, a treść mamy z briefu.
