<template>
  <NavbarHome />
  <div class="min-h-screen min-w-full bg-gray-50">
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Health is Our 
              <span class="text-yellow-300">Priority</span>
            </h1>
            <p class="text-xl mb-8 text-blue-100 leading-relaxed">
              Experience world-class healthcare with our team of expert doctors and state-of-the-art medical facilities. We're here 24/7 for your wellbeing.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button class="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Book Appointment
              </button>
              <button class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="relative">
              <div class="w-80 h-80 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <svg class="w-40 h-40 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                <svg class="w-12 h-12 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services with advanced technology and experienced medical professionals
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.id" 
               class="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <component :is="service.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Doctors Section -->
    <section id="doctors" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Doctors</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of specialized doctors brings years of experience and dedication to your care
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="doctor in doctors" :key="doctor.id" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                <svg class="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ doctor.name }}</h3>
              <p class="text-blue-600 font-medium mb-3">{{ doctor.specialty }}</p>
              <p class="text-gray-600 text-sm mb-4">{{ doctor.experience }}</p>
              <button class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.id">
            <div class="text-4xl font-bold mb-2">{{ stat.number }}</div>
            <div class="text-blue-100">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real patients who trust us with their health
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id" 
               class="bg-gray-50 rounded-xl p-8 relative">
            <div class="text-yellow-400 text-2xl mb-4">"</div>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ testimonial.content }}</p>
            <div class="flex items-center">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
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

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold mb-6">Ready to Take Care of Your Health?</h2>
        <p class="text-xl mb-8 text-blue-100">
          Don't wait until it's too late. Book your appointment today and let our experts take care of you.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
            Book Appointment Now
          </button>
          <a href="tel:+62-21-1234567" 
             class="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-800 transition-all duration-300 inline-flex items-center justify-center">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call Emergency
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold">MediCare Hospital</h3>
                <p class="text-sm text-gray-400">Your Health, Our Priority</p>
              </div>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed max-w-md">
              Providing exceptional healthcare services with compassion, innovation, and excellence. Your trusted partner in health and wellness.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">f</span>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">t</span>
              </a>
              <a href="#" class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span class="text-sm font-bold">i</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" class="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctors" class="text-gray-300 hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#" class="text-gray-300 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-6">Contact Info</h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-gray-300">Jl. Kesehatan No. 123, Jakarta</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span class="text-gray-300">+62-21-1234567</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="text-gray-300">info@medicare.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-700 mt-12 pt-8 text-center">
          <p class="text-gray-400">&copy; 2025 MediCare Hospital. All rights reserved.</p>
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

const EyeIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`
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

export default {
  name: "HomeView",
  components: {
    NavbarHome
  },
  setup() {
    const services = ref([
      {
        id: 1,
        title: "Cardiology",
        description: "Advanced heart care with cutting-edge technology and experienced cardiologists for all heart conditions.",
        icon: HeartIcon
      },
      {
        id: 2,
        title: "Neurology", 
        description: "Comprehensive brain and nervous system care with state-of-the-art diagnostic and treatment facilities.",
        icon: BrainIcon
      },
      {
        id: 3,
        title: "Ophthalmology",
        description: "Complete eye care services from routine check-ups to advanced surgical procedures.",
        icon: EyeIcon
      },
      {
        id: 4,
        title: "Emergency Care",
        description: "24/7 emergency services with rapid response team and advanced life support systems.",
        icon: ShieldIcon
      },
      {
        id: 5,
        title: "Pediatrics",
        description: "Specialized healthcare for infants, children, and adolescents with family-centered approach.",
        icon: ActivityIcon
      },
      {
        id: 6,
        title: "Surgery",
        description: "Advanced surgical procedures with minimally invasive techniques and experienced surgeons.",
        icon: StarIcon
      }
    ])

    const doctors = ref([
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        experience: "15+ years of experience in heart surgery"
      },
      {
        id: 2,
        name: "Dr. Michael Chen",
        specialty: "Neurologist", 
        experience: "12+ years specializing in brain disorders"
      },
      {
        id: 3,
        name: "Dr. Emily Rodriguez",
        specialty: "Pediatrician",
        experience: "10+ years caring for children's health"
      }
    ])

    const stats = ref([
      { id: 1, number: "50K+", label: "Patients Treated" },
      { id: 2, number: "100+", label: "Expert Doctors" },
      { id: 3, number: "25+", label: "Years Experience" },
      { id: 4, number: "24/7", label: "Emergency Service" }
    ])

    const testimonials = ref([
      {
        id: 1,
        name: "John Smith",
        condition: "Heart Surgery Patient",
        content: "The cardiac team at MediCare saved my life. Their professionalism and care throughout my surgery and recovery was exceptional."
      },
      {
        id: 2,
        name: "Maria Garcia",
        condition: "Pediatric Patient Parent",
        content: "Dr. Rodriguez and her team were amazing with my daughter. They made her feel comfortable and provided excellent care."
      },
      {
        id: 3,
        name: "David Wilson",
        condition: "Emergency Patient",
        content: "When I had my accident, MediCare's emergency team responded quickly and professionally. I'm grateful for their expertise."
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