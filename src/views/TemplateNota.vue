<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Desain Cetak</p>
      <h1 class="text-2xl font-bold">Template Nota</h1>
    </div>

    <!-- Data Toko -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Data Toko</h2>

      <div class="space-y-4">

        <!-- Preview Logo -->
        <div class="text-center">

          <div
            class="w-24 h-24 mx-auto rounded-full border-4 border-indigo-100 shadow overflow-hidden bg-slate-50 flex items-center justify-center"
          >

            <img
              v-if="store.logo"
              :src="store.logo"
              class="w-full h-full object-cover"
            />

            <span
              v-else
              class="text-2xl font-bold text-slate-400"
            >
              B
            </span>

          </div>

          <p class="text-xs text-slate-500 mt-2">
            Logo otomatis bundar
          </p>

        </div>

        <!-- Upload -->
        <div>
          <label class="text-sm font-semibold block mb-2">
            Upload Logo Toko
          </label>

          <input
            type="file"
            accept="image/*"
            @change="uploadLogo"
            class="w-full border rounded-2xl px-4 py-3"
          />
        </div>

        <!-- Nama -->
        <input
          v-model="store.name"
          type="text"
          placeholder="Nama Toko"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <!-- Alamat -->
        <textarea
          v-model="store.address"
          rows="2"
          placeholder="Alamat Toko"
          class="w-full px-4 py-3 rounded-2xl border outline-none resize-none"
        ></textarea>

        <!-- Telepon -->
        <input
          v-model="store.phone"
          type="text"
          placeholder="Nomor Telepon"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

      </div>
    </div>

    <!-- Tema -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Tema Nota</h2>

      <div class="grid grid-cols-2 gap-3">

        <button
          v-for="item in themes"
          :key="item"
          @click="template = item"
          :class="template === item
            ? 'bg-indigo-600 text-white'
            : 'bg-slate-100 text-slate-700'"
          class="rounded-2xl py-4 font-bold capitalize"
        >
          {{ item }}
        </button>

      </div>
    </div>

    <!-- Pengaturan -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Pengaturan Nota</h2>

      <div class="space-y-4">

        <div class="flex justify-between items-center">
          <span>Tampilkan Logo</span>
          <input type="checkbox" v-model="showLogo" />
        </div>

        <div class="flex justify-between items-center">
          <span>Tampilkan Pajak</span>
          <input type="checkbox" v-model="showTax" />
        </div>

        <div class="flex justify-between items-center">
          <span>Tampilkan QRIS</span>
          <input type="checkbox" v-model="showQRIS" />
        </div>

        <textarea
          v-model="footer"
          rows="2"
          placeholder="Footer Nota"
          class="w-full px-4 py-3 rounded-2xl border outline-none resize-none"
        ></textarea>

      </div>
    </div>

    <!-- Preview -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">Preview Nota</h2>

      <div
        class="rounded-2xl border p-4 text-sm"
        :class="templateClass"
      >

        <div class="text-center mb-3">

          <div
            v-if="showLogo"
            class="w-16 h-16 mx-auto rounded-full overflow-hidden border mb-2 bg-white"
          >
            <img
              v-if="store.logo"
              :src="store.logo"
              class="w-full h-full object-cover"
            />
          </div>

          <h3 class="font-bold text-lg">
            {{ store.name }}
          </h3>

          <p class="text-xs">{{ store.address }}</p>
          <p class="text-xs">{{ store.phone }}</p>

        </div>

        <div class="border-y py-2 space-y-1">

          <div class="flex justify-between">
            <span>Kopi Latte</span>
            <span>25.000</span>
          </div>

          <div class="flex justify-between">
            <span>Roti Bakar</span>
            <span>18.000</span>
          </div>

        </div>

        <div class="space-y-1 mt-2">

          <div class="flex justify-between">
            <span>Subtotal</span>
            <span>43.000</span>
          </div>

          <div
            v-if="showTax"
            class="flex justify-between"
          >
            <span>Pajak</span>
            <span>4.300</span>
          </div>

          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>47.300</span>
          </div>

        </div>

        <div
          v-if="showQRIS"
          class="text-center mt-3"
        >
          [ QRIS ]
        </div>

        <p class="text-center mt-3 text-xs">
          {{ footer }}
        </p>

      </div>
    </div>

    <!-- Save -->
    <button
      @click="saveTemplate"
      class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg"
    >
      Simpan Perubahan
    </button>

  </div>
</template>

<script>
export default {
  name: "TemplateNota",

  data() {
    return {
      themes: ["classic", "modern", "minimal", "premium"],
      template: "classic",

      showLogo: true,
      showTax: true,
      showQRIS: true,

      footer: "Terima kasih telah berbelanja",

      store: {
        name: "Bloop",
        address: "Jl. Contoh No 10",
        phone: "08123456789",
        logo: ""
      }
    };
  },

  computed: {
    templateClass() {
      if (this.template === "classic") {
        return "bg-white text-black";
      }

      if (this.template === "modern") {
        return "bg-slate-900 text-white";
      }

      if (this.template === "minimal") {
        return "bg-slate-50 text-slate-700";
      }

      if (this.template === "premium") {
        return "bg-yellow-50 text-yellow-900 border-yellow-400";
      }

      return "";
    }
  },

  mounted() {
    const data = localStorage.getItem("templateNota");

    if (data) {
      const nota = JSON.parse(data);

      this.template = nota.template;
      this.showLogo = nota.showLogo;
      this.showTax = nota.showTax;
      this.showQRIS = nota.showQRIS;
      this.footer = nota.footer;
      this.store = nota.store;
    }
  },

  methods: {
    uploadLogo(event) {
      const file = event.target.files[0];

      if (!file) return;

      const reader = new FileReader();

      reader.onload = (e) => {
        this.store.logo = e.target.result;
      };

      reader.readAsDataURL(file);
    },

    saveTemplate() {
      const nota = {
        template: this.template,
        showLogo: this.showLogo,
        showTax: this.showTax,
        showQRIS: this.showQRIS,
        footer: this.footer,
        store: this.store
      };

      localStorage.setItem(
        "templateNota",
        JSON.stringify(nota)
      );

      alert("Template nota berhasil disimpan 🔥");
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>