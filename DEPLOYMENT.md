# 🚀 Panduan Deployment ke GitHub Pages

## Konfigurasi yang Sudah Dilakukan

✅ Vite sudah dikonfigurasi untuk GitHub Pages dengan:
- **Base path**: `/` (untuk root directory di `https://wiwink13-hub.github.io/`)
- **Output directory**: `dist`
- **Build command**: `npm run build`

✅ GitHub Actions workflow sudah dibuat di `.github/workflows/deploy.yml`

## Cara Deploy ke GitHub Pages

### Langkah 1: Push ke GitHub

Pastikan kode Anda sudah di-push ke repository GitHub:

```bash
git add .
git commit -m "Setup for GitHub Pages deployment"
git push origin main
```

**Catatan**: Jika branch utama Anda adalah `master`, ganti `main` dengan `master`

### Langkah 2: Aktifkan GitHub Pages

1. Buka repository Anda di GitHub (`https://github.com/wiwink13-hub/wiwink13-hub.github.io`)
2. Klik **Settings** (Pengaturan)
3. Di sidebar kiri, klik **Pages**
4. Di bagian **Build and deployment**:
   - **Source**: Pilih **GitHub Actions** (bukan Deploy from a branch)
5. Simpan pengaturan

### Langkah 3: Deploy Otomatis

Setelah Anda push kode ke branch `main` atau `master`, GitHub Actions akan otomatis:
1. Build aplikasi Anda
2. Deploy ke GitHub Pages
3. Website akan tersedia di: `https://wiwink13-hub.github.io/`

## Cara Melihat Status Deployment

1. Buka repository di GitHub
2. Klik tab **Actions**
3. Anda akan melihat workflow "Deploy to GitHub Pages"
4. Klik pada workflow run untuk melihat progress

## Test Build Lokal

Sebelum deploy, Anda bisa test build lokal:

```bash
# Build aplikasi
npm run build

# Preview hasil build
npm run preview
```

## Troubleshooting

### Website tidak muncul setelah deployment
- Tunggu 2-5 menit setelah deployment selesai
- Periksa di tab Actions apakah workflow berhasil (hijau ✓)
- Pastikan GitHub Pages source sudah diset ke **GitHub Actions**

### Build gagal di GitHub Actions
- Periksa logs di tab Actions
- Pastikan semua dependencies ada di `package.json`
- Coba build lokal dulu dengan `npm run build`

### Assets tidak muncul (404 error)
- Pastikan `base: '/'` ada di `vite.config.ts`
- Clear cache browser (Ctrl+F5 atau Cmd+Shift+R)

## Manual Deploy (Alternatif)

Jika Anda ingin deploy manual tanpa GitHub Actions:

```bash
# Build aplikasi
npm run build

# Deploy folder dist ke GitHub Pages menggunakan gh-pages
npx gh-pages -d dist
```

## File Penting

- `vite.config.ts` - Konfigurasi Vite dengan base path
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Mencegah GitHub menggunakan Jekyll

## URL Website

Setelah deployment berhasil, website Anda akan tersedia di:
**https://wiwink13-hub.github.io/**

---

📝 **Catatan**: Pastikan nama repository Anda adalah `wiwink13-hub.github.io` untuk user/organization pages di root directory.
