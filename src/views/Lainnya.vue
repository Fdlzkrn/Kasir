<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-purple-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Menu Tambahan</p>
      <h1 class="text-2xl font-bold">Lainnya</h1>
    </div>

    <!-- Menu Grid -->
    <div class="grid grid-cols-2 gap-4 mb-5">

      <button class="bg-white rounded-3xl p-5 shadow text-left">
        <div class="text-3xl mb-2">🧾</div>
        <a href="/templatenota"><h2 class="font-bold text-slate-800">Template Nota</h2>
        <p class="text-sm text-slate-500">Ubah desain nota</p></a>
        
      </button>

      <button class="bg-white rounded-3xl p-5 shadow text-left">
        <div class="text-3xl mb-2">📤</div>
        <h2 class="font-bold text-slate-800">Export Data</h2>
        <p class="text-sm text-slate-500">Excel / PDF</p>
      </button>

      <button class="bg-white rounded-3xl p-5 shadow text-left">
        <div class="text-3xl mb-2">💾</div>
        <h2 class="font-bold text-slate-800">Backup</h2>
        <p class="text-sm text-slate-500">Cadangkan data</p>
      </button>

      <button class="bg-white rounded-3xl p-5 shadow text-left">
        <div class="text-3xl mb-2">🔄</div>
        <h2 class="font-bold text-slate-800">Restore</h2>
        <p class="text-sm text-slate-500">Pulihkan data</p>
      </button>

    </div>

    <!-- Ubah Tampilan Nota -->
    
     
    <!-- Save -->
   
  </div>
</template>

<script>
export default {
  name: "LainnyaPage",

  data() {
    return {
      nota: {
        theme: "classic",
        logo: true,
        qris: true,
        tax: true,
        footer: "Terima kasih sudah berbelanja"
      }
    }
  },

  methods: {
    saveNota() {
      alert("Tampilan nota berhasil disimpan!")
    }
  }
}
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>