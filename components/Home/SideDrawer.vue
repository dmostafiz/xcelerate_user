<template>
  <div>
    <Sidebar v-model:visible="visible">
      <template #header>
         <h1>Menu bar</h1>
      </template>
      <HomeSidebarMenuItems />
    </Sidebar>

    <Button icon="pi pi-arrow-right" severity="contrast" text rounded @click="visible = true" />
  </div>

</template>

<script setup>

const visible = ref(false);
</script>
