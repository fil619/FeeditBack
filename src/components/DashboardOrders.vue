<template>
    <div class="h-auto w-full flex bg-pink-800 dark:bg-gray-600 ">
        <div class="px-1 py-2 grid grid-cols-4 gap-4 w-full"   >
          <div
            class="col-span-4 sm:col-span-4 md:col-span-2 lg:col-span-1 xl:col-span-1 flex flex-col items-center"
             v-for="i in orders" :key="i.id"
          >
            <div class="bg-white dark:bg-gray-400  shadow-lg rounded-lg w-full">
              <div class="py-5 px-5">
                <span class="font-bold text-gray-900 dark:text-gray-200 text-lg">{{ i.name }}</span>

                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-800 dark:text-gray-200 font-light"><span class="font-bold">Guest : </span>{{  GetGuest(i.guest_id).first_name }} {{  GetGuest(i.guest_id).last_name }}</div>
                </div>
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-800 dark:text-gray-200 font-light"><span class="font-bold">Visited : </span>{{  GetGuest(i.guest_id).visited }} </div>
                </div>


                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-800 dark:text-gray-200 font-light"> <span class="font-bold">Qty :</span>  {{i.quantity }}</div>
                  <div class="text-3xl text-red-600 font-bold">£ {{i.price }}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
</template>

<script>
export default {
  computed: {
    guests() {
      return this.$store.state.dashboardguests;
    },
    orders() {
      return this.$store.state.dashboardorders;
    },
  },
  methods: {
    GetGuest(id) {
      var obj = this.guests.find((el) => el.id == id) || {
        first_name: "",
        last_name: "",
        visited: "",
        email: ""
      };
      return obj;
    },
  },
};
</script>