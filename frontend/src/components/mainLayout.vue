<script>
export default {
  data() {},
};
</script>

<template>
  <div class="flex relative">
    <nav
      class="flex flex-col items-center fixed left-0 top-0 bg-primary w-[11%] h-[100vh]"
    >
      <div class="mt-6 mb-12 m-auto">
        <img class="m-auto" src="@\assets\DanPersona.svg" />
      </div>

      <ul class="flex flex-col items-start ml-3 gap-y-6">
        <li>
          <router-link class="flex gap-x-3 items-center justify-center" to="/">
            <span class="material-symbols-outlined text-white">
              dashboard
            </span>
            <span class="text-white"> Dashboard</span>
          </router-link>
        </li>

        <li>
          <router-link
            class="flex gap-x-3 items-center justify-center"
            to="/intakeform"
          >
            <span class="material-symbols-outlined text-white"> people </span>
            <span class="text-white"> Client Intake Form </span>
          </router-link>
        </li>

        <li>
          <router-link
            class="flex gap-x-3 items-center justify-center"
            to="/eventform"
          >
            <span class="material-symbols-outlined text-white"> event </span>
            <span class="text-white"> Create Event</span>
          </router-link>
        </li>

        <li>
          <router-link
            class="flex gap-x-3 items-center justify-center"
            to="/findclient"
          >
            <span class="material-symbols-outlined text-white"> search </span>
            <span class="text-white"> Find Client</span>
          </router-link>
        </li>

        <li>
          <router-link
            class="flex gap-x-3 items-center justify-center"
            to="/findevents"
          >
            <span class="material-symbols-outlined text-white"> search </span>
            <span class="text-white"> Find Event</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="absolute top-0 right-0 w-[89%]">
      <header class="flex bg-primary">
        <div
          class="bg-[#efecec] w-[32%] h-[95px]"
          style="clip-path: polygon(0 0, 93% 0, 100% 100%, 0% 100%)"
        ></div>
        <div
          class="bg-primary w-[68%] h-[95px] flex items-center justify-end mr-20 text-3xl"
        >
          <h1 class="text-white">Dataplatform</h1>
        </div>
      </header>

      <slot name="header" />
    </div>
  </div>
</template>