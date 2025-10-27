# GitHub Pages Deployment Guide

Proyek ini telah dikonfigurasi untuk di-deploy ke GitHub Pages dengan direktori root `/`.

## Konfigurasi yang Telah Ditambahkan

### 1. Vite Configuration (`vite.config.ts`)
```typescript
base: '/',           // Set untuk root directory GitHub Pages
build: {
  outDir: 'dist',    // Output build ke folder dist
}
```

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
Workflow otomatis yang akan:
- Build proyek saat push ke branch `main` atau `master`
- Deploy hasil build ke GitHub Pages
- Dapat juga di-trigger secara manual melalui Actions tab

## Cara Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Langkah 2: Aktifkan GitHub Pages di Repository Settings
1. Buka repository di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Build and deployment**:
   - Source: Pilih **GitHub Actions**
4. Simpan perubahan

### Langkah 3: Tunggu Deployment Selesai
- GitHub Actions akan otomatis memulai proses build dan deploy
- Cek status di tab **Actions** di repository Anda
- Setelah selesai, website akan tersedia di: `https://username.github.io/`

## Catatan Penting

### Untuk User/Organization Pages (username.github.io)
Jika repository Anda bernama `username.github.io`, website akan tersedia di:
- `https://username.github.io/`

Konfigurasi saat ini (`base: '/'`) sudah sesuai untuk ini.

### Untuk Project Pages (username.github.io/repo-name)
Jika repository Anda bukan `username.github.io`, Anda perlu mengubah `vite.config.ts`:
```typescript
base: '/nama-repo/',  // Ganti dengan nama repository Anda
```

### Custom Domain
Jika menggunakan custom domain:
1. Tambahkan file `CNAME` di folder `public/` dengan isi nama domain Anda
2. Konfigurasi DNS di domain provider Anda
3. Konfigurasi `base: '/'` sudah benar

## Testing Build Secara Lokal

Untuk memastikan build berjalan dengan baik:

```bash
# Build proyek
npm run build

# Preview hasil build
npm run preview
```

Preview server akan menjalankan website seperti yang akan tampil di GitHub Pages.

## Troubleshooting

### Build Gagal
- Pastikan semua dependencies ter-install: `npm install`
- Cek error di tab Actions di GitHub

### Website Tidak Muncul
- Pastikan GitHub Pages sudah diaktifkan di Settings
- Pastikan source sudah di-set ke "GitHub Actions"
- Tunggu beberapa menit setelah deployment pertama

### Asset Tidak Loading
- Pastikan `base` di `vite.config.ts` sudah benar
- Untuk root deployment: `base: '/'`
- Untuk subdirectory: `base: '/nama-repo/'`

## Manual Deployment (Alternatif)

Jika tidak ingin menggunakan GitHub Actions:

```bash
# Build proyek
npm run build

# Deploy folder dist ke gh-pages branch
# (Anda perlu install gh-pages: npm install -D gh-pages)
npx gh-pages -d dist
```

Kemudian aktifkan GitHub Pages dengan source: **Deploy from a branch** → **gh-pages** → **/root**
