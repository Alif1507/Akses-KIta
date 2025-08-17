function tentangKami() {
  return $(`
   <section class="flex items-center justify-around mt-24">
  <!-- Layanan -->

  <div class="flex flex-col relative justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-8 rounded-full p-5 w-[100px] h-auto bg-white text-[#0388A7]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
    <div
      class="absolute flex justify-center items-center w-[110px] h-[100px] p-3 rounded-full -z-10 bg-gradient-to-r from-[#C1E8EF] via-[#036DA7] to-[#4AFF09] text-[1px] top-0"
    >
      .
    </div>
    <h1 class="poppins-bold text-2xl my-3">6+</h1>
    <h2 class="poppins-light">Layanan Publik Tersedia</h2>
  </div>

  <!-- Aksesbilitas -->
  <div class="flex flex-col relative justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-8 rounded-full p-5 w-[100px] h-auto bg-white text-[#4AFF09]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>

    <div
      class="absolute flex justify-center items-center w-[110px] h-[100px] p-3 rounded-full -z-10 bg-gradient-to-r from-[#C1E8EF] via-[#036DA7] to-[#4AFF09] text-[1px] top-0"
    >
      .
    </div>
    <h1 class="poppins-bold text-2xl my-3">100%</h1>
    <h2 class="poppins-light">Aksesibel Untuk Semua</h2>
  </div>

  <!-- Lokasi -->
  <div class="flex flex-col relative justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-8 rounded-full p-5 w-[100px] h-auto bg-white text-[#036DA7]"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>

    <div
      class="absolute flex justify-center items-center w-[110px] h-[100px] p-3 rounded-full -z-10 bg-gradient-to-r from-[#C1E8EF] via-[#036DA7] to-[#4AFF09] text-[1px] top-0"
    >
      .
    </div>
    <h1 class="poppins-bold text-2xl my-3">5+</h1>
    <h2 class="poppins-light">Lokasi Di Jakarta</h2>
  </div>
</section>

    `);
}

export default tentangKami;
