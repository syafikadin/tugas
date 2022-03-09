(8) Javascript Refreshment

JavaScript adalah bahasa pemrograman high-level, scripting, untyped, dan interpreted.

1. Declaration
    Proses pembuatan variabel untuk menyimpan data. Terdapat 3 cara untuk mendeklarasikan variabel :
    - Var
    Nilai yang dideklarasikan dapat diubah
    Dapat dideklarasikan ulang
    - Let
    Nilai yang dideklarasikan dapat diubah
    Tidak dapat dideklarasikan ulang
    - Const
    Nilai yang dideklarasikan tidak dapat diubah
    Tidak dapat dideklarasikan ulang
2. Scoping
    Menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel.
    Global
    Variabel yang ada dapat diakses di seluruh tempat.
    Function
    Variabel yang ada hanya dapat diakses didalam function tersebut.
    Block
    Variabel yang ada hanya dapat diakses didalam function tersebut keculai dideklarasikan dengan type "var".
3. Hoisting
    Membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan
    - Var & Function (Hoisted)
    Dapat digunakan sebelum deklarasi terjadi.
    - Let & Const (Tidak Hoisted)
    Tidak dapat digunakan sebelum deklarasi terjadi.

1. Primitive adalah unit pemmrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
Ex : String, Boolean, Number, BigInt,  Undefined, Null, Symbol.

2. Objects adalah unit yang menyimpan properti dan fungsi (method)
Ex : Object, Array, Function, Date, Set, Map, Weak Set, Weak Map.
Untuk meneruskan nilai, semua nilai primitf dalam JS diteruskan oleh nilai.

1. Destructuring adalah ekspresi dari JS yang memungkinkan untuk menyalin nilai dari array, atau property dari objek ke dalam variabel yang berbeda.
Ex : 
- Array
    const a = {1,2,3};
    const b = {1,2,3};
    const c = {...a, ...b};
    console.log(c);  //[1,2,3,1,2,3]
- Object
    const a = {a:1, b:2};
    const b = {a:1, b:2};
    const c = {...a, ...b};
    console.log(c); //{a:1, b:2}

Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing.
    - Concat
    Menggabungkan dua atau lebih array dan mengembalikan salinan array yang digabungkan.
    - Map
    Membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array
    Ex :
    const array1 = [1, 4, 9, 16];
    const map1 = array.map(x => x *2);
    console.log(map1); //[2, 8, 18, 32]
    - Foreach
    Memanggil fungsi untuk setiap elemen array.
    Ex :
    const array1 = {'a', 'b'};
    array1.forEach(element => console.log(element));
    //"a"
    //"b"
    - Slice
    Memilih bagian dari array dan mengembalikan array baru.
    - Filter
    Membuat array baru dengan setiap elemen dalam array yang lulus seleksi.
    Ex :
    const angka = [1, 2, 3, 4];
    const result = angka.filter(nomor => nomor>2);
    console.log(result); //[3, 4]
    - Reduce
    Melakukan operasi pada setiap elemen array menjadi nilai tunggal (dari kiri ke kanan)

1. Normal Flow
Pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
2. Control Flow
Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.

1. Function
Function di dalam JS adalah sebuah objek. Karena memiliki properti dan juga method. Function digunakan untuk melakukan serangkaian komputasi / prosedur yang dapat digunakan berulang kali.
Ex :
let hewan = ["kucing", "kelinci"];
let jumlahHuruf = hewan.map(function(nama){
    return nama.length;
})
console.log(jumlahHuruf); //[6, 7]

Ex Arrow Function :
let hewan = ["kucing", "kelinci"];
let jumlahHuruf = hewan.map(nama => nama.length)
console.log(jumlahHuruf); //[6, 7]

Class
Adalah prototype dari suatu object yang akan kita buat.

Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object.

Method adalah sebuah fungsi yang berada di dalam class.

Attributes adalah sekumpulan variabel yang membentuk objct yang dimiliki oleh suatu class.

Extends digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan metode dari kelas induk.

Document Object Model (DOM) adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.

DOM Selection Method
- getElementById() -> Element
- getElementsByTagName() -> HTMLCollection
- getElementsByClassName() -> HTMLCollection
- querySelectior() -> Element
- querySelctorAll() -> nodeList

DOM Manipulation
- element.innerHTML -> Digunakan merubah isi dari tag yang sudah kita seleksi.
- element.style.<propertyCSS> -> Digunakan merubah style dari tag yang sudah kita seleksi.
- element.setAttribute() -> Digunakan mengelola / memanipulasi attribute yang sudah kita seleksi.
- element.classList.add() -> Digunakan mengelola / memanipulasi class yang sudah kita seleksi.

DOM Event
- onclick -> Digunakan ketika pengguna mengklik mouse.
- onchange -> Digunakan dalam kombinasi dengan validasi bidang input.
- onblur -> Digunakan ketika anda meninggalkan kolom input.
- onmouseover - > Digunakan ketika pengguna mengarahkan mouse ke atas pada suatu object.
- onmouseout -> Digunakan ketika pengguna mengarahkan mouse ke luar pada suatu object.
- oncopy -> Digunakan ketika pengguna mengcopy suatu object.

Event Handler
- Inline HTML Attribute
    Ex :
    <h1 id="topik" onclick="ubahWarna()">Hello World</h1>

- Element Method
    Ex :
    const p1 = document.querySelector('#b, p1');
    let ubahText = () =>{
        p1.innterHTML = 'paragraf 100'
    }
    p1.onclick = ubahText();

addEventListener
- alert('text');