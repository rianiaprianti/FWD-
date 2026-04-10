import users from "./data.mjs";

let userData = [...users];

const index = () => {
    console.log("--- Daftar Data Pengguna ---");
    userData.map((user, i) => {
        console.log(`${i + 1}. ${user.nama} (${user.umur} thn) - ${user.email}`);
    });
};

const store = (user) => {
    userData.push(user);
    console.log(`Berhasil menambahkan: ${user.nama}`);
};

const destroy = () => {
    const popped = userData.pop();
    console.log(`Berhasil menghapus data terakhir: ${popped.nama}`);
};

export { index, store, destroy };