<template>
    <div class="pa-2">
            <!-- Statistics Cards -->
            <div
              class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4"
            >
              <div
                class="
                  bg-pink-900
                  dark:bg-gray-800
                  shadow-lg
                  rounded-md
                  flex
                  items-center
                  justify-between
                  p-3
                  border-b-4 border-pink-600
                  dark:border-gray-600
                  text-white
                  font-medium
                  group
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    w-14
                    h-14
                    bg-white
                    rounded-full
                    transition-all
                    duration-300
                    transform
                    group-hover:rotate-12
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="
                      stroke-current
                      text-pink-900
                      dark:text-gray-800
                      transform
                      transition-transform
                      duration-500
                      ease-in-out
                    "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div class="text-right">
                  <p class="text-2xl">{{ users }}</p>
                  <p>{{ $t("Guests") }}</p>
                </div>
              </div>

              <div
                class="
                  bg-pink-900
                  dark:bg-gray-800
                  shadow-lg
                  rounded-md
                  flex
                  items-center
                  justify-between
                  p-3
                  border-b-4 border-pink-600
                  dark:border-gray-600
                  text-white
                  font-medium
                  group
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    w-14
                    h-14
                    bg-white
                    rounded-full
                    transition-all
                    duration-300
                    transform
                    group-hover:rotate-12
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="
                      stroke-current
                      text-pink-900
                      dark:text-gray-800
                      transform
                      transition-transform
                      duration-500
                      ease-in-out
                    "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <div class="text-right">
                  <p class="text-2xl">{{ orders }}</p>
                  <p>{{ $t("Orders") }}</p>
                </div>
              </div>
              <div
                class="
                  bg-pink-900
                  dark:bg-gray-800
                  shadow-lg
                  rounded-md
                  flex
                  items-center
                  justify-between
                  p-3
                  border-b-4 border-pink-600
                  dark:border-gray-600
                  text-white
                  font-medium
                  group
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    w-14
                    h-14
                    bg-white
                    rounded-full
                    transition-all
                    duration-300
                    transform
                    group-hover:rotate-12
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="
                      stroke-current
                      text-pink-900
                      dark:text-gray-800
                      transform
                      transition-transform
                      duration-500
                      ease-in-out
                    "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    ></path>
                  </svg>
                </div>
                <div class="text-right">
                  <p class="text-2xl">£{{ Sales }}</p>
                  <p>{{ $t("Sales") }}</p>
                </div>
              </div>
              <div
                class="
                  bg-pink-900
                  dark:bg-gray-800
                  shadow-lg
                  rounded-md
                  flex
                  items-center
                  justify-between
                  p-3
                  border-b-4 border-pink-600
                  dark:border-gray-600
                  text-white
                  font-medium
                  group
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    items-center
                    w-14
                    h-14
                    bg-white
                    rounded-full
                    transition-all
                    duration-300
                    transform
                    group-hover:rotate-12
                  "
                >
                  <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="
                      stroke-current
                      text-pink-900
                      dark:text-gray-800
                      transform
                      transition-transform
                      duration-500
                      ease-in-out
                    "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div class="text-right">
                  <p class="text-2xl">£ {{balances}}</p>
                  <p>{{ $t("Balances") }}</p>
                </div>
              </div>
            </div>
          
           
           <div class="flex flex-col md:flex-row items-stretch justify-end mx-2">
              <div class="">
                <VueDatePicker
                  v-model="Sdate"
                  ormat-header="dddd, DD MMMM"
                  :color="color"
                >
                  <template #activator="{ date }">
                    <div class="relative w-full">
                      <input type="hidden" name="date" x-ref="date" />
                      <input
                        type="text"
                        readonly
                        :value="date"
                        class="
                          w-full
                          cursor-pointer
                          w-full
                          pl-4
                          pr-10
                          py-3
                          leading-none
                          rounded-lg
                          shadow-sm
                          focus:outline-none
                          focus:shadow-outline
                          text-gray-900
                          dark:text-gray-100
                          font-medium
                          bg-white
                          dark:bg-gray-900
                        "
                        placeholder="Select date"
                      />

                      <div class="absolute top-0 right-0 px-3 py-2">
                        <svg
                          class="h-6 w-6 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    </div>
                  </template>
                </VueDatePicker>
              </div>
              <div class="pl-2" >
                <button @click="Filter" class="disabled:opacity-50 rounded px-3 mt-2 md:mt-0 py-2 border-b-4 border-l-2 shadow-lg  bg-pink-800 border-pink-900 dark:bg-gray-800 dark:border-gray-900 text-white">
                    {{$t('Filter')}}
                </button>
              </div>
            </div>

            <div class="flex flex-col mt-4 h-full">
              <div
                class="
                  -my-2
                  py-2
                  overflow-x-auto
                  sm:-mx-6
                  sm:px-6
                  lg:-mx-8
                  lg:px-8
                "
              >
                <OrdersByGuests class="hidden sm:block"  />
                <DashboardOrders class="block md:hidden" v-if="dashboardorders.length > 0" />
                  <div class="p-2" >
                    <no-data   v-if="dashboardorders.length == 0"/>
                  </div>
              </div>
            </div>

 <!-- ./Statistics Cards -->

            <div class="flex flex-col mt-8"  v-if="dashboardorders.length > 0" >
              <div
                class="
                  -my-2
                  py-2
                  overflow-x-auto
                  sm:-mx-6
                  sm:px-6
                  lg:-mx-8
                  lg:px-8
                "
              >
                <div class="grid grid-cols-12 gap-4">
                  <div
                    class="
                      sm:col-span-12
                      col-span-12
                      md:col-span-4
                      bg-pink-900
                      dark:bg-gray-800
                    "
                  >
                    <span class="text-white font-bold">{{ $t("Guests") }}</span>
                    <Chart/>
                  </div>
                  <div
                    class="
                      sm:col-span-12
                      col-span-12
                      md:col-span-8
                      bg-pink-900
                      dark:bg-gray-800
                    "
                  >
                    <span class="text-white font-bold">{{
                      $t("Order (Quantity)")
                    }}</span>
                    <BarChart   />
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import OrdersByGuests from "./OrdersByGuests.vue";
import DashboardOrders from "./DashboardOrders.vue";
import BarChart from "./BarChart.vue";
import Chart from "./Chart.vue";

export default {
    components:{
        OrdersByGuests,
        DashboardOrders,
        Chart,
        BarChart
    },
    data() {
        return {
          Sdate : null,
        }
    },
    computed: {
    users() {
      return this.$store.state.dashboardguests.length;
    },
     dashboardorders() {
      return this.$store.state.dashboardorders;
    },
    color(){
        if (this.$store.state.isDark) {
          return '#1f2937'          
        } else {
          return '#BE185D'
        }
      },
    orders() {
      let initialValue = 0;
      return this.$store.state.dashboardorders.reduce(function (accumulator, currentValue) {
        return accumulator + Number(currentValue.quantity);
      }, initialValue);
    },
    Sales() {
      let initialValue = 0;
      return this.$store.state.dashboardorders.reduce(function (accumulator, currentValue) {
        return (
          accumulator + Number(currentValue.price)
        );
      }, initialValue);
    },
    balances() {
      let initialValue = 0;
      return this.$store.state.dashboardorders.reduce(function (accumulator, currentValue) {
        return (
          accumulator +
          Number(currentValue.quantity) * Number(currentValue.price)
        );
      }, initialValue);
    },
    
  },
  methods: {
    Filter(){
      if (this.Sdate == null) {
          this.$store.commit('AddToast' , { type: 'warning', text: 'SELECT A DATE' })
      } else {

        var from = this.Sdate + ' 00:00:00'
        var to = this.Sdate + ' 23:59:59'
            var params = {
              since :from,
                until :to,
            }
            var val = {
              action : 'GetDashboardGuests',
                vals : {params : params}
              }
            this.$store.dispatch('Action_STConnectorGet' , val)
      }


    }
  },
}
</script>