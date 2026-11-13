# PathwayItalia redesign: notes for the site owner

Branch: `claude/relaxed-noether-62uy25`. Nothing has been deployed.

## Where things live

| What | File |
| --- | --- |
| Universities and programmes (with `lastVerified` dates) | `src/data/universities.ts` |
| Photos and their licence credits | `src/data/photos.ts` (files in `src/assets/photos/`) |
| Student Base countries, counter, testimonials | `src/data/student-base.ts` |
| Services text | `src/data/services.ts` |
| FAQ | `src/data/faq.ts` |
| Email, socials, booking link, form key, placeholder switch | `src/data/site.ts` |
| Colours, fonts, buttons, cards | `src/styles.css` |

## Pages

`/`, `/universities`, `/universities/:slug` (13 pages), `/programs`, `/services`, `/faq`, `/apply`, `/credits`, plus `/sitemap.xml` and `/robots.txt`.
The site is server-rendered by TanStack Start on Vercel. Every URL, including deep links, is rendered on the server, so no `index.html` fallback is needed. Unknown URLs return a real 404.

## To do before going live

1. **Form delivery.** Create a free key at web3forms.com for info@pathwayitalia.it and add it in Vercel as `VITE_WEB3FORMS_KEY`. Until then, the Apply form opens the visitor's email app with their answers filled in.
2. **Booking link.** Confirm `https://cal.com/pathwayitalia` is live (set in `src/data/site.ts`).
3. **Student Base.** Add the remaining countries in `src/data/student-base.ts`, and the matching flag import in `src/components/site/StudentBase.tsx`.
4. **Testimonials.** Add real quotes, used with permission, in `src/data/student-base.ts`. Nothing on the site is invented.
5. **Photos.** IED still has no photo (nothing properly licensed on Wikimedia Commons; ask their press office). The Istituto Marangoni photo was supplied by you: add its credit in `src/data/photos.ts` (it currently reads "[ADD PHOTO CREDIT]") and keep proof of permission.
6. **Services copy.** The detailed "What's included" lists are a first draft; check they match what you offer.
7. When everything is filled in, set `showPlaceholders: false` in `src/data/site.ts`.

## Programme changes (checked on official sites on 13 November 2026)

Removed or renamed from the old site, and why:

| Old entry | What the official site shows |
| --- | --- |
| Politecnico di Milano "BSc Fashion Design and Engineering" | No such programme. PoliMi's Fashion Design bachelor's is taught in Italian. |
| Politecnico di Milano "BSc Computer Engineering" | The bachelor's (Engineering of Computing Systems) is taught in Italian. |
| Politecnico di Milano "BSc Mathematical Engineering" | Taught in Italian at bachelor's level. |
| Politecnico di Torino "BSc Electronic Engineering" | Italian only. The English one is "Electronic and Communications Engineering" (now listed). |
| Bocconi "BSc International Economics and Management" | Not in the current list; Bocconi's programmes are now Economics, Finance, Management, etc. |
| Bocconi "BSc Economics and Data Science" | Not a separate degree; "Economic and Data Sciences" is a track inside the BSc in Economics. |
| Bologna "BSc Engineering Management" | Not an English-taught first-cycle degree in the 2026/27 catalogue. |
| Bologna "BSc Biological Sciences" | Not in English; replaced by Genomics and Biology of Human and Environmental Health. |
| Padova "BSc Biotechnology" | Taught in Italian. |
| Cattolica "BA Business Administration", "BA International Relations" | Not real names; replaced by Economics and Management, IRGA, etc. |
| Luiss "BSc Business and Management", "BA Political Science and International Relations" | Not current names; Luiss's Political Science is taught in Italian. Replaced by Business Administration, PPE, etc. |
| Turin "BSc Economics and Business Administration" | Not found; replaced by Business & Management. |
| Trento "BSc Information Engineering" | No English-taught bachelor's by that name; only CEILS is fully in English. |
| Link Campus "BA International and Diplomatic Studies" | Not found; its English curricula sit inside three Italian degree classes (now listed). |
| IED "BA Graphic Design", NABA "BA Design", Marangoni "BA Fashion Design" | Kept under their exact official names (e.g. Marangoni's is "Fashion Design & Accessories (Womenswear / Menswear)"). |

Universities that appeared only in the old Programs list now have their own pages: Turin, Trento, Politecnico di Torino, NABA and Link Campus.

### Flagged rather than guessed

- **Padova, Italian Medieval and Renaissance studies.** It is on Padova's "taught exclusively in English" list, but its own page says "Italian and English". Marked UNVERIFIED.
- **Padova, three new 2027/28 programmes.** The university lists them as "to be approved". Marked "Awaiting approval".
- **Bologna, Turin, PoliMi and PoliTo** had only their 2026/27 catalogues online; 2027/28 had not been published. Each university page says so.
- **Trento CEILS and PoliTo Food Tech** have no programme pages we could open, so they link to the official list page instead.
- **Link Campus** doesn't state an academic year on its English-courses page.
- Programmes marked "English & Italian options" are officially offered in both languages. Students should confirm the language of their intake.
