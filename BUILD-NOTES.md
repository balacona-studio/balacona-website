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
4. **Imprint numbers** (all 4 legal pages): RESOLVED 2026-11-01 by the clean-line approach. The visible bracketed placeholder paragraph was removed from all four legal pages and replaced with clean imprint lines in each page's language (studio name, Amsterdam, country, and the wholesale/contact email). No KvK or VAT number was added: the numbers themselves remain pending owner supply, and an HTML comment on each legal page records that they will be added when supplied.
5. **Domain mailbox**: all contact routes use diasporalifestyleshop@gmail.com until an @balacona.org mailbox exists; swap the mailto links when it does.
6. **Deployment**: this deliverable is the site files only. DNS/hosting connection of balacona.org at GoDaddy is a separate step (parent task).
7. **HTTPS state**: checked 2026-11-01 ~15:36 UTC: https://balacona.org/ still fails (curl 000); GitHub has not yet issued the Pages certificate, so Enforce HTTPS is not yet enabled. The site serves over HTTP in all four languages. Recheck HTTPS and enable Enforce HTTPS (GitHub Pages settings) once the certificate issues.

## Design and QA notes

- Identity follows the existing `styles.css` (Style Guide palette: warm white and calm beige grounds, navy ink #1C2440, gold #FFD86B / line #C29A5B; Jost / Cormorant Garamond / Amiri). v1.1 additions only appended: product cards, hero photo, subpage blocks, signup form, placeholder box, legal prose, language switcher.
- No emojis anywhere; no em dashes in any visible text (checked by grep); the Arabic word for the marriage contract appears in designs only as عقد القران, and "Nikah" is used in Latin script only, matching the listings.
- QA run 2026-11-01: all 20 pages serve HTTP 200 from a local static server; every internal link and image resolves; every home page has exactly 8 buy links; every Etsy URL on the site matches a live API record; every page has exactly one active language-switcher state.

## Update 2026-11-01 (v1.2): range grid at first glance + website image rule

Two owner directives of 1 November 2026, applied the same day.

### Directive 1: the whole range visible at first glance

The owner liked binmahmood.co because all product types are visible at first sight. Every language home page now carries a product-range grid directly under the hero (new `<section id="range">`, styles appended to `styles.css` as v1.2 `.range-grid` / `.range-tile`, responsive 3 columns, 2 on small screens, no JavaScript):

- Six tiles, one per live product family: Personalised Arabic name print, Arabic name necklace, Ramadan calendar for kids, Nikah certificate, Salam welcome sign, Henna wedding suite.
- Each tile is a text-free close mockup (see Directive 2) plus the family name in the page's language, and links to the family's Etsy listing. NameArt, KidsRam, Nikah, Salam and Suite reuse the exact listing URLs already verified on the cards; the necklace tile links to https://www.etsy.com/listing/4607595610/personalised-arabic-name-necklace-custom (published 1 Nov 2026, Coordinator's publish record).
- DE/FR/NL tile labels mirror the terminology of that language's product cards (e.g. DE "Personalisiertes arabisches Namensbild", "Nikah-Urkunde"; FR "Affiche de noms en calligraphie arabe", "Certificat de Nikah"; NL "Arabische naamprint", "Nikah-certificaat"). The necklace has no card yet, so its label is a plain translation per language (DE "Arabische Namenskette", FR "Collier prénom en arabe", NL "Arabische naamketting").
- New tile images (all text-free mockup slots from the listing sets in `~/workspace/company-hq/listing-build/`, resized to max 1200 px wide, JPEG q80): `range-nameart.jpg` (NAMEART-EN-06 white frame), `range-necklace.jpg` (necklace-final-set 01-hero, worn silver), `range-kidsram.jpg` (KIDSRAM-EN-06 white frame), `range-nikah.jpg` (NIKAHCERT-EN-04 pinned print), `range-salam.jpg` (SALAM-EN-06 white frame, terracotta), `range-suite.jpg` (SUITE-EN-06 henna welcome sign).

### Directive 2: website image rule (owner, standing)

The website must NOT use the Etsy cover images that carry text (title, Arabic headline, badge, language pill). Those covers are Etsy-only. On the website every product image is a text-free, distinctive close mockup. Text that is part of the product artwork itself (the personalised names and wording printed on the product) is fine.

Full audit of every `<img>` on all 20 pages, 1 Nov 2026, each image viewed:

- REPLACED (text-carrying covers): `nameart-digital.jpg` (NameArt rank 1 cover) replaced by `nameart-pinned.jpg` (NAMEART-EN-04 pinned print) on all 4 home pages; `kidsram-digital.jpg` (rank 1 cover) replaced by `kidsram-pinned.jpg` (KIDSRAM-EN-04 pinned print) on all 4 home pages; `nikah.jpg` (rank 1 cover) replaced by `nikah-oak.jpg` (NIKAHCERT-EN-02 oak-frame mockup) on all 4 home pages; `suite.jpg` (rank 1 cover) replaced by `suite-flatlay.jpg` (SUITE-EN-02 flat-lay mockup) on all 4 home pages; `salam-cover.jpg` (Salam rank 1 cover) replaced by `salam-pinned.jpg` (SALAM-EN-04 pinned print, cobalt) on all 4 wholesale pages. Alt texts updated in each language where the old alt described the cover.
- KEPT (already text-free mockups): `hero.jpg` (NameArt living-room scene), `nameart-printed.jpg` (oak-frame wall mockup), `kidsram-printed.jpg` (two calendars on a wall), `salam.jpg` (framed sign on a wall).
- Slot warning for future swaps: in the NameArt / KidsRam / Nikah / Salam sets, slots 03 (names close-up) and 07 (pair) are persuasion images WITH headline text overlays; they are not text-free and must not be used on this site. Slots 02, 04 and 06 are the clean mockups.
- OPEN GAP: the Ramadan Kids Bundle still shows its text-carrying overview image (`bundle.jpg`, the "what is included" graphic). Every image in the bundle's listing set carries a headline caption (slots 02, 04, 05, 06, 07 and 09 all checked visually) and the set contains no scene mockup at all, so there is no text-free replacement to swap in. The card keeps its current image until a text-free bundle mockup exists (a design task, not a web task).
- The retired cover files (`nameart-digital.jpg`, `kidsram-digital.jpg`, `nikah.jpg`, `suite.jpg`, `salam-cover.jpg`) remain in `assets/img/` and in the repo, unreferenced by any page.

## Update 2026-11-01 (v1.3): compact product shelf, BinMahmood model

Owner complaint the same evening: the v1.2 range grid made the desktop front page look distorted, with huge images (three 1200 px square tiles per row, each rendering about 330 px wide, under a two-column hero whose photo panel rendered over 500 px wide). The owner pointed at binmahmood.co as the model: a slim text opening, then immediately a compact product shelf of uniform small square photos, each with its price directly underneath. No giant hero image.

What changed (all four home pages + `styles.css`):

- **Hero slimmed to a text-led opening.** The two-column `hero-grid` and the oversized hero photo panel are gone from the top of every home page. The existing headline, lede, CTAs and language pill per language are kept, in a single column; hero padding reduced (56px top, 36px bottom) and the shelf section's top padding tightened (`.section-tight`), so the product shelf is the first visual content after the intro text. The hero photo itself was NOT deleted: it now sits in a width-capped showcase band (`.showcase .hero-photo`, max-width 680px, centred) directly below the shelf; the asset file is untouched.
- **Compact product shelf replaces the range grid.** Same six tiles, same text-free `range-*.jpg` images, same per-language family labels, same six Etsy hrefs (unchanged, character for character). New layout (styles.css v1.3 block): `repeat(6, 1fr)` with 16px gaps inside the container, 3 across at ≤860px, 2 across at ≤480px. Each tile now carries a from-price line under the family name (`.range-price`), BinMahmood-style: EN "from €13.99", DE "ab 13,99 €", FR "à partir de 13,99 €", NL "vanaf € 13,99", following each language's existing price format.
- **Container cap.** All content already sat in the centred `.wrap`; its cap (`--max`) is now 1180px (was 1080px), applied by the same `.wrap` rule to header, sections and footer on every page. At a 1440px viewport the shelf math is: content width 1180 − 48 (wrap padding) = 1132px; minus 5 × 16px gaps = 1052px; ÷ 6 = **about 175px per tile** (was about 330px).
- **Collection cards uniform.** `.card-img` now has a fixed 4/3 aspect with `object-fit: cover` (was 1/1), so the eight collection cards render uniform and more modest.

Shelf from-prices (set 1 Nov 2026). Source: Etsy list price (API list prices of record, cross-checked against the public listing pages' price metadata the same day: NameArt €27.98 and necklace €69.90 confirmed exactly) minus the shop's running launch sales:

| Family (listing) | List | Sale | Shelf from-price |
|---|---|---|---|
| NameArt digital (4606944281) | €27.98 | LAUNCH50, 50% | €13.99 |
| Necklace (4607595610) | €69.90 | 50% at check time | €34.95 |
| KidsRam digital (4606951481) | €27.98 | LAUNCH50, 50% | €13.99 |
| Nikah certificate printed (4606956815) | €65.90 | LAUNCH50, 50% | €32.95 |
| Salam sign printed (4606976068) | €65.90 | LAUNCH50, 50% | €32.95 |
| Henna suite digital (4606977044) | €33.90 | LAUNCH50, 50% | €16.95 |

- NECKLACE FLAG: a deeper 66% necklace sale (to €23.77) was being applied in parallel when the shelf was built. The necklace's public listing page, read 1 Nov 2026, still showed the 50% launch offer and its description's offer line of €34.95, so the shelf carries €34.95. When the 66% sale is confirmed live on the public page, update the necklace shelf price to €23.77 on all four home pages.
- RECHECK DATE: LAUNCH50 and the necklace sale both end 1 Dec 2026 and are due to be recreated around 29-30 Nov 2026. The six shelf prices must be re-checked against the live Etsy prices on 29-30 Nov, and whenever a sale ends without recreation the shelf prices must be raised to the list prices, or the shelf would advertise prices the shop no longer charges.

## Update 2026-11-01 (v1.4): two-column hero with clean collage, categories, full Etsy range

Owner spec (1 Nov 2026 evening, after reviewing the site and a binmahmood.co hero screenshot, corrected twice the same evening; the corrected version governs): the old v1.3 layout (text-only hero, priced shelf, showcase band, eight product cards) is replaced. The site is ETSY-ONLY (no Payhip anywhere) and must represent ALL the product families the Etsy shop actually sells, not only the eight featured listings. The Kids Bundle is NOT published on the site at all (owner decision) and appears nowhere.

### New structure (all four home pages)

- **Hero = one composed two-column section** (`.hero-grid`, the class from v1.0 returns): left column carries each page's existing presentation (eyebrow, headline, lede, CTAs, language pill, all verbatim) plus a category line linking the five categories; right column carries the image collage. On mobile it stacks, text first.
- **Collage = the reference's idea, not its execution.** The owner called the reference collage chaotic (overlaps, texts running together). Ours is a clean aligned grid (`.hero-collage`): 3 columns x 2 rows, uniform square tiles, 14px consistent gaps, no overlaps, no captions, nothing stacked, rounded corners (10px), NO prices and NO visible names or text on the tiles (alt text only). Tiles are about 170px at desktop width (collage column = 0.95fr of the 1132px content width). Six tiles, one per category plus the necklace: range-nameart.jpg (name), range-necklace.jpg (name), range-salam.jpg (wall-art), range-kidsram.jpg (calendars), kidsram-printed.jpg (kids), suite-flatlay.jpg (invitations). Each tile links to its category page.
- **Categories section** under the hero replaces the product-cards section: five category cards (`.cat-grid`), each ONE representative text-free image + the category name only, no prices. Prices now live only on category pages.
- The v1.3 showcase band is removed from the home pages; `hero.jpg` stays in assets, unreferenced by the home pages.
- Story, strips and footer sections below are unchanged.

### Step 0 inventory: the full Etsy catalogue (API pull, 1 Nov 2026)

Full active catalogue pulled via the Etsy API (shop 68589682, `/application/shops/68589682/listings?state=active`, paginated): **337 active listings**. The shop's own sections: Islamic Wall Art 180, Calendars & Decor 60, Ramadan & Eid 40, Kids Learning 27, Invitations 25, Prayer & Daily 4 (336 sectioned + the necklace). Families grouped from titles and prices:

- Personalised featured: name art digital + printed, kids Ramadan calendar digital + printed, Salam sign, Nikah certificate print, henna suite, necklace: 9
- Islamic wall art: digital singles (17 designs x 4 language editions), sets (5 trios + 5 duos x 4 editions = 40), printed framed posters (82 at EUR 32.95)
- Calendars 2027: digital Hijri-Gregorian / Moon phase / Zellige / Family (30 at EUR 6.95), printed calendars (16 at EUR 38.95), printed Mubarak poster and printed countdown posters (inside the 32.95 band)
- Ramadan: planners (4 editions EUR 7.95 + 2 Turkish EUR 6.95), countdown calendars (EUR 4.95 band), decorations/garlands (26 at EUR 5.95)
- Kids: activity books (4 editions + 2 Turkish, EUR 5.95/4.95), good deeds cards (4 + 2 Turkish, EUR 4.95/3.95), kids wall calendars (4 + 2 Turkish, EUR 5.95/4.95), Arabic alphabet posters (digital 4 at EUR 6.95, printed 4 at EUR 32.95), Salah tracker (4 at EUR 5.95)
- Invitations: wedding sets (3 designs x 4 editions = 12 at EUR 11.95), Aqiqah (boy/girl/rainbow x 4 = 12 at EUR 5.95), Eid envelopes and gift tags (4 + 2 Turkish at EUR 4.95)
- Turkish editions run across the calendar, Ramadan and kids families (about 28 listings, TR+DE and TR+NL pairs). The site stays in its four languages; Turkish editions are reachable through the category pages' Etsy shop-search buttons.
- Bundles (Ramadan family bundle x6, Kids Bundle x1): on Etsy, but NOT on this site (owner decision for the Kids Bundle; the family bundle is likewise left off the site's category pages).

### Category map as built (20 new pages: category-<slug>.html x EN/DE/FR/NL)

1. **name** (Your name in Arabic): 4606944281 digital EUR 13.99, 4606947553 printed EUR 32.95, 4607595610 necklace EUR 23.77.
2. **wall-art** (Islamic wall art): 4606976068 Salam EUR 32.95; 4606947553 NameArt printed EUR 32.95; Ayatul Kursi digital (EN 4598485568, NL 4598492828, FR 4598486948, DE 4598495252) EUR 5.95; Ayatul Kursi framed print (EN 4599248626, NL 4599279716, FR 4599289409, DE 4599346048) EUR 32.95; set of 3 Bismillah/Alhamdulillah/Wa Man Yattaqillah (EN 4598710886, NL 4598707409, FR 4598745694, DE 4598738757) EUR 13.99; set of 2 black and gold (EN 4599001548, NL 4598988673, FR 4599003742, DE 4599011982) EUR 10.99; 4606956815 Nikah certificate print EUR 32.95.
3. **calendars** (Calendars & Ramadan): 4606951481 EUR 13.99; 4606954395 EUR 32.95; Moon phase digital (EN 4599996273, NL 4600022038, FR 4600003455, DE 4600026482) EUR 6.95; Zellige Hijri digital (EN 4599988075, NL 4600013792, FR 4599991991, DE 4599995397) EUR 6.95; Family digital (EN 4600078451, NL 4600088155, FR 4600118742, DE 4600099601) EUR 6.95; Moon phase printed (EN 4599928859, NL 4599960764, FR 4599939291, DE 4599938427) EUR 38.95; Ramadan planner (EN 4597572686, NL 4597682212, FR 4597607789, DE 4597629922) EUR 7.95; Ramadan countdown (EN 4600941046, NL 4600917249, FR 4600939832, DE 4600914347) EUR 4.95; Ramadan decor (EN 4600929840, NL 4600903931, FR 4600905455, DE 4600903399) EUR 5.95.
4. **kids** (Kids' learning & fun): activity book (EN 4597717115, NL 4597720603, FR 4597745812, DE 4597734609) EUR 5.95; good deeds cards (EN 4597714838, NL 4597713618, FR 4597707201, DE 4597705419) EUR 4.95; kids wall calendar (EN 4597734093, NL 4597764094, FR 4597763886, DE 4597752623) EUR 5.95; alphabet poster digital (EN 4598009092, NL 4598002723, FR 4597987071, DE 4598176136) EUR 6.95; alphabet poster printed (EN 4599083871, NL 4599176766, FR 4599152665, DE 4599151573) EUR 32.95; Salah tracker (EN 4598021810, NL 4597994345, FR 4598015298, DE 4598001275) EUR 5.95; 4606951481 EUR 13.99; 4606954395 EUR 32.95.
5. **invitations** (Invitations & occasions): 4606956815 EUR 32.95; 4606977044 henna suite EUR 16.95; wedding ivory and gold (EN 4598428396, NL 4598436632, FR 4598429230, DE 4598418267) EUR 11.95; wedding Majorelle blue (EN 4598412436, NL 4598399773, FR 4598393665, DE 4598400997) EUR 11.95; wedding sage green (EN 4598433716, NL 4598417215, FR 4598445386, DE 4598430069) EUR 11.95; Aqiqah boy (EN 4598289555, NL 4598305403, FR 4598309940, DE 4598319728) EUR 5.95; Aqiqah girl (EN 4598301363, NL 4598399268, FR 4598370729, DE 4598377847) EUR 5.95; Aqiqah rainbow (EN 4598398188, NL 4598384509, FR 4598389889, DE 4598419362) EUR 5.95; Eid envelopes (EN 4598278975, NL 4598118968, FR 4598171825, DE 4598186187) EUR 4.95.

- Per-language pages link each design's own language edition where one exists (IDs above); the eight featured personalised listings exist only as EN listings, so all language pages link those, as before.
- "See the whole category on Etsy" button per page: shop search URLs with terms name / wall art / calendar / kids / invitation. All five verified live on 1 Nov 2026 (shop page loads with the search applied).
- **Price sources:** every card price was read from the same API pull and asserted in the build script. The eight featured listings carry the running sales (LAUNCH50 50%: 13.99 / 32.95 / 13.99 / 32.95 / 32.95 / 32.95 / 16.95; necklace NECKLACE66 66%: EUR 23.77, publicly verified). Every other card shows its API list price as read (no sale applied). Spot check: Ayatul Kursi digital EN (4598485568) public listing metadata reads 5.95 EUR, matching the card.
- **Images:** text-free rule kept. New card images are scene/room/product shots from the families' own folders under store-products (room mockups for wall art and calendars, garland scene for decor, on-the-wall countdown, invitation flat shots, envelopes). Four were eyeball-verified before use (Ayatul Kursi room, trio room, countdown wall, decor garland); the trio room image shows exactly Bismillah + Alhamdulillah + Wa Man Yattaqillah, matching its listing. FLAG: the planner and several kids families have no scene mockups in their folders, so their cards use clean product-content images from the same sets (planner inside spread, activity book on tablet, cards flat-lay, alphabet wall decor, Salah family page); these carry no marketing headline overlays, only the product's own content. If scene mockups are designed later, swap them in.
- **RECHECK DATE (stands from v1.3):** LAUNCH50 and NECKLACE66 end 1 Dec 2026; re-check every featured price on the category pages and recreate the sales around 29-30 Nov 2026. If a sale ends without recreation, raise the affected card prices to list (27.98 / 65.90 / 33.90 / 69.90) or the site would advertise prices the shop no longer charges.
- **Follow-up at tonight's mug publish:** add the sixth category "Mugs & gifts" (homepage card + collage tile becomes 7 tiles or the necklace tile is swapped, category pages x4) when the two mugs go live on Etsy.
