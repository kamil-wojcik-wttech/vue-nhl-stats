<template>
    <h1>Teams</h1>
    <div>
        <ul>
            <li v-for="item in teams">{{ item }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import getTeams from '../api/getTeams';
import { reactive, ref } from 'vue';

// export default {
//     name: 'Teams',
//     data() {
//         return {
//             teams: []
//         }
//     },
//     async setup() {
//         const teamsList = ref([]);
//         const error = ref(null);

//         const response = getTeams();
//         const teamsList = await response.json();

//     },
//     mounted() {
//         fetch(`https://statsapi.web.nhl.com/api/v1/teams`, {
//             method: 'GET',
//             headers: {
//                 'content-type': 'application/json'
//             }
//         })
//         .then(response => response.json())
//         .then(data => {
//             this.teams = data.teams
//         });
//         console.log('dupa');
//     }
// } 
</script>

<style lang="scss">
    
</style>