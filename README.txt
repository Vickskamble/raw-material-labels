GITHUB PAGES PAR HOST KARNE KE STEPS
====================================================================

Is folder mein sirf wahi files hain jo customer ko deni/host karni hain.
license_key_generator.html yahan NAHI hai — use kabhi upload na karein.


STEP 1 - GitHub account
  https://github.com par account banayein (free).


STEP 2 - Naya repository
  1. GitHub par top-right "+" -> "New repository".
  2. Repository name: raw-material-labels
  3. Visibility: Public  (free account par Pages ke liye public chahiye)
  4. "Create repository" dabayein.


STEP 3 - Files upload karein
  1. Repository ke andar "Add file" -> "Upload files".
  2. Is folder ki ye cheezein drag-and-drop karein:
        raw_material_label_generator.html
        manifest.webmanifest
        sw.js
        icons  (poora folder)
  3. Neeche "Commit changes" dabayein.


STEP 4 - GitHub Pages on karein
  1. Repository -> Settings -> Pages.
  2. "Build and deployment" mein Source: "Deploy from a branch".
  3. Branch: main, folder: / (root) -> Save.
  4. 1-2 minute wait karein.


STEP 5 - Link kholein
  Aapka link hoga:
    https://<username>.github.io/raw-material-labels/raw_material_label_generator.html

  Example:
    https://rahul123.github.io/raw-material-labels/raw_material_label_generator.html

  Chrome / Edge mein kholein.
  Address bar ke install icon ya header ke "Install" button se install karein.


UPDATE KAISE KAREIN
  1. Naya HTML GitHub par upload karke commit karein.
  2. sw.js kholkar CACHE ka version badlein, jaise:
        rmls-v2.4.0-2  ->  rmls-v2.4.1
     (warna browser purani cached file dikhata rahega)
  3. Users app ko band karke dobara kholein.


DHYAN RAKHEIN
  - GitHub Pages HTTPS deta hai, isliye PWA install + offline support chalega.
  - Repo public hoga, to app ka code sab dekh sakte hain. Licence system
    client-side hi hai, isliye technical user bypass kar sakta hai.
    Zyada protection chahiye to server-side licence (Option B/C) lagega.
  - license_key_generator.html, backup files, HOW-TO-USE.txt — inhe upload
    karne ki zaroorat nahi. Sirf is folder ki files upload karein.
  - File names ka case GitHub par matter karta hai: icons/icon.svg,
    icon-192.png, icon-512.png exactly wahi naam rakhein.
