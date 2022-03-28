(14) Vue Helper

=== Navigasi Pada Vue ===
1. Pengertian
    Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain

2. Cara Vue Melakukan Navigasi
    Memastikan halaman tersebut ada, lalu membuka halaman tersebut dengan mengetik manual di address bar: /about.

    - Macam Jenis Redireksi
        this.$router.push('/user');
        this.$router.replace('/user');

        this.$router.go(-1); //back
        this.$router.go(1); //forward

    - Params dan Query
        const userId = 123;
        this.$router.push({ name: 'user', params: {userId: userId}});
        this.$router.push({ path: '/user/${userId}' })
        // /user/123

        this.$router.push({ path: 'register', query: { plan: 'private' } })
        //register?plan=private
    
    - Navigasi Beranak
        Adalah sub-path dari path yang ada
        /user/setting/privacy
        Ex :
        const routes = [
            {
                path: "/setting"
                component: Default,
                children: [
                    {
                        path: "",
                        name: "Setting",
                        component: Setting
                    },
                    {
                        path: "privacy",
                        name: "Privacy",
                        component: Privacy
                    }
                ]
            }
        ];

        <template>
            <router-view>
        </template>
    
    - Navigasi Dinamis
        Navigasi dinamis adalah dimana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu-persatu.
        Ex:
        computed: {
            id(){
                return this.$route.params.id;
            }
        }

=== Layout Template Vue ===
1. Pengertian
    Layout adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.
    - Layout: Memuat susunan tata letak yang sama untuk setiap halaman, seperti halnya navbar atau footer.
    - Halaman: Memuat komponen yang berubah ubah sesuai konten halaman namun sudah tidak perlu lagi mentertakan navbar di setiap komponen view halaman.
    
    Layout diterapkan supayakode di setiap halaman tetap bersih dan efisien.

2. Cara Kerja Layout Template
    Pada dasarnya layout hanyalah kopmponen biasa, yang membedakan adalah layout dapat meneruskan konten dari anak komponennya.
    
    Ex:
    const routes = [
        {
            path: "/"
            component: DefaultLayout,
            children: [
                {
                    path: "",
                    name: "Home",
                    component: Home
                },
                {
                    path: "/about",
                    name: "About",
                    component: About
                },
                {
                    path: "/contact",
                    name: "Contact",
                    component: Contact
                }
            ]
        }
    ];

=== Penyimpanan Global ===
1. Pengertian
    Sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.
    - State Komponen
        Hanya tersimpan dan valid pada satu komponen saja
    - Props
        Hanya tersimpan dan valid di induk atau anak komponen saja.
    - Store
        Tersimpan dan valid di bagian manapun dari aplikasi

2. Penyimpanan Global dengan Vuex
    Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js. Penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.

3. Membuat dan Menggunakan Vuex
    Untuk membuat store dengan Vuex dapat menggunakan sintaks sebagai berikut, kemudian disisipkan store ke dalam inisiasi Vue yang ada di main.js

    import Vue from "vue";
    import Vuex from "vuex";

    Vue.use(Vuex);

    export default new Vuex.Store({
        state: {
            angka: 14,
        }
    });

    -- main js. --
    import Vue from "vue";
    import App from "./App.vue";
    import router from "./router";
    import store from "./store";

    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app");

    -- Cara menggunakan State Variabel --
    <template>
        <p>Angka dari store: {{ angkaDariStore }}
    </template>
    <script>
        export default{
            name: "Home",
            computed: {
                angkaDariStore(){
                    return this.$store.state.angka;
                }
            }
        }
    </script>

    - Direktori Vuex Store
        Vuex store umumnya memiliki direktori sendiri bernama store yang sejajar dengan direktori main.js

4. Vuex Mutation & Actions
    Untuk memodifikasi nilai dari state yang tersimpan di dalam store menggunakan sintaks mutation
    Ex:
    export default ne Vuex.store({
        state: {
            angka: 14,
        },
        mutation: {
            setAngka(state, param){
                state.angka = param;
            }
        }
    })

    Kemudian dari komponen dapat memanggil fungsi mutation yang telah dibuat
    Ex:
    <template>
        <p>Angka dari store: {{ angkaDariStore }}</p>
        <input type="number" v-model.number="newInputValue" />
        <button @click="changeAngka">Ganti Angka</button>
    </template>
    <script>
        export default{
            name: "Home",
            computed: {
                angkaDariStore(){
                    return this.$store.state.angka;
                }
            },
            data(){
                return{
                    newInputValue: 0
                }
            },
            methods: {
                changeAngka(){
                    this.$store.commit("setAngka", this.newInputValue)
                }
            }
        }
    </script>

    *Berdasarkan praktek terbaik penggunaan mutations hanya bertujuan untuk mengubah nilai variabel yang ada di dalam store tanpa ada logika pengolahan muatan di dalam fungsi mutation tersebut.

    - Vuex Actions
        Bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store, Actions perlu memanggil fungsi di mutations untuk memodifikasi nilai store yang ada di store. Selain itu action juga tempat untuk melakukan komunikasi dengan API

        Untuk memodifikasi nilai dari state yang tersimpan di dalam store menggunakan sintaks action sebagai berikut:

        export default new Vuex.Store({
            state: {
                angka: 14,
                infoText: "Angka lebih besar dari sepuluh"
            },
            mutation: {
                setAngka(state, param){
                    state.angka = param;
                },
                setInfo(state, param){
                    state.infoText = param;
                }
            },
            actions: {
                changeAngkaValue(store, param){
                    store.commit("setAngka", param);
                    if(param > 18){
                        store.commit("setInfo", "Angka lebih besar dari sepuluh")
                    }
                    else{
                        store.commit("setInfo", "Angka lebih kecil dari sepuluh")
                    }
                }
            }
        })

        Kemudian dari komponen dapat memanggil fungsi action yang telah dibuat
        computed:{
            angkaDariStore(){
                return this.$store.state.angka
            },
            infoDariStore(){
                return this.$store.state.infoText;
            }
        },
        data(){
            return {
                newInputValue: 0
            }
        },
        methods: {
            changeAngka(){
                this.$store.dispatch("changeAngkaValue", this.newInputValue)
            }
        }

=== Penyimpanan Global Permanen ===
    Pada kasus tertentu kita perlu mempermanenkan state yang ada di store supaya tidak hilang jika halaman dimuat ulang.

    Menggunakan Penyimpanan Permanen
    Ex:
    import createPersistedState from "vuex-persistedstate";

    const persistedDataState = createPersistedState({
        paths: ["demo"]
    });

    export default new Vuex.Store({
        plugins: [persistedDataState]
    })