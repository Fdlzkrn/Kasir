<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4">

    <div id="printArea" class="rounded-2xl p-4 shadow text-sm" :class="templateClass">

      <!-- STORE -->
      <div class="text-center mb-3">

        <div v-if="nota.showLogo" class="w-16 h-16 mx-auto rounded-full overflow-hidden border mb-2 bg-white">
          <img v-if="nota.store?.logo" :src="nota.store.logo" class="w-full h-full object-cover" />
        </div>

        <h2 class="font-bold text-lg">{{ nota.store?.name || 'TOKO' }}</h2>
        <p class="text-xs">{{ nota.store?.address || '-' }}</p>
        <p class="text-xs">{{ nota.store?.phone || '-' }}</p>

      </div>

      <!-- ITEMS -->
      <div class="border-y py-2 space-y-1">

        <div
          v-for="(item, i) in safeItems"
          :key="i"
          class="flex justify-between"
        >
          <span>
            {{ item.nama }} x{{ item.qty }}
          </span>

          <span>
            {{ format(item.total) }}
          </span>
        </div>

      </div>

      <!-- TOTAL -->
      <div class="mt-2 space-y-1">

        <div class="flex justify-between">
          <span>Subtotal</span>
          <span>{{ format(subtotal) }}</span>
        </div>

        <div v-if="nota.showTax" class="flex justify-between">
          <span>Pajak (10%)</span>
          <span>{{ format(pajak) }}</span>
        </div>

        <div class="flex justify-between">
          <span>Bayar</span>
          <span>{{ format(bayar) }}</span>
        </div>

        <div class="flex justify-between font-bold">
          <span>Kembalian</span>
          <span>{{ format(kembali) }}</span>
        </div>

      </div>

      <!-- QRIS -->
      <div v-if="nota.showQRIS" class="text-center mt-3">
        [ QRIS ]
      </div>

      <!-- FOOTER -->
      <p class="text-center mt-3 text-xs">
        {{ nota.footer || 'Terima kasih' }}
      </p>

    </div>

    <button @click="print" class="w-full bg-indigo-600 text-white py-3 rounded-xl mt-4">
      Print
    </button>

    <button @click="done" class="w-full bg-green-600 text-white py-3 rounded-xl mt-2">
      Selesai
    </button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      bayar: 0,
      nota: {}
    };
  },

  computed: {

    // 🔥 SAFE DATA (ANTI BLANK)
    safeItems() {
      return this.items.map(i => ({
        nama: i.nama || i.name || 'Item',
        qty: i.qty || 1,
        total: i.total || ((i.price || 0) * (i.qty || 1))
      }));
    },

    subtotal() {
      return this.safeItems.reduce((a, b) => a + b.total, 0);
    },

    pajak() {
      return this.nota.showTax ? this.subtotal * 0.1 : 0;
    },

    kembali() {
      return this.bayar - (this.subtotal + this.pajak);
    },

    templateClass() {
      const t = this.nota.template;

      if (t === "modern") return "bg-slate-900 text-white";
      if (t === "minimal") return "bg-slate-50 text-slate-700";
      if (t === "premium") return "bg-yellow-50 text-yellow-900";
      return "bg-white text-black";
    }
  },

  mounted() {
    const trx = JSON.parse(localStorage.getItem("transaksiCetak")) || {};
    const template = JSON.parse(localStorage.getItem("templateNota")) || {};

    this.items = trx.items || [];
    this.bayar = trx.bayar || trx.total || 0; // 🔥 FIX FALLBACK
    this.nota = template;
  },

  methods: {
    format(v) {
      return new Intl.NumberFormat("id-ID").format(v || 0);
    },

    print() {
      window.print();
    },

    done() {
      localStorage.removeItem("transaksiTerakhir");
      localStorage.removeItem("transaksiCetak");

      this.$router.push("/kasir");
    }
  }
};
</script>