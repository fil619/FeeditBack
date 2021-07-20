<template>
  <div>
    <div>
      <div
        class="
          absolute
          right-0
          top-0
          m-5
          w-1/2
          xl:w-1/5
          lg:w-1/4
          md:w-2/5
          sm:w-1/2
        "
      >
        <div v-for="notice of notices" :key="notice.id">
          <div v-show="visible.includes(notice)">
            <div
            @click="remove(notice.id)"
              class="
              mt-1
                flex
                items-center
                text-white
                max-w-sm
                w-full
                shadow-md
                rounded-lg
                overflow-hidden
                mx-auto
              "
              :class="{
              'bg-green-500 border-green-700': notice.type === 'success',
              'bg-blue-400 border-blue-700': notice.type === 'info',
              'bg-yellow-400 border-yellow-700': notice.type === 'warning',
              'bg-red-500 border-red-700': notice.type === 'danger',
            }"
            >
              <div class="w-10 border-r px-2">
                <div
                  class="col-start-4 col-span-1"
                  v-html="getIcon(notice)"
                ></div>
              </div>

              <div class="flex items-center px-2 py-3">
                <div class="mx-3">
                  <p>{{ notice.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- @click="add({ type: 'success', text: 'Succesfull' })" -->
    <!-- @click="add({ type: 'info', text: 'Information' })" -->
    <!-- @click="add({ type: 'warning', text: 'Warning' })" -->
    <!-- v-on:click="add({ type: 'danger', text: 'Danger' })" -->

  </div>
</template>

<script>
export default {
    computed:{
        notices(){
          return  this.$store.state.toast.notices
        },
        visible(){
          return  this.$store.state.toast.visible
        },
    },
  data() {
    return {
    };
  },
  methods: {
    add(notice) {
      this.$store.commit('AddToast' , notice)
    },
    fire(id) {
      this.visible.push(this.notices.find((notice) => notice.id == id));
      const timeShown = 2000 * this.visible.length;
      setTimeout(() => {
        this.remove(id);
      }, timeShown);
    },
    remove(id) {
        this.$store.commit('RemoveToast' , id)
    },
    getIcon(notice) {
      if (notice.type == "info")
        return `<div class='' ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg></div>`;
      else if (notice.type == "warning")
        return `<div class=''>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01">
				</path>
			</svg></div>`;
      else if (notice.type == "success")
        return `<div class=''><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
				</path>
			</svg></div>`;
      else if (notice.type == "danger")
        return `<div ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
					d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636">
				</path>
			</svg></div>`;
    },
  },
};
</script>