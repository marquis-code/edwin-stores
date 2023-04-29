<template>
  <section class="">
    <div
      class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
    >
      <div class="mx-auto max-w-lg text-center">
        <h2 class="text-xl text-green-600 font-extrabold">
          Here are our some of the best clients.
        </h2>

        <h2 class="text-4xl text-gray-600 font-extrabold mt-4">
          What People Say About Us
        </h2>
      </div>

      <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div class="px-4 py-8">
          <section class="rounded-lg bg-gray-100 p-8">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Man"
                src="@/assets/img/testimony_2.svg"
                class="aspect-square w-full rounded-lg object-cover"
              />

              <blockquote class="sm:col-span-2">
                <p class="text-sm font-medium text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  perspiciatis cumque neque ut nobis excepturi, quasi iure
                  quisquam autem alias.
                </p>

                <cite class="mt-8 inline-flex items-center not-italic">
                  <span
                    class="hidden h-px w-6 bg-gray-400 sm:inline-block"
                  ></span>
                  <p class="text-sm uppercase text-gray-500 sm:ml-3">
                    <strong>Justin Harrison</strong>, Beatle Inc.
                  </p>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>

        <div class="px-4 py-8">
          <section class="rounded-lg bg-gray-100 p-8">
            <div class="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
              <img
                alt="Man"
                src="@/assets/img/testimony_1.svg"
                class="aspect-square w-full rounded-lg object-cover"
              />

              <blockquote class="sm:col-span-2">
                <p class="text-sm font-medium text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  perspiciatis cumque neque ut nobis excepturi, quasi iure
                  quisquam autem alias.
                </p>

                <cite class="mt-8 inline-flex items-center not-italic">
                  <span
                    class="hidden h-px w-6 bg-gray-400 sm:inline-block"
                  ></span>
                  <p class="text-sm uppercase text-gray-500 sm:ml-3">
                    <strong>Justin Harrison</strong>, Beatle Inc.
                  </p>
                </cite>
              </blockquote>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>