<template>
  <header
    aria-label="Site Header"
    class="bg-gradient-to-r from-black via-gray-300 to-black"
  >
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <div class="flex items-center space-x-2 text-teal-600" href="/">
            <span class="sr-only">Home</span>
            <div><img src="@/assets/img/logo.svg" alt="" /></div>
            <div><p class="text-white font-semibold">Edwin Watches</p></div>
          </div>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Site Nav">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link
                  class="text-white font-semibold transition hover:text-gray-500/75"
                  to="/"
                >
                  Home
                </router-link>
              </li>

              <li>
                <a
                  class="text-white font-semibold transition hover:text-gray-500/75"
                  href="/"
                >
                  Brands
                </a>
              </li>

              <li>
                <a
                  class="text-white font-semibold transition hover:text-gray-500/75"
                  href="/"
                >
                  Recent Products
                </a>
              </li>

              <li>
                <a
                  class="text-white font-semibold transition hover:text-gray-500/75"
                  href="/"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  class="text-white font-semibold transition hover:text-gray-500/75"
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-6">
          <div class="flex space-x-3 sm:gap-4">
            <img src="@/assets/img/user.svg" alt="" class="h-7 w-7" />

            <div class="sm:flex relative cursor-pointer">
              <img src="@/assets/img/cart.svg" alt="" class="h-7 w-7" />
              <p
                class="bg-green-200 text-green-600 rounded-full px-2 py-1 font-black text-xs absolute -top-1 left-4"
              >
                5
              </p>
            </div>
          </div>

          <div class="block md:hidden">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>