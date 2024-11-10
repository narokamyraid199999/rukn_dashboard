<script setup></script>

<template>
  <div
    class="flex title flex-col items-start sm:flex-row gap-y-8 sm:items-center gap-x-6 justify-between"
  >
    <div>
      <div class="text-[#696969] text-xs xl:text-lg">
        <RouterLink class="" to="/">الصفحة الرئيسية </RouterLink>
        <span class="select-none">></span> الموظفين
        <span class="select-none">></span>
        HR-EMP-00001
      </div>
      <div class="flex gap-x-2 lg:gap-x-6 items-center">
        <p class="text-xs xl:text-xl mt-2">أحمد سامي علي</p>
        <p
          class="bg-[#28B8701A] text-[#28B870] px-6 relative top-2 text-sm md:text-base xl:text-lg rounded-md select-none"
        >
          نشط
        </p>
      </div>
    </div>

    <div class="hidden">
      <div class="dropdown">
        <button class="bg-red-600 text-white py-3 px-4 rounded-md">
          <span class="material-icons">menu</span>
        </button>
        <div class="dropdown-content">
          <a href="#">حفظ</a>
          <a href="#">رجوع</a>
          <a href="#">رفع</a>
          <a href="#">اعدادات</a>
        </div>
      </div>
    </div>

    <div class="flex items-center icons-gap gap-x-3">
      <button
        class="bg-[#28B870] text-[#FFFFFF] text-xs lg:text-base py-2 px-5 flex justify-center items-center outline-none rounded-lg"
      >
        حفظ
      </button>
      <button
        class="bg-[#FFFFFF] icon-shadow py-2 px-3 flex justify-center items-center"
      >
        <span :class="{ 'material-icons ': true }">arrow_forward_ios</span>
      </button>
      <button
        class="bg-[#FFFFFF] icon-shadow py-2 px-3 flex justify-center items-center"
      >
        <span :class="{ 'material-icons ': true }">arrow_back_ios</span>
      </button>
      <button
        class="bg-[#FFFFFF] icon-shadow py-2 px-3 flex justify-center items-center"
      >
        <span :class="{ 'material-icons ': true }">ios_share</span>
      </button>
      <button
        class="bg-[#FFFFFF] shadow-md icon-shadow py-1 px-3 flex justify-center items-center"
      >
        <span :class="{ 'material-icons icon': true }">more_horiz</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.icon {
  font-size: 2rem;
}

.icon-shadow {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  color: #696969;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  left: 2px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

@media screen and (max-width: 993px) {
  .title {
    flex-direction: column;
    align-items: start;
  }
  .icons-gap {
    column-gap: 0.7rem;
  }
}
</style>
