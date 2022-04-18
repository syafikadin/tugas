(22) Resume Materi Relational Database

Database : Schema & Data Definition Language

# Database
    Sekumpulan data yang terorganisir.

# Database Relationship
    Sebuah hubungan entity dalam database.
## 1. One to One
    contoh :
    1 user hanya memiliki 1 profil
## 2. One to Many
    contoh :
    1 user memiliki banyak tweet
## 3. Many to Many
    contoh :
    1 user bisa memiliki banyak follower user, 1 user bisa di follow banyak user

# Relational Database Management Systems (RDBMS)
    Software yang menggunakan Relational Database Model sebagai dasarannya.
    Contoh: MySQL

# Jenis - Jenis Perintah SQL
    1. DDL (Data Definition Language)
    2. DML (Data Manipulation Language)
    3. DCL (Data Control Language)


# 1. DDL (Data Definition Language)
## DDL Statement
CREATE DATABASE database_name;
USE database_name;
CREATE TABLE ...
DROP TABLE ...
RENAME TABLE ...

## Create Table With This Schema
CREATE TABLE table_name(
column1 data_type PRIMARY KEY,
column2 data_type FOREIGN KEY,
...
column data_type,
PRIMARY KEY(one more columns)
);

## Modify Tabel Schema
ALTER TABLE table_name
ADD COLUMN column_name
data_type;

## Tipe Data MySQL
1. Num
2. Huruf 
3. Date


# 2. DML (Data Manipulation Language)
Perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database

## Statement Operation
1. INSERT
    Menggunakan kata kunci **INSERT INTO** untuk menginput data ke tabel
    Ex :
    INSERT INTO USERS ()

2. SELECT 
    Menggunakan kata kunci **SELECT** untuk memilih/menyeleksi data yang akan ditampilkan dari tabel
    Ex :
    SELECT * FROM Users

3. UPDATE
    Menggunakan kata kunci **UPDATE** untuk mengubah data dalam tabel.
    Ex :
    UPDATE users SET fullname='Fulan' 
    WHERE id = 1

4. DELETE
    digunakan untuk menghapus data pada tabel dengan klausa "DELETE"
    Ex :
    DELETE FROM users

## DML Statement
1. LIKE/BETWEEN
    Menggunakan klausa **LIKE** untuk mengambil keyword tertentu.
    Menggunakan klausa **BETWEEN** untuk menampilkan nilai pada rentang yang ditentukan.

2. AND / OR 
    **AND** dan **OR** digunakan untuk membuat kondisi. AND ketika kedua query bernilai benar. OR ketika salah satu benar.

3. ORDER BY
    **ORDER BY** digunakan untuk mengurutkan tampilan data, menggunakan klausa **DESC** atau **ASC**

4. LIMIT
    **LIMIT** digunakan untuk membatasi jumlah baris yang dikembalikan oleh pernyataan SELECT.

## JOIN
Sebuah klausa untuk mengkombinasikan record dari dua atau lebih tabel

### Join Standar SQL ANSI
1. Inner Join
    Inner Join akan mengembalikan baris-baris dari dua tabel atau lebih yang memenuhi syarat.

2. Left Join
    Left join akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel di sebelah kanan yang memenuhi kondisi join.

3. Right Join
    Right Join akan mengembalikan semua baris dari tabel sebelah kanan yang akan dikenai kondisi ON dengan data dari tabel sebelah kiri memenuhi kondisi join. Teknik ini merupakan kebalikan dari left join.

## UNION
Ada hal yang perlu diperhatiikan dari union adalah jumlah field yang dikeluarkan/dipanggil haru sama.

## AGGREGATE
### Fungsi Agregasi
Fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal

### Fungsi Agregasi SQL 
1. MIN
    fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal.

2. MAX
    digunakan untuk mendapatkan nilai maximum atau nilai terbesar dari sebuah data record di tabel.

3. SUM 
    digunakan untuk mendapatkanjumlah total nilai dari sebuah data atau record di tabel.

4. AVG
    digunakan untuk mencari nilai rata-rata (average) dari sebuah data atau record di tabel

5. COUNT
    digunakan untuk mencari jumlah dari sebuah data atau record di tabel

6. HAVING
    digunakan untuk menyeleksi data berdasarkan kriteria tertentu, dimana kriteria berupa fungsi aggregat.


## SUBQUERY
Subquery atau Inner query atau Nested query adalah query di dalam query SQL lain

Digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk lebih membatasi data yang akan diambil

### SUBQUERY dapat digunakan :
dengan SELECT, INSERT, UPDATE, dan DELETE statements bersama dengan operator seperti =, >, <, >=, <=.

## PERATURAN
1. Harus tertutup dalam tanda kurung
2. Sebuah subquery hanya dapat memiliki satu kolom pada klausa SELECt, kecuali beberapa kolom yang di query utama untuk subquery yang membandingkan kolom yang dipilih
3. Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa value operator, seperti operator IN
4. Daftar SELECT tidak bisa menyertakan referensi ke nilai-nilai yang mengevaluasi ke BLOB, ARRAY, CLOB atau NCLOB
5. Sebuah subquery tidak dapat segera tertutup dalam fungsi set

## FUNCTION
sebuah kumpulan statement yang akan mengembalikan sebuah nilai balik pada pemanggilnya

### DELIMITER 
memberi tau kepada mysql soal delimiter yang akan digunakan, secara default menggunakan; jadi bila ada tanda ; mysql akan mengartikan akhir dari statement. 

### CREATE FUNCTION
adalah header untuk membuat function

### CREATE TRIGGER
adalah header untuk membuat trigger function

### DECLARE
adalah syntac untuk mendeclare suatu variabel

### OLD 
adalah variabel yang menyimpan nilai dari dalam data yang sedang berinteraksi/dipanggil

### NEW
adalah variabel yang menyimpan nilai dari data yang baru masuk/ sedang di input

### RETURN
adalah untuk menentukan tipe data yang direturnkan oleh function

### DETERMINISTIC / NOT DETERMINISTIC
adalah untuk menentukan yang bisa menggunakan function ini adalah user pembuatnya saja atau user siapa saja.

### BEGIN END
adalah body dari function, semua SQL ditulis disini