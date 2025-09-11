<template>
    <div class="flex min-h-screen bg-gray-50 p-6">
        <AdminSidebar />
        <!-- Content -->
        <div class="ml-64 p-6">
            <h1 class="text-2xl font-bold text-gray-800 mb-6">Upload Data Pasien</h1>

            <!-- Upload Excel -->
            <div class="bg-white p-6 rounded-xl shadow border border-gray-100 mb-6">
                <label class="block mb-2 text-sm font-medium text-gray-700">Upload Excel File</label>
                <input type="file" accept=".xlsx, .xls" @change="handleFileUpload($event)"
                    class="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                
                <button v-if="selectedFile" 
                    @click="UploadExcelFileLaporan"
                    class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
                    Upload ke Server
                </button>
            </div>

            <!-- Tabel Data -->
            <div v-if="patients.length" class="bg-white rounded-xl shadow border border-gray-100 overflow-x-auto">
                <table class="min-w-full text-sm text-left">
                    <thead class="bg-gray-100 text-xs font-semibold text-gray-600 uppercase">
                        <tr>
                            <th v-for="col in columns" :key="col" class="px-4 py-3 whitespace-nowrap">
                                {{ col }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, idx) in patients" :key="idx" class="hover:bg-gray-50 border-b">
                            <td v-for="col in columns" :key="col" class="px-4 py-3 whitespace-nowrap">
                                {{ row[col] || '-' }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Info jika belum ada data -->
            <div v-else class="text-gray-500 text-center mt-10">
                Belum ada data, silakan upload file Excel.
            </div>
        </div>
    </div>
</template>

<script>
import * as XLSX from "xlsx";
import AdminSidebar from "../../components/AdminSidebar.vue";
import dataLaporan from "../../service/dataLaporan";

export default {
    components: { AdminSidebar },
    data() {
        return {
            columns: [
                "NO", "NO RM", "NAMA PASIEN", "TANGGAL LAHIR", "USIA", "NO. TELP", "NO. PONSEL",
                "POLI", "DOKTER", "TANGGAL", "JAM", "NO SEP", "NO PESERTA", "TYPE PASIEN",
                "JENIS RAWAT", "JENIS PEMBAYARAN", "KELOMPOK", "PANGKAT", "NRP", "KELAMIN",
                "AGAMA", "PENDIDIKAN", "KESATUAN", "ANGKATAN", "HUBUNGAN KELUARGA", "ALAMAT",
                "KODE", "DIAGNOSA AWAL", "KODE", "DIAGNOSA AKHIR", "STATUS"
            ],
            patients: [],
            selectedFile: null
        };
    },
    mounted() {
        this.GetallDataLaporan();
    },
    methods: {
        GetallDataLaporan() {
            dataLaporan.GetAllDataLaporan()
                .then((res) => {
                    this.patients = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        UploadExcelFileLaporan() {
            if (!this.selectedFile) return alert("Pilih file dulu!");

            const formData = new FormData();
            formData.append("file", this.selectedFile);

            dataLaporan.ImportCreateDataLaporan(formData)
                .then((res) => {
                    alert("Upload berhasil!");
                    this.GetallDataLaporan(); // refresh tabel
                })
                .catch((err) => {
                    console.log(err);
                    alert("Upload gagal!");
                });
        },
        handleFileUpload(e) {
            const file = e.target.files[0];
            if (!file) return;
            this.selectedFile = file;

            // const reader = new FileReader();
            // reader.onload = (evt) => {
            //     const data = new Uint8Array(evt.target.result);
            //     const workbook = XLSX.read(data, { type: "array" });
            //     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            //     const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

            //     this.patients = jsonData.map((row) => {
            //         const filtered = {};
            //         this.columns.forEach((col) => {
            //             filtered[col] = row[col] || "";
            //         });
            //         return filtered;
            //     });
            // };
            // reader.readAsArrayBuffer(file);
        }
    }
};
</script>
