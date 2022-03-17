(12) Vue CLI

=== Vue CLI (Command Line Interface) ===
Vue CLI adalah perkakas standar untuk memudahkan penyetelan/pembuatan aplikasi Vue baru.

Webpack adalah sebuah module bundler, digunakan untuk menggabungkan seluruh modul project aplikasi berupa file javascript, HTML, CSS, gambar dan lain-lain menjadi satu file (tipe yang sama)

Cara Kerja Vue CLI
- Pasang Vue CLI
    Untuk memasang Vue CLI pada perangkat kita jalankan perintah:
    $ npm install g @vue/cli
- Inisiasi Aplikasi
    Untuk membuat sebuah aplikasi baru, jalankan:
    $ vue create <nama aplikasi>
    $ vue create .
- Jalankan Aplikasi
    Setelah selesai melakukan proses kompilasi dan tidak ada error, akan ada log informasi alamat aplikasi kita dapat diakses.

    Jika di dalam direktori aplikasi kita terdapat node_modules atau isinya tidak mutakhir, perlu melakukan perintah :
    $ npm install
    Baru bisa melakukan proses kompilasi tanpa error
    $ npm run serve

=== Vue Komponen File Tunggal ===
Komponen file tunggal memungkinkan kita membangun seluruh komponen (struktur, gaya, dan fungsi) dalam satu file. Dan, sebagian besar editor kode menyediakan penyorotan sintaks dan linting.

Cara Kerja Komponen File Tunggal
Terdapat 3 tag utama pada Komponen File Tunggal :
- <template>
    Memuat dan me-render HTML tag pada umumnya
    Ex :
    <template>
        <HelloWorld
            pesan= "Welcome to Your Vue.js App"
            maksimal-karakter=12
        />
    </template>

- <script>
    Memuat sintaks Javascript.
    Juga dapat menerima atribut lang yang biasanya untuk penggunaan typescript.
    Ex :
    <script>
        export default{
            name: 'HelloWorld',
            props: {
                pesan: String,
                maksimalKarakter: Number
            }
        }
    </script>

- <style>
    Memuat sintaks CSS.
    Juga dapat menerima atribut lang yang biasanya untuk penggunaan CSS preprosesor seperti Stylus, SCSS.
    Atribut tambahan lainnya adalah scoped, yang berarti CSS hanya akan diterapkan di komponen ini saja.
    Ex :
    <style scoped>
        h3{
            margin: 40px 0 0;
        }
    </style>

=== Vue Struktur Folder ===
- Assets
    Direktori untuk menyimpan semua aset seperti font, ikon, gambar, style, dll.
- Components
    Direktori untuk menyimpan semua file komponen file tunggal Vue
- Router
    Direktori untuk menyimpan semua file yang terkait dengan vue-router.
    Vue-router adalah library untuk mengatur routing alamat aplikasi Vue.
- Store
    Direktori penyimpanan vuex tempat kita dapat menyimpan semua file terkait vuex.
    Vuex adalah library untuk mengatur penyimpanan state berbasis global pada aplikasi Vue.
- View
    Isinya mirip seperti direktori components, yaitu komponen file tunggal namun yang membedakan adalah pada direktori ini digunakan sebagai halaman, di mana file di dalam direktori ini berhubungan langsung dengan router.
    Sedangkan file di direktori components berhubungan langsung dengan file di direktori views atau sesama file di folder components
- Test
    Berada di luar direktori src, karena tidak berhubungan langsung dengan file yang dibutuhkan untuk proses pengembangan.
    Berisi berkas untuk melakukan unit testing komponen atau fungsi yang ada di dalam direktori src.