<template>
    <div class="card-list">
        <div class="card" v-for="team in teams" :key="team.id">
            <div class="card__main-section">
                <h3>{{ team.name }}</h3>
                <p>{{ team.venue.name }} - {{ team.venue.city }}</p>
                <p>Founded in {{ team.firstYearOfPlay }}</p>
            </div>
            <div class="card__slide-section">
                <a v-bind:href="team.officialSiteUrl">Offical Website</a>
                <router-link :to="{ name: 'TeamDetails', params: { id: team.id } }" class="card__button">Go to Details</router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { apiServicePath, apiEndpoints } from '@/constants';
import { Teams } from '@/types/team';

const { teams }: { teams: Teams } = await fetch(`${apiServicePath}${apiEndpoints.teams}`).then(res => res.json());
</script>

<style lang="scss">
.card-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 25px 0;
    width: 100%;
    gap: 1rem;
}

.card {
    aspect-ratio: 2 / 1;
    align-items: center;
    background: #f0e5cf;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;

    &:hover .card__slide-section {
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
    }
}

.card__slide-section {
    align-items: center;
    background: rgba(#4b6587, 0.9);
    display: flex;
    flex-direction: column;
    inset: 0;
    justify-content: center;
    position: absolute;
    padding: 2rem;
    opacity: 0;
    text-align: center;
    transition: 350ms ease;
    transform: translateY(100%);
    visibility: hidden;

    h3 {
        color: #f7f6f2;
        margin: 0;
    }

    a {
        color: #f7f6f2;
    }

    .card__button {
        background: transparent;
        border: 2px solid #f7f6f2;
        color: #f7f6f2;
        padding: 6px;

        &:hover {
            color: #4b6587;
            background: #f7f6f2;
        }
    }
}

h3,
p {
    color: #4b6587;
}
</style>