<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-blue-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Analisa Penjualan</p>
      <h1 class="text-2xl font-bold">Laporan Kasir</h1>
    </div>

    <!-- Filter -->
    <div class="bg-white rounded-3xl p-4 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-3">Filter Tanggal</h2>

      <div class="space-y-3">
        <input
          type="date"
          v-model="startDate"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          type="date"
          v-model="endDate"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <button
          @click="filterReport"
          class="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold"
        >
          Tampilkan Laporan
        </button>
      </div>
    </div>

    <!-- Summary -->
    <div class="grid grid-cols-2 gap-4 mb-5">

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Total Penjualan</p>
        <h3 class="text-xl font-bold text-green-600 mt-1">
          Rp {{ totalSales.toLocaleString() }}
        </h3>
      </div>

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Jumlah Transaksi</p>
        <h3 class="text-xl font-bold text-blue-600 mt-1">
          {{ filteredReports.length }}
        </h3>
      </div>

    </div>

    <!-- Produk Terjual -->
    <div class="bg-white rounded-3xl p-4 shadow mb-5">
      <p class="text-sm text-slate-500">Produk Terjual</p>
      <h3 class="text-2xl font-bold text-purple-600 mt-1">
        {{ totalItems }}
      </h3>
    </div>

    <!-- List Report -->
    <div class="space-y-4">

      <div
        v-for="(item, index) in filteredReports"
        :key="index"
        class="bg-white rounded-3xl p-4 shadow"
      >
        <div class="flex justify-between items-start">
          <div>
            <h3 class="font-bold text-slate-800">{{ item.product }}</h3>
            <p class="text-sm text-slate-500">{{ item.date }}</p>
            <p class="text-sm text-slate-500">
              Qty: {{ item.qty }}
            </p>
          </div>

          <div class="text-right">
            <p class="font-bold text-green-600">
              Rp {{ item.total.toLocaleString() }}
            </p>
            <span
              class="text-xs px-2 py-1 rounded-full"
              :class="item.status === 'Sukses'
                ? 'bg-green-100 text-green-600'
                : 'bg-yellow-100 text-yellow-600'"
            >
              {{ item.status }}
            </span>
          </div>
        </div>
      </div>

      <div
        v-if="filteredReports.length === 0"
        class="text-center text-slate-500 py-10"
      >
        Tidak ada data laporan
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "LaporanPage",

  data() {
    return {
      startDate: "",
      endDate: "",

      reports: [
        {
          product: "Kopi Latte",
          qty: 2,
          total: 50000,
          date: "2026-05-01",
          status: "Sukses"
        },
        {
          product: "Roti Bakar",
          qty: 1,
          total: 18000,
          date: "2026-05-03",
          status: "Sukses"
        },
        {
          product: "Es Teh",
          qty: 3,
          total: 30000,
          date: "2026-05-06",
          status: "Pending"
        },
        {
          product: "Nasi Goreng",
          qty: 2,
          total: 60000,
          date: "2026-05-09",
          status: "Sukses"
        }
      ],

      filteredReports: []
    };
  },

  mounted() {
    this.filteredReports = this.reports;
  },

  computed: {
    totalSales() {
      return this.filteredReports.reduce((sum, item) => {
        return sum + item.total;
      }, 0);
    },

    totalItems() {
      return this.filteredReports.reduce((sum, item) => {
        return sum + item.qty;
      }, 0);
    }
  },

  methods: {
    filterReport() {
      if (!this.startDate || !this.endDate) {
        this.filteredReports = this.reports;
        return;
      }

      this.filteredReports = this.reports.filter((item) => {
        return (
          item.date >= this.startDate &&
          item.date <= this.endDate
        );
      });
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>