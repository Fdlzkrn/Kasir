<template>
<div class="relative">

    <div v-if="isMobile && isOpen" @click="closeSidebar" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"></div>

    <div :class="[
        'fixed top-0 left-0 h-full bg-[#5E936C] shadow-2xl z-50 transition-all duration-300 ease-in-out transform',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
        isCollapsed && !isMobile ? 'w-20' : 'w-72'
      ]">

        <div class="flex items-center justify-between p-6 border-b border-white/10">
            <div v-if="!isCollapsed || isMobile" class="flex items-center space-x-3">
                <div class="flex items-center justify-center">
                    <img src="@/assets/logo.png" alt="Icon" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain" />
                </div>

                <div class="text-white">
                    <h2 class="font-bold text-lg lg:text-xl">E-Laporan</h2>
                    <p class="text-sm lg:text-base opacity-75">RSPAD Gatot Soebroto</p>
                </div>
            </div>
            <button @click="toggleCollapse" class="hidden lg:flex w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg items-center justify-center transition-colors duration-200">
                <svg :class="['w-4 h-4 text-white transition-transform duration-300', isCollapsed ? 'rotate-180' : '']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button @click="closeSidebar" class="lg:hidden w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav class="flex-1 py-6 px-3 overflow-y-auto">
            <ul class="space-y-2">

                <li>
                    <router-link to="/optimasi-awal/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/optimasi-awal' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Optimasi Awal
                        </span>
                        <div v-if="(!isCollapsed || isMobile)" class="ml-auto w-2 h-2 bg-[#93DA97] rounded-full animate-pulse"></div>
                    </router-link>
                </li>

                <li>
                    <router-link to="/filtering-data/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/filtering-data' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Filtering Data
                        </span>
                    </router-link>
                </li>

                <li class="pt-4">
                    <div v-if="!isCollapsed || isMobile" class="px-3 pb-2">
                        <p class="text-xs font-semibold text-white/60 uppercase tracking-wider">Laporan</p>
                    </div>
                    <div v-else class="px-3 pb-2">
                        <div class="w-full h-px bg-white/20"></div>
                    </div>
                </li>

                <li>
                    <router-link to="/laporan-bulanan/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/laporan-bulanan' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Laporan Bulanan
                        </span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/laporan-operasi/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/laporan-operasi' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 6h5v2h2V6h2V4h-2V1h-2v3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7.17l-.59-.59L12 21H4V8h5V6z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Laporan Operasi
                        </span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/laporan-rawat-jalan/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/laporan-rawat-jalan' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Laporan Rawat Jalan
                        </span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/laporan-rawat-inap/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/laporan-rawat-inap' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Laporan Rawat Inap
                        </span>
                    </router-link>
                </li>

                <li>
                    <router-link to="/laporan-igd/" class="flex items-center space-x-3 px-3 py-3 text-white transition-all duration-200 group" :class="{ 'bg-[#3E5F44] shadow-lg': $route.path === '/laporan-igd' }">
                        <div class="w-6 h-6 flex items-center justify-center">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" />
                            </svg>
                        </div>
                        <span v-if="!isCollapsed || isMobile" class="font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Laporan IGD
                        </span>
                    </router-link>
                </li>
            </ul>
        </nav>

        <div class="border-t border-white/10 p-6">
            <div v-if="!isCollapsed || isMobile" class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-[#93DA97] rounded-full flex items-center justify-center">
                    <span class="text-[#3E5F44] font-semibold text-sm">AD</span>
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-white font-medium text-sm truncate">Admin User</p>
                    <p class="text-white/60 text-xs truncate">admin@rspad.com</p>
                </div>
                <button @click="handleLogout" class="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                    <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>

            </div>
            <div v-else class="flex justify-center">
                <div class="w-10 h-10 bg-[#93DA97] rounded-full flex items-center justify-center">
                    <span class="text-[#3E5F44] font-semibold text-sm">AD</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'SidebarAdmin',
    props: {
        isOpen: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            isCollapsed: false,
            isMobile: false
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
        toggleCollapse() {
            if (!this.isMobile) {
                this.isCollapsed = !this.isCollapsed
                this.$emit('toggle-collapse', this.isCollapsed)
            }
        },
        closeSidebar() {
            this.$emit('close-sidebar')
        },
        checkMobile() {
            this.isMobile = window.innerWidth < 1024
            if (this.isMobile) {
                this.isCollapsed = false
            }
        },
        async handleLogout() {
            const result = await Swal.fire({
                title: 'Konfirmasi Logout',
                text: 'Apakah Anda yakin ingin keluar dari sistem?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#10b981',
                cancelButtonColor: '#6b7280',
                confirmButtonText: 'Ya, Logout',
                cancelButtonText: 'Batal',
                customClass: {
                    popup: 'rounded-2xl',
                    confirmButton: 'rounded-xl px-6 py-2',
                    cancelButton: 'rounded-xl px-6 py-2'
                }
            })

            if (result.isConfirmed) {
                await Swal.fire({
                    icon: 'success',
                    title: 'Berhasil Logout',
                    text: 'Anda telah keluar dari sistem.',
                    timer: 2000,
                    showConfirmButton: false,
                    customClass: {
                        popup: 'rounded-2xl'
                    }
                })

                // 🚀 Redirect ke halaman login
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style>
/* Custom scrollbar for sidebar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}

/* Router link active styles */
.router-link-active {
    @apply bg-[#3E5F44] shadow-lg;
}

/* Animation for menu items */
.group:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}
</style>
