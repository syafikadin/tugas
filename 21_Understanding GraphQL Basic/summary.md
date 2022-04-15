(21) Understanding GraphQL Basic

=== GraphQL ===
Adalah suatu query languange untuk API kita dimana kita bisa mendefine skema dari data yang ingin kita kirim ke client. dan bisa meminimize jumlah data yang kita inginkan. Dengan menggunakan GraphQL kita hanya membutuhkan 1 endpoint saja untuk menggunakan semua request yang dibutuhkan meliputi get, edit, dan insert data.

Dalam GraphQL terdapat 3 fitur
1. Query
    Mendapatkan data berdasarkan query tertentu yang telah didefinisikan
2. Mutation
    Insert, update, delete data
3. Subscription
    Mendapatkan data paling update / realtime.

Dengan menggunakan graphQL kita bisa mendapatkan data yang kita butuhkan berdasarkan apa yang telah didefinisikan.

Fragments
Bagian dari logika yang dapat dikirimkan ke beberapa query dan mutasi.
Ex:
fragment FR_Movie on movie {
    title
    year
}

{
    query{
        movies {
            ...FR_Movie
        }
        director {
            name
            age
        }
    }
}
