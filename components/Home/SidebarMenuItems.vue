<template>
    <!-- <div class="flex flex-col gap-2">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/training">Training</NuxtLink>
        <NuxtLink to="/auth/login">Login</NuxtLink>
    </div> -->
    <v-list v-model:opened="open">
        <v-list-item value="/home" title="Home">
            <template #prepend>
                <Icon size="25" class="mr-5" name="solar:home-2-bold-duotone" />
            </template>
        </v-list-item>
        <v-list-item value="/training" title="Training">
            <template #prepend>
                <Icon size="25" class="mr-5" name="solar:square-academic-cap-bold-duotone" />
            </template>
        </v-list-item>

        <v-list-group value="/personals">

            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Personals"></v-list-item>
            </template>

            <v-list-item value="Admin" title="Admin">
            </v-list-item>

            <v-list-item value="Action" title="Action">
            </v-list-item>

            <!-- <v-list-group value="Actions">
                <template v-slot:activator="{ props }">
                    <v-list-item v-bind="props" title="Actions"></v-list-item>
                </template>

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title"
                    :value="title"></v-list-item>
            </v-list-group> -->
        </v-list-group>
    </v-list>
</template>

<script setup>
const open = ref(['Home'])

</script>