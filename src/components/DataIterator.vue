<template>
<div>
      <div class="flex flex-col py-2 px-1" v-if="guests.length > 0" >
          <div class="bg-white dark:bg-gray-800 shadow-md rounded-3xl p-1 mt-1" v-for="i in guests" :key="i.id" >
            <div class="flex-none lg:flex">
              <div class="flex-auto ml-3 justify-evenly py-2">
                <div class="flex flex-wrap">
                  <h2 class="flex-auto text-left text-lg dark:text-gray-100 text-gray-900 font-medium"> <span class="font-bold" >{{ i.id }} : </span>{{ i.first_name }} {{ i.last_name }}</h2>
                </div>
                <div class="flex py-1 text-sm dark:text-gray-200 text-gray-800">
                  <div class="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20" class="h-5 w-5 mr-3 dark:text-gray-300 text-gray-700" fill="currentColor">
                        <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                    </svg>
                    <p class="dark:text-gray-300 text-gray-700">{{i.email}}</p>
                  </div>
                </div>
                <div class="flex py-1 text-sm text-gray-500">
                  <div class="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  mr-3 dark:text-gray-300 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <p class="dark:text-gray-300 text-gray-700">{{ i.gender }}</p>
                  </div>
                  <div class="flex-1 inline-flex items-center -ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2 dark:text-gray-300 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p class="dark:text-gray-300 text-gray-700">{{i.visited}}</p>
                  </div>
                </div>
      
              </div>
            </div>
          </div>
      </div>
      <div v-else>
        <no-data />
      </div>
</div>

</template>

<script>
export default {
    props :{
        guests:{
            default: function () {
                return []
            },
        }
    }
};
</script>