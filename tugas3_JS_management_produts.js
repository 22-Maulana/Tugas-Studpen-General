let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tampilkanProduk() {
    console.log("--- Daftar Produk Toko Saat Ini ---");
    if (produkToko.length === 0) {
        console.log("Stok produk kosong.");
    } else {
        produkToko.forEach(produk => {
            console.log(`ID: ${produk.id} | Nama: ${produk.nama} | Harga: Rp${produk.harga.toLocaleString('id-ID')} | Stok: ${produk.stok}`);
        });
    }
    console.log("------------------------------------\n");
}

/**
 * @param {string} nama 
 * @param {number} harga 
 * @param {number} stok 
 */
function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;

    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };

    produkToko.push(produkBaru);
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

/**
 * @param {number} id
 */
function hapusProduk(id) {
    const indexProduk = produkToko.findIndex(p => p.id === id);

    if (indexProduk !== -1) {
        const namaProduk = produkToko[indexProduk].nama;
        produkToko = produkToko.filter(p => p.id !== id);
        console.log(`Produk "${namaProduk}" (ID: ${id}) berhasil dihapus.`);
    } else {
        console.log(`Error: Produk dengan ID ${id} tidak ditemukan.`);
    }
}


console.log(">>> Menampilkan kondisi awal toko:");
tampilkanProduk();

console.log(">>> Menambahkan produk baru...");
tambahProduk("Monitor", 1500000, 8);
tampilkanProduk();

console.log(">>> Menghapus produk 'Mouse' (ID: 2)...");
hapusProduk(2);
tampilkanProduk();

console.log(">>> Mencoba menghapus produk yang tidak ada (ID: 99)...");
hapusProduk(99);
tampilkanProduk();
