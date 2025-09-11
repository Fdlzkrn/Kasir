<template>
  <NavbarHome />
  <div class="min-h-screen min-w-full bg-gray-50">
    
    <section class="relative bg-gradient-to-br from-green-800 to-green-900 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pelayanan Kesehatan
              <span class="text-amber-400">Profesional dan Terpercaya</span>
              untuk Bangsa
            </h1>
            <p class="text-xl mb-8 text-green-100 leading-relaxed">
              RSPAD Gatot Soebroto, sebagai rumah sakit rujukan nasional, berkomitmen memberikan pelayanan kesehatan unggul dengan dukungan dokter ahli dan teknologi medis terdepan.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-amber-500 text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105">
                Buat Janji Temu
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300">
                Layanan Kami
              </button>
            </div>
          </div>
          <div class="hidden lg:flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20">
                <svg class="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-12 h-12 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Layanan Medis Unggulan</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Layanan kesehatan komprehensif yang didukung oleh teknologi canggih dan para profesional medis berpengalaman.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="doctors" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Tim Dokter Ahli Kami</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim dokter spesialis kami membawa dedikasi dan pengalaman bertahun-tahun untuk perawatan Anda.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="doctor in doctors" :key="doctor.id" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-64 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg class="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ doctor.name }}</h3>
              <p class="text-green-700 font-medium mb-3">{{ doctor.specialty }}</p>
              <p class="text-gray-600 text-sm mb-4">{{ doctor.experience }}</p>
              <button class="w-full bg-green-700 text-white py-2 px-4 rounded-lg hover:bg-green-800 transition-colors duration-200">
                Buat Janji Konsultasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-green-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.id">
            <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-green-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Apa Kata Pasien Kami</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Kisah nyata dari pasien yang mempercayakan kesehatannya kepada kami.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" 
               class="bg-gray-50 rounded-xl p-8 relative">
            <div class="text-amber-400 text-2xl mb-4">"</div>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-semibold">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-800">{{ testimonial.name }}</div>
                <div class="text-gray-500 text-sm">{{ testimonial.condition }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-green-800 to-green-900 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">Siap Menjaga Kesehatan Anda?</h2>
        <p class="text-xl mb-8 text-green-100">
          Jadwalkan janji temu Anda hari ini dan biarkan para ahli kami merawat Anda dengan sepenuh hati.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-amber-500 text-green-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-400 transition-all duration-300 transform hover:scale-105">
            Buat Janji Sekarang
          </button>
          <a href="tel:+62-21-3440908" 
             class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-800 transition-all duration-300 inline-flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Panggilan Darurat IGD
          </a>
        </div>
      </div>
    </section>

    <footer id="contact" class="bg-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">RSPAD Gatot Soebroto</h3>
                <p class="text-sm text-gray-400">Profesional dan Terpercaya</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed max-w-md">
              Memberikan pelayanan kesehatan yang luar biasa dengan welas asih, inovasi, dan keunggulan. Mitra terpercaya Anda dalam kesehatan.
            </p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#services" class="text-gray-300 hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#doctors" class="text-gray-300 hover:text-white transition-colors">Dokter</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Karir</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-6">Info Kontak</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-gray-300">Jl. Abdul Rachman Saleh No. 24, Jakarta Pusat</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-gray-300">+62 21 3440908</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-gray-300">info@rspadgs.net</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
          <p class="text-gray-400">&copy; 2025 RSPAD Gatot Soebroto. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
    
  </div>
</template>

<script>
import NavbarHome from '../components/NavbarHome.vue'
import { ref } from 'vue'

// Icon components as template literals
const HeartIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`
}
const BrainIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`
}
const ShieldIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
}
const ActivityIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
}
const StarIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`
}
const DnaIcon = {
    template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>`
}

export default {
  name: "HomeView",
  components: {
    NavbarHome
  },
  setup() {
    const services = ref([
      {
        id: 1,
        title: "Kardiologi",
        description: "Perawatan jantung terpadu dengan teknologi mutakhir dan ahli jantung berpengalaman untuk semua kondisi.",
        icon: HeartIcon
      },
      {
        id: 2,
        title: "Neurologi", 
        description: "Penanganan komprehensif untuk otak dan sistem saraf dengan fasilitas diagnostik dan terapi terbaik.",
        icon: BrainIcon
      },
      {
        id: 3,
        title: "Onkologi",
        description: "Layanan kanker terintegrasi mulai dari deteksi dini, kemoterapi, hingga radioterapi modern.",
        icon: DnaIcon
      },
      {
        id: 4,
        title: "Gawat Darurat 24 Jam",
        description: "Layanan IGD 24/7 dengan tim respons cepat dan sistem pendukung kehidupan tingkat lanjut.",
        icon: ShieldIcon
      },
      {
        id: 5,
        title: "Pediatri (Kesehatan Anak)",
        description: "Perawatan kesehatan khusus untuk bayi, anak-anak, dan remaja dengan pendekatan ramah keluarga.",
        icon: ActivityIcon
      },
      {
        id: 6,
        title: "Pusat Bedah Unggulan",
        description: "Prosedur bedah canggih dengan teknik minimal invasif oleh tim bedah berpengalaman.",
        icon: StarIcon
      }
    ])

    const doctors = ref([
      {
        id: 1,
        name: "Prof. Dr. dr. Budi Santoso, Sp.JP(K)",
        specialty: "Spesialis Jantung & Pembuluh Darah",
        experience: "20+ tahun pengalaman dalam bedah jantung"
      },
      {
        id: 2,
        name: "Dr. dr. Rina Amelia, Sp.S(K)",
        specialty: "Spesialis Saraf", 
        experience: "15+ tahun spesialisasi gangguan otak"
      },
      {
        id: 3,
        name: "Dr. Ahmad Wijaya, Sp.A(K)",
        specialty: "Spesialis Anak Konsultan",
        experience: "12+ tahun merawat kesehatan anak"
      }
    ])

    const stats = ref([
      { id: 1, number: "1 Juta+", label: "Pasien Dilayani" },
      { id: 2, number: "200+", label: "Dokter Ahli" },
      { id: 3, number: "70+", label: "Tahun Mengabdi" },
      { id: 4, number: "24/7", label: "Layanan IGD" }
    ])

    const testimonials = ref([
      {
        id: 1,
        name: "Bapak Sutanto",
        condition: "Pasien Bedah Jantung",
        content: "Tim kardiologi di RSPAD menyelamatkan hidup saya. Profesionalisme dan kepedulian mereka selama operasi dan pemulihan sungguh luar biasa."
      },
      {
        id: 2,
        name: "Ibu Indah Lestari",
        condition: "Orang Tua Pasien Anak",
        content: "Dokter Ahmad dan timnya sangat luar biasa menangani putri saya. Mereka membuatnya merasa nyaman dan memberikan perawatan terbaik."
      },
      {
        id: 3,
        name: "Sertu Budi Prasetyo",
        condition: "Pasien Gawat Darurat",
        content: "Ketika saya mengalami kecelakaan, tim gawat darurat RSPAD merespons dengan cepat dan profesional. Saya berterima kasih atas keahlian mereka."
      }
    ])

    return {
      services,
      doctors,
      stats,
      testimonials
    }
  }
}
</script>