function hero() {
  return $(`
      <section class="flex flex-col md:flex-row justify-around  items-center mt-32 md:mt-64 px-4 opacity-0 transition-all duration-700" id="heroSection">
    <img src="img/bgThings/bg-2.png" alt="" class="absolute -z-30 top-0 right-0">
        
        <div class="w-full md:w-[612px] text-center md:text-left mb-8 md:mb-0">
          <h1 class="poppins-bold text-3xl md:text-4xl">
            Selamat datang di <span class="bg-gradient-to-r from-[#10BCE0] to-[#4AFF09] bg-clip-text text-transparent">Akses Kita</span>
          </h1>
          <p class="poppins-light my-6 md:my-8 text-lg md:text-xl">
           Platform terpadu untuk mengakses layanan publik yang ramah disabilitas di Kota Bandung. Temukan layanan kesehatan, administrasi, dan asuransi dengan fasilitas aksesibel.
          </p>
          <a href="#layanan"> 
            <button class="py-1 flex flex-nowrap px-3 text-white rounded-3xl bg-gradient-to-r poppins-regular text-lg items-center justify-center gap-3 from-[#C1E8EF] via-[#036DA7] to-[#4AFF09] mx-auto md:mx-0 transform hover:scale-105 transition-all duration-300">
          Jelajah layanan 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 bg-black rounded-full p-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
</svg>
</button>
          </a>
        </div>
        <div class="w-full md:w-auto opacity-0 transition-all duration-700 delay-300" id="heroImage">
          <img src="img/imgHero.png" alt="Gambar Hero" class="max-w-full h-auto" />
        </div>
      </section>
    `);
}

export default hero;
