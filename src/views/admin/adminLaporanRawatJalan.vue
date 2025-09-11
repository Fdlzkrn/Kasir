<template>
    <div class="min-h-screen bg-gray-50">
      <AdminSidebar
        :isOpen="sidebarOpen"
        @close-sidebar="sidebarOpen = false"
        @toggle-collapse="handleToggleCollapse"
      />
      <div
        :class="[
          'transition-all duration-300',
          sidebarCollapsed && !isMobile ? 'lg:ml-20' : 'lg:ml-72'
        ]"
      >
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div class="flex items-center justify-between px-6 py-4">
            <div class="flex items-center space-x-4">
              <button @click="sidebarOpen = true" class="lg:hidden w-10 h-10 bg-[#5E936C] text-white rounded-lg flex items-center justify-center hover:bg-[#4A7556] transition-colors duration-200">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div>
                <h1 class="text-2xl font-bold text-gray-800">Laporan Rawat Jalan</h1>
                <p class="text-gray-600 text-sm">RSPAD Gatot Soebroto</p>
              </div>
            </div>
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-3 bg-gray-100 rounded-lg px-3 py-2">
                <div class="w-8 h-8 bg-[#5E936C] rounded-full flex items-center justify-center">
                  <span class="text-white font-semibold text-sm">AD</span>
                </div>
                <div class="hidden md:block">
                  <p class="text-sm font-medium text-gray-800">Admin User</p>
                  <p class="text-xs text-gray-600">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <main class="p-6">
          <div class="mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="mb-6">
                <h2 class="text-3xl font-bold text-gray-800 mb-2">Buat Laporan Rawat Jalan</h2>
                <p class="text-gray-600">Pilih filter dan upload file data untuk membuat laporan.</p>
              </div>
  
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div>
                      <label for="startDate" class="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
                      <input type="date" id="startDate" v-model="startDate" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-[#5E936C] focus:border-[#5E936C] transition duration-200" />
                  </div>
                  <div>
                      <label for="endDate" class="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
                      <input type="date" id="endDate" v-model="endDate" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-[#5E936C] focus:border-[#5E936C] transition duration-200" />
                  </div>
                </div>
  
                <div>
                    <label for="poli" class="block text-sm font-medium text-gray-700 mb-2">Poli Tujuan</label>
                    <select id="poli" v-model="selectedPoli" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-[#5E936C] focus:border-[#5E936C] transition duration-200">
                      <option value="semua">Semua Poli</option>
                      <option value="jantung">Poli Jantung</option>
                      <option value="anak">Poli Anak</option>
                      <option value="dalam">Poli Penyakit Dalam</option>
                      <option value="saraf">Poli Saraf</option>
                      <option value="mata">Poli Mata</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label for="patientType" class="block text-sm font-medium text-gray-700 mb-2">Jenis Pasien</label>
                    <select id="patientType" v-model="patientType" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-[#5E936C] focus:border-[#5E936C] transition duration-200">
                      <option value="semua">Semua Jenis</option>
                      <option value="bpjs">BPJS</option>
                      <option value="umum">Umum</option>
                      <option value="asuransi">Asuransi Lain</option>
                    </select>
                  </div>
              </div>
              
              <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 mb-2">File Data Rawat Jalan</label>
                  <input type="file" ref="fileInput" accept=".xlsx,.xls" @change="handleFileSelect" class="hidden" />
                  <div @click="$refs.fileInput.click()" class="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200 flex items-center">
                    <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span class="text-gray-600 truncate">
                      {{ selectedFile ? selectedFile.name : 'Upload File Excel' }}
                    </span>
                  </div>
              </div>
              
              <div class="flex items-center justify-end space-x-3 border-t border-gray-200 pt-6">
                  <button @click="handleProses" :disabled="!isFormValid || isProcessing" class="bg-[#4A90E2] hover:bg-[#357ABD] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                      <svg v-if="isProcessing" class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.75V6.25m0 11.5v1.5m-6.364-2.136l1.06 1.06M17.636 6.364l-1.06 1.06m-12.728 0l1.06-1.06M17.636 17.636l-1.06-1.06M4.75 12H6.25m11.5 0h1.5" />
                      </svg>
                      <span>{{ isProcessing ? 'Memproses...' : 'Proses Laporan' }}</span>
                  </button>
                  <button @click="handleCancel" class="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                      Batal
                  </button>
              </div>
            </div>
          </div>
  
          <div v-if="reportData" class="animate-fadeIn space-y-8">
            <div>
              <h3 class="text-xl font-bold text-gray-800 mb-4">Ringkasan Laporan ({{ reportData.startDate }} - {{ reportData.endDate }})</h3>
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div v-for="stat in reportData.summaryStats" :key="stat.label" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center justify-between">
                      <div>
                          <p class="text-gray-600 text-sm font-medium">{{ stat.label }}</p>
                          <p class="text-2xl font-bold text-gray-800 mt-2">{{ stat.value }}</p>
                      </div>
                      <div :class="['w-12 h-12 rounded-lg flex items-center justify-center', stat.bgColor]">
                          <svg class="w-6 h-6" :class="stat.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="stat.icon"></svg>
                      </div>
                  </div>
              </div>
            </div>
  
            <div class="bg-white rounded-xl shadow-sm border border-gray-200">
              <div class="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200">
                  <div>
                      <h3 class="text-lg font-bold text-gray-800">Detail Kunjungan Pasien</h3>
                      <p class="text-sm text-gray-600 mt-1">Menampilkan {{ reportData.details.length }} data kunjungan terakhir.</p>
                  </div>
                  <button @click="handleDownload" class="bg-[#F39C12] hover:bg-[#E67E22] text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md flex items-center space-x-2 mt-4 sm:mt-0">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <span>Download</span>
                  </button>
              </div>
              <div class="overflow-x-auto">
                  <table class="w-full text-sm text-left text-gray-600">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                              <th scope="col" class="px-6 py-3">Tanggal</th>
                              <th scope="col" class="px-6 py-3">No. RM</th>
                              <th scope="col" class="px-6 py-3">Nama Pasien</th>
                              <th scope="col" class="px-6 py-3">Poli Tujuan</th>
                              <th scope="col" class="px-6 py-3">Dokter</th>
                              <th scope="col" class="px-6 py-3">Jenis Pembayaran</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="(item, index) in reportData.details" :key="index" class="bg-white border-b hover:bg-gray-50">
                              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{{ item.tanggal }}</td>
                              <td class="px-6 py-4">{{ item.norm }}</td>
                              <td class="px-6 py-4">{{ item.pasien }}</td>
                              <td class="px-6 py-4">{{ item.poli }}</td>
                              <td class="px-6 py-4">{{ item.dokter }}</td>
                              <td class="px-6 py-4">
                                  <span :class="['px-2 py-1 rounded-full text-xs font-medium', getPaymentBadge(item.payment)]">
                                      {{ item.payment }}
                                  </span>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
          </div>
  
          <div v-if="!reportData && !isProcessing" class="text-center py-12">
              <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-800 mb-2">Belum Ada Laporan</h3>
              <p class="text-gray-600">Silakan lengkapi form di atas dan klik 'Proses Laporan' untuk memulai.</p>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
  import AdminSidebar from '../../components/AdminSidebar.vue'
  
  // Helper to format date to YYYY-MM-DD
  const formatDate = (date) => {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      return [year, month, day].join('-');
  }
  
  export default {
    name: 'LaporanRawatJalan',
    components: {
      AdminSidebar
    },
    data() {
      return {
        sidebarOpen: false,
        sidebarCollapsed: false,
        isMobile: false,
  
        selectedFile: null,
        startDate: formatDate(new Date()),
        endDate: formatDate(new Date()),
        selectedPoli: 'semua',
        patientType: 'semua',
        
        isProcessing: false,
        reportData: null,
      }
    },
    computed: {
      isFormValid() {
        return this.selectedFile && this.startDate && this.endDate;
      }
    },
    mounted() {
      this.checkMobile()
      window.addEventListener('resize', this.checkMobile)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkMobile)
    },
    methods: {
      handleToggleCollapse(isCollapsed) {
        this.sidebarCollapsed = isCollapsed
      },
      checkMobile() {
        this.isMobile = window.innerWidth < 1024
      },
      handleFileSelect(event) {
        const file = event.target.files[0]
        if (file) {
          this.selectedFile = file
        }
      },
      async handleProses() {
        if (!this.isFormValid) return;
  
        this.isProcessing = true
        this.reportData = null
  
        // Simulate API call and processing
        await new Promise(resolve => setTimeout(resolve, 2500))
  
        // Mock data for demonstration
        this.reportData = {
          startDate: this.startDate,
          endDate: this.endDate,
          summaryStats: [
            { label: 'Total Kunjungan', value: 4520, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.002 3.002 0 014.288 0M12 15a3 3 0 110-6 3 3 0 010 6z" />', bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
            { label: 'Pasien Baru', value: 834, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
            { label: 'Pasien Lama', value: 3686, icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5M7 7h10v10H7V7z" />', bgColor: 'bg-yellow-100', iconColor: 'text-yellow-600' },
            { label: 'Rata-rata / Hari', value: '150', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />', bgColor: 'bg-indigo-100', iconColor: 'text-indigo-600' }
          ],
          details: [
              { tanggal: '2025-09-11', norm: '123456', pasien: 'Agus Setiawan', poli: 'Poli Jantung', dokter: 'Dr. Hartono', payment: 'BPJS' },
              { tanggal: '2025-09-11', norm: '123457', pasien: 'Siti Aminah', poli: 'Poli Anak', dokter: 'Dr. Indah', payment: 'Umum' },
              { tanggal: '2025-09-10', norm: '123458', pasien: 'Rahmat Hidayat', poli: 'Poli Penyakit Dalam', dokter: 'Dr. Budi', payment: 'BPJS' },
              { tanggal: '2025-09-10', norm: '123459', pasien: 'Lina Marlina', poli: 'Poli Saraf', dokter: 'Dr. Wawan', payment: 'Asuransi Lain' },
              { tanggal: '2025-09-09', norm: '123460', pasien: 'Joko Susilo', poli: 'Poli Mata', dokter: 'Dr. Retno', payment: 'Umum' },
              { tanggal: '2025-09-09', norm: '123456', pasien: 'Agus Setiawan', poli: 'Poli Jantung', dokter: 'Dr. Hartono', payment: 'BPJS' },
          ]
        }
  
        this.isProcessing = false
      },
      handleCancel() {
        this.selectedFile = null
        this.reportData = null
        this.isProcessing = false
        this.startDate = formatDate(new Date())
        this.endDate = formatDate(new Date())
        this.selectedPoli = 'semua'
        this.patientType = 'semua'
        if(this.$refs.fileInput) {
          this.$refs.fileInput.value = ''
        }
      },
      handleDownload() {
        const filename = `Laporan_Rawat_Jalan_${this.reportData.startDate}_to_${this.reportData.endDate}.xlsx`
        alert(`Berhasil mengunduh file:\n${filename}`)
      },
      getPaymentBadge(paymentType) {
          const styles = {
              'BPJS': 'bg-blue-100 text-blue-800',
              'Umum': 'bg-green-100 text-green-800',
              'Asuransi Lain': 'bg-purple-100 text-purple-800'
          }
          return styles[paymentType] || 'bg-gray-100 text-gray-800';
      }
    }
  }
  </script>
  
  <style>
  /* You can reuse the same styles from the previous component, or move them to a global CSS file */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  button:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  
  button:active {
    transform: translateY(0);
  }
  </style>