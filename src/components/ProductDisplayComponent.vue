<template>
  <section
    class="overflow-hidden bg-black sm:grid sm:grid-cols-2 sm:items-center py-10"
  >
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center sm:text-left">
        <h2 class="text-2xl font-bold text-white md:text-6xl">
          Discover Most Suitable Watches
        </h2>

        <p class="hidden text-gray-500 md:mt-4 md:block">
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>

        <div class="mt-4 md:mt-8 relative">
          <div>
            <input
              class="w-full py-4 outline-none px-10 rounded-lg placeholder-gray-400 font-semibold"
              placeholder="Find the best brands"
              type="search"
            />
          </div>
          <div class="absolute top-1 right-3">
            <button
              style="background-color: #3858d6"
              class="py-3 px-6 font-semibold text-white rounded-lg"
            >
              Search
            </button>
          </div>
          <div class="absolute top-5 left-3"><img src="@/assets/img/search_blue.svg" alt="" /></div>
        </div>
      </div>
    </div>

    <img alt="Violin" src="@/assets/img/cta_watch.svg" class="object-contain" />
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>