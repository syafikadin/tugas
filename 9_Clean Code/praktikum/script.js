// Problem 1 - Analysis
// Berapa banyak kekurangan dalam penulisan kode tersebut?
// 2

// Bagian mana saja terjadi kekurangan tersebut?
// Terjadi pada pendeklarasian kelas.
// Terjadi pada nama deklarasi di dalam kelas

// Tuliskan alasan dari tiap kekurangan tersebut!
// Setiap nama deklarasi kurang mudah untuk dibaca dikarenakan tidak menggunakan cara penulisan yang baik. Seharusnya dapat menggunakan camal case, snake case, ataupun pascal case sehingga dapat mempermudah untuk membacanya.

class user{
    var id;
    var username;
    var password;
}

class userservice{
    user[] users = [];

    user[] getallusers(){
        return this.users;
    }

    user getuserbyid(userid){
        return this.users.filter(userid);
    }
}

// Problem 2 - Rewrite
// Kode berikut ini dituliskan tanpa mengikuti kebiasaan-kebiasaan penulisan yang disarankan.
// Ubahlah penulisan kode berikut menjadi lebih terbaca dan rapi!

class kendaraan{
    var totalRoda = 0;
    var kecepatanPerJam = 0;
}

class mobil extends kendaraan{
    void berjalan(){
        tambahKecepatan(10);
    }

    tambahKecepatan(var kecepatanBaru){
        kecepatanPerJam += kecepatanBaru;
    }
}

void main(){
    mobilCepat = new mobil();
    mobilCepat.berjalan();

    mobilLamban = new mobil();
    mobilLamban.berjalan();

}