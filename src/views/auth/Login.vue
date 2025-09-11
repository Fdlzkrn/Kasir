<template>
<div class="min-h-screen bg-[#5E936C] relative overflow-hidden">
    <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div class="absolute top-1/3 right-20 w-24 h-24 bg-emerald-300 rounded-full blur-lg"></div>
        <div class="absolute bottom-20 left-1/4 w-20 h-20 bg-teal-300 rounded-full blur-md"></div>
        <div class="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-full blur-lg"></div>
    </div>
    <div class="relative z-10 flex flex-col lg:flex-row min-h-screen">     
        <div class="flex-1 flex flex-col justify-center items-center text-white px-6 sm:px-8 lg:px-12 py-8 lg:py-12">      
            <div class="mb-8 lg:mb-12 transform hover:scale-105 transition-transform duration-300">
                <div class="relative flex items-center justify-center">
                    <img src="@/assets/logo.png" alt="Kesehatan" class="w-36 sm:w-40 lg:w-48" />
                </div>
            </div>

            <div class="text-center max-w-lg">
                <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                    Selamat Datang di <span class="">E-Laporan</span>
                </h1>
                <p class="text-base sm:text-lg lg:text-xl opacity-90 leading-relaxed">
                    Sistem Pengolahan Laporan Instalasi Rekam Medis<br class="hidden sm:block">
                    <span class="font-semibold ">RSPAD Gatot Soebroto</span>
                </p>
            </div>
        </div>
        <div class="bg-[#3E5F44] w-full lg:w-96 xl:w-[700px] flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-8 lg:py-12">
            <div class=" backdrop-blur-sm p-6 sm:p-8 lg:p-10">
                
                <div class="mb-6 lg:mb-8 text-center lg:text-left">
                    <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                        Masuk ke Akun Anda
                    </h2>
                </div>
                <form @submit.prevent="handleLogin" class="space-y-5 lg:space-y-6">
                    
                    <div class="space-y-2">
                        <label for="email" class="block text-white text-sm font-semibold">
                            Email
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                            </div>
                            <input v-model="form.email" type="email" id="email" class="w-full pl-10 pr-4 py-3 lg:py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base" placeholder="contoh@email.com" required />
                        </div>
                    </div>

                    
                    <div class="space-y-2">
                        <label for="password" class="block text-white text-sm font-semibold">
                            Password
                        </label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input v-model="form.password" :type="showPassword ? 'text' : 'password'" id="password" class="w-full pl-10 pr-12 py-3 lg:py-4 rounded-xl border-2 border-gray-200 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base" placeholder="Masukkan password Anda" required />
                            <button type="button" @click="showPassword = !showPassword" class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                                <svg v-if="showPassword" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                </svg>
                                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <a href="#" @click.prevent="handleForgotPassword" class="text-white hover:text-emerald-400 text-sm font-medium transition-colors duration-200">
                            Lupa Password?
                        </a>
                    </div>

                    
                    <button type="submit" :disabled="isLoading" class="w-full bg-[#93DA97] hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-3 lg:py-4 px-6 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm lg:text-base">
                        <span v-if="!isLoading" class="flex items-center">
                            LOGIN
                        </span>
                        <div v-else class="flex items-center">
                            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Memproses...
                        </div>
                    </button>
                </form>

                
                <div class="mt-6 lg:mt-8 text-center">
                    <p class="text-xs lg:text-sm text-white">
                        Dengan masuk, Anda menyetujui
                        <a href="#" class="text-emerald-600 hover:underline">Syarat & Ketentuan</a>
                        dan <a href="#" class="text-emerald-600 hover:underline">Kebijakan Privasi</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
    name: 'LoginPage',
    data() {
        return {
            form: {
                email: '',
                password: '',
                rememberMe: false
            },
            showPassword: false,
            isLoading: false
        }
    },
    methods: {
        async handleLogin() {

            if (!this.form.email || !this.form.password) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Perhatian!',
                    text: 'Email dan password harus diisi',
                    confirmButtonColor: '#10b981',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'rounded-2xl',
                        confirmButton: 'rounded-xl px-6 py-2'
                    }
                });
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.form.email)) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Format Email Salah!',
                    text: 'Mohon masukkan email dengan format yang benar',
                    confirmButtonColor: '#10b981',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'rounded-2xl',
                        confirmButton: 'rounded-xl px-6 py-2'
                    }
                });
                return;
            }

            this.isLoading = true;

            try {
                await new Promise(resolve => setTimeout(resolve, 1500));

                const isSuccess = Math.random() > 0.2;
                if (isSuccess) {
                    await Swal.fire({
                        icon: 'success',
                        title: 'Login Berhasil!',
                        text: `Selamat datang kembali di sistem E-Laporan`,
                        confirmButtonColor: '#10b981',
                        timer: 2500,
                        showConfirmButton: false,
                        customClass: {
                            popup: 'rounded-2xl'
                        }
                    });

                    if (!this.form.rememberMe) {
                        this.form.email = '';
                        this.form.password = '';
                    }
                    this.$router.push('/dashboard');
                    console.log('Redirecting to dashboard...', {
                        email: this.form.email,
                        rememberMe: this.form.rememberMe
                    });

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Gagal!',
                        text: 'Email atau password yang Anda masukkan salah. Silakan periksa kembali dan coba lagi.',
                        confirmButtonColor: '#10b981',
                        confirmButtonText: 'Coba Lagi',
                        customClass: {
                            popup: 'rounded-2xl',
                            confirmButton: 'rounded-xl px-6 py-2'
                        }
                    });
                }

            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Terjadi Kesalahan!',
                    text: 'Gagal terhubung ke server. Periksa koneksi internet Anda dan coba lagi.',
                    confirmButtonColor: '#10b981',
                    confirmButtonText: 'OK',
                    customClass: {
                        popup: 'rounded-2xl',
                        confirmButton: 'rounded-xl px-6 py-2'
                    }
                });
            } finally {
                this.isLoading = false;
            }
        },

        handleForgotPassword() {
            Swal.fire({
                title: 'Reset Password',
                html: `
          <div class="text-left">
            <p class="text-gray-600 mb-4">Masukkan alamat email yang terdaftar untuk menerima link reset password:</p>
          </div>
        `,
                input: 'email',
                inputPlaceholder: 'contoh@email.com',
                showCancelButton: true,
                confirmButtonText: 'Kirim Link Reset',
                cancelButtonText: 'Batal',
                confirmButtonColor: '#10b981',
                cancelButtonColor: '#6b7280',
                customClass: {
                    popup: 'rounded-2xl',
                    confirmButton: 'rounded-xl px-6 py-2',
                    cancelButton: 'rounded-xl px-6 py-2'
                },
                inputValidator: (value) => {
                    if (!value) {
                        return 'Email harus diisi!';
                    }
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        return 'Format email tidak valid!';
                    }
                },
                preConfirm: async (email) => {
                    // Simulasi API call
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve(email);
                        }, 1000);
                    });
                },
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Email Terkirim!',
                        html: `
              <div class="text-center">
                <p class="text-gray-600 mb-2">Link reset password telah dikirim ke:</p>
                <p class="font-semibold text-emerald-600">${result.value}</p>
                <p class="text-sm text-gray-500 mt-3">Silakan cek email Anda dan ikuti instruksi untuk reset password. Link akan kedaluwarsa dalam 24 jam.</p>
              </div>
            `,
                        confirmButtonColor: '#10b981',
                        confirmButtonText: 'OK',
                        customClass: {
                            popup: 'rounded-2xl',
                            confirmButton: 'rounded-xl px-6 py-2'
                        }
                    });
                }
            });
        }
    }
}
</script>

<style>
/* Custom font import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
    font-family: 'Inter', sans-serif;
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
    background: #10b981;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #059669;
}

/* Custom SweetAlert2 styles */
.swal2-popup {
    border-radius: 16px !important;
    font-family: 'Inter', sans-serif !important;
}

.swal2-title {
    font-weight: 700 !important;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .swal2-popup {
        width: 90% !important;
        margin: 0 5% !important;
    }
}

/* Animation keyframes */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease-out;
}

/* Backdrop blur support */
@supports (backdrop-filter: blur(10px)) {
    .backdrop-blur-sm {
        backdrop-filter: blur(4px);
    }
}
</style>
