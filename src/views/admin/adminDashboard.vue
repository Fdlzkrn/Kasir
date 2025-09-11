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
              
              <button
                @click="sidebarOpen = true"
                class="lg:hidden w-10 h-10 bg-[#5E936C] text-white rounded-lg flex items-center justify-center hover:bg-[#4A7556] transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
  
              <div>
                <h1 class="text-2xl font-bold text-gray-800">Sistem Laporan</h1>
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
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h2 class="text-3xl font-bold text-gray-800 mb-2">Optimasi Awal</h2>
                  <p class="text-gray-600">Upload dan optimasi data laporan untuk pemrosesan lebih lanjut</p>
                </div>
                <div class="hidden md:flex items-center space-x-4">
                  <div class="bg-[#5E936C]/10 px-4 py-2 rounded-lg">
                    <span class="text-[#5E936C] font-semibold text-sm">Status: Siap Upload</span>
                  </div>
                </div>
              </div>
  
              
              <div class="bg-gray-50 rounded-xl p-8 border-2 border-dashed border-gray-300 hover:border-[#5E936C] transition-colors duration-200">
                <div class="text-center">
                  <div class="w-16 h-16 bg-[#5E936C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-[#5E936C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                  </div>
                  <h3 class="text-lg font-semibold text-gray-800 mb-2">Upload File Excel</h3>
                  <p class="text-gray-600 mb-6">Pilih file Excel (.xlsx, .xls) yang berisi data laporan untuk dioptimasi</p>
                  
                  
                  <div class="relative">
                    <input
                      ref="fileInput"
                      type="file"
                      accept=".xlsx,.xls"
                      @change="handleFileSelect"
                      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div class="flex items-center justify-center space-x-4">
                      <button
                        @click="$refs.fileInput.click()"
                        class="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        <span>{{ selectedFile ? selectedFile.name : 'Upload File Excel' }}</span>
                      </button>
                    </div>
                  </div>
  
                  
                  <div v-if="selectedFile" class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z"/>
                            <path d="M14 2v6h6"/>
                          </svg>
                        </div>
                        <div class="text-left">
                          <p class="font-medium text-gray-800">{{ selectedFile.name }}</p>
                          <p class="text-sm text-gray-600">{{ formatFileSize(selectedFile.size) }}</p>
                        </div>
                      </div>
                      <button
                        @click="removeFile"
                        class="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              
              <div class="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-8">
                <button
                  @click="handleOptimasi"
                  :disabled="!selectedFile || isProcessing"
                  class="w-full sm:w-auto bg-[#4A90E2] hover:bg-[#357ABD] disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 min-w-32"
                >
                  <svg v-if="isProcessing" class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke-width="4" stroke-opacity="0.25"/>
                    <path stroke-width="4" stroke-linecap="round" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span>{{ isProcessing ? 'Memproses...' : 'Optimasi' }}</span>
                </button>
  
                <button
                  @click="handleCancel"
                  class="w-full sm:w-auto bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 min-w-32"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  <span>Cancel</span>
                </button>
  
                <button
                  v-if="optimizedFile"
                  @click="downloadFile"
                  class="w-full sm:w-auto bg-[#5E936C] hover:bg-[#4A7556] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 min-w-32"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <span>Download File</span>
                </button>
              </div>
  
              
              <div v-if="isProcessing" class="mt-8">
                <div class="bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    class="bg-[#4A90E2] h-2 rounded-full transition-all duration-300"
                    :style="{ width: progress + '%' }"
                  ></div>
                </div>
                <div class="text-center">
                  <p class="text-gray-600 font-medium">{{ progressMessage }}</p>
                  <p class="text-sm text-gray-500 mt-1">{{ progress }}% selesai</p>
                </div>
              </div>
  
              
              <div v-if="showSuccess" class="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-green-800">Optimasi Berhasil!</p>
                    <p class="text-sm text-green-700">File telah dioptimasi dan siap untuk didownload.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Riwayat Pemrosesan</h3>
              <div class="space-y-4">
                <div v-for="(item, index) in processingHistory" :key="index" class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14 2l6 6v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h8z"/>
                      <path d="M14 2v6h6"/>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <p class="font-medium text-gray-800">{{ item.filename }}</p>
                    <p class="text-sm text-gray-600">{{ item.timestamp }}</p>
                  </div>
                  <div class="flex items-center">
                    <span :class="[
                      'px-2 py-1 rounded-full text-xs font-medium',
                      item.status === 'success' ? 'bg-green-100 text-green-800' : 
                      item.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    ]">
                      {{ item.status === 'success' ? 'Selesai' : item.status === 'processing' ? 'Proses' : 'Error' }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Informasi Sistem</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Status Server</span>
                  <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span class="text-green-600 font-medium">Online</span>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Kapasitas Storage</span>
                  <span class="font-medium text-gray-800">2.1 GB / 10 GB</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">File Diproses Hari Ini</span>
                  <span class="font-medium text-gray-800">12</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-600">Waktu Pemrosesan Rata-rata</span>
                  <span class="font-medium text-gray-800">2.5 menit</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script>
import AdminSidebar from '../../components/AdminSidebar.vue'

export default {
  name: 'OptimasiAwal',
  components: { AdminSidebar },
  data() {
    return {
      sidebarOpen: false,
      sidebarCollapsed: false,
      isMobile: false,
      // dst...
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
    // dst...
  }
}
</script>

  
  <style >
  /* Custom animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
  
  /* File upload hover effect */
  .border-dashed:hover {
    background-color: rgba(94, 147, 108, 0.05);
  }
  
  /* Button hover effects */
  button:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* Progress bar animation */
  .bg-blue-500 {
    background: linear-gradient(90deg, #4A90E2, #357ABD);
  }
  </style>