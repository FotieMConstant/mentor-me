<template>
  <div
    class="
      container
      flex flex-wrap
      pt-4
      pb-10
      m-auto
      mt-6
      md:mt-15
      lg:px-12
      xl:px-16
    "
  >
    <div class="w-full px-0 lg:px-4">
      <h2
        class="px-12 text-base font-bold text-center md:text-3xl text-gray-700"
      >
        Choose your plan
      </h2>
      <p class="py-1 text-sm text-center text-gray-400 mb-10">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div class="flex flex-wrap items-center justify-center py-4 pt-0">
        <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
          <div
            class="
              flex flex-col
              rounded-lg
              shadow-lg
              group
              relative
              cursor-pointer
              hover:shadow-2xl
            "
          >
            <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
              <h3
                class="
                  mx-auto
                  text-base
                  font-semibold
                  text-center
                  underline
                  text-blue-500
                "
              >
                Standard
              </h3>
              <p class="text-5xl font-bold text-center text-blue-500">
                ${{ Math.floor(plans.standart.price) }}.<span class="text-3xl">
                {{ (plans.standart.price + '').split('.')[1] ?(plans.standart.price + '').split('.')[1] : '00' }}
              </span>
              </p>
              <p class="text-xs text-center uppercase text-blue-500">monthly</p>
            </div>
            <div
              class="
                flex flex-col
                items-center
                justify-center
                w-full
                h-full
                py-6
                rounded-b-lg
                bg-blue-500
              "
            >
              <p class="text-xl text-white">{{ plans.standart.time }} month</p>
              <button
                class="
                  w-5/6
                  py-2
                  mt-2
                  font-semibold
                  text-center
                  uppercase
                  bg-white
                  border border-transparent
                  rounded
                  text-blue-500
                "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div class="w-full p-4 md:w-1/2 lg:w-1/4">
          <div
            class="
              flex flex-col
              rounded-lg
              shadow-lg
              relative
              cursor-pointer
              hover:shadow-2xl
            "
          >
            <div class="w-full px-4 py-8 rounded-t-lg bg-blue-500">
              <h3
                class="
                  mx-auto
                  text-base
                  font-semibold
                  text-center
                  underline
                  text-white
                "
              >
                Premium
              </h3>
              <p class="text-5xl font-bold text-center text-white">
                ${{ Math.floor(plans.premium.price) }}.<span class="text-3xl">
                {{ (plans.premium.price + '').split('.')[1] ?(plans.premium.price + '').split('.')[1] : '00' }}
              </span>
              </p>
              <p class="text-xs text-center uppercase text-white">monthly</p>
            </div>
            <div
              class="
                flex flex-col
                items-center
                justify-center
                w-full
                h-full
                py-6
                rounded-b-lg
                bg-blue-700
              "
            >
              <p class="text-xl text-white">{{ plans.premium.time }} months</p>
              <button
                class="
                  w-5/6
                  py-2
                  mt-2
                  font-semibold
                  text-center
                  uppercase
                  bg-white
                  border border-transparent
                  rounded
                  text-blue-500
                "
              >
                Save {{ plans.premium.save_percent }}%
              </button>
            </div>
          </div>
        </div>

        <div class="w-full p-4 md:w-1/2 lg:w-1/4 plan-card">
          <div
            class="
              flex flex-col
              rounded-lg
              shadow-lg
              group
              card-group
              relative
              hover:bg-blue-secondary
              cursor-pointer
              hover:shadow-2xl
            "
          >
            <div class="w-full px-4 py-6 rounded-t-lg card-section-1">
              <h3
                class="
                  mx-auto
                  text-base
                  font-semibold
                  text-center
                  underline
                  text-blue-500
                "
              >
                Elite
              </h3>
              <p class="text-5xl font-bold text-center text-blue-500">
                ${{ Math.floor(plans.elite.price) }}.<span class="text-3xl">
                {{ (plans.elite.price + '').split('.')[1] ?(plans.elite.price + '').split('.')[1] : '00' }}
              </span>
              </p>
              <p class="text-xs text-center uppercase text-blue-500">monthly</p>
            </div>
            <div
              class="
                flex flex-col
                items-center
                justify-center
                w-full
                h-full
                py-6
                rounded-b-lg
                bg-blue-500
              "
            >
              <p class="text-xl text-white">{{ plans.elite.time }} months</p>
              <button
                class="
                  w-5/6
                  py-2
                  mt-2
                  font-semibold
                  text-center
                  uppercase
                  bg-white
                  border border-transparent
                  rounded
                  text-blue-500
                "
              >
                Save {{ plans.elite.save_percent }}%
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonthlyFee',
  props: {
    plans: {
      type: Object,
      default: () => {
        return {
          "standart": {
            "price": 56.78,
            "time": 3
          },
          "premium": {
            "price": 78.12,
            "time": 2
          },
          "elite": {
            "price": 45,
            "time": 2,
            "save_percent": 78
          }
        }
      }
    }
  }
}
</script>

<style></style>
