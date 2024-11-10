<script setup></script>

<template>
  <!-- timeline -->
  <div class="pr-14 mt-9 mb-24">
    <ol class="relative border-s border-gray-200 dark:border-gray-300">
      <li class="mb-8 ms-6">
        <span
          class="absolute flex items-center justify-center w-3 h-3 bg-[#E84646] rounded-full -start-1.5 ring-white dark:ring-[#E84646] dark:bg-[#E84646]"
        >
        </span>

        <div class="text-sm lg:text-base relative -top-1">
          <div class="flex gap-x-3 lg:gap-x-8 select-none">
            <p class="text-black">النشاط</p>
            <p class="text-gray-600">الاتصالات</p>
            <div class="relative -top-6">
              <button
                class="bg-[#E84646] text-[#FFFFFF] py-2 px-4 lg:px-7 mt-4 rounded-lg outline-none text-sm lg:text-base"
              >
                الكل
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="mb-3 ms-6">
        <span
          class="absolute flex items-center justify-center w-3 h-3 bg-[#E84646] rounded-full -start-1.5 ring-white dark:ring-[#E84646] dark:bg-[#E84646]"
        >
        </span>

        <div class="text-base relative -top-1">
          <div class="flex gap-x-3 lg:gap-x-6">
            <div class="relative -top-6">
              <button
                class="bg-[#E84646] text-sm lg:text-base flex items-center gap-x-2 text-[#FFFFFF] py-2 px-3 lg:px-7 mt-4 rounded-lg outline-none"
              >
                <span class="hidden md:inline-block">
                  <span class="material-icons">mail</span>
                </span>

                بريد الكتروني جديد
              </button>
            </div>
            <div class="relative -top-6">
              <button
                class="text-[#E84646] border text-sm lg:text-base flex items-center gap-x-2 border-[#E84646] py-2 px-3 lg:px-7 mt-4 rounded-lg outline-none"
              >
                <span class="hidden md:inline-block">
                  <span class="material-icons">mail</span>
                </span>

                حدث جديد
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="mb-8 ms-6">
        <span
          class="absolute flex items-center justify-center w-3 h-3 bg-[#E84646] rounded-full -start-1.5 ring-white dark:ring-[#E84646] dark:bg-[#E84646]"
        >
        </span>

        <div class="text-base font-normal relative -top-1">
          <div
            class="bg-white flex text-sm lg:text-base justify-between rounded-xl w-full md:w-2/3 xl:w-1/3 pt-2 pb-5 px-4 shadow-sm"
          >
            <div>
              <p>
                لقد قمت بالتعليق
                <span class="pr-4 text-gray-500 text-sm lg:text-base"
                  >2 من أيام</span
                >
              </p>
              <p class="mt-2 text-gray-600 text-sm lg:text-base">
                هذا النص ثابت وقابل للتغيير
              </p>
            </div>
            <div>
              <button
                class="text-gray-500 flex items-center gap-x-1 text-sm lg:text-base"
              >
                تعديل
                <span class="material-icons">more_horiz</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li class="ms-9">
        <span
          class="absolute flex items-center justify-center w-3 h-3 bg-[#E84646] rounded-full -start-1.5 ring-white dark:ring-[#E84646] dark:bg-[#E84646]"
        >
        </span>

        <p class="relative -top-1 text-gray-700 dark:text-gray-700 text-sm">
          لقد قمت بأنشائها منذ شهر واحد * لقد قمت بتحرير هذا منذ شهر واحد
        </p>
      </li>
    </ol>
  </div>
</template>
