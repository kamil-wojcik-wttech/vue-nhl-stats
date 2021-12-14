<template>
    <div class="team-details">
        <div class="team-details__base-info">
            <h2>{{ teamDetails.name }}</h2>
            <p>{{ teamDetails.venue.city }}</p>
            <p>{{ teamDetails.abbreviation }}</p>
            <p>{{ teamDetails.firstYearOfPlay }}</p>
            <p>{{ teamDetails.division.name }}</p>
            <p>{{ teamDetails.conference.name }}</p>
            <p>{{ teamDetails.officialSiteUrl }}</p>
        </div>
        <div class="team-details__more-info">
            <div class="team-details__stats-wrapper">
                <h2 class="team-details__title">Statistics</h2>
                <div class="team-details__stats">
                    <p>{{ stat.ot }}</p>
                    <p>{{ stat.losses }}</p>
                    <p>{{ stat.wins }}</p>
                    <p>{{ stat.evGGARatio }}</p>
                    <p>{{ stat.gamesPlayed }}</p>
                    <p>{{ stat.goalsAgainstPerGame }}</p>
                    <p>{{ stat.goalsPerGame }}</p>
                    <p>{{ stat.shootingPctg }}</p>
                    <p>{{ stat.shotsAllowed }}</p>
                    <p>{{ stat.shotsPerGame }}</p>
                </div>
            </div>
            <div class="team-details__roster-wrapper">
                <h2 class="team-details__title">Players</h2>
                <div class="team-details__roster">
                    <div class="team-details__player" v-for="player in teamRoster" :key="player.person.id">
                        <h3>{{ player.person.fullName }}</h3>
                        <h4>{{ player.jerseyNumber }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { apiServicePath, apiEndpoints } from '@/constants';
    import { Roster } from '@/types/player';
    import { Team } from '@/types/team';
    import { TeamStats } from '@/types/stats';

    const route = useRoute();
    const teamDetails: Team = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}`)
        .then(res => res.json())
        .then(data => data.teams[0]);
    const { stat }: { stat: TeamStats } = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}/stats`)
        .then(res => res.json())
        .then(data => data.stats[0].splits[0]);
    const teamRoster: Roster = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}/roster`)
        .then(res => res.json())
        .then(data => data.roster);

</script>
<style lang="scss">
    .team-details {
        display: grid;
        grid-template-columns: 0.5fr 2fr;
        grid-gap: 20px;
        margin: 25px 0;
    }

    .team-details__title {
        text-align: left;
        color: #4B6587;
        margin-bottom: 0;
    }

    .team-details__base-info {
        background-color: #F0E5CF;
        color: #4B6587;
    }

    .team-details__more-info {
        width: 100%;

        .team-details__stats {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;

            p {
                background-color: #F0E5CF;
                color: #4B6587;
                margin: 0;
                padding: 20px;
            }
        }

        .team-details__roster {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 10px;
        }

        .team-details__player {
            background-color: #F0E5CF;
            color: #4B6587;
        }
    }
</style>