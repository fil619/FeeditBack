<template>
  <div class="flex items-center justify-center h-full ">
    <div class="overflow-auto lg:overflow-visible w-full p-2">
      <table
        class="table text-gray-400 border-separate space-y-6 text-sm w-full"
      >
        <thead class="bg-pink-800 dark:bg-gray-800 text-gray-200">
          <tr>
            <th class="px-4 py-3 text-left">{{$t('Guest')}}</th>
            <th class="px-4 py-3 text-left">{{$t('Item')}}</th>
            <th class="px-4 py-3 text-left">{{$t('Price')}}</th>
            <th class="px-4 py-3 text-left">{{$t('Quantity')}}</th>
            <th class="px-4 py-3 text-left">{{$t('Visited')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-pink-700 dark:bg-gray-700 text-gray-200 " v-for="i in orders" :key="i.id">
            <td class="p-3 text-left">
              <div class="flex align-items-center">
                <div class="ml-3">
                  <div class="">{{ GetGuest(i.guest_id).first_name }} {{ GetGuest(i.guest_id).last_name }}</div>
                  <div class="text-gray-300">{{ GetGuest(i.guest_id).email }}</div>
                </div>
              </div>
            </td>
            <td class="p-3 text-left">
              {{ i.name }}
            </td>
            <td class="p-3 text-left font-bold">
              £ {{ i.price }}
            </td>
            <td class="p-3 text-left">
              {{ i.quantity }}
            </td>
            <td class="p-3 text-left">
              {{ GetGuest(i.guest_id).visited }}
            </td>
          </tr>
        </tbody>
      </table>
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

<style scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 5),
tr th:nth-child(n + 5) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>