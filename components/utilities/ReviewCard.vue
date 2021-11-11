<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="bg-gray-100">
    <div class="px-4">
      <div class="max-w-lg px-8 py-8 rounded-md shadow-lg bg-white">
        <div class="flex space-x-0.5">
          <svg
            v-for="i in 5"
            :key="i"
            :class="i <= rating ? 'text-yellow-300' : 'text-gray-300'"
            class="w-5 h-5"
            :fill="i <= rating ? 'currentColor' : 'none'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            ></path>
          </svg>
        </div>
        <p class="mt-2 text-sm font-medium leading-5 text-gray-500">
          {{ date }}
        </p>
        <div class="mt-6 flex items-center space-x-1">
          <p class="text-sm font-medium leading-5 capitalize text-gray-500">
            {{ position }}
          </p>
          <span class="text-gray-500">&bull;</span>
          <p
            v-if="verifiedPurchase"
            class="text-sm font-medium leading-5 text-gray-500"
          >
            Completed
          </p>
        </div>
        <div class="space-y-1">
          <h3 class="font-semibold text-gray-800">
            {{ title }}
          </h3>
          <p class="text-sm font-medium leading-5 text-gray-600">
            {{ body }}
          </p>
        </div>
        <div class="mt-6 flex items-center space-x-2">
          <div class="flex flex-shrink-0 rounded-full border border-gray-200">
            <img
              class="w-8 h-8 object-cover rounded-full"
              :src="photo"
              alt=""
            />
          </div>
          <span class="text-sm font-semibold leading-5 text-gray-900">{{
            name
          }}</span>
          <div class="flex-shrink-0">
            <svg
              class="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1
    },
    date: {
      type: String,
      default: 'Wed, 4 August 2021'
    },
    verifiedPurchase: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      default: 'Carrie Brewer'
    },
    photo: {
      type: String,
      default: `https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg`
    },
    rating: {
      type: Number,
      default: 4
    },
    title: {
      type: String,
      default: "There's a reason they're number one"
    },
    body: {
      type: String,
      default: `There's not much to say about YETI stainless steel tumblers that hasn't been said. There's a reason they're so highly rated. I filled mine with ice and water at 8:30am last week and drove to work sipping it. I left it in my car when I went into the office.`
    },
    position: {
      type: String,
      default: 'Front-end Developer'
    }
  },
  data() {
    return {
      reviews: []
    }
  }
}
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}
</style>
