(16) Vue Quality Control

=== Debugging ===
1. Pengertian Debugging
    Proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak komputer
2. Cara Kerja Debugging
    - Identifikasi kesalahan
    - Identifikasi solusi
3. Perkakas Debugging
    - Devtools
    - Consoles
    - Logs
4. Tips Debugging
    - Tenang dan fokus
    - Rasional dan kontekstual
    - Perhatian yang detail untuk petunjuk sekecil apapun
    - Tidak tergesa-gesa untuk bertanya
5. Sumber Identifikasi Solusi
    - Diri Sendiri
        Pengetahuan dan pengalaman
    - Rekan Kerja
        Peer, senior atau leader
    - Google
        Dokumentasi, Stackoverflow, Isu Repository, Blog/vlog tutorial, dll.
    - Komunitas
        Forum Telegram, Discord, Media Sosial, dll

=== Unit Testing ===
1. Pengertian Unit Testing
    Proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi.
2. Cara Kerja Unit Testing
    Unit Testing memberikan kita kesempatan untuk menguji potongan kode secara individual dan terisolasi dalam bentuk Test Assertion
3. Perkakas Unit Testing
    Unit Testing pada aplikasi Vue umumnya dilakukan oleh pustaka rangka kerja pendukung. Tersedia 2 pilihan library, Jest dan Mocha
4. Kenapa Harus Unit Testing
    - Meningkatkan rasa percaya diri
    - Meningkatkan standar kode
    - Mencegah kesalahan sebelum benar-benar terjadi
    - Memberikan batasan dan kriteria yang jelas jika melakukan refactor

=== Jest ===
1. Apa itu Jest
    Jest adalah salah satu kerangka kerja untuk melakukan Unit Testing pada aplikasi yang berbasis javascript
2. Implementasi Jest
    Ex:
    export const penjumlahan = (bilanganSatu, bilanganDua) => {
        return bilanganSatu + bilanganDua;
    }

    import {penjumlahan} from '@/utils/operation.js';

    describe("Melakukan Penjumlahan", () => {
        test("Penjumlahan dua bilangan positif, () => {
            expect(penjumlahan(2,4)).toBe(6);
        }
    })
3. Implementasi Jest dengan Coverage
    "jest": {
        "preset": "@vue/cli-plugin-unit-jest",
        "collectionCoverage" : true
    }

=== Matriks Ukur Kinerja ===
1. Apa itu Matriks Ukur Kinerja
    Tolak ukur penting yang menunjukkan informasi seberapa baik kinerja aplikasi kita
2. Cara Kerja Matriks Ukur Kinerja
    Dengan bantuan sebuah perkakas yang menjalankan serangkaian pemeriksaan sebelum menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja halaman
3. Lighthouse Audit
    Adalah perkakas yang membantu menentukan skor pada matriks ukur kinerja aplikasi web
4. Mengukur Matriks dengan Lighthouse Audit
    Jalankan aplikasi pada Google Chrome, buka Devtools pada tab Lighthouse kemudian "Generate Report"

=== Mengoptimalkan Kinerja ===
1. Apa itu Mengoptimalkan Kinerja
    Proses untuk meningkatkan kinerja aplikasi web berdasarkan informasi skor matriks ukur
2. Core Web Vitals
    Kumpulan metrik website yang ditentukan oleh Google. Kumpulan metrik ini ditetapkan sebagai bagian dari indikator ranking pencarian terbaru Google, yaitu page experience

    3 Indikator Core Web Vitals
    - LCP (Largest Contentful Paint)
        Berkaitan dengan kecepatan website
    - FID (First Input Delay)
        Berkaitan dengan baik atau tidaknya respons elemen halaman website
    - CLS (Cumulative Layout Shift)
        Berkaitan dengan stabilitas layout halaman website