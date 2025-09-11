<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Hospital Name -->
        <div class="flex items-center space-x-3">
          <div class="flex-shrink-0">
            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
          </div>
          <div class="hidden md:block">
            <h1 class="text-xl font-bold text-gray-800">MediCare Hospital</h1>
            <p class="text-xs text-gray-500">Your Health, Our Priority</p>
          </div>
        </div>

        <!-- Desktop Navigation Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#" class="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200">
              Home
            </a>
            <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Services
            </a>
            <a href="#doctors" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Doctors
            </a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              About Us
            </a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        <!-- Emergency Button & Mobile Menu Toggle -->
        <div class="flex items-center space-x-4">
          <!-- Emergency Contact Button -->
          <a href="tel:+62-21-1234567" 
             class="hidden sm:inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors duration-200">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Emergency
          </a>

          <!-- Appointment Button -->
          <button class="hidden sm:inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Book Appointment
          </button>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" 
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200">
              <svg class="h-6 w-6" :class="{ 'hidden': mobileMenuOpen, 'block': !mobileMenuOpen }" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="h-6 w-6" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <div class="md:hidden" :class="{ 'block': mobileMenuOpen, 'hidden': !mobileMenuOpen }">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
          <a href="#" class="block px-3 py-2 text-blue-600 font-medium rounded-md">
            Home
          </a>
          <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200">
            Services
          </a>
          <a href="#doctors" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200">
            Doctors
          </a>
          <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200">
            About Us
          </a>
          <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-colors duration-200">
            Contact
          </a>
          
          <!-- Mobile Emergency & Appointment Buttons -->
          <div class="pt-2 space-y-2">
            <a href="tel:+62-21-1234567" 
               class="flex items-center justify-center px-3 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors duration-200">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Emergency Call
            </a>
            <button class="w-full flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "NavbarHome",
  setup() {
    const mobileMenuOpen = ref(false)

    const toggleMobileMenu = () => {
      mobileMenuOpen.value = !mobileMenuOpen.value
    }

    return {
      mobileMenuOpen,
      toggleMobileMenu
    }
  }
}
</script>