<script lang="ts" setup>
    import { ref } from 'vue';
    const name = "Dupa";
    const teams = ref([{ id: 'asdasdasd'}]) as any;
    const post = await fetch('https://statsapi.web.nhl.com/api/v1/teams');
    const json = await post.json();
    teams.value = json.teams;
    // console.log(teams.value);
</script>
<template>
    <Suspense>
        <template #default>
            <h2>{{ name }}</h2>
            <div v-if="teams">{{ teams[0].id }}</div>
        </template>
        <template #fallback>
            <div>
                Loading...
            </div>
        </template>
  </Suspense>
</template>
<style lang="scss">
    
</style>