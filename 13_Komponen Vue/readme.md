(13) Komponen Vue

=== Module Export & Import ===
- Javascript Module
    Berisi kelas atau pustaka fungsi untuk tujuan tertentu. Modul hanya sebuah file. Satu kode skrip adalah satu modul.
- Export
    Digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import.
    2 Tipe Export
    1. Named Exports (Ekspor nol atau lebih per modul)
        Ex :
        const cobaFungsi = (nama) => {
            return "Halo " + nama + "!";
        };

        const objekCoba = {
            nama: "Vue",
            jenis: "Kerangka frontend"
        };

        export {cobaFungsi, objekCoba};
    2. Default Exports (Satu per modul)
         Ex :
         export default objekCoba;

- Import
    Digunakan untuk mengambil varibel, objek, atau fungsi yang disediakan oleh modul lain.
    4 Tipe Import
    1. Importing defaults
        Ex:
        import cobaFungsi from '@/utils/contoh-export-3';
        
        const hasil = cobaFungsi('Vue');
        console.log(hasil);

    2. Import multiple exports
        Ex:
        import { cobaFungsi, objekCoba} from '@/utils/contoh-export-4';

        console.log(objekUjiCoba)

    3. Rename multiple exports
        Ex:
        import {
            variabelCoba as variabelExport,
            objekCoba as objekExport,
        } from '@/utils/contoh-export-4';

        console.log(variabelExport, objekExport);

    4. Import defaults + multiple
        Ex:
        import cobaFungsi, {variabelCoba} from '@/utils/contoh-export-4';

        const hasil = cobaFungsi('Vue');
        console.log(hasil);

=== Komponen Dapat digunakan Kembali ===
    1. Reuseable Componen
        Sebuah Komponen File Tunggal Vue yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda.
    2. Cara Kerja Komponen Vue
        Ex:
        - Parent
        <template>
            <HelloWorld msg= "Welcome">
        </template>

        <script>
            import HelloWorld from '@/components/HellowWorld.vue';

            export default{
                name: "Home",
                components: {
                    HelloWorld,
                }
            };
        </script>

        - Child
        <template>
            <h1>{{ msg }}</h1>
        </template>

        <script>
            export default{
                name: "HelloWorld",
                props: {
                    msg: String
                }
            }
        </script>

    3. Direktori Komponen
        Pada umumnya komponen dijadikan satu dengan komponen lain dan dipisah dengan komponen yang bertugas sebagai halaman
        - Halaman dapat menggunakan komponen, namun komponen tidak dapat menggunakan halaman.
        - Komponen dapat menggunakan komponen lain.
    
    4. Komunikasi Anak Komponen dan Induk Komponen
        Untuk mengekspos data dari induk ke anak dapat dilakukan dengan:
        <HelloWordl msg="Welcome" @click="ShowAlert">

=== Paradigma Fungsi Pembantu ===
- Pengertian
    Sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda. Tujuannya agar lebih efektif dan efisien.

- Cara Kerja
    export const penambahan = (varA, varB) => {
        return varA + varB;
    }

    import { penambahan} from @/utils/operasi-matematika";

    export default{
        data(){
            var1: 0;
            var2: 0;
            hasil: 0
        },
        methods: {
            lakukanPenambahan (){
                this.hasil = penambahan(this.var1, this.var2);
            }
        }
    }

=== Instance Lifecycle Hooks ===
- Pengertian
    Setiap Vue Instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai Lifecycle atau siklus hidup.

- Cara Kerja
    Siklus hidup sebuah Vue Instance berawal ketika inisiasi dan berakhir ketika penghancuran. setiap siklus memiliki hooknya masing-masing yang membentuk fungsi.
    Ex:
    beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, activated, deactivated, beforeDestroy, destroyed, errorCaptured.

- 3 Lifecycle Utama
    1. Created
    Berlangsung setelah instance terbentuk dan sebelum DOM dirender
    Ex:
    - Menambahkan SEO Meta
    - Memasang event listener scroll
    2. Mounted
    Berlangsung setelah DOM dirender
    Ex:
    - Handling loader
    3. Destroyed
    Berlangsung sebelum instance dihancurkan
    Ex: 
    - Mencopot event listener scroll.