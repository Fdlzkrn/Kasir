<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-orange-500 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Manajemen Vendor</p>
      <h1 class="text-2xl font-bold">Data Supplier</h1>
    </div>

    <!-- Statistik -->
    <div class="grid grid-cols-2 gap-4 mb-5">
      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Total Supplier</p>
        <h2 class="text-2xl font-bold text-orange-500 mt-1">
          {{ filteredSuppliers.length }}
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Supplier Aktif</p>
        <h2 class="text-2xl font-bold text-green-600 mt-1">
          {{ filteredSuppliers.length }}
        </h2>
      </div>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">
        {{ editIndex === null ? 'Tambah Supplier' : 'Edit Supplier' }}
      </h2>

      <div class="space-y-3">
        <input
          v-model="form.name"
          type="text"
          placeholder="Nama Supplier"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.phone"
          type="text"
          placeholder="Nomor Telepon"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.address"
          type="text"
          placeholder="Alamat"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.product"
          type="text"
          placeholder="Produk Disuplai"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <button
          @click="saveSupplier"
          class="w-full bg-orange-500 text-white py-3 rounded-2xl font-bold"
        >
          {{ editIndex === null ? 'Simpan Supplier' : 'Update Supplier' }}
        </button>

        <button
          v-if="editIndex !== null"
          @click="resetForm"
          class="w-full bg-slate-300 py-3 rounded-2xl font-bold"
        >
          Batal Edit
        </button>
      </div>
    </div>

    <!-- Search -->
    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Cari supplier..."
        class="w-full px-4 py-3 rounded-2xl border outline-none"
      />
    </div>

    <!-- List Supplier -->
    <div class="space-y-4">

      <div
        v-for="(item, index) in filteredSuppliers"
        :key="index"
        class="bg-white rounded-3xl p-4 shadow"
      >
        <div class="flex justify-between items-start gap-3">

          <div class="flex gap-3">
            <div
              class="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold"
            >
              {{ item.name.charAt(0).toUpperCase() }}
            </div>

            <div>
              <h3 class="font-bold text-slate-800">
                {{ item.name }}
              </h3>

              <p class="text-sm text-slate-500">
                {{ item.phone }}
              </p>

              <p class="text-sm text-slate-500">
                {{ item.address }}
              </p>

              <p class="text-sm text-orange-500 font-medium">
                {{ item.product }}
              </p>
            </div>
          </div>

          <div class="flex gap-2">
            <button
              @click="editSupplier(index)"
              class="bg-yellow-400 px-3 py-2 rounded-xl text-sm"
            >
              ✏️
            </button>

            <button
              @click="deleteSupplier(index)"
              class="bg-red-500 text-white px-3 py-2 rounded-xl text-sm"
            >
              🗑️
            </button>
          </div>

        </div>
      </div>

      <div
        v-if="filteredSuppliers.length === 0"
        class="text-center text-slate-500 py-10"
      >
        Supplier tidak ditemukan
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SupplierPage",

  data() {
    return {
      search: "",
      editIndex: null,

      form: {
        name: "",
        phone: "",
        address: "",
        product: ""
      },

      suppliers: [
        {
          name: "PT Sumber Jaya",
          phone: "081234567890",
          address: "Denpasar, Bali",
          product: "Bahan Baku"
        },
        {
          name: "CV Maju Bersama",
          phone: "082345678901",
          address: "Badung, Bali",
          product: "Minuman"
        },
        {
          name: "UD Sentosa",
          phone: "083456789012",
          address: "Gianyar, Bali",
          product: "Snack"
        }
      ]
    };
  },

  computed: {
    filteredSuppliers() {
      return this.suppliers.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    saveSupplier() {
      if (
        this.form.name === "" ||
        this.form.phone === "" ||
        this.form.address === "" ||
        this.form.product === ""
      ) {
        alert("Isi semua data!");
        return;
      }

      if (this.editIndex === null) {
        this.suppliers.push({
          name: this.form.name,
          phone: this.form.phone,
          address: this.form.address,
          product: this.form.product
        });
      } else {
        this.suppliers[this.editIndex] = {
          name: this.form.name,
          phone: this.form.phone,
          address: this.form.address,
          product: this.form.product
        };
      }

      this.resetForm();
    },

    editSupplier(index) {
      const item = this.suppliers[index];

      this.form.name = item.name;
      this.form.phone = item.phone;
      this.form.address = item.address;
      this.form.product = item.product;

      this.editIndex = index;
    },

    deleteSupplier(index) {
      if (confirm("Hapus supplier ini?")) {
        this.suppliers.splice(index, 1);
      }
    },

    resetForm() {
      this.form.name = "";
      this.form.phone = "";
      this.form.address = "";
      this.form.product = "";
      this.editIndex = null;
    }
  }
};
</script>

<style scoped>
body {
  font-family: "Inter", sans-serif;
}
</style>