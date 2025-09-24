let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 4, nama: "Keyboard Gaming", harga: 850000 },
    { id: 5, nama: "Mouse Wireless", harga: 450000 },
    { id: 6, nama: "Monitor 24 inch", harga: 2500000 },
];

// Menambahkan Produk dengan Spread Operator 
function tambahProduk(id, nama, harga) {
    const produkBaru = { id, nama, harga };
    produkList = [...produkList, produkBaru];
    console.log(`Produk "${nama}" berhasil ditambahkan.`);
}

// Menghapus Produk dengan Rest Parameter 
function hapusProduk(...ids) {
    produkList = produkList.filter(produk => !ids.includes(produk.id));
    console.log(`Produk dengan ID [${ids.join(', ')}] telah dihapus.`);
}

// Menampilkan Produk dengan Destructuring
function tampilkanProduk() {
    console.log("\n--- Daftar Produk Saat Ini ---");
    if (produkList.length === 0) {
        console.log("Tidak ada produk.");
    } else {
        for (const produk of produkList) {
            const { id, nama, harga } = produk;
            console.log(`ID: ${id}, Nama: ${nama}, Harga: Rp${harga.toLocaleString('id-ID')}`);
        }
    }
    console.log("-----------------------------\n");
}


tampilkanProduk();

tambahProduk(3, "Tablet", 7000000);

tampilkanProduk();

hapusProduk(2);

tampilkanProduk();