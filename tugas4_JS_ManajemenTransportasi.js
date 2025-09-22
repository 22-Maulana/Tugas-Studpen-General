class Kendaraan {
    constructor(merek, model, tahun) {
        this.merek = merek;
        this.model = model;
        this.tahun = tahun;
    }

    getInfo() {
        return `${this.merek} ${this.model} (${this.tahun})`;
    }
}

class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    /**
     * @param {Kendaraan} kendaraan 
     */
    sewaKendaraan(kendaraan) {
        if (kendaraan instanceof Kendaraan) {
            this.kendaraanDisewa = kendaraan;
            console.log(` ${this.nama} berhasil mencatat penyewaan untuk ${kendaraan.getInfo()}.`);
        } else {
            console.error("Error: Objek yang disewa harus merupakan instance dari Kendaraan.");
        }
    }

    /**
     * @returns {string}
     */
    getInfoSewa() {
        if (this.kendaraanDisewa) {
            return `Nama: ${this.nama}, Telp: ${this.nomorTelepon}, Menyewa: ${this.kendaraanDisewa.getInfo()}`;
        }
        return `Nama: ${this.nama}, Telp: ${this.nomorTelepon}, (Tidak sedang menyewa)`;
    }
}

class ManajemenPenyewaan {
    constructor() {
        this.daftarPenyewa = [];
    }

    /**
     * @param {Pelanggan} pelanggan
     * @param {Kendaraan} kendaraan
     */
    tambahTransaksi(pelanggan, kendaraan) {
        pelanggan.sewaKendaraan(kendaraan);
        this.daftarPenyewa.push(pelanggan);
    }

    tampilkanDaftarPenyewa() {
        console.log("\n --- Daftar Pelanggan Aktif yang Menyewa Kendaraan --- ");
        if (this.daftarPenyewa.length === 0) {
            console.log("Belum ada pelanggan yang menyewa kendaraan saat ini.");
        } else {
            this.daftarPenyewa.forEach((pelanggan, index) => {
                console.log(`${index + 1}. ${pelanggan.getInfoSewa()}`);
            });
        }
        console.log("----------------------------------------------------------\n");
    }
}

// PENGGUNAAN SISTEM

// 1. Inisialisasi
const sistemSewa = new ManajemenPenyewaan();

// 2. Buat objek kendaraan
const mobilAvanza = new Kendaraan("Toyota", "Avanza", 2023);
const motorVario = new Kendaraan("Honda", "Vario 150", 2024);
const mobilBrio = new Kendaraan("Honda", "Brio", 2025);

// 3. Buat objek pelanggan
const pelanggan1 = new Pelanggan("Maulana", "087812345678");
const pelanggan2 = new Pelanggan("Ardhiansyah", "+6287801010101");
const pelanggan3 = new Pelanggan("Prasetyo", "628787672536");

// 4. view daftar
sistemSewa.tampilkanDaftarPenyewa();

// 5. Catat penyewaan
sistemSewa.tambahTransaksi(pelanggan1, mobilAvanza);
sistemSewa.tambahTransaksi(pelanggan2, motorVario);
sistemSewa.tambahTransaksi(pelanggan3, mobilBrio);


// 6. view customer penyewa
sistemSewa.tampilkanDaftarPenyewa();