(9) Clean Code

Clean code adalah istilah untuk kode yang mudah dibaca, difahami, dan diubah oleh programmer. Tujuan dari clean code yaitu agar kita mudah bekerja secara berkolaborasi, mengembangkan sebuah fitur sehingga lebih cepat dalam melakukan development.

Karakteristik clean code :
1. Penamaan mudah dipahami
    Kita perlu menamai variabel dengan jelas, jangan sampai disingkat-singkat sehingga memperlambat kinerja ketika lupa akan variabel yang dibuat.
    Ex:
    <!-- Kurang tepat -->
    Const l = ['Malang', 'Bandung']; 
    <!-- Lebih Baik -->
    Const location = ['Malang', 'Bandung'];

2. Mudah dieja dan dicari
    Kita perlu mendefinisikan suatu element terlebih dahulu, sebelum memprosesnya. Jangan langsung menginputkan suatu angka untuk langsung di proses.
    Ex :
    <!-- Kurang tepat -->
    setTimeout(blastoff, 86400000);
    <!-- Lebih Baik -->
    const MILLISECOND_IN_A_DAY = 86400000;
    setTimeout(blastoff, MILLISECOND_IN_A_DAY);

3. Singkat namun mendeskripsikan konteks
    Ex :
    <!-- Kurang tepat -->
    function inv(user){}
    <!-- Lebih Baik -->
    function inviteUser(emailAddress){}

4. Konsisten
    Selalu konsisten dalam menuliskan variabel.
5. Hindari penambahan konteks yang tidak perlu
6. Komentar
    Memberikan komentar pada blok code yang memang diperlukan penjelasan.
7. Good function
    - Tidak terlalu banyak memberikan argumen.
8. Gunakan Konvensi
    - Kita dapat mengikuti style guide dari airbnb ataupun google.
9. Formatting
    - Baris code yang berhubungan saling berdekatan
    - Perhatikan identasi
    - Deklarasi variabel berdekatan dengan penggunanya.

Clean Code Principle
1. KISS (Keep It So Simple)
    Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
    - Fungsi atau class harus kecil.
    - Fungsi dibuat untuk melakukan satu tugas saja.
    - Jangan gunakan terlalu banyak argumen pada fungsi.
    - Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil, dan jumlahnya minimal.
2. DRY (Don't Repeat Yourself)
    Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang.
3. Refactoring
    Adalah proses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal prinsip KISS dan DRY bisa dicapai dengan cara refactor.
    Teknik Refactoring :
    - Membuat sebuah abstraksi.
    - Memeca kode dengan fungsi/class.
    - Perbaiki penamaan dan lokasi kode.
    - Deteksi kode yang memiliki duplikasi.