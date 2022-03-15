(11) Vue Fundamental

Pengertian dan Pentingnya Vue
Adalah framework dari Javascript untuk menghubungkan tampilan website yang lebih interaktif dan dinamis. Vue mudah dipelajari dan dengan menggunakan Vue kita dapat mudah membuat aplikasi frontend dan website. Dokumentasi yang lengkap dan rapi.

Cara Kerja Vue
- Vue CDN
Dapat digunakan langsung di file HTML dengan menambahkan <script src="https://unpkg.com/vue@3"></script>
- Vue CLI
Menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup / pembuatan aplikasi Vue

=== Dasar Dasar Vue ===
Vue Instance
Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue
Ex :
var vm = new Vue({
    //options
})

Vue Data Binding
Vue.js menggunakan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengikat DOM yang dirender ke data instance Vue yang mendasarinya
Ada 3 Jenis data binding
- Di dalam konten
    Untuk menambahkan text ke dalam konten element dapat menggunakan kurung kurawal
    Ex :
    <span>Message: {{ msg }}</span>
- Di atribut Elemen
    Untuk menambahkan variabel ke dalam atribut elemen dapat menggunakan v-bind
    Ex :
    <div v-bind:id="dynamicId"></div>
- Elemen HTML
    Untuk menambahkan HTML elemen ke dalam DOM dapat menggunakan atribut v-html
    Ex :
    <p>Menggunakan v-html directive: <span v-html="rawHtml"></span></p>

Vue Reactivity
Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang. 


=== Vue Directive ===
Directive adalah atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascipt di dalam atribut.

Macam Vue Directive
- v-bind
    Direktif untuk memberitahu Vue kalau kita ingin melakukan one way data binding.
    Ex :
    <div id="app">
       <input type="text" v-bind:value="nama" />
       <p>{{ nama }}</p>
    </div>

    data: {
        nama: 'vue'
    }
- v-model
    Direktif untuk memberitahu Vue kalau kita ingin melakukan two way data binding.
    Ex :
    <div id="app">
       <input type="text" v-model:value="nama" />
       <p>{{ nama }}</p>
    </div>

    data: {
        nama: 'vue'
    }
- v-if, v-else, dan else-if
    Direktif yang digunakan untuk melakukan rendering secara kondisional
    Ex :
    <div id="app">
       <input type="number" v-model:value="angka" />
       <p v-if="angka > 9">Sangat Bagus</p>
       <p v-else-if="angka > 7">Bagus</p>
       <p v-else>Tetap Semangat! Jangan Menyerah :)</p>
    </div>

    data: {
        angka: 0
    }
- v-on
    Direktif untuk memberitahu Vue kalau kita ingin memanggil fungsi
    Ex :
    <div id="app">
       <button v-on:click="lakukanSesuatu">Lakukan Sesuatu</button>
    </div>

    methods: {
        lakukanSesuatu(){
            alert('Halo Vue');
        }
    }
- v-for
    Direktif untuk memberitahu Vue kalau kita ingin melakukan pengulangan.
    Ex :
    <div id="app">
       <ul>
           <li v-for="buah in listBuah">
              {{ buah }}
           </li>
       </ul>
    </div>

    data: {
        listBuah: ['Apel', 'Jeruk', 'Melon']
    }

Shorthand Vue Directive
Kusus untuk v-bind dan v-on dapat disingkat dengan sintaks seperti berikut :
<!-- tanpa singkatan -->
<a v-blind:href="url">... </a>

<!-- disingkat -->
<a :href="url">... </a>

<!-- tanpa singkatan -->
<a v-on:click="doSomething">... </a>

<!-- disingkat -->
<a @click="doSomething">... </a>

=== Events dan Method ===
Memantau Events
Kita dapat menggunakan direktiv v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa JavaScript saat di picu.

Menggunakan Methods
Methods adalah fungsi, yang dapat diakses secara langsung pada instance VM, atau menggunakannya dalam ekspresi direktif.
Semua metode akan memiliki konteks "this" secara otomatis terikat ke instance Vue.
Ex :
methods: {
    tambahkan(){
        this.penghitung += 1;
    }
}

Watchers
Watcher di Vue.js adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah.
Ex :
data{
    bilanganDasar: 0,
    hasil: 0
},
watch: {
    bilanganDasar: function (val){
        this.hasil = val * 4;
    }
}

Component
Komponen adalah Vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root Vue yang dibuat dengan new Vue.