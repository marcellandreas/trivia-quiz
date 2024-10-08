# Trivia Quiz

Trivia Quiz adalah aplikasi kuis berbasis web yang dibangun menggunakan React.js dan Open Trivia API. Aplikasi ini menampilkan kuis pilihan ganda dengan soal-soal yang diambil secara acak dari API. Pengguna dapat login, menjawab soal satu per satu, dan hasil pengerjaan kuis akan ditampilkan di akhir.

## Fitur

- **Login**: Pengguna dapat login untuk mengakses kuis.
- **API Soal**: Menggunakan [Open Trivia API](https://opentdb.com/) untuk mendapatkan soal kuis.
- **Timer**: Setiap kuis memiliki batas waktu. Jika waktu habis, kuis akan otomatis berhenti dan hasil ditampilkan.
- **Satu soal per halaman**: Setiap soal ditampilkan satu per satu, pengguna pindah ke soal berikutnya setelah memilih jawaban.
- **Resume Kuis**: Jika browser ditutup, pengguna dapat melanjutkan kuis dari soal terakhir menggunakan localStorage.
- **Hasil Kuis**: Menampilkan jumlah soal yang benar, salah, dan total soal yang dikerjakan di akhir kuis.

## API yang Digunakan

- **Open Trivia API**: Mengambil soal kuis secara acak dengan format multiple choice.
  - Contoh URL API: `https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple`

## Cara Install dan Menjalankan Proyek

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini di lokal:

### 1. Clone Repository

```bash
git clone https://github.com/your-username/trivia-quiz.git
cd trivia-quiz
```

### 2. Install Dependencies

Pastikan kamu sudah menginstall Node.js dan npm.

```bash
npm install
```

### 3. Menjalankan Aplikasi

Untuk menjalankan aplikasi di development mode, gunakan perintah berikut:

```bash
npm start
```

Aplikasi akan berjalan di http://localhost:5173. Kamu dapat membukanya di browser untuk mencoba kuis.

### 4. Build untuk Production

Untuk build aplikasi versi production, gunakan perintah berikut:

```bash
npm run build
```

## Strukur Folder

```bash
├── public
├── src
│   ├── components
│   │   ├── common
│   │   │   ├── Footer.jsx
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── Form
│   │   │   ├── AuthLink.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── InputField.jsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   ├── quiz
│   │   │   ├── index.jsx
│   │   │   ├── Result.jsx
│   │   ├── Home.jsx
│   ├── Routes
│   │   ├── index.js
│   ├── App.jsx
│   ├── index.jsx
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
```

## Teknologi yang Digunakan

1. React.js: Library JavaScript untuk membangun UI.
2. Open Trivia API: Sumber soal kuis.
3. LocalStorage: Digunakan untuk menyimpan data sementara (resume kuis).
4. CSS: Styling halaman.

## Fitur Tambahan (Nilai Plus)

> Resume Kuis: Jika pengguna menutup browser, progres kuis (soal, skor, waktu tersisa) akan disimpan di localStorage dan bisa dilanjutkan saat aplikasi dibuka kembali.

## Cara Kerja

1. Pengguna login dengan memasukkan nama pengguna.
2. Kuis dimulai dengan menampilkan satu soal per halaman.
3. Pengguna memiliki batas waktu untuk menyelesaikan kuis (misalnya, 60 detik).
4. Jika pengguna menjawab, kuis akan pindah ke soal berikutnya. Jika waktu habis, hasil kuis ditampilkan.
5. Hasil pengerjaan akan menampilkan jumlah soal yang benar, salah, dan total soal.
6. Pengguna dapat melanjutkan kuis jika browser ditutup menggunakan mekanisme penyimpanan di localStorage.

## Lisensi

Proyek ini menggunakan lisensi MIT. Lihat file [Lisensi](./LICENSE.md) untuk informasi lebih lanjut.
