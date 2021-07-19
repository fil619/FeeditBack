<template>
  <div :class="isDark ? 'dark' : 'light'">
    <div class="flex h-screen bg-gray-200">
      <div
        :class="sidebarOpen ? 'block' : 'hidden'"
        @click="sidebarOpen = false"
        class="
          fixed
          z-20
          inset-0
          bg-black
          opacity-50
          transition-opacity
          lg:hidden
        "
      ></div>

      <div
        :class="
          sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        "
        class="
          fixed
          z-30
          inset-y-0
          left-0
          w-64
          transition
          duration-300
          transform
          bg-pink-700
          dark:bg-gray-900
          overflow-y-auto
          lg:translate-x-0
          lg:static
          lg:inset-0
          shadow-inner
          dark:border-r dark:border-pink-700
        "
      >
        <Sidenav :MainPage.sync="MainPage" />
      </div>

      <div class="flex-1 flex flex-col overflow-hidden">
        <header
          class="
            flex
            justify-between
            items-center
            py-4
            px-6
            bg-white
            border-b-4
            bg-pink-900
            dark:bg-gray-800
          "
        >
          <div class="flex items-center">
            <button
              @click="sidebarOpen = true"
              class="text-gray-500 focus:outline-none lg:hidden"
            >
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div class="relative mx-4 lg:mx-0 hidden sm:block">
              <div class="relative text-gray-900 dark:text-gray-400">
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    class="p-1 focus:outline-none focus:shadow-outline"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      class="w-6 h-6"
                    >
                      <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="q"
                  class="
                    py-2
                    text-sm text-white
                    bg-gray-100
                    dark:bg-gray-900
                    rounded-md
                    pl-10
                    focus:outline-none
                    text-gray-900
                    dark:text-gray-400
                  "
                  :placeholder="$t('Search')"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div class="relative">
              <button
                aria-hidden="true"
                @click="toggleTheme"
                class="
                  group
                  p-2
                  transition-colors
                  duration-200
                  rounded-full
                  shadow-md
                  bg-pink-200
                  hover:bg-pink-200
                  dark:bg-gray-50
                  dark:hover:bg-gray-200
                  text-gray-900
                  focus:outline-none
                "
              >
                <svg
                  v-show="isDark"
                  width="24"
                  height="24"
                  class="
                    fill-current
                    text-gray-700
                    group-hover:text-gray-500 group-focus:text-gray-700
                    dark:text-gray-700
                    dark:group-hover:text-gray-500
                    dark:group-focus:text-gray-700
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  v-show="!isDark"
                  width="24"
                  height="24"
                  class="
                    fill-current
                    text-gray-700
                    group-hover:text-gray-500 group-focus:text-gray-700
                    dark:text-gray-700
                    dark:group-hover:text-gray-500
                    dark:group-focus:text-gray-700
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke=""
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
            </div>

            <div class="relative">
              <button
                @click="CdropdownOpen = !CdropdownOpen"
                class="relative block focus:outline-none"
              >
                <country-flag :country="lang" style="margin-bottom: -5px" />
              </button>

              <div
                v-show="CdropdownOpen"
                @click="CdropdownOpen = false"
                class="fixed inset-0 h-full w-full z-10 shadow"
                style="display: none"
              ></div>

              <div
                v-show="CdropdownOpen"
                class="
                  absolute
                  right-0
                  mt-2
                  w-48
                  bg-white
                  dark:bg-gray-900
                  rounded-md
                  overflow-hidden
                  shadow-xl
                  z-10
                "
                style="display: none"
              >
                <div v-for="c in countries" :key="c"  class="hover:bg-indigo-600 hover:text-white" >
                  <button @click="setCountry(c)">
                    <country-flag :country="c" />
                  </button>
                </div>
              </div>
            </div>

            <div class="relative">
              <button
                @click="notificationOpen = !notificationOpen"
                class="flex mx-4 text-gray-200 focus:outline-none"
              >
                <svg
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>

              <div
                v-show="notificationOpen"
                @click="notificationOpen = false"
                class="fixed inset-0 h-full w-full z-10"
                style="display: none"
              ></div>

              <div
                v-show="notificationOpen"
                class="
                  absolute
                  right-0
                  mt-2
                  w-80
                  bg-white
                  dark:bg-gray-900
                  rounded-lg
                  shadow-xl
                  overflow-hidden
                  z-10
                  text-left
                "
                style="width: 20rem; display: none"
              >
                <a
                  href="#"
                  class="
                    flex
                    items-center
                    px-4
                    py-3
                    text-gray-600
                    hover:text-white
                    hover:bg-indigo-600
                    -mx-2
                  "
                >
                  <img
                    class="h-8 w-8 rounded-full object-cover mx-1"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                    alt="avatar"
                  />
                  <p class="text-sm mx-2">
                    <span class="font-bold text-left" href="#">Sara Salah</span> has ordered
                    <span class="font-bold text-indigo-400" href="#">White Baguette</span>. 2m
                  </p>
                </a>
            
              </div>
            </div>

            <div class="relative">
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="
                  relative
                  block
                  h-8
                  w-8
                  rounded-full
                  overflow-hidden
                  shadow
                  focus:outline-none
                "
              >
                <img
                  class="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                  alt="Your avatar"
                />
              </button>

              <div
                v-show="dropdownOpen"
                @click="dropdownOpen = false"
                class="fixed inset-0 h-full w-full z-10"
                style="display: none"
              ></div>

              <div
                v-show="dropdownOpen"
                class="
                  absolute
                  right-0
                  mt-2
                  w-48
                  bg-white
                  dark:bg-gray-900
                  rounded-md
                  overflow-hidden
                  shadow-xl
                  z-10
                "
                style="display: none"
              >
                <a
                  @click="PageChanger('Error')"
                  class="
                  cursor-pointer
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    dark:text-gray-200
                    hover:bg-indigo-600
                    hover:text-white
                  "
                  >Profile</a
                >
                <a
                    @click="PageChanger('Error')"
                  class="
                    cursor-pointer
                    block
                    px-4
                    py-2
                    text-sm text-gray-700
                    dark:text-gray-200
                    hover:bg-indigo-600
                    hover:text-white
                  "
                  >Logout</a
                >
              </div>
            </div>
          </div>
        </header>
        <main
          class="
            flex-1
            overflow-x-hidden overflow-y-auto
            bg-gray-100
            dark:bg-gray-600
          "
        >
          <Dashboard v-if="page == 'Dashboard' "  />
          <Orders v-if="page == 'Orders' "  />
          <Guests v-if="page == 'Guests' "  />
          <Error v-if="page == 'Error' "  />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Sidenav from "./Sidenav.vue";
import Dashboard from "./Dashboard.vue";

import Error from "./Error.vue";
import Orders from "./Orders.vue";
import Guests from "./Guests.vue";


export default {
  name: "Home",
  components: {
    Sidenav,
    Dashboard,
    Orders,
    Guests,
    Error
  },
  computed:{
    page(){
     return this.$store.state.Page
    },
    isDark(){
     return this.$store.state.isDark
    }
  },
  props: {},
  mounted() {

  },
  data() {
    return {
      MainPage: "Dashboard",
      notificationOpen: false,
      CdropdownOpen: false,
      dropdownOpen: false,
      sidebarOpen: false,
      countries: ["gb", "es"],
      lang: "gb",
    };
  },
  methods: {
    PageChanger(page){
       this.$store.dispatch('ChangePageHandler', page)
     },
    setCountry(country) {
      this.lang = country
      this.$i18n.locale = country;
      this.CdropdownOpen = false;
    },
    toggleTheme() {
      this.$store.commit('ToggleDark')
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.custom__button {
  text-transform: capitalize;
  padding: 8px;
  background-color: #2d2b55;
}
</style>
