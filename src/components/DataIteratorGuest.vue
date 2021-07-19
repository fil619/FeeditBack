<template>
<div>
      <div class="flex flex-col py-2 px-1"  v-if="guests.length > 0">
          <div class="bg-white dark:bg-gray-800 shadow-md rounded-3xl p-1 mt-1" v-for="i in guests" :key="i.id" >
            <div class="flex-none lg:flex">
              <div class="flex-auto ml-3 justify-evenly py-2">
                <div class="flex flex-wrap">
                  <h2 class="flex-auto text-left text-lg font-medium dark:text-gray-300 text-gray-700">Guest ID : {{ i.guest_id }}</h2>
                </div>
                <div class="flex py-1 text-sm text-gray-500">
                  <div class="flex-1 inline-flex items-center">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 dark:text-gray-300 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" />
                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                    </svg>
                    <p class="dark:text-gray-300 text-gray-700">{{i.name}}</p>
                  </div>
                </div>
                <div class="flex py-1 text-sm text-gray-500">
                  <div class="flex-1 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5  mr-3 dark:text-gray-300 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <p class="dark:text-gray-300 text-gray-700">{{ i.quantity }}</p>
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
                    <p class="dark:text-gray-300 text-gray-700">{{i.price}}</p>
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