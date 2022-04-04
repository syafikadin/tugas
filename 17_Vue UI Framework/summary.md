=== Pengenalan Rangka Kerja UI ===
1. UI Framework
    Kumpulan elemen visual (tombol, ikon, dll) dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu kita untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional.
2. Cara Kerja Rangka UI
    Rangka kerja menyediakan komponen siap pakai kemudian kita impor komponen yang kita butuhkan ke dalam aplikasi.
3. Macam Rangka Kerja
    Rangka Kerja UI yang tersedia
    - Vuetify
    - BootstrapVue
    - Buefy
    - Ant-design Vue
    - Vuesax

=== Vuetify ===
1. Vuetify
    Library yang memungkinkan kita membuat aplikasi dengan tampilan yang indah walaupun kita bukanlah seorang desainer. Vuetify memiliki lebih dari 80 komponen berbasis Materian Design yang mana komponen tersebut dapat membantu kita lebih cepat dalam pengembangan aplikasi.
2. Cara Kerja Vuetivy
    Vuetivy telah menyiapkan komponen siap pakai yang bisa kita gunakan di aplikasi kita. Seperti contohnya komponen tombol.
3. Menerapkan Vuetivy
    - Memasang sebagai dependency
    - Daftarkan pada berkas entry main.js
    Ex:
    import Vuetify from "vuetify"
    import "vuetify/dust/vuetify.min.css"

    Vue.use(Vuetify)

    new Vue({
        vuetify
    })
    - Membungkus App.vue dengan v-app
    const vuetify = new Vuetify({})

=== Manajemen Warna Tema ===
1. Manajemen Tema Warna
    Pengaturan set warna yang dapat kita terapkan terhadap tampilan di aplikasi
2. Cara Kerja
    Vuetify menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan.
3. Menerapkan Manajemen Warna Tema
    Buat fungsi untuk mengganti tema warna Vuetify kemudian tambahkan menu pilihan warna.
    Ex: 
    changeTheme(color){
        this.$vuetify.theme.themes.light.primary = color
    }

    <v-layout>
        <v-flex>
            <v-btn color="#197602" outlined @click="changeTheme('#197602')">Biru</v-btn>
        </v-fles>
    </v-layout>

=== Gelap Terang ===
1. Tema Gelap Terang
    Fitur peralihan warna latar belakang aplikasi dari terang gelap atau sebaliknya.
2. Cara Kerja Gelap Terang
    Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap.
3. Menerapkan Tema Gelap Terang
    Buat fungsi untuk mengganti tema warna Vuetify
    changeTheme(color){
        if(this.$vuetify.theme.dark){
            this.$vuetify.theme.themes.dark.primary = color
        } else {
            this.$vuetify.theme.themes.light.primary = color
        }
    }

    switchTheme(){
        if(this.$vuetify.theme.dark){
            this.$vuetify.theme.themes.dark.primary = color
        } else {
            this.$vuetify.theme.themes.light.primary = color
        }
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }

=== Reaktivitas Dengan Kerangka Kerja UI ===
1. Reaktivitas Viewport
    Perubahan ukuran yang menyesuaikan dengan lebar layar tampilan.
2. Cara Kerja Reaktivitas pada Vuetify
    Lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut.
    
    Material Design Breakpoints
    - Extra small   xs      < 600px
    - Small         sm      600px > < 960px
    - Medium        md      960px > < 1264px
    - Large         lg      1264px > < 1904px
    - Extra large   xl      >1904px
3. Menerapkan Reaktivitas
    <v-flex
    class="pa-2"
    xs12
    sm6
    md4
    lg2
    >

=== Extra ===
1. Tabel
    Mempunyai fitur tambahan untuk pagination, filter, dan sort
    Ex:
    <v-data-table
        :headers="headers"
        :items="dsserts"
        item-key="name"
        class="elevation-1"
    ></v-data-table>

2. Validasi Input
    Komponen input memiliki props untuk validasi yang cukup canggih, menerima array of functions

3. Skeleton Loader
    Membuat loading seperti aplikasi bintang 5
    <v-skeleton-loader
        type="card-avatar, article, actions"
        class="elevation-1"
        
    ></v-skeleton-loader>
4. Dialog
    Membuat pop-up dialog jadi lebih mudah digunakan.