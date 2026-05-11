<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto relative pb-24">

    <!-- HEADER -->
    <header class="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-5 pt-12 pb-8 rounded-b-3xl shadow-lg">

      <div class="flex justify-between items-center">
        <div>
          <p class="text-xs opacity-80">Selamat Datang</p>
          <h1 class="text-2xl font-bold">Bloop</h1>
        </div>

        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-xl">
          👤
        </div>
      </div>

      <!-- SEARCH -->
      <div class="mt-5">
        <input
          type="text"
          placeholder="Cari produk, laporan..."
          class="w-full px-4 py-3 rounded-2xl bg-white text-slate-700 outline-none shadow focus:ring-2 focus:ring-white/40"
        />
      </div>

    </header>

    <!-- CONTENT -->
    <main class="px-5 -mt-6 space-y-6">

      <!-- SUMMARY -->
      <div class="bg-white rounded-3xl shadow-lg p-5">

        <p class="text-xs text-slate-500">Penjualan Hari Ini</p>
        <h2 class="text-3xl font-bold text-slate-800 mt-1">
          Rp 2.000.000.000.000
        </h2>

        <!-- STATS -->
        <div class="grid grid-cols-3 gap-3 mt-5">

          <div class="bg-slate-50 rounded-2xl p-3 text-center">
            <p class="text-lg font-bold text-indigo-600">53</p>
            <p class="text-[11px] text-slate-500">Transaksi</p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-3 text-center">
            <p class="text-lg font-bold text-green-600">245</p>
            <p class="text-[11px] text-slate-500">Produk</p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-3 text-center">
            <p class="text-lg font-bold text-purple-600">89</p>
            <p class="text-[11px] text-slate-500">Member</p>
          </div>

        </div>

      </div>

      <!-- MENU -->
      <div>

        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold text-slate-700">Menu Aplikasi</h3>
        </div>

        <!-- MENU GRID (lebih clean) -->
        <div class="grid grid-cols-4 gap-3">

          <a href="/kasir" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">🛒</div>
            <p class="text-[11px] mt-1 text-slate-600">Kasir</p>
          </a>

          <a href="/produk" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">📦</div>
            <p class="text-[11px] mt-1 text-slate-600">Produk</p>
          </a>

          <a href="/laporan" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">📊</div>
            <p class="text-[11px] mt-1 text-slate-600">Laporan</p>
          </a>

          <a href="/member" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">👥</div>
            <p class="text-[11px] mt-1 text-slate-600">Member</p>
          </a>

          <a href="/keuangan" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">💰</div>
            <p class="text-[11px] mt-1 text-slate-600">Keuangan</p>
          </a>

          <a href="/supplier" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">🚚</div>
            <p class="text-[11px] mt-1 text-slate-600">Supplier</p>
          </a>

          <a href="/setting" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">⚙️</div>
            <p class="text-[11px] mt-1 text-slate-600">Setting</p>
          </a>

          <a href="/lainnya" class="bg-white rounded-2xl p-3 text-center shadow-sm active:scale-95 transition">
            <div class="text-2xl">➕</div>
            <p class="text-[11px] mt-1 text-slate-600">Lainnya</p>
          </a>

        </div>

      </div>

      <!-- RECENT -->
      <div>

        <div class="flex justify-between items-center mb-3">
          <h3 class="font-semibold text-slate-700">Transaksi Terbaru</h3>
          <button class="text-indigo-600 text-xs">Lihat Semua</button>
        </div>

        <div class="space-y-3">

          <div class="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center">
            <div>
              <p class="font-medium text-sm">Kopi Latte</p>
              <p class="text-[11px] text-slate-400">10 Mei 2026</p>
            </div>
            <p class="font-bold text-green-600 text-sm">Rp25.000</p>
          </div>

          <div class="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center">
            <div>
              <p class="font-medium text-sm">Roti Bakar</p>
              <p class="text-[11px] text-slate-400">10 Mei 2026</p>
            </div>
            <p class="font-bold text-green-600 text-sm">Rp18.000</p>
          </div>

          <div class="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center">
            <div>
              <p class="font-medium text-sm">Es Teh</p>
              <p class="text-[11px] text-slate-400">10 Mei 2026</p>
            </div>
            <p class="font-bold text-green-600 text-sm">Rp10.000</p>
          </div>

        </div>

      </div>

    </main>

    <!-- BOTTOM NAV -->
    <footer class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t shadow-lg">

      <div class="grid grid-cols-4 text-center py-3">

        <button class="text-indigo-600">
          <div class="text-xl">🏠</div>
          <p class="text-[11px]">Home</p>
        </button>

        <a href="/kasir" class="text-slate-600">
          <div class="text-xl">🛒</div>
          <p class="text-[11px]">Kasir</p>
        </a>

        <a href="/produk" class="text-slate-600">
          <div class="text-xl">📦</div>
          <p class="text-[11px]">Produk</p>
        </a>

        <button class="text-slate-600">
          <div class="text-xl">👤</div>
          <p class="text-[11px]">Akun</p>
        </button>

      </div>

    </footer>

  </div>
</template>