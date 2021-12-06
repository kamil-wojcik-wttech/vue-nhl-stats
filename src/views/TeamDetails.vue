<template>
    <Suspense>
        <template #default>
            <TeamDetails />
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
            TeamDetails: defineAsyncComponent(() => import('@/components/TeamDetails.vue')),
        }
    }

</script>
<style lang="scss">
</style>