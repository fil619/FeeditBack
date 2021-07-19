<template>
  <div class="mt-4 mx-4">
    <div class="w-full overflow-hidden rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr
              class="
                text-xs
                font-semibold
                tracking-wide
                text-left text-white
                dark:text-gray-500
                uppercase
                border-b
                dark:border-gray-700
                bg-pink-900
                dark:text-gray-400
                dark:bg-gray-800
              "
            >
              <th class="px-4 py-3 text-center">Guest ID</th>
              <th class="px-4 py-3 text-center">Name</th>
              <th class="px-4 py-3 text-center">Item</th>
              <th class="px-4 py-3 text-center">Price</th>
              <th class="px-4 py-3 text-center">Quantity</th>
            </tr>
          </thead>
          <tbody
            class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
          >
            <tr
              class="
                bg-gray-50
                dark:bg-gray-800
                hover:bg-gray-100
                dark:hover:bg-gray-900
                text-gray-700
                dark:text-gray-400
              "
              v-for="itm in SortOrders"
              :key="itm.id"
            >
              <td class="px-4 py-3">
                <div class="flex items-center text-sm">
                  <div>
                    <p class="font-semibold text-center">{{ itm.guest_id }}</p>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-sm">{{ getGuest(itm.guest_id) }}</td>
              <td class="px-4 py-3 text-xs">
                <span
                  class="
                    px-2
                    py-1
                    font-semibold
                    leading-tight
                    text-pink-700
                    bg-pink-100
                    rounded-full
                    dark:bg-green-700
                    dark:text-green-100
                  "
                >
                  {{ itm.name }}
                </span>
              </td>
              <td class="px-4 py-3 text-sm">{{ itm.price }}</td>
              <td class="px-4 py-3 text-sm">{{ itm.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="
          grid
          px-4
          py-3
          text-xs
          font-semibold
          tracking-wide
          text-gray-500
          uppercase
          border-t
          dark:border-gray-700
          bg-gray-50
          sm:grid-cols-9
          dark:text-gray-400
          dark:bg-gray-800
        "
      >
        <span class="flex items-center col-span-3">
          Showing {{ start }}-{{ start + end }} of {{ Orders.length }}
        </span>
        <span class="col-span-2"></span>
        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul class="inline-flex items-center">
              <li>
                <button
                  class="
                    px-3
                    py-1
                    rounded-md rounded-l-lg
                    focus:outline-none
                    focus:shadow-outline-purple
                  "
                  :disabled="checkPrevious"
                  @click="Previous"
                  aria-label="Previous"
                >
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <li>
                <button
                  class="
                    px-3
                    py-1
                    rounded-md rounded-r-lg
                    focus:outline-none
                    focus:shadow-outline-purple
                  "
                  :disabled="checkNext"
                  @click="Next"
                  aria-label="Next"
                >
                  <svg
                    class="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              <li></li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Orders() {
      return this.$store.state.orders;
    },
    Guests() {
      return this.$store.state.guests;
    },
    OrdersLen() {
      return this.Orders.length;
    },
    checkPrevious() {
      return this.start - this.end <= 0;
    },
    checkNext() {
      return this.start + this.end >= this.Orders.length;
    },
    SortOrders() {
      var orders = this.Orders || [];
      var objCopy = JSON.parse(JSON.stringify(orders));
      var start = this.start;
      var end = this.end;
      var ret = objCopy.splice(start, end);
      return ret;
    },
  },
  data() {
    return {
      start: 0,
      end: 5,
    };
  },
  methods: {
    getGuest(id) {
      var guest = this.Guests.find((el) => el.id == id) || {
        first_name: "No",
        last_name: "Name",
      };
      return guest.first_name + " " + guest.last_name;
    },
    Previous() {
      this.start -= this.end;
    },
    Next() {
      this.start += this.end;
    },
  },
};
</script>

<style  scoped>
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

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

.apexcharts-text tspan,
.apexcharts-datalabel-value {
  fill: #fff !important;
}
</style>
