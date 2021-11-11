<template>
  <div class="bg-gray-100 mt-6">
    <div class="pr-6 pt-6 text-center text-3xl text-gray-700 font-bold">
      What Mentees say about me
    </div>

    <div class="flex flex-wrap justify-center">
      <div v-for="mentee in 3" :key="mentee" class="py-6">
        <utilities-ReviewCard />
      </div>
    </div>
    <!-- BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES -->
    <div
      class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10"
    >
      <div>
        <a
          title="Buy me a beer"
          href="#"
          target="_blank"
          class="
            block
            w-16
            h-16
            rounded-full
            transition-all
            shadow
            hover:shadow-lg
            transform
            hover:scale-110 hover:rotate-12
          "
        >
          <img
            class="object-cover object-center w-full h-full rounded-full"
            src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
          />
        </a>
      </div>
    </div>
  </div>
</template>
<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>
