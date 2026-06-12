<div align="center">
  <img src="public/logo2.png" alt="Logo" width="80" height="80">
  
  <h2 align="center">Personal Portfolio Website</h2>

  <p align="center">
    A modern, interactive, and responsive personal portfolio to showcase my projects, skills, and experience.
    <br />
    <a href="https://abellevran.github.io/"><strong>View Live Demo »</strong></a>
  </p>

  <!-- Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
    <img src="https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  </p>
</div>

<br />

## 📖 Deskripsi Singkat

Website portfolio ini dibangun untuk menampilkan profil, keahlian, pengalaman, serta project-project pilihan secara profesional. Dibangun menggunakan teknologi web modern untuk memastikan performa yang cepat, interaktif, dan memberikan user experience (UX) yang sangat baik dengan animasi yang halus dan desain *Glassmorphism*.

## ✨ Fitur Utama

- 🏠 **Home / Landing Page** - Sambutan interaktif dengan efek *custom cursor*.
- 👨‍💻 **About Me** - Menampilkan profil singkat, latar belakang, dan keahlian.
- 🛠️ **Skills** - Daftar keahlian teknis (tools & bahasa pemrograman).
- 📂 **Project Showcase** - Menampilkan hasil karya dengan fitur filter kategori (Data Science, Visualization, dll).
- ✉️ **Contact Form** - Form kontak yang terintegrasi langsung dengan EmailJS agar pesan langsung masuk ke email.
- 📱 **Responsive Design** - Tampilan sempurna dan menyesuaikan di Desktop, Tablet, dan Mobile.
- 🌓 **Dark / Light Mode** - Tombol *toggle* untuk berpindah antara tema gelap elegan dan terang.

## 💻 Teknologi yang Digunakan

- **Frontend Framework:** React.js
- **Build Tool:** Vite
- **Styling:** CSS3 (Vanilla dengan konsep CSS Variables & Glassmorphism)
- **Animations:** Framer Motion
- **Icons:** React Icons (Fa & Fi)
- **Email Service:** EmailJS
- **Deployment:** GitHub Pages

## 🚀 Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan project ini di komputer lokal Anda.

### Prasyarat
Pastikan Anda sudah menginstall [Node.js](https://nodejs.org/) (versi 16 ke atas) dan npm di komputer Anda.

### Langkah-langkah

1. **Clone repository ini**
   ```bash
   git clone https://github.com/AbelLevran/abellevran.github.io.git
   ```

2. **Masuk ke folder project**
   ```bash
   cd abellevran.github.io
   ```

3. **Install dependencies (paket yang dibutuhkan)**
   ```bash
   npm install
   ```

4. **Konfigurasi Environment Variables (Opsional untuk EmailJS)**
   Buat file `.env` di root directory, lalu tambahkan API Keys EmailJS Anda:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## 💻 Menjalankan Project

Untuk menjalankan server di komputer lokal Anda:

```bash
npm run dev
```
Buka browser Anda dan navigasikan ke `http://localhost:5173/`.

## 📁 Struktur Folder

```text
├── public/                 # Aset statis (gambar, logo, 404.html)
├── src/
│   ├── assets/             # Aset internal (gambar project, ilustrasi)
│   ├── components/         # Komponen reusable (Navbar, Footer, ProjectCard)
│   ├── context/            # React Context (ThemeContext untuk Dark Mode)
│   ├── data/               # Data statis (projects.js)
│   ├── pages/              # Halaman utama (Home, About, Projects, Contact)
│   ├── styles/             # File CSS Global dan Animasi
│   ├── App.jsx             # Root component (menyusun layout)
│   └── main.jsx            # Entry point React
├── index.html              # HTML utama
├── package.json            # Daftar dependencies & scripts
├── vite.config.js          # Konfigurasi build Vite
└── README.md               # Dokumentasi ini
```

## 🌐 Deployment

Project ini di-*deploy* menggunakan **GitHub Pages**. Proses deploy sudah diotomatisasi melalui package `gh-pages`.

Untuk memperbarui website secara *live*:
1. Lakukan perubahan pada kode Anda.
2. Commit dan push ke repository GitHub (`main` branch).
3. Jalankan perintah deploy:
   ```bash
   npm run deploy
   ```
4. Website Anda akan terupdate otomatis di link public.

## 📸 Screenshot

<div align="center">
  <img src="https://via.placeholder.com/800x450.png?text=Hero+Section+Preview" alt="Hero Section Preview" width="100%">
  <br/>
  <i>*Ganti placeholder di atas dengan screenshot asli website Anda*</i>
</div>

## 👨‍💻 Author

**Abel Levran**
- GitHub: [@AbelLevran](https://github.com/AbelLevran)
- Website: [https://abellevran.github.io/](https://abellevran.github.io/)

## 📄 License

Project ini dikembangkan untuk keperluan portfolio pribadi. Hak cipta milik penulis. Bebas dipelajari atau dijadikan referensi.
