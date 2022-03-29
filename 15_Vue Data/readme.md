(15) Vue Data

=== Data Fetching ===
1. Data Fetching
    Pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.
2. Cara Kerja Fetch API
    API (Application Programming Interface) yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi
3. API Endpoint
    Saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai endpoint yang berbentuk link
4. Fetch Data dengan Axios
    Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint.
    Berikut modul store dengan nama pokemon
    import axios from "axios";
    const actions = {
        fetchList(store){
            axios.get('https://pokeapi.co/api/v2/pokemon').then((response) => {
                store.commit("setList", response.data.results);
            })
        }
    }

    components:
    methods: {
        fetchPokemon() {
            this.$store.dispatch("pokemon/fetchList");
        }
    },
    mounted() {
        this.fetchPokemon()
    }

    tampilan:
    <template>
        <li v-for="pokemon in listPokemon" :key="pokemon.name">
            {{ pokemon.name }}
        </li>
    </template>
5. Request Queries
    Syarat yang menyatakan data seperti apa yang ingin diambil.

    - Pagination dengan Queries
        Salah satu contoh penggunaan string query pada endpoint adalah untuk pembagian/manajemen halaman
        Ex:
        fetchMore(store){
            axios
                .get('https://pokeapi.co/api/v2/pokemon', {
                    params: {
                        limit: 5,
                        offset: store.state.list.length,
                    }
                })
                .then((response) =>{
                    store.commit("setList", [
                        ...store.state.list,
                        ...response.data.results
                    ])
                })
        }

=== Penanganan Data Error ===
1. Penanganan Data Error
    JavaScript adalah bahasa yang memiliki tipe data dinamis. Tidak memberikan kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined.
    Penanganan data error adalah konsep untuk mencegah runtime-error
2. Akibat Data Error yang Tidak Ditangani
    Ketika kita mengakses suatu variabel dengan nama yang salah atau kurang tepat, maka data yang akan kita tuju tidak akan keluar.
3. Cara Kerja Try Catch Finally
    Try Catch Finally adalah metode penanganan error bawaan dari javascript.
    - Implementasi Try Catch

    const state = () => ({
        list: [],
        info: "",
    })

    const mutations = {
        setList(state, param){
            state.list = param;
        },
        setInfo(state, param){
            state.info = param;
        }
    }

    const actions = {
        fetchList(store){
            axios
            .get('https://pokeapi.co/api/v2/pokemon').then((response) => {
                try{
                    store.commit("setList", response.datA.results);
                    store.commit("setInfo", "");
                } catch(error) {
                    store.commit("setInfo", error);
                }
            })
        },
        fetchMore(store){
            axios
            .get('https://pokeapi.co/api/v2/pokemon', {
                params: {
                    limit: 5,
                    offset: store.state.list.length
                }
            }
        })
        .then((response) => {
            try {
                store.commit("setList", [
                    ...store.state.list,
                    ...response.data.results
                ]);
                store.commit("setInfo", "")
            } catch (error) {
                store.commit("setInfo", error)
            }
        });
    }


4. Cara Kerja Promise
    Objek Promise mewakili penyelesaian (atau kegagalan) akhirnya dari operasi asinkrondan nilai yang dihasilkannya.
    Aktivitas berkomunikasi dengan API pada umumnya berbentuk promise.

    - Implementasi Promise
    fetchList(store){
        axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then((response) => {
            store.commit("setList", response.datA.results);
            store.commit("setInfo", "");
        })
        .catch(error) {
            store.commit("setInfo", error);
        })
    }
=== Validasi Data ===
1. Validasi Data
    Adalah konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum terutapa pada input pengguna.
2. Cara Kerja Validasi Data
    Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false)
3. Validasi pada Form
    Tag form pada HTML 5 memiliki fungsi bawaan untuk validasi input pengguna
    Ex:
    required, required minLength
    Dengan menambahkan required pada tag input maka ketika pengguna menekan button submit tanpa mengisi kolom input, akan terdapat notifikasi bahwa harus diisi
4. Validasi dengan Regex
    Regex atau Regular Expression merupakan sbuah teks (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian)
    - Cara Kerja Regex
    const regularExpression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g;
    console.log(regularExpression.test(Pass1234));
    
=== Autentikasi ===
1. Autentikasi
    Suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu
2. Cara Kerja Autentikasi
    Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token di mana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A, bukan B, C atau yang lain
3. Otorisasi
    Mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna
4. Cara Kerja Otorisasi
    Seperti contoh ketika login sebagai user biasa, maka hanya dapat mengakses home. Namun apabila login sebagai admin, maka dapat mengakses dashboard.