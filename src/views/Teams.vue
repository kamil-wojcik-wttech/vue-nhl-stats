<template>
    <Suspense>
        <template #default>
            <TeamsListing />
        </template>
        <template #fallback>
            <Loader />
        </template>
    </Suspense>
</template>
<script lang="ts">

    import { defineAsyncComponent } from "vue";
    import Loader from '@/components/Loader.vue'

    export default {
        components: {
            Loader,
            TeamsListing: defineAsyncComponent(() => import('@/components/TeamsListing.vue')),
        }
    }

</script>
<style lang="scss">
</style>