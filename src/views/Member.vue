<template>
  <div class="min-h-screen bg-slate-100 max-w-md mx-auto p-4 pb-10">

    <!-- Header -->
    <div class="bg-blue-600 text-white rounded-3xl p-5 shadow-lg mb-5">
      <p class="text-sm opacity-80">Data Pelanggan</p>
      <h1 class="text-2xl font-bold">Member Kasir</h1>
    </div>

    <!-- Form -->
    <div class="bg-white rounded-3xl p-5 shadow mb-5">
      <h2 class="font-bold text-slate-800 mb-4">
        {{ editIndex === null ? 'Tambah Member' : 'Edit Member' }}
      </h2>

      <div class="space-y-3">
        <input
          v-model="form.name"
          type="text"
          placeholder="Nama Member"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.phone"
          type="text"
          placeholder="Nomor HP"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <input
          v-model="form.email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-3 rounded-2xl border outline-none"
        />

        <button
          @click="saveMember"
          class="w-full bg-blue-600 text-white py-3 rounded-2xl font-bold"
        >
          {{ editIndex === null ? 'Tambah Member' : 'Update Member' }}
        </button>

        <button
          v-if="editIndex !== null"
          @click="resetForm"
          class="w-full bg-slate-300 text-slate-800 py-3 rounded-2xl font-bold"
        >
          Batal Edit
        </button>
      </div>
    </div>

    <!-- Search -->
    <div class="mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Cari member..."
        class="w-full px-4 py-3 rounded-2xl border outline-none"
      />
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 gap-4 mb-5">
      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Total Member</p>
        <h3 class="text-2xl font-bold text-blue-600 mt-1">
          {{ filteredMembers.length }}
        </h3>
      </div>

      <div class="bg-white rounded-3xl p-4 shadow">
        <p class="text-sm text-slate-500">Member Aktif</p>
        <h3 class="text-2xl font-bold text-green-600 mt-1">
          {{ filteredMembers.length }}
        </h3>
      </div>
    </div>

    <!-- Member List -->
    <div class="space-y-4">

      <div
        v-for="(item, index) in filteredMembers"
        :key="index"
        class="bg-white rounded-3xl p-4 shadow"
      >
        <div class="flex justify-between items-start gap-3">

          <div class="flex gap-3">
            <div
              class="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold"
            >
              {{ item.name.charAt(0).toUpperCase() }}
            </div>

            <div>
              <h3 class="font-bold text-slate-800">
                {{ item.name }}
              </h3>

              <p class="text-sm text-slate-500">
                {{ item.phone }}
              </p>

              <p class="text-sm text-slate-500">
                {{ item.email }}
              </p>
            </div>
          </div>

          <div class="flex gap-2">
            <button
              @click="editMember(index)"
              class="bg-yellow-400 px-3 py-2 rounded-xl text-sm"
            >
              ✏️
            </button>

            <button
              @click="deleteMember(index)"
              class="bg-red-500 text-white px-3 py-2 rounded-xl text-sm"
            >
              🗑️
            </button>
          </div>

        </div>
      </div>

      <div
        v-if="filteredMembers.length === 0"
        class="text-center text-slate-500 py-10"
      >
        Member tidak ditemukan
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "MemberPage",

  data() {
    return {
      search: "",
      editIndex: null,

      form: {
        name: "",
        phone: "",
        email: ""
      },

      members: [
        {
          name: "Andi Saputra",
          phone: "081234567890",
          email: "andi@gmail.com"
        },
        {
          name: "Budi Santoso",
          phone: "082345678901",
          email: "budi@gmail.com"
        },
        {
          name: "Citra Dewi",
          phone: "083456789012",
          email: "citra@gmail.com"
        }
      ]
    };
  },

  computed: {
    filteredMembers() {
      return this.members.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },

  methods: {
    saveMember() {
      if (
        this.form.name === "" ||
        this.form.phone === "" ||
        this.form.email === ""
      ) {
        alert("Isi semua data!");
        return;
      }

      if (this.editIndex === null) {
        this.members.push({
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email
        });
      } else {
        this.members[this.editIndex] = {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email
        };
      }

      this.resetForm();
    },

    editMember(index) {
      const item = this.members[index];

      this.form.name = item.name;
      this.form.phone = item.phone;
      this.form.email = item.email;

      this.editIndex = index;
    },

    deleteMember(index) {
      if (confirm("Hapus member ini?")) {
        this.members.splice(index, 1);
      }
    },

    resetForm() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.editIndex = null;
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>