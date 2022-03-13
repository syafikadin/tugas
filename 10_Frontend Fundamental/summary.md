(10) Frontend Fundamental

HTML (Hypertext Markup Language)
Bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web.
- Cara kerja HTML
    File HTML diakhiri dengan ekstensi .html. Ekstensi file ini bisa dirender dengan menggunakan web browser apapun.
- HTML Tag
    Sebuah file HTML terdiri atas serangkaian tag (bisa disebut juga elements).
- 2 tipe utama tag HTML
    - Block-level dan inline tags

CSS (Cascading Style Sheets)
CSS dipakai untuk mendesain halaman depan atau tampilan website. CSS menangani tampilan dan rasa dari halaman website.
- Cara kerja CSS
    CSS membuat style di dalam halaman web yang dapat berinteraksi dengan elemen HTML.
- Macam Penulisan CSS
    - Inline CSS
    - Internal CSS
    - Eksternal CSS
- Media Queries
    Media query merupakan modul CSS yang berguna membuat layout kita responsive dengan menyesuaikan tampilan berdasarkan ukuran layar perangkat.

Javascript
Script yang 'membuat halaman web menjadi hidup' yang memungkinkan adanya interaksi dengan pengguna. Javascript bisa ditulis langsung ke dalam kode HTML dari sebuah web dan berjalan otomatis saat halaman dimuat.
- Cara kerja Javascript
    Bisa langsung menambahkan Javascript di HTML dengan menggunakan tag <script></script>. Kode JS yang bisa ditambahkan di antara tag <head> atau di antara tag <body>

Node.js
Adalah runtime environment untuk Javascript. Dengan Node.js kita dapat menjalankan kode Javascript di mana pun, tidak hanya terbatas pada lingkungan browser.

NPM (Node Package Manager)
Tool ini merupakan command line yang dapat menginstal dan meng-uninstal package, mengelola versi dan depndensi yang diperlukan untuk menjalankan proyek.
- Cara kerja NPM
    Bekerja untuk mengatur package pada proyek yang berjalan dengan node.js. Pakage pada node.js memuat semua file yang dibutuhkan sebagai module. Module adalah library javascript yang dapat kita masukkan ke dalam proyek.
- Struktur Proyek NPM
    Untuk membuat proyek aplikasi, jalankan perintah berikut kemudian tekan entek untuk semua pertanyaan di bawahnya.

    $npm init

    package name : (initnpm)
    version : (1.0.0)
    git repository :
    keywords :
    author :
    license : (ISC)

    Sebuah file bernama package.json akan muncul pada direktori proyek.

    Key yang penting untuk diingat :
    - name adalah nama proyek
    - scripts adalah daftar perintah yang bisa kita jalankan di dalam proyek
    Ex :
    npm run test
    - dependencies adalah daftar library yang dipakai di proyek ketika production
    - devDependencies adalah daftar library yang dipakai di proyek ketika tahap pengembangan.

- Menambahkan Dependensi
    $ npm install <nama module>
    $ npm install <nama module> -D

    Pada direktori proyek akan ditambahkan file package-lock.json dan folder node_modules.
    node_modules menampung library yang telah didownload dan siap digunakan di aplikasi.
    package-lock.json menyimpan informasi isi dan versi node_module

- Memasang Dependensi
    node_modules memiliki ukuran yang relatif besar, jadi jika kita akan memberikan proyek ke penyimpanan atau rekan maka node_modules umumnya dihapus

    Untuk mendapatkan node_modules kembali berdasarkan informasi dari dependencies dan devDependencies di package.json hanya perlu menjalankan:
    $ npm install