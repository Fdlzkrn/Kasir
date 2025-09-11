<template>
<div class="min-h-screen bg-gray-50">
    <AdminSidebar 
        :isOpen="sidebarOpen" 
        @close-sidebar="sidebarOpen = false"
        @toggle-collapse="handleToggleCollapse"
      />
    <div :class="[
          'transition-all duration-300',
          sidebarCollapsed && !isMobile ? 'lg:ml-20' : 'lg:ml-72'
        ]">
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
            <div class="flex items-center justify-between px-6 py-4">
                <div class="flex items-center space-x-4">

                    <button @click="sidebarOpen = true" class="lg:hidden w-10 h-10 bg-[#5E936C] text-white rounded-lg flex items-center justify-center hover:bg-[#4A7556] transition-colors duration-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
                            <h2 class="text-3xl font-bold text-gray-800 mb-2">Filter Data</h2>
                            <p class="text-gray-600">Pilih kolom data yang akan digunakan untuk analisis dan laporan</p>
                        </div>
                        <div class="hidden md:flex items-center space-x-4">
                            <div class="bg-[#5E936C]/10 px-4 py-2 rounded-lg">
                                <span class="text-[#5E936C] font-semibold text-sm">{{ selectedFilters.length }} Filter Terpilih</span>
                            </div>
                        </div>
                    </div>

                    <div class="mb-6">
                        <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <div class="flex-1 w-full">
                                <input type="file" ref="fileInput" accept=".xlsx,.xls" @change="handleFileSelect" class="hidden" />
                                <div @click="$refs.fileInput.click()" class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors duration-200 flex items-center">
                                    <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span class="text-gray-600">
                                        {{ selectedFile ? selectedFile.name : 'Upload File Excel' }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex space-x-3">
                                <button @click="handleProses" :disabled="!selectedFile || isProcessing" class="bg-[#4A90E2] hover:bg-[#357ABD] disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2">
                                    <svg v-if="isProcessing" class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" stroke-width="4" stroke-opacity="0.25" />
                                        <path stroke-width="4" stroke-linecap="round" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>{{ isProcessing ? 'Memproses...' : 'Proses' }}</span>
                                </button>
                                <button @click="handleCancel" class="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="showFilters" class="space-y-6">
                        <div class="border-t border-gray-200 pt-6">
                            <h3 class="text-lg font-semibold text-gray-800 mb-4">Pilih Kolom Data</h3>
                            <p class="text-sm text-gray-600 mb-6">Pilih kolom-kolom yang akan digunakan dalam laporan. Klik pada tag untuk memilih/membatalkan pilihan.</p>

                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                                <button v-for="filter in availableFilters" :key="filter.id" @click="toggleFilter(filter.id)" :class="[
                        'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border-2',
                        selectedFilters.includes(filter.id) 
                          ? 'bg-[#5E936C] text-white border-[#5E936C] shadow-md transform scale-105' 
                          : 'bg-white text-gray-700 border-gray-300 hover:border-[#5E936C] hover:bg-[#5E936C]/5'
                      ]">
                                    {{ filter.label }}
                                </button>
                            </div>

                            <div v-if="selectedFilters.length > 0" class="mt-6 p-4 bg-[#5E936C]/5 rounded-lg border border-[#5E936C]/20">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <h4 class="font-semibold text-gray-800">Filter Terpilih</h4>
                                        <p class="text-sm text-gray-600 mt-1">{{ selectedFilters.length }} dari {{ availableFilters.length }} kolom dipilih</p>
                                    </div>
                                    <div class="flex space-x-2">
                                        <button @click="selectAllFilters" class="text-[#5E936C] hover:text-[#4A7556] text-sm font-medium">
                                            Pilih Semua
                                        </button>
                                        <span class="text-gray-400">|</span>
                                        <button @click="clearAllFilters" class="text-red-600 hover:text-red-700 text-sm font-medium">
                                            Hapus Semua
                                        </button>
                                    </div>
                                </div>

                                <div class="mt-4 flex flex-wrap gap-2">
                                    <span v-for="filterId in selectedFilters" :key="filterId" class="inline-flex items-center bg-[#5E936C] text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {{ getFilterLabel(filterId) }}
                                        <button @click="toggleFilter(filterId)" class="ml-2 w-4 h-4 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <div v-if="selectedFilters.length > 0" class="mt-8 text-center">
                                <button @click="handleDownload" class="bg-[#F39C12] hover:bg-[#E67E22] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download File</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div v-if="!showFilters && !isProcessing" class="text-center py-12">
                        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                        </div>
                        <h3 class="text-lg font-medium text-gray-800 mb-2">Upload File Untuk Mulai</h3>
                        <p class="text-gray-600">Upload file Excel untuk melihat opsi filter yang tersedia</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm font-medium">Total Data</p>
                            <p class="text-2xl font-bold text-gray-800 mt-2">{{ totalRecords.toLocaleString() }}</p>
                        </div>
                        <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm font-medium">Kolom Tersedia</p>
                            <p class="text-2xl font-bold text-gray-800 mt-2">{{ availableFilters.length }}</p>
                        </div>
                        <div class="w-12 h-12 bg-[#5E936C]/10 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-[#5E936C]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-600 text-sm font-medium">Filter Aktif</p>
                            <p class="text-2xl font-bold text-gray-800 mt-2">{{ selectedFilters.length }}</p>
                        </div>
                        <div class="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 class="text-lg font-bold text-gray-800 mb-4">Aktivitas Terakhir</h3>
                <div class="space-y-4">
                    <div v-for="(activity, index) in recentActivities" :key="index" class="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                            </svg>
                        </div>
                        <div class="flex-1">
                            <p class="font-medium text-gray-800">{{ activity.action }}</p>
                            <p class="text-sm text-gray-600">{{ activity.timestamp }} • {{ activity.filters }} filter</p>
                        </div>
                        <div class="flex items-center">
                            <span class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Selesai
                            </span>
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
    name: 'FilteringData',
    components: {
        AdminSidebar
    },
    data() {
        return {
            sidebarOpen: false,
            sidebarCollapsed: false,
            isMobile: false,
            selectedFile: null,
            isProcessing: false,
            showFilters: false,
            selectedFilters: [],
            totalRecords: 15487,
            availableFilters: [{
                    id: 'no',
                    label: 'NO'
                },
                {
                    id: 'no_rm',
                    label: 'NO RM'
                },
                {
                    id: 'nama_pasien',
                    label: 'NAMA PASIEN'
                },
                {
                    id: 'dokter',
                    label: 'DOKTER'
                },
                {
                    id: 'usia',
                    label: 'USIA'
                },
                {
                    id: 'no_telp',
                    label: 'NO. TELP'
                },
                {
                    id: 'no_ponsel',
                    label: 'NO. PONSEL'
                },
                {
                    id: 'poli',
                    label: 'POLI'
                },
                {
                    id: 'agama',
                    label: 'AGAMA'
                },
                {
                    id: 'tanggal',
                    label: 'TANGGAL'
                },
                {
                    id: 'jam',
                    label: 'JAM'
                },
                {
                    id: 'no_sep',
                    label: 'NO SEP'
                },
                {
                    id: 'no_peserta',
                    label: 'NO PESERTA'
                },
                {
                    id: 'type_pasien',
                    label: 'TYPE PASIEN'
                },
                {
                    id: 'pendidikan',
                    label: 'PENDIDIKAN'
                },
                {
                    id: 'status',
                    label: 'STATUS'
                },
                {
                    id: 'kelompok',
                    label: 'KELOMPOK'
                },
                {
                    id: 'pangkat',
                    label: 'PANGKAT'
                },
                {
                    id: 'nrp',
                    label: 'NRP'
                },
                {
                    id: 'kelamin',
                    label: 'KELAMIN'
                },
                {
                    id: 'hubungan_keluarga',
                    label: 'HUBUNGAN KELUARGA'
                },
                {
                    id: 'kesatuan',
                    label: 'KESATUAN'
                },
                {
                    id: 'angkatan',
                    label: 'ANGKATAN'
                },
                {
                    id: 'diagnosa_awal',
                    label: 'DIAGNOSA AWAL'
                },
                {
                    id: 'kode',
                    label: 'KODE'
                },
                {
                    id: 'alamat',
                    label: 'ALAMAT'
                },
                {
                    id: 'kode2',
                    label: 'KODE'
                },
                {
                    id: 'diagnosa_akhir',
                    label: 'DIAGNOSA AKHIR'
                },
                {
                    id: 'tanggal_lahir',
                    label: 'TANGGAL LAHIR'
                },
                {
                    id: 'jenis_pembayaran',
                    label: 'JENIS PEMBAYARAN'
                },
                {
                    id: 'jenis_rawat',
                    label: 'JENIS RAWAT'
                }
            ],
            recentActivities: [{
                    action: 'Filter data laporan rawat jalan',
                    timestamp: '2 jam yang lalu',
                    filters: '15'
                },
                {
                    action: 'Filter data operasi bulan Januari',
                    timestamp: '5 jam yang lalu',
                    filters: '12'
                },
                {
                    action: 'Filter laporan IGD',
                    timestamp: '1 hari yang lalu',
                    filters: '18'
                }
            ]
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
                this.showFilters = false
            }
        },
        async handleProses() {
            if (!this.selectedFile) return

            this.isProcessing = true
            this.showFilters = false

            // Simulate processing
            await new Promise(resolve => setTimeout(resolve, 2000))

            this.isProcessing = false
            this.showFilters = true

            // Pre-select some common filters
            this.selectedFilters = ['nama_pasien', 'dokter', 'tanggal', 'diagnosa_awal']
        },
        handleCancel() {
            this.selectedFile = null
            this.showFilters = false
            this.selectedFilters = []
            this.isProcessing = false
            this.$refs.fileInput.value = ''
        },
        toggleFilter(filterId) {
            const index = this.selectedFilters.indexOf(filterId)
            if (index > -1) {
                this.selectedFilters.splice(index, 1)
            } else {
                this.selectedFilters.push(filterId)
            }
        },
        selectAllFilters() {
            this.selectedFilters = this.availableFilters.map(f => f.id)
        },
        clearAllFilters() {
            this.selectedFilters = []
        },
        getFilterLabel(filterId) {
            const filter = this.availableFilters.find(f => f.id === filterId)
            return filter ? filter.label : filterId
        },
        handleDownload() {
            // Simulate download
            const filename = `filtered_data_${new Date().toISOString().split('T')[0]}.xlsx`
            alert(`File ${filename} berhasil didownload!\n\nFilter yang digunakan: ${this.selectedFilters.length} kolom`)

            // Add to recent activities
            this.recentActivities.unshift({
                action: `Filter dan download data ${this.selectedFile.name}`,
                timestamp: 'Baru saja',
                filters: this.selectedFilters.length.toString()
            })
        }
    }
}
</script>

<style>
/* Custom animations */
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

/* Filter tag animations */
.transform {
    transition: transform 0.2s ease-in-out;
}

/* Button hover effects */
button:hover:not(:disabled) {
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}

/* File upload hover effect */
.cursor-pointer:hover {
    border-color: #5E936C;
    background-color: rgba(94, 147, 108, 0.05);
}
</style>
