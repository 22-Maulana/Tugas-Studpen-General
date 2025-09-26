import users from "./data.js";

const index = () => {
    console.log("----- Daftar Pengguna -----");
    if (users.length > 0) {
        users.map((user, i) => {
            console.log(`${i + 1}. Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`);
        });
    } else {
        console.log("Data pengguna kosong.");
    }
    console.log("---------------------------\n");
};

const store = (newUser) => {
    users.push(newUser);
    console.log(`"${newUser.nama}" berhasil ditambahkan ke dalam daftar.`);
};

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1);
        console.log(`"${deletedUser[0].nama}" berhasil dihapus dari daftar.`);
    } else {
        console.log("Index tidak valid, data gagal dihapus.");
    }
};

export { index, store, destroy };