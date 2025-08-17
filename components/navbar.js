function navbar() {
  return $(`
      <nav class="flex items-center justify-around poppins-regular h-[96px] fixed w-screen top-0 bg-white z-50">
      <div>
        <img class="h-[80px] w-[80px]" src="img/logo.png" alt="LOGO">
      </div>
      <div class="flex justify-center items-center gap-4">
        <a href="#">Home</a>
        <a href="#">Tentang Kami</a>
        <a href="#">Cerita</a>
        <a href="#">Lokasi</a>
      </div>
      <div>
        <button class="text-xl bg-blue-800 p-3 rounded-3xl drop-shadow-2xl text-white">
          Jadwal Keliling
        </button>
      </div>
    </nav>
    `)
}

export default navbar;