# Balacona Studio website (balacona.org): build notes

Built 1 November 2026. Static HTML/CSS, no build step, no JavaScript, no cookies, no analytics.
One job: feed the Etsy shop. The site takes no orders; every buy button goes to Etsy.

## Architecture (multilingual)

- English at the root: `index.html`, `wholesale.html`, `creators.html`, `free-printable.html`, `legal.html`
- German: `de/` · French: `fr/` · Dutch: `nl/`, the same five pages each, fully translated
- Every page carries a language switcher (EN / DE / FR / NL) in the header, linking to the same page in the other languages, plus hreflang tags for all four versions.
- Shared assets: `styles.css` (root) and `assets/img/`; language pages reference them with `../` paths.
- Each language's wholesale page is standalone: who we are, audiences, the offer, the 3-step ordering route via Etsy custom listings, the catalogue placeholder and the contact email are all on that one page, so a cold visitor from an outreach email needs nothing else.

## External links used, and their sources

All Etsy URLs were read live from the Etsy API on 2026-11-01 (shop 68589682, BalaconaStudio) and cross-checked against the listing records in `~/workspace/company-hq/listing-build/`. No URL was invented.

| Link | Used on | Source |
|---|---|---|
| https://www.etsy.com/shop/BalaconaStudio | Every page (nav, footer, story links) | Etsy API shop record: shop_name BalaconaStudio, url field |
| https://www.etsy.com/listing/4606944281/personalised-arabic-name-wall-art-print | NameArt DIGITAL card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606947553/personalised-arabic-name-framed-print | NameArt PRINTED card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606951481/personalised-kids-ramadan-calendar-2027 | KidsRam DIGITAL card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606954395/personalised-kids-ramadan-calendar-2027 | KidsRam PRINTED card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606976068/personalised-salam-welcome-sign-arabic | Salam card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606956815/personalised-nikah-certificate-islamic | Nikah Certificate card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606977044/henna-and-nikah-invitation-suite-muslim | Henna Suite card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| https://www.etsy.com/listing/4606979708/ramadan-kids-bundle-activity-book-good | Kids Bundle card, all 4 home pages | Etsy API active listings, 2026-11-01 |
| mailto:diasporalifestyleshop@gmail.com | Wholesale, creators, free printable, legal pages (all languages) | Company store email of record; used until the @balacona.org mailbox exists |
| Google Fonts (Jost, Cormorant Garamond, Amiri) | Every page, head link | Style Guide font stack; pages fall back to local serif/sans stacks if fonts fail to load |

## Prices

Shown prices are the API list prices read on 2026-11-01: NameArt digital €27.98, NameArt printed €65.90, KidsRam digital €27.98, KidsRam printed €65.90, Salam €65.90, Nikah Certificate €65.90, Henna Suite €33.90, Kids Bundle €31.90. DE/FR pages format them as 27,98 € and NL as € 27,98; the amounts are identical. Note: the shop's LAUNCH50 promotion (50%, running to 1 Dec 2026) may show lower prices on Etsy itself; the site shows list prices and says so.

## Per-language product links: FALLBACKS to swap

Checked the full live shop (336 active listings, Etsy API, 2026-11-01) and the listing-build records: as of the build, the eight featured products exist ONLY as English listings. Confirmed independently by the swap manifest of 2026-11-01 (`~/workspace/company-hq/listing-build/swap-manifest-2026-11-01.md`, Flag 1: no live DE/NL/FR listings for KidsRam, NameArt or Salam; the Henna Suite and Kids Bundle have EN sets only).

Therefore, per the owner's rule, every DE, FR and NL product card currently links to the product's EN listing (same URLs as the table above). Each language home page states this openly in the note under the catalogue ("the linked listings are currently in English; the German/French/Dutch editions follow").

SWAP TASK for Phase 1 (DE listings first, then FR, then NL): when a language listing for a featured product goes live, replace that language's card link (8 cards per language home page) with the language listing URL, and remove the note once a language's set is complete.

## Images

All images are the products' real, currently live listing images, pulled from the Etsy API listing-images records on 2026-11-01 (so they match the post-swap live sets of 1 Nov, including the new slot-06 scenes), resized for the web (cards max 1000 px, hero max 1600 px, JPEG q82).

| File | Source (live listing image) |
|---|---|
| assets/img/hero.jpg | NameArt PRINTED 4606947553, image rank 6 (the D-16 living-room scene): https://i.etsystatic.com/68589682/r/il/… (full URL in the API record) |
| assets/img/nameart-digital.jpg | NameArt DIGITAL 4606944281, rank 1 |
| assets/img/nameart-printed.jpg | NameArt PRINTED 4606947553, rank 2: https://i.etsystatic.com/68589682/r/il/311283/8778098148/il_fullxfull.8778098148_i1wg.jpg |
| assets/img/kidsram-digital.jpg | KidsRam DIGITAL 4606951481, rank 1 |
| assets/img/kidsram-printed.jpg | KidsRam PRINTED 4606954395, rank 6 (wall scene) |
| assets/img/salam.jpg | Salam 4606976068, rank 2 (zellige sign on wall) |
| assets/img/salam-cover.jpg | Salam 4606976068, rank 1 (wholesale page) |
| assets/img/nikah.jpg | Nikah Certificate 4606956815, rank 1 |
| assets/img/suite.jpg | Henna Suite 4606977044, rank 1 |
| assets/img/bundle.jpg | Kids Bundle 4606979708, rank 1 |

Full rank-1 source URLs: nameart-digital https://i.etsystatic.com/68589682/r/il/7d4931/8778094604/il_fullxfull.8778094604_lquh.jpg · nameart-printed https://i.etsystatic.com/68589682/r/il/2986da/8778098076/il_fullxfull.8778098076_ifym.jpg · kidsram-digital https://i.etsystatic.com/68589682/r/il/63f59d/8773961604/il_fullxfull.8773961604_jlqg.jpg · kidsram-printed https://i.etsystatic.com/68589682/r/il/60196c/8821805411/il_fullxfull.8821805411_9c0s.jpg · salam https://i.etsystatic.com/68589682/r/il/789fbc/8778106264/il_fullxfull.8778106264_6if1.jpg · nikah https://i.etsystatic.com/68589682/r/il/51cb0c/8825931435/il_fullxfull.8825931435_tkpt.jpg · suite https://i.etsystatic.com/68589682/r/il/97e014/8821816479/il_fullxfull.8821816479_tnjg.jpg · bundle https://i.etsystatic.com/68589682/r/il/e6d6e2/8821836853/il_fullxfull.8821836853_g5cr.jpg

## Placeholders remaining

1. **Wholesale catalogue PDF** (all 4 wholesale pages): a clearly flagged "Coming soon / In Vorbereitung / Bientôt / Binnenkort" box marks exactly where the download goes. Until the PDF exists, the box routes readers to email for the current catalogue and price list.
2. **Mailing-list form** (all 4 free-printable pages): the form is present (name optional, email required) but has NO backend; it is marked with an HTML comment and a visible note telling visitors to email for the printable today. Connect to the mailing tool with double opt-in before launch, and update the privacy section of the legal pages at the same time.
3. **The free printable file itself** (the Ramadan good deeds chart promised on the free-printable pages) still needs to be produced and attached to the mailing flow.
4. **Imprint numbers** (all 4 legal pages): bracketed placeholder where the KvK (chamber of commerce) and VAT numbers go. Not invented; add before launch.
5. **Domain mailbox**: all contact routes use diasporalifestyleshop@gmail.com until an @balacona.org mailbox exists; swap the mailto links when it does.
6. **Deployment**: this deliverable is the site files only. DNS/hosting connection of balacona.org at GoDaddy is a separate step (parent task).

## Design and QA notes

- Identity follows the existing `styles.css` (Style Guide palette: warm white and calm beige grounds, navy ink #1C2440, gold #FFD86B / line #C29A5B; Jost / Cormorant Garamond / Amiri). v1.1 additions only appended: product cards, hero photo, subpage blocks, signup form, placeholder box, legal prose, language switcher.
- No emojis anywhere; no em dashes in any visible text (checked by grep); the Arabic word for the marriage contract appears in designs only as عقد القران, and "Nikah" is used in Latin script only, matching the listings.
- QA run 2026-11-01: all 20 pages serve HTTP 200 from a local static server; every internal link and image resolves; every home page has exactly 8 buy links; every Etsy URL on the site matches a live API record; every page has exactly one active language-switcher state.
