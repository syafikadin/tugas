const penjumlahan = (var1, var2) => {
    return var1 + var2
}

const pengurangan = (var1, var2) => {
    return var1 - var2
}

const pembagian = (var1, var2) => {
    return var1 / var2
}

const perkalian = (var1, var2) => {
    return var1 * var2
}

const rataRata = (var1, var2, var3, var4, var5) => {
    return (var1 + var2 + var3 + var4 + var5) / 5
}

const sisaBagi = (var1, var2) => {
    return var1 % var2
}

const luasPersegi = (sisi) => {
    return sisi * sisi
}

const luasLingkaran = (phi, jariJari) => {
    if(phi == 3.14){
        return 3.14 * jariJari * jariJari
    }
    else{
        return 22/7 * jariJari * jariJari
    }
}

const luasKubus = (sisi) => {
    return 6 * sisi * sisi
}

const volumeKubus = (sisi) => {
    return sisi * sisi * sisi
}

export {penjumlahan, 
    pengurangan, 
    pembagian, 
    perkalian, 
    rataRata, 
    sisaBagi, 
    luasPersegi, 
    luasLingkaran,
    luasKubus,
    volumeKubus
}