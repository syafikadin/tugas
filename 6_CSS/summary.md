(6) CSS

CSS (Cascading Style Sheet)
Digunakan untuk menghias halaman web meliputi warna, ukuran, font, background, lebar, tinggi, dan lain-lain.
CSS dapat juga digunakan untuk mengatur posisi pada halaman web.

Terdapat 3 cara dalam menambahkan CSS
1. External
    Yaitu dengan membuat file baru dengan format .css lalu menempatkan syntax <link rel="stylesheet" href="namaFile.css"> di dalam tag <head>
2. Internal
    Yaitu dengan menuliskan kode CSS di dalam satu file HTML. Kode diletakkan di dalam bagian <head> lalu mendefinisikannya dengan <style>. Di dalam tag style tersebut kita menuliskan kodenya.
    Contoh :
    <style>
        body{
            margin : 0;
        }
    </style>
3. Inline
    Yaitu dengan menuliskan langsung pada tag HTML. Penulisan ini diprioritaskan untuk menerapkan style yang unik.
    Contoh :
    <h1 style="color:#FFFF;">Haloo</h1>

CSS Selector
Dalam memilih element untuk kita lakukan styling, kita perlu mengetahui selector yang dipilih.
1. ID -> #
2. Class -> .

CSS Font
Untuk mengatur style pada font di CSS. Berikut property untuk mengatur font pada CSS
1. Font = Untuk menetapkan semua properti font dalam satu deklarasi
2. Font-family = Menentukan kelompok font teks
3. Font-size = Menentukan ukuran font teks
4. Font-weight = Menentukan ketebalan untuk font teks
5. Font-style = Menentukan font teks menjadi miring.

CSS Margin & Padding
Untuk mengatur ruang disekitar element.
Contoh :
.content{
    margin : 20px;
    padding : 10px;
}

CSS Background
Untuk mengatur background di CSS. Berikut properti untuk mengatur background.
1. Background-color = Menetapkan warna background
2. Background-image = Menentukan gambar background pada suatu elemen
3. Background-repeat = Menentukan gambar background di ulang.
4. Background-size = Menentkan ukuran gambar untuk beckground.
5. Background-posisition = Mengatur posisi awal gambar background.

CSS Link Event
Terdapat beberapa link event pada CSS
1. :hover = Kondisi style ketika mouse berada di atas elemen
2. :active = style ketika link "a" ditekan.
3. :visited = style dimana elemen link "a" telah dikunjungi / diklik.
CSS Transisi dapat digunakan untuk mengubah value properti menjadi lebih halus dalam durasi yang ditentukan
Contoh :
a{
    transisition : all 0.5s ease;
}

CSS Display
1. Block = elemen block selalu dimulai pada baris baru. (dimulai dari kiri ke kanan)
2. Inline-block = Elemen inline-block membutuhkan lebar yang sesuai yang diperlukan.
3. None = Menyembunyikan elemen untuk tidak ditampilkan.

CSS Table
Digunakan untuk membuat tabel. Berikut poperty dalam membuat table.
1. Border = Menambahkan border pada table, th, dan td
2. Border-collapse = Membuat border menjadi single border.
3. :nth-child(evel) = Membuat background strip.