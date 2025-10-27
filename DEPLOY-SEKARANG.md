# 🚀 DEPLOY WEBSITE KE GITHUB PAGES - LANGKAH DEMI LANGKAH

## ⚠️ BACA INI DULU!

Website Anda **SUDAH 100% SIAP**, tetapi masih di Replit. Untuk online di GitHub Pages, Anda HARUS mengikuti langkah-langkah di bawah ini.

---

## 📝 LANGKAH 1: PUSH KE GITHUB

### A. Buka Terminal Replit (Shell)

Di Replit, buka tab **Shell** (biasanya di bawah).

### B. Cek Status Git

Ketik perintah ini dan tekan Enter:
```bash
git status
```

Anda akan melihat banyak file yang berubah (merah).

### C. Push ke GitHub

Copy-paste perintah ini **SATU PER SATU** dan tekan Enter setiap baris:

```bash
git add .
```

Tunggu selesai, lalu:

```bash
git commit -m "Setup untuk GitHub Pages - siap deploy"
```

Tunggu selesai, lalu (PENTING - ganti `main` dengan `master` jika branch Anda master):

```bash
git push origin main
```

⚠️ **Jika diminta username/password GitHub**, masukkan:
- Username: username GitHub Anda
- Password: **GitHub Personal Access Token** (bukan password biasa)

---

## 📝 LANGKAH 2: AKTIFKAN GITHUB PAGES

### A. Buka GitHub Repository

Buka browser dan pergi ke:
```
https://github.com/wiwink13-hub/wiwink13-hub.github.io
```

### B. Klik Settings

Di halaman repository, klik tab **Settings** (ikon ⚙️ di kanan atas).

### C. Klik Pages

Di sidebar kiri, cari dan klik **Pages**.

### D. Pilih Source

Di bagian **"Build and deployment"**:

1. Lihat dropdown **"Source"**
2. Klik dropdown tersebut
3. Pilih **"GitHub Actions"**

**VISUAL:**
```
Build and deployment
├─ Source: [GitHub Actions ▼]  ← PILIH INI!
│
└─ Branch: [JANGAN SENTUH]
```

⚠️ **JANGAN pilih "Deploy from a branch"!**

### E. Selesai!

Tidak perlu klik tombol Save. Pengaturan langsung aktif.

---

## 📝 LANGKAH 3: TUNGGU DEPLOYMENT

### A. Buka Tab Actions

Di repository GitHub Anda, klik tab **"Actions"** (di atas, sebelah Pull Requests).

### B. Lihat Workflow

Anda akan melihat workflow bernama **"Deploy to GitHub Pages"** sedang berjalan.

Status akan seperti ini:

- 🟡 **Kuning (sedang berjalan)** - Tunggu 2-5 menit
- ✅ **Hijau (berhasil)** - Website sudah online!
- ❌ **Merah (gagal)** - Ada error, klik untuk lihat detail

### C. Tunggu Sampai Hijau

Tunggu sampai status berubah menjadi ✅ **hijau**.

---

## 📝 LANGKAH 4: BUKA WEBSITE ANDA

### A. Tunggu 5 Menit

Setelah workflow ✅ hijau, tunggu 5 menit lagi untuk propagasi.

### B. Buka URL

Buka browser dan pergi ke:
```
https://wiwink13-hub.github.io/
```

### C. Clear Cache

Jika website masih blank:

**Windows/Linux:**
- Tekan `Ctrl + Shift + R`

**Mac:**
- Tekan `Cmd + Shift + R`

**Atau:**
- Buka Incognito/Private window

---

## 🔍 TROUBLESHOOTING

### Website Masih Blank?

1. **Cek Console Browser**
   - Tekan `F12`
   - Klik tab **Console**
   - Screenshot error yang muncul
   - Kirim screenshot ke saya

2. **Cek GitHub Actions**
   - Tab Actions di GitHub
   - Pastikan workflow ✅ hijau (bukan ❌ merah)
   - Jika merah, klik untuk lihat error

3. **Cek GitHub Pages Settings**
   - Settings → Pages
   - Pastikan Source = **"GitHub Actions"**
   - BUKAN "Deploy from a branch"

### Workflow Gagal (❌ Merah)?

1. Klik workflow yang gagal
2. Screenshot error message
3. Kirim screenshot ke saya

---

## ✅ CHECKLIST

Sebelum bertanya lagi, pastikan Anda sudah:

- [ ] Push ke GitHub (`git push origin main`)
- [ ] Buka Settings → Pages di GitHub
- [ ] Pilih Source = "GitHub Actions"
- [ ] Tunggu workflow di tab Actions selesai (✅ hijau)
- [ ] Tunggu 5 menit setelah workflow hijau
- [ ] Clear cache browser (Ctrl+Shift+R)
- [ ] Buka di Incognito window

---

## 🎯 RINGKASAN SINGKAT

```
1. Di Replit Shell:
   git add .
   git commit -m "Deploy"
   git push origin main

2. Di GitHub:
   Settings → Pages → Source: "GitHub Actions"

3. Tunggu:
   Actions → Workflow hijau (✅)

4. Buka:
   https://wiwink13-hub.github.io/
   (Tunggu 5 menit + clear cache)
```

---

## 📞 BANTUAN

Jika masih tidak bisa setelah mengikuti SEMUA langkah di atas, kirim:

1. Screenshot tab **Actions** di GitHub
2. Screenshot tab **Settings → Pages** di GitHub
3. Screenshot **Console** browser (F12 → Console)
4. Konfirmasi bahwa Anda sudah push ke GitHub

---

## ⚠️ CATATAN PENTING

- Saya TIDAK bisa push kode Anda ke GitHub (hanya Anda yang bisa)
- Saya TIDAK bisa mengaktifkan GitHub Pages untuk Anda (hanya Anda yang bisa)
- Template SUDAH 100% BENAR - tinggal Anda deploy saja!

**KONFIGURASI SUDAH SEMPURNA. TINGGAL ANDA YANG HARUS DEPLOY KE GITHUB!**
