function hero() {
  return $(`
      <section class="flex justify-around items-center mt-64">
        <div class="w-[612px]">
          <h1 class="poppins-bold text-4xl">
            Selamat datang di <span class="bg-gradient-to-r from-[#10BCE0] to-[#4AFF09] bg-clip-text text-transparent">Akses Kita</span>
          </h1>
          <p class="poppins-light my-8 text-xl">
           Platform terpadu untuk mengakses layanan publik yang ramah disabilitas di Kota Bandung. Temukan layanan kesehatan, administrasi, dan asuransi dengan fasilitas aksesibel.
          </p>
          <button class="py-1 flex flex-nowrap px-3 text-white rounded-3xl bg-gradient-to-r poppins-regular text-lg items-center justify-center gap-3 from-[#C1E8EF] via-[#036DA7] to-[#4AFF09]">Jelajah layanan 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 bg-black rounded-full p-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
</svg>
</button>
        </div>
        <div class="">
          <img src="img/imgHero.png" alt="Gambar Hero" />
        </div>

      </section>
    `);
}

export default hero;
