import { index, store, destroy } from "./controller.mjs";

const main = () => {
    // Menambahkan dua data baru
    store({ nama: 'Kiki', umur: 30, alamat: 'Jl. Baru No. 11', email: 'kiki@test.com' });
    store({ nama: 'Lala', umur: 22, alamat: 'Jl. Baru No. 12', email: 'lala@test.com' });

    // Menampilkan data menggunakan map()
    index();

    // Menghapus data
    destroy();

    // Tampilkan lagi setelah dihapus
    console.log("\nSetelah dihapus:");
    index();
};

main();