import { penjumlahan, pengurangan, pembagian, perkalian, rataRata, sisaBagi, luasPersegi, luasLingkaran, luasKubus, volumeKubus } from "@/utils";

describe("Test Fungsi Penjumlahan", () =>{
    test("Penjumlahan dua bilangan positif", () => {
        expect(penjumlahan(2, 4)).toBe(6)
    }),
    test("Penjumlahan dua bilangan negatif", () => {
        expect(penjumlahan(-2, -4)).toBe(-6)
    }),
    test("Penjumlahan dua huruf", () => {
        expect(penjumlahan("aku", " makan")).toBe("aku makan")
    })
})

describe("Test Fungsi Pengurangan", () =>{
    test("Pengurangan dua bilangan positif", () => {
        expect(pengurangan(4, 2)).toBe(2)
    })
    test("Pengurangan dua bilangan negatif", () => {
        expect(pengurangan(-4, -2)).toBe(-2)
    })
    test("Pengurangan dua bilangan positif dan negatif", () => {
        expect(pengurangan(-3, 10)).toBe(-13)
    })
})

describe("Test Fungsi Pembagian", () =>{
    test("Pembagian dua bilangan positif", () => {
        expect(pembagian(10, 5)).toBe(2)
    })
    test("Pembagian dua bilangan negatif", () => {
        expect(pembagian(-20, -5)).toBe(4)
    })
    test("Pembagian dua bilangan negatif dan positif", () => {
        expect(pembagian(-5, 20)).toBe(-0.25)
    })
})

describe("Test Fungsi Perkalian", () =>{
    test("Perkalian dua bilangan positif", () => {
        expect(perkalian(8, 4)).toBe(32)
    })
    test("Perkalian dua bilangan negatif", () => {
        expect(perkalian(-6, -12)).toBe(72)
    })
    test("Perkalian dua bilangan desimal", () =>{
        expect(perkalian(2.5, 4)).toBe(10)
    })
})

describe("Test Fungsi Rata-Rata", () => {
    test("Rata rata lima bilangan positif", () =>{
        expect(rataRata(8, 12, 10, 6, 14)).toBe(10)
    })
    test("Rata rata lima bilangan negatif", () =>{
        expect(rataRata(-6, -14, -8, -12, -10)).toBe(-10)
    })
    test("Rata rata lima bilangan desimal", () =>{
        expect(rataRata(0.8, 2.4, 2.2, 1.6, 3.0)).toBe(2)
    })
})

describe("Test Fungsi Sisa Bagi", () => {
    test("Sisa bagi dua bilangan positif", () => {
        expect(sisaBagi(10, 4)).toBe(2)
    })
    test("Sisa bagi dua bilangan negatif", () => {
        expect(sisaBagi(-20, -8)).toBe(-4)
    })
    test("Sisa bagi dua bilangan desimal", () => {
        expect(sisaBagi(20.4, 8.2)).toBe(4)
    })
})

describe("Test Fungsi Luas Persegi", () => {
    test("Luas persegi dua bilangan positif", () => {
        expect(luasPersegi(20)).toBe(400)
    })
    test("Luas persegi dua bilangan desimal", () => {
        expect(luasPersegi(4.5)).toBe(20.25)
    })
    test("Luas persegi dengan sisi a-b", () => {
        expect(luasPersegi(8-3)).toBe(25)
    })
})

describe("Test Fungsi Luas Lingkaran", () => {
    test("Luas lingkaran dengan jari-jari kelipatan 10", () => {
        expect(luasLingkaran(3.14, 10)).toBe(314)
    })
    test("Luas lingkaran dengan jari-jari kelipatan 7", () => {
        expect(luasLingkaran(22/7, 14)).toBe(616)
    })
    test("Luas lingkaran dengan jari-jari bilangan desimal", () => {
        expect(luasLingkaran(3.14, 12.5)).toBe(490.625)
    })
})

describe("Test Fungsi Luas Permukaan Kubus", () => {
    test("Luas Permukaan Kubus dengan sisi bilangan positif", () => {
        expect(luasKubus(8)).toBe(384)
    })
    test("Luas Permukaan Kubus dengan sisi bilangan desimal", () => {
        expect(luasKubus(5.5)).toBe(181.5)
    })
    test("Luas Permukaan Kubus dengan sisi a-b", () => {
        expect(luasKubus(12-8)).toBe(96)
    })
})

describe("Test Fungsi Volume Kubus", () => {
    test("Volume Kubus dengan sisi bilangan positif", () => {
        expect(volumeKubus(9)).toBe(729)
    })
    test("Volume Kubus dengan sisi bilangan desimal", () => {
        expect(volumeKubus(6.5)).toBe(274.625)
    })
    test("Volume Kubus dengan sisi a-b", () => {
        expect(volumeKubus(12-8)).toBe(64)
    })
})