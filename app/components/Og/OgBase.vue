<script setup lang="ts">
</script>

<template>
  <div class="w-full p-[40px] flex-col">
    <OgTitle class="mb-[20px]">
      <!-- TODO: Slots dont work without wrapper-div -->
      <div>Hello world</div>
    </OgTitle>

    <div class="text-2xl">
      <slot/>
    </div>
  </div>
</template>