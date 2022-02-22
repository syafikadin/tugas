(2) Version Control and Branch Management (GIT)

3 Poin yang dipelajari
1. Setting Up and Saving Changes
   Untuk melakukan pengaturan meliputi email, username dan sebagainya. Setelah itu melakukan clone ke folder manager yang kita miliki untuk ditambahkan file.
   Setelah file file ditambahkan, lakukan add file dengan perintah "$ git add" untuk memasukkan file ke stage area. Setelah masuk ke stage area, lakukan commit dengan perintah "$git commit -m "pesan file""
   Jika sudah, upload ke repository yang kita miliki dengan perintah "$git pull".
   Untuk melakukan cek perubahan pada file dapat menggunakan perintah "$git diff". Lalu untuk melihat log commit yang sudah dilakukan dengan menggunakan perintah "$git log --oneline"
2. Branch and Conflict
   Ketika kita akan menambahkan fitur baru, kita tidak disarankan untuk mengganti pada file main/master kita, sebaiknya untuk menambahkan branch baru dengan nama developer, lalu membuat branch baru lagi untuk setiap fiturnya. setelah fitur sudah dibuat pada branch fitur, bisa dilanjutkan untuk push ke branch developer. begitu dan seterusnya. apabila fitur tersebut sudah dipastikan benar benar tidak ada bug, maka bisa dilanjutkan untuk merge ke branch main kita.
   Tujuan dilakukannya penambahan branch ini adalah untuk melindungi main project kita.
   Namun apabila dalam kedua branch pada suatu fitur yang sama terdapat code yang berbeda. Maka ketika merge, akan terjadi conflict dan hendaknya untuk diperbaiki terlebih dahulu sebelum dilakukan merge pada kedua branch tersebut.
3. Pull Request
   Suatu repository seseorang, memungkinkan untuk diperbaiki oleh orang lain. Sehingga apabila dalam suatu kode kita terdapat suatu kesalahan, maka orang lain dapat memperbaiki kode kita.
   File yang sudah diperbaiki oleh seseorang, dapat dilakukan pull request. Dengan demikian, pemilik file tersebut akan mengetahui bagian mana yang salah. File yang sudah di upload oleh sesorang tadi, dapat kita merge pada branch kita.
