import { index, store, destroy } from "./controller.js";

const main = () => {
    console.log("Selamat Datang di Aplikasi Data Pengguna Sederhana!");

    console.log("Menampilkan data awal yang ada:");
    index();

    console.log("Proses menambahkan 2 data baru...");
    const userBaru1 = { nama: "Dwi", umur: 29, alamat: "Jl. Bulutangkis No. 1" };
    const userBaru2 = { nama: "Putra", umur: 33, alamat: "Jl. Ganda Putra No. 2" };
    store(userBaru1);
    store(userBaru2);

    console.log("\nMenampilkan data setelah ditambahkan:");
    index();

    console.log("Proses menghapus data 'Ahmad Yani' (index 2)...");
    destroy(2);

    console.log("\nMenampilkan data akhir:");
    index();
};

main();