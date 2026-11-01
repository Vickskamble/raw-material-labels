# Raw Material Label System — GMP Edition

An offline-first Progressive Web App (PWA) for generating **pharmaceutical raw
material identification labels**. Scan or paste barcode data, and the app
creates clean, print-ready GMP labels with expiry checks and signature lines.

Designed for quality control and warehouse teams who need fast, consistent
labels without an internet connection.

---

## Features

- **Barcode / scan input** — scan any number of material barcodes in succession,
  or paste the data. Labels are generated automatically.
- **Auto field detection** — material code, material name, A.R. No., batch/lot,
  mfg date, expiry date, retest date, drum/package no., net qty, manufacturer,
  supplier and storage conditions.
- **Expiry & retest checks** — expired material gets an `EXPIRED` / `RETEST DUE`
  stamp, and near-expiry items are highlighted.
- **Standard label size** — 100 × 150 mm (4 × 6 in) by default, with true-to-size
  on-screen preview. A4, 100 × 100 mm and 100 × 75 mm also supported.
- **Auto-shrink text** — long names, addresses or storage conditions scale down
  automatically so nothing spills outside the label.
- **GMP signature block** — `Checked by` and `Reviewed by` signature lines.
- **Material status** — Quarantine, Approved, Rejected or Under test.
- **Settings** — company/plant name, footer note, near-expiry warning days and
  default status, all stored locally on the device.
- **Installable & offline** — install on desktop or tablet and keep working
  without internet.

---

## Label preview

The on-screen preview matches the printed output exactly, including the
selected physical label size.

---

## Quick start

1. Open the hosted app in Chrome or Edge.
2. Click **Install** (or the install icon in the address bar) to install it as
   an app.
3. Scan or paste material data into the input box.
4. Choose print size and material status.
5. Click **Print all labels**.

### Print settings

| Option | Paper | Margins | Scale |
|---|---|---|---|
| Standard label | 100 × 150 mm | None | 100% |
| A4 | A4 | Default / 10 mm | 100% |

---

## Privacy

All material data, settings and licence information stay on the device.
Nothing is uploaded to a server. The app works fully offline after the first
load.

---

## Tech

- Single-file HTML, CSS and vanilla JavaScript
- Web App Manifest + Service Worker (offline cache)
- No build step, no external dependencies

---

## Note

This tool helps produce labels but does not by itself certify GMP compliance.
The label content, approval workflow and records should be validated against
your company's SOPs and applicable regulatory requirements.

---

## Ownership

Proprietary software. All rights reserved.
