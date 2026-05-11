<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4">

    <!-- HEADER -->
    <div class="bg-indigo-600 text-white p-5 rounded-3xl shadow mb-5">
      <h1 class="text-xl font-bold">Pembayaran</h1>
      <p class="text-sm opacity-80">Pilih metode pembayaran</p>
    </div>

    <!-- TOTAL -->
    <div class="bg-white p-5 rounded-2xl shadow mb-5 text-center">
      <p class="text-sm text-slate-500">Total Bayar</p>
      <h2 class="text-2xl font-bold text-indigo-600">
        Rp {{ total.toLocaleString() }}
      </h2>
    </div>

    <!-- METHOD -->
    <div class="space-y-3 mb-5">

      <div
        v-for="m in paymentMethods"
        :key="m.id"
        @click="method = m.id"
        class="p-4 rounded-2xl shadow cursor-pointer"
        :class="method === m.id ? 'bg-indigo-600 text-white' : 'bg-white'"
      >
        <div class="font-bold">{{ m.name }}</div>
        <div class="text-xs opacity-70">{{ m.desc }}</div>
      </div>

    </div>

    <!-- CASH -->
    <div v-if="method === 'cash'" class="bg-white p-4 rounded-2xl shadow mb-5">

      <input
        v-model.number="cash"
        type="number"
        class="w-full border p-3 rounded-xl"
        placeholder="Uang bayar"
      />

      <div class="flex justify-between mt-2 text-sm">
        <span>Kembalian</span>
        <span :class="change < 0 ? 'text-red-500' : 'text-green-600'">
          Rp {{ change.toLocaleString() }}
        </span>
      </div>

    </div>

    <!-- BUTTON -->
    <button
      @click="proses"
      class="w-full bg-green-600 text-white py-4 rounded-2xl font-bold"
    >
      Lanjut Cetak Struk
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      cash: 0,
      method: "cash",

      paymentMethods: [
        { id: "cash", name: "Tunai", desc: "Bayar langsung" },
        { id: "qris", name: "QRIS", desc: "Scan barcode" },
        { id: "transfer", name: "Transfer", desc: "Bank transfer" },
        { id: "ewallet", name: "E-Wallet", desc: "DANA / OVO / GOPAY" }
      ]
    };
  },

  computed: {
    total() {
      const data = JSON.parse(localStorage.getItem("transaksiTerakhir"));
      return data?.total || 0;
    },

    change() {
      return this.cash - this.total;
    }
  },

  mounted() {
    const data = JSON.parse(localStorage.getItem("transaksiTerakhir"));
    this.items = data?.items || [];
  },

  methods: {
    proses() {

      if (this.method === "cash" && this.cash < this.total) {
        alert("Uang kurang!");
        return;
      }

      const transaksi = {
        items: this.items,
        bayar: this.method === "cash" ? this.cash : this.total,
        total: this.total,
        metode: this.method
      };

      localStorage.setItem("transaksiCetak", JSON.stringify(transaksi));

      this.$router.push("/cetak-struk");
    }
  }
};
</script>