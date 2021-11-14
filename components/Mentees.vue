<template>
  <div>
    <div class="pr-6 pt-6 text-center text-3xl text-gray-700 font-bold">
      Mentees
    </div>
    <div class="pr-6 pt-6 text-center">
      <span
        class="
          inline-block
          bg-gray-100
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          mr-2
          hover:bg-indigo-600 hover:text-white
          transition
          duration-500
          cursor-pointer
        "
        :class="
          showCurrentlyMentoring
            ? `bg-indigo-600 text-white`
            : `bg-gray-100 text-gray-600`
        "
        @click="toggleMentee(1)"
        >Currently Mentoring</span
      >
      <span
        class="
          inline-block
          bg-gray-100
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold
          mr-2
          hover:bg-indigo-600 hover:text-white
          transition
          duration-500
          cursor-pointer
        "
        :class="
          previousMentees
            ? `bg-indigo-600 text-white`
            : `bg-gray-100 text-gray-600`
        "
        @click="toggleMentee(2)"
        >Previous mentees</span
      >
    </div>
    <div class="text-center">
      <div class="text-gray-600 mt-5">
        <transition name="fade">
          <div v-show="showCurrentlyMentoring">
            <div class="flex flex-wrap justify-center">
              <div v-for="mentee in mentees.current" :key="mentee" class="p-6">
                <utilities-ProfileCard :mentee="mentee" />
              </div>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-show="previousMentees">
            <div class="flex flex-wrap justify-center">
              <div v-for="mentee in mentees.prev" :key="mentee" class="p-6">
                <utilities-ProfileCard :mentee="mentee" />
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Mentees',
  props: {
    mentees: {
      type: Object,
      default: () => {
        return {
          current: [],
          prev: []
        }
      }
    }
  },
  data() {
    return {
      showCurrentlyMentoring: true,
      previousMentees: false
    }
  },
  methods: {
    toggleMentee(tab) {
      if (tab === 1) {
        this.showCurrentlyMentoring = true
        this.previousMentees = false
      } else {
        this.previousMentees = true
        this.showCurrentlyMentoring = false
      }
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
