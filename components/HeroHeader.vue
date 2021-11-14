<template>
  <div id="aboutme">
    <div class="hero bg-gray-100 py-16">
      <div class="container px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
        <div
          class="
            hero-wrapper
            grid grid-cols-1
            md:grid-cols-12
            gap-8
            items-center
          "
        >
          <div class="text-center md:text-left hero-text col-span-6">
            <h1
              id="text-1"
              class="
                font-bold
                text-2xl
                md:text-4xl
                max-w-xl
                text-gray-900
                leading-tight
              "
            >
              Welcome,
            </h1>
            <h1
              id="text-2"
              class="
                font-bold
                text-2xl
                md:text-4xl
                max-w-xl
                text-gray-900
                leading-tight
              "
            >
              <span id="text-2-span"> I'm {{ config.mentor.username }}</span>
            </h1>
            <h4 class="subheading font-weight-thin">
                <span class="textAnimated text-gray-700"
                >{{ config.mentor.attribute }}
                </span>
            </h4>
          </div>
          <div class="hero-image col-span-6">
            <img
              class="
                floating
                md:mt-0
                rounded-full
                w-40
                shadow-sm
                ml-auto
                mr-auto
              "
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
              alt=""
            />
          </div>
        </div>
        <button class="rounded-full bg-indigo-500 px-4 py-2 text-white">
          <a :href="`mailto: ${config.mentor.email}`">Get in touch</a>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* profile picture css */

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes floating {
  0% {
    transform: translate(0, 0px);
  }
  50% {
    transform: translate(0, 15px);
  }
  100% {
    transform: translate(0, -0px);
  }
}

.hero-image img {
  padding: 5px;
  background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
}
</style>
