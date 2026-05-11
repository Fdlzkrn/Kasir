<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-slate-800 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Konfigurasi Sistem</p>
      <h1 class="text-2xl font-bold">Pengaturan</h1>
    </div>

    <!-- Profil Toko -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Profil Toko</h2>

      <div class="space-y-3">
        <input v-model="settings.storeName" type="text" placeholder="Nama Toko"
          class="w-full px-4 py-3 rounded-2xl border outline-none" />

        <input v-model="settings.owner" type="text" placeholder="Nama Pemilik"
          class="w-full px-4 py-3 rounded-2xl border outline-none" />

        <textarea v-model="settings.address" rows="3" placeholder="Alamat Toko"
          class="w-full px-4 py-3 rounded-2xl border outline-none resize-none"></textarea>
      </div>
    </div>

    <!-- Printer & Struk -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Printer & Cetak Struk</h2>

      <div class="space-y-4">

        <div>
          <label class="text-sm text-slate-600 block mb-2">Pilih Printer</label>
          <select v-model="settings.printer"
            class="w-full px-4 py-3 rounded-2xl border outline-none">
            <option value="Epson TM-T82">Epson TM-T82</option>
            <option value="Xprinter XP-58">Xprinter XP-58</option>
            <option value="Bluetooth Printer">Bluetooth Printer</option>
            <option value="Windows Default">Windows Default</option>
          </select>
        </div>

        <div class="flex justify-between items-center">
          <span class="text-slate-700">Cetak Otomatis Setelah Bayar</span>
          <input type="checkbox" v-model="settings.autoPrint" />
        </div>

        <div class="flex justify-between items-center">
          <span class="text-slate-700">Tampilkan Logo di Struk</span>
          <input type="checkbox" v-model="settings.showLogo" />
        </div>

        <div class="flex justify-between items-center">
          <span class="text-slate-700">Potong Kertas Otomatis</span>
          <input type="checkbox" v-model="settings.autoCut" />
        </div>

        <div>
          <label class="text-sm text-slate-600 block mb-2">Ukuran Kertas</label>
          <select v-model="settings.paperSize"
            class="w-full px-4 py-3 rounded-2xl border outline-none">
            <option value="58mm">58mm</option>
            <option value="80mm">80mm</option>
          </select>
        </div>

        <div>
          <label class="text-sm text-slate-600 block mb-2">Footer Struk</label>
          <textarea v-model="settings.footerText" rows="2"
            placeholder="Terima kasih telah berbelanja"
            class="w-full px-4 py-3 rounded-2xl border outline-none resize-none"></textarea>
        </div>

        <button
          @click="testPrint"
          class="w-full bg-slate-800 text-white py-3 rounded-2xl font-bold"
        >
          Test Print
        </button>

      </div>
    </div>

    <!-- Sistem -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Sistem</h2>

      <div class="space-y-4">
        <div class="flex justify-between items-center">
          <span class="text-slate-700">Mode Gelap</span>
          <input type="checkbox" v-model="settings.darkMode" />
        </div>

        <div>
          <label class="text-slate-700 block mb-2">Bahasa</label>
          <select v-model="settings.language"
            class="w-full px-4 py-3 rounded-2xl border outline-none">
            <option value="Indonesia">Indonesia</option>
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Save -->
    <button
      @click="saveSettings"
      class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg"
    >
      Simpan Pengaturan
    </button>

  </div>
</template>

<script>
export default {
  name: "SettingPage",

  data() {
    return {
      settings: {
        storeName: "PrimePOS Store",
        owner: "Admin",
        address: "Denpasar, Bali",

        printer: "Epson TM-T82",
        autoPrint: true,
        showLogo: true,
        autoCut: true,
        paperSize: "58mm",
        footerText: "Terima kasih telah berbelanja",

        darkMode: false,
        language: "Indonesia"
      }
    }
  },

  methods: {
    saveSettings() {
      alert("Pengaturan berhasil disimpan!")
    },

    testPrint() {
      alert("Mencetak test printer...")
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>