<template>
  <div>
    <div class="mt-3 md:mt-6">
      <div class="lg:py-12 lg:flex lg:justify-center">
        <div
          class="
            bg-white
            lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg
          "
        >
          <div class="lg:w-1/2">
            <div
              class="h-64 bg-cover lg:rounded-lg lg:h-full __aboutHeroImg"
            ></div>
          </div>
          <div class="py-6 px-6 max-w-xl lg:max-w-5xl lg:w-1/2 text-left">
            <h2 class="text-3xl text-gray-800 font-bold">
              About <span class="text-indigo-600">Me</span>
            </h2>
            <p class="mt-4 text-gray-600">
              {{
                config.about.description
              }}
            </p>
            <div class="pr-6 pt-6">
              <span v-for="(tag, idx) in config.about.tags" :key="idx"
                class="
                  inline-block
                  bg-gray-100
                  rounded-full
                  px-3
                  py-1
                  text-sm
                  font-semibold
                  text-gray-600
                  mr-2
                "
                >#{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.__aboutHeroImg {
  background-image: url('https://www.did-web.com/wp-content/uploads/2020/05/programador_ordenador_difuminado.png');
}
</style>
y
