<template>
    <div>
        <div class="flex flex-col md:flex-row items-stretch justify-end mx-2">
              <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200">
                  {{ $t("Limit") }}
                </p>
                <input
                  v-model="limit"
                  type="number"
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
                  :placeholder="$t('Limit')"
                />
              </div>
              <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200">
                  {{ $t("Offset") }}
                </p>
                <input
                  type="number"
                  v-model="offset"
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
                 :placeholder="$t('Offset')"
                />
              </div>
              <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200">
                  {{ $t("Start Date") }}
                </p>
                <VueDatePicker
                  v-model="Edate"
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
                        :placeholder="$t('Select date')"
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
              <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200 w-full">{{ $t("End Date") }}
                </p>
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
                        :placeholder="$t('Select date')"
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
              <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200">
                  {{ $t("Guest ID") }}
                </p>
                <input
                  v-model="id"
                  type="number"
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
                  :placeholder="$t('Guest ID')"
                />
              </div>
              <!-- <div class="pl-2">
                <p class="opacity-90 text-gray-900 dark:text-gray-200">
                  {{ $t("Guest") }}
                </p>
                <div class="relative inline-flex w-full">
                  <select
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
                      bg-white
                      dark:bg-gray-900
                      font-medium
                    "
                  >
                    <option value="All" selected>{{ $t("All") }}</option>
                    <option
                      :value="guest.id"
                      v-for="guest in $store.state.guests"
                      :key="guest.id"
                    >
                      {{ guest.first_name }} {{ guest.last_name }}
                    </option>
                  </select>
                </div>
              </div> -->
            </div>

            <div class="text-white  flex flex-col pt-5">
              <div class="flex flex-row-reverse flex-wrap m-auto">
                  <button @click="Filter" class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-pink-800 border-pink-900 dark:bg-gray-800 dark:border-gray-900 text-white">
                    {{$t('Filter')}}
                </button>
                <button @click="ClearData" class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg bg-pink-800 border-pink-900 dark:bg-gray-800 dark:border-gray-900 text-white">
                    {{$t('Clear')}}
                </button>
              </div>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        type:{
            default:'',
            type: String
        }
    },
    computed:{
      color(){
        if (this.$store.state.isDark) {
          return '#1f2937'          
        } else {
          return '#BE185D'
        }
      }
    },
        data() {
        return {
          limit: '',
          offset: '',
          id: '',
          Sdate: null,
          Edate: null,
        }
    },
    methods: {
        Filter(){
            var params = {
                limit : this.limit,
                offset : this.offset,
                id : this.id,
                since : this.Sdate,
                until : this.Edate,
            }


            function clean(obj) {
            for (var propName in obj) {
                if (obj[propName] === null || obj[propName] === undefined || obj[propName] === "") {
                delete obj[propName];
                }
            }
            return obj
            }

            var val = {}
            switch (this.type) {
                case 'Guests':
                    val = {
                    action : 'getGuests',
                    vals : {params : clean(params)}
                    }
                break;
                case 'Orders':
                        val = {
                        action : 'getGuestOrders',
                        vals : {params : clean(params)}
                        }
                break;
            
                default:
                    break;
            }
            this.$store.dispatch('Action_STConnectorGet' , val)

        },
        ClearData(){
          this.limit  = ''
          this.offset  = ''
          this.id  = ''
          this.Sdate  = null
          this.Edate  = null 
        }
    },
}
</script>