<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

const options = ref([
  { title: "الانضمام", link: "/staff/join" },
  { title: "العنوان وجهات الاتصال", link: "/staff/info" },
  { title: "الحضور والانصراف", link: "/staff/details" },
  { title: "الراتب", link: "/staff/salary" },
  { title: "الشخصي", link: "/staff/personal" },
  { title: "الملف الشخصي", link: "/staff/profile" },
]);

let isOpen = ref(false);

let items = [
  {
    title: "نظرة عامة",
    link: "/staff/general",
  },
  {
    title: "الانضمام",
    link: "/staff/join",
  },
  {
    title: "العنوان وجهات الاتصال",
    link: "/staff/info",
  },
  {
    title: "الحضور والانصراف",
    link: "/staff/details",
  },
  {
    title: "الراتب",
    link: "/staff/salary",
  },
];

const logout = () => {
  Swal.fire({
    icon: "error",
    title: "خطأ!",
    showDenyButton: true,
    showConfirmButton: false,
    denyButtonText: `موافق`,
    text: "لم يتم برمجة هذه الخاصية بعد",
  });
};

const closeMenui = () => {
  isOpen.value = false;
};
</script>

<template>
  <div
    class="menu-item xl:hidden block items-center justify-center px-1 text-[#696969] rounded-l-xl xl:rounded-l-none rounded-r-xl"
    @click="isOpen = !isOpen"
  >
    <a href="#"> <span class="material-icons text-3xl">menu</span> </a>
  </div>
  <transition name="fade" appear>
    <div
      class="bg-[#F9F9F9] z-100 shadow-sm rounded-sm mb-6 xl:hidden block"
      v-if="isOpen"
    >
      <RouterLink
        :to="item.link"
        class="hover:bg-[#eb4d4d] hover:text-white hover:cursor-pointer h-12 block pr-4"
        v-for="(item, i) in items"
        :key="i"
      >
        <span @click="closeMenui" class="h-full w-full flex items-center">
          {{ item.title }}
        </span>
      </RouterLink>
    </div>
  </transition>
  <div
    class="bg-[#FCFCFC] hidden xl:block text-sm xl:text-base w-full rounded-2xl h-14"
  >
    <div class="flex pl-0 xl:pl-20">
      <RouterLink
        active-class="text-white bg-[#E84646]"
        to="/staff/general"
        class="hidden xl:flex flex-auto items-center justify-center h-14 px-1 text-[#696969] rounded-l-xl xl:rounded-l-none rounded-r-xl"
      >
        نظرة عامة
      </RouterLink>

      <RouterLink
        active-class="text-white bg-[#E84646]"
        :to="option.link"
        v-for="option in options"
        class="hidden xl:flex flex-auto items-center justify-center px-1 h-14 text-[#696969]"
      >
        {{ option.title }}
      </RouterLink>
      <button
        @click="logout"
        class="hidden xl:flex flex-auto items-center justify-center px-1 h-14 text-[#696969]"
      >
        خروج
      </button>
    </div>
  </div>
</template>

<style scoped>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
}

nav .menu-item .sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
