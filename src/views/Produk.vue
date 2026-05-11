<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 max-w-md mx-auto p-4">

    <!-- HEADER -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-xs opacity-80">Manajemen Produk</p>
      <h1 class="text-2xl font-bold">Produk & Stok</h1>
    </div>

    <!-- FORM CARD -->
    <div class="bg-white rounded-3xl p-5 shadow-lg mb-5">

      <h2 class="font-bold text-slate-800 mb-4">
        {{ editIndex === null ? 'Tambah Produk Baru' : 'Edit Produk' }}
      </h2>

      <div class="space-y-3">

        <input
          v-model="form.name"
          type="text"
          placeholder="Nama Produk"
          class="w-full px-4 py-3 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <div class="grid grid-cols-2 gap-3">

          <input
            v-model="form.price"
            type="number"
            placeholder="Harga"
            class="w-full px-4 py-3 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <input
            v-model="form.stock"
            type="number"
            placeholder="Stok"
            class="w-full px-4 py-3 rounded-2xl border focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        <button
          @click="saveProduct"
          class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-2xl font-bold shadow"
        >
          {{ editIndex === null ? 'Tambah Produk' : 'Update Produk' }}
        </button>

        <button
          v-if="editIndex !== null"
          @click="resetForm"
          class="w-full bg-slate-200 text-slate-700 py-3 rounded-2xl font-semibold"
        >
          Batal Edit
        </button>

      </div>

    </div>

    <!-- SEARCH -->
    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Cari produk..."
        class="w-full px-4 py-3 rounded-2xl border shadow-sm outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    <!-- LIST -->
    <div class="space-y-3">

      <div
        v-for="(item, index) in filteredProducts"
        :key="index"
        class="bg-white rounded-3xl p-4 shadow-md flex justify-between items-center hover:shadow-lg transition"
      >

        <!-- LEFT -->
        <div class="space-y-1">

          <p class="font-bold text-slate-800 text-base">
            {{ item.name }}
          </p>

          <div class="flex gap-3 text-xs text-slate-500">

            <span class="bg-slate-100 px-2 py-1 rounded-xl">
              Rp {{ Number(item.price).toLocaleString() }}
            </span>

            <span class="bg-blue-100 text-blue-600 px-2 py-1 rounded-xl">
              Stok: {{ item.stock }}
            </span>

          </div>

        </div>

        <!-- ACTION -->
        <div class="flex gap-2">

          <button
            @click="editProduct(index)"
            class="bg-yellow-400 hover:bg-yellow-500 px-3 py-2 rounded-xl shadow"
          >
            ✏️
          </button>

          <button
            @click="deleteProduct(index)"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-xl shadow"
          >
            🗑
          </button>

        </div>

      </div>

      <!-- EMPTY -->
      <div
        v-if="filteredProducts.length === 0"
        class="text-center text-slate-400 py-10"
      >
        Tidak ada produk ditemukan
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "ProdukPage",

  data() {
    return {
      search: "",
      editIndex: null,

      form: {
        name: "",
        price: "",
        stock: ""
      },

      products: []
    };
  },

  mounted() {
    const data = localStorage.getItem("products");
    this.products = data ? JSON.parse(data) : [];
  },

  computed: {
    filteredProducts() {
      return this.products.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    saveProduct() {
      if (!this.form.name || !this.form.price || !this.form.stock) {
        alert("Isi semua data!");
        return;
      }

      if (this.editIndex === null) {
        this.products.push({ ...this.form });
      } else {
        this.products[this.editIndex] = { ...this.form };
      }

      this.sync();
      this.resetForm();
    },

    editProduct(index) {
      this.form = { ...this.products[index] };
      this.editIndex = index;
    },

    deleteProduct(index) {
      if (confirm("Hapus produk ini?")) {
        this.products.splice(index, 1);
        this.sync();
      }
    },

    resetForm() {
      this.form = { name: "", price: "", stock: "" };
      this.editIndex = null;
    },

    sync() {
      localStorage.setItem("products", JSON.stringify(this.products));
    }
  }
};
</script>