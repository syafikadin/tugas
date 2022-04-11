(19) Vue With Nuxt

=== Nuxt ===
1. Nuxt
    Kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjjadi sederhana dan ampuh
2. Pemasangan Nuxt
    Untuk membuat sebuah aplikasi baru
    npx create-nuxt-app <nama-proyek>
    npm create-nuxt-app
3. Penggunaan Nuxt
    Untuk menjalankan aplikasi, terdapat beberapa perintah yang tertulis di script di dalam package.json.
    npm run dev
=== Struktur Direktori Nuxt ===
1. Perbedaan Struktur Direktori dengan Vue
    - Tidak terdapat Src, Public, Views, dan Router
    - Terdapat Pages, Static, dan Layouts
2. Pages
    Router di Nuxt secara otomatis membaca direktori ini sehingga file yang ada di direktori /pages langsung terhubung menjadi path halaman
3. Layouts
    Setiap file di direktori /layouts akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman
4. Static
    Semua file yang disertakan akan secara otomatis diekspose oleh Nuxt dan dapat diakses melalui URL root proyek.

=== Nuxt SSG dan SSR ===
1. Nuxt SSG dan Cara Kerja
    SSG (Static Site Generation), metode pengembangan ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis

    Cara Kerja:
    Ketika sebuah proyek dibangun untuk produksi, file HTML siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses per masing-masing file HTML
2. Nuxt SSR dan Cara Kerja
    SSR (Server Side Rendering), metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog, dan e-commerce.

    Cara Kerja:
    Server yang dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file HTML baru dihasilkan secara real time ketika data baru diterima, misalkan melalui API.
3. Implementasi SSG
    nuxt.config.js
    export default {
        target: 'static'
    }

    npm run generate

    Hasil berupa direktori /dist yang kemudian dapat dideploy ke Static Hosting
4. Implementasi SSR
    nuxt.config.js
    export default {
        target: 'server'
    }

    npm run build

    Hasil berupa direktori /.nuxt yang kemudian dapat dideploy ke NodeJS server

=== SEO Meta ===
1. SEO & SEO Meta
    SEO (Search Engine Optimization), yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin pencari

    SEO Meta tag adalah tag tak terlihat di dalam <head> yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web
2. Cara Kerja SEO Meta
    SEO Meta Tag dapat diterapkan dari Nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi
    Ex:
    nuxt.config.js
    export default {
        head: {
            title: 'websiteku',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        }
    }

    Sedangkan untuk mengubah data head dari komponen individu : 
    <script>
        export default {
            head: {
                title 'Home Page',
                meta: [
                    hid: 'description',
                    name: 'description',
                    content: 'Home page description'
                ]
            }
        }
    </script>

    atau

    <script>
        export default {
            data(){
                return {
                    title: 'Home page'
                }
            },
            head(){
                title: this.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Home page description'
                    }
                ]
            }
        }
    </script>

3. SEO Tag Penting
    SEO Meta Tag Penting
    - Informasi dasar: title dan description
    - Identitas unik dengan link canonical
    - Informasi untuk media sosial, open graph:
        og:title, og:description, og:image,
    SEO di dalam Body Tag
    - Judul: h1
    - Text alternatif untuk gambar: alt
    SEO Lainnya
    - Peta indexing: sitemap
    - Pengarah crawler: robots.txt

=== PWA ===
1. PWA
    PWA (Progressive Web Apps) dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apa pun dengan basis kode tunggal
2. Cara Kerja PWA
    - Web App Manifest
    - Service Workers
    - Icon
    - Disajikan melalui protokol HTTPS
3. Implementasi PWA
    export default {
        pwa: {
            manufest: {
                name: 'Frontend Vue',
                short_name: 'FE Vue;,
                lang: 'id',
                useWebmanifestExtension: false,
                start_url: '/',
                theme_color: '#ff6666'
            }
        }
    }