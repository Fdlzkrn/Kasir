<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto flex flex-col">

    <!-- HEADER -->
    <header class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 pt-10 pb-5 rounded-b-3xl shadow">
      <h1 class="text-xl font-bold">Kasir POS</h1>
      <p class="text-xs opacity-80">Pilih produk</p>
    </header>

    <!-- PRODUK -->
    <main class="flex-1 p-4 space-y-3 overflow-y-auto">

      <div v-for="(item, i) in products" :key="i"
        class="bg-white p-4 rounded-2xl shadow flex justify-between items-center">

        <div>
          <p class="font-bold">{{ item.name }}</p>
          <p class="text-xs text-slate-500">
            Rp {{ item.price.toLocaleString() }} | stok: {{ item.stock }}
          </p>
        </div>

        <button
          :disabled="item.stock <= 0"
          @click="add(item)"
          class="bg-indigo-600 text-white px-3 py-2 rounded-xl disabled:opacity-40">
          +
        </button>

      </div>

    </main>

    <!-- CART -->
    <div class="bg-white p-4 border-t rounded-t-3xl">

      <div v-if="cart.length === 0" class="text-center text-slate-400">
        Kosong
      </div>

      <div v-for="(c,i) in cart" :key="i"
        class="flex justify-between text-sm mb-2">

        <span>{{ c.name }} x{{ c.qty }}</span>

        <div class="flex gap-2 items-center">

          <button @click="minus(i)" class="bg-red-500 text-white w-6 h-6 rounded">-</button>
          <button @click="plus(i)" class="bg-green-500 text-white w-6 h-6 rounded">+</button>

          <span>Rp {{ (c.price * c.qty).toLocaleString() }}</span>
        </div>

      </div>

      <div class="flex justify-between font-bold mt-3">
        <span>Total</span>
        <span>Rp {{ total.toLocaleString() }}</span>
      </div>

      <button @click="checkout"
        class="w-full mt-3 bg-green-600 text-white py-3 rounded-xl">
        Bayar
      </button>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cart: []
    };
  },

  mounted() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
  },

  computed: {
    total() {
      return this.cart.reduce((a,b)=>a + b.price*b.qty,0);
    }
  },

  methods: {

    add(item) {
      if (item.stock <= 0) return;

      const found = this.cart.find(i => i.name === item.name);
      if (found) found.qty++;
      else this.cart.push({ ...item, qty: 1 });
    },

    plus(i) {
      this.cart[i].qty++;
    },

    minus(i) {
      if (this.cart[i].qty > 1) this.cart[i].qty--;
      else this.cart.splice(i,1);
    },

  checkout() {

  // =========================
  // 1. AMBIL & UPDATE STOK
  // =========================
  let products = JSON.parse(localStorage.getItem("products")) || [];

  this.cart.forEach(c => {
    const p = products.find(p => p.name === c.name);
    if (p) {
      p.stock = Math.max(0, p.stock - c.qty); // biar tidak minus
    }
  });

  localStorage.setItem("products", JSON.stringify(products));

  // =========================
  // 2. BUAT TRANSAKSI
  // =========================
  const transaksiBaru = {
    items: this.cart.map(i => ({
      nama: i.name,
      qty: i.qty,
      total: i.price * i.qty
    })),
    total: this.total,
    date: new Date().toISOString()
  };

  // =========================
  // 3. SIMPAN LIST TRANSAKSI
  // =========================
  const dataLama = JSON.parse(localStorage.getItem("transaksiList")) || [];
  dataLama.push(transaksiBaru);

  localStorage.setItem("transaksiList", JSON.stringify(dataLama));
  localStorage.setItem("transaksiCetak", JSON.stringify(transaksiBaru));

  // =========================
  // 4. RESET KERANJANG
  // =========================
  this.cart = [];

  // =========================
  // 5. NAVIGASI
  // =========================
  this.$router.push("/pembayaran");
}
    

  }
};
</script>