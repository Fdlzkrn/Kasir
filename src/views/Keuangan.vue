<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-emerald-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Manajemen Uang</p>
      <h1 class="text-2xl font-bold">Keuangan Kasir</h1>
    </div>

    <!-- Summary -->
    <div class="grid grid-cols-2 gap-4 mb-5">

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Pemasukan</p>
        <h2 class="text-xl font-bold text-green-600 mt-1">
          Rp {{ totalIncome.toLocaleString() }}
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Pengeluaran</p>
        <h2 class="text-xl font-bold text-red-500 mt-1">
          Rp {{ totalExpense.toLocaleString() }}
        </h2>
      </div>

      <div class="bg-white rounded-3xl p-4 shadow col-span-2">
        <p class="text-sm text-slate-500">Saldo Akhir</p>
        <h2
          class="text-2xl font-bold mt-1"
          :class="balance >= 0 ? 'text-blue-600' : 'text-red-500'"
        >
          Rp {{ balance.toLocaleString() }}
        </h2>
      </div>

    </div>

    <!-- Form -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">
        {{ editIndex === null ? 'Tambah Transaksi' : 'Edit Transaksi' }}
      </h2>

      <div class="space-y-3">

        <input
          v-model="form.title"
          type="text"
          placeholder="Nama Transaksi"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.amount"
          type="number"
          placeholder="Jumlah Uang"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <select
          v-model="form.type"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        >
          <option value="">Pilih Jenis</option>
          <option value="income">Pemasukan</option>
          <option value="expense">Pengeluaran</option>
        </select>

        <button
          @click="saveTransaction"
          class="w-full bg-emerald-600 text-white py-3 rounded-2xl font-bold"
        >
          {{ editIndex === null ? 'Simpan Data' : 'Update Data' }}
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
        placeholder="Cari transaksi..."
        class="w-full px-4 py-3 rounded-2xl border outline-none"
      />
    </div>

    <!-- Transaction List -->
    <div class="space-y-4">

      <div
        v-for="(item, index) in filteredTransactions"
        :key="index"
        class="bg-white rounded-3xl p-4 shadow"
      >
        <div class="flex justify-between items-start gap-3">

          <div>
            <h3 class="font-bold text-slate-800">
              {{ item.title }}
            </h3>

            <p
              class="text-sm mt-1"
              :class="
                item.type === 'income'
                  ? 'text-green-600'
                  : 'text-red-500'
              "
            >
              {{
                item.type === "income"
                  ? "Pemasukan"
                  : "Pengeluaran"
              }}
            </p>

            <p class="text-lg font-bold mt-1">
              Rp {{ Number(item.amount).toLocaleString() }}
            </p>
          </div>

          <div class="flex gap-2">
            <button
              @click="editTransaction(index)"
              class="bg-yellow-400 px-3 py-2 rounded-xl text-sm"
            >
              ✏️
            </button>

            <button
              @click="deleteTransaction(index)"
              class="bg-red-500 text-white px-3 py-2 rounded-xl text-sm"
            >
              🗑️
            </button>
          </div>

        </div>
      </div>

      <div
        v-if="filteredTransactions.length === 0"
        class="text-center text-slate-500 py-10"
      >
        Data keuangan tidak ditemukan
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "KeuanganPage",

  data() {
    return {
      search: "",
      editIndex: null,

      form: {
        title: "",
        amount: "",
        type: ""
      },

      transactions: [
        {
          title: "Penjualan Hari Ini",
          amount: 500000,
          type: "income"
        },
        {
          title: "Beli Bahan Baku",
          amount: 150000,
          type: "expense"
        },
        {
          title: "Bayar Listrik",
          amount: 100000,
          type: "expense"
        }
      ]
    };
  },

  computed: {
    filteredTransactions() {
      return this.transactions.filter((item) =>
        item.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    totalIncome() {
      return this.transactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + Number(item.amount), 0);
    },

    totalExpense() {
      return this.transactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + Number(item.amount), 0);
    },

    balance() {
      return this.totalIncome - this.totalExpense;
    }
  },

  methods: {
    saveTransaction() {
      if (
        this.form.title === "" ||
        this.form.amount === "" ||
        this.form.type === ""
      ) {
        alert("Isi semua data!");
        return;
      }

      if (this.editIndex === null) {
        this.transactions.push({
          title: this.form.title,
          amount: this.form.amount,
          type: this.form.type
        });
      } else {
        this.transactions[this.editIndex] = {
          title: this.form.title,
          amount: this.form.amount,
          type: this.form.type
        };
      }

      this.resetForm();
    },

    editTransaction(index) {
      const item = this.transactions[index];

      this.form.title = item.title;
      this.form.amount = item.amount;
      this.form.type = item.type;

      this.editIndex = index;
    },

    deleteTransaction(index) {
      if (confirm("Hapus data ini?")) {
        this.transactions.splice(index, 1);
      }
    },

    resetForm() {
      this.form.title = "";
      this.form.amount = "";
      this.form.type = "";
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