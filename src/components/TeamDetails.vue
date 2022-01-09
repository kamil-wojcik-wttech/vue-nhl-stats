<template>
    <div class="team-details">
        <div class="team-details__base-info">
            <img :src="logoEndpoint + $route.params.id + '.svg'" :alt="teamDetails.name + ' Logo'">
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
                <div class="team-details__stats-list">
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['ot'] }}</label>
                        <p>{{ stat.ot }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['losses'] }}</label>
                        <p>{{ stat.losses }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['wins'] }}</label>
                        <p>{{ stat.wins }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['gamesPlayed'] }}</label>
                        <p>{{ stat.gamesPlayed }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['goalsPerGame'] }}</label>
                        <p>{{ stat.goalsPerGame }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['shootingPctg'] }}</label>
                        <p>{{ stat.shootingPctg }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['shotsPerGame'] }}</label>
                        <p>{{ stat.shotsPerGame }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['savePctg'] }}</label>
                        <p>{{ stat.savePctg }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['pts'] }}</label>
                        <p>{{ stat.pts }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['goalsAgainstPerGame'] }}</label>
                        <p>{{ stat.goalsAgainstPerGame }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['penaltyKillPercentage'] }}</label>
                        <p>{{ stat.penaltyKillPercentage }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['powerPlayPercentage'] }}</label>
                        <p>{{ stat.powerPlayPercentage }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['faceOffWinPercentage'] }}</label>
                        <p>{{ stat.faceOffWinPercentage }}</p>
                    </div>
                    <div class="team-details__stats-item">
                        <label>{{ statsMap['faceOffsLost'] }}</label>
                        <p>{{ stat.faceOffsLost }}</p>
                    </div>
                </div>
            </div>
            <div class="team-details__roster-wrapper">
                <h2 class="team-details__title">Players</h2>
                <div class="team-details__roster-filters">
                    <div class="team-details__roster-filter" v-for="position in filterPostionsList(playerPositions)" :key="position.code">
                        <input class="filter__checkbox" type="checkbox" :checked="isFilterNameOnList(position.fullName)">
                        <span class="filter__custom-checkbox" @click="updateFilterList(position.fullName)"></span>
                        <span class="filter__checkbox-name">{{ position.fullName }}</span>
                    </div>
                </div>
                <div class="team-details__roster">
                    <div class="team-details__player" v-for="player in filterCollection(teamRoster, 'position.name')" :key="player.person.id">
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
    import { apiServicePath, apiEndpoints, logoEndpoint, statsMap } from '@/constants';
    import filterPostionsList from '@/utils/filterPostionsList';
    import { Roster } from '@/types/player';
    import { Team } from '@/types/team';
    import { TeamStats } from '@/types/stats';
    import useFilters from '@/composables/useFilters';
    import { PlayerPosition } from '@/types/postion';

    const route = useRoute();
    const { selectedFilters, isFilterNameOnList, updateFilterList, filterCollection }  = useFilters();
    const teamDetails: Team = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}`)
        .then(res => res.json())
        .then(data => data.teams[0]);
    const { stat }: { stat: TeamStats } = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}/stats`)
        .then(res => res.json())
        .then(data => data.stats[0].splits[0]);
    const teamRoster: Roster = await fetch(`${apiServicePath}${apiEndpoints.teams}/${route.params.id}/roster`)
        .then(res => res.json())
        .then(data => data.roster);
    const playerPositions: PlayerPosition[] = await fetch(`${apiServicePath}/positions`)
        .then(res => res.json())

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

        img {
            margin-top: 25px;
        }
    }

    .team-details__more-info {
        width: 100%;

        .team-details__stats-list {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 10px;

            .team-details__stats-item {
                background-color: #F0E5CF;
                color: #4B6587;
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin: 0;
                padding: 20px;

                label {
                    font-weight: 700;
                }

                p {
                    margin: 0
                }
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

    .team-details__roster-filters {
        display: flex;
        margin-bottom: 10px;
        margin-top: 5px;

        .team-details__roster-filter {
            margin-right: 10px;
        }
    }

    .filter__checkbox {
        position: absolute;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
    }

    .filter__custom-checkbox {
        background-color: #4B6587;
        border: 1px solid #4B6587;
        border-radius: 15px;
        box-shadow: inset 0 0 5px #4B6587;
        box-sizing: border-box;
        display: inline-block;
        height: 30px;
        position: relative;
        transition: background-color 0.2s ease-in-out;
        vertical-align: middle;
        width: 50px;
    }

    .filter__checkbox-name {
        font-weight: 700;
        margin-left: 5px;
        vertical-align: bottom;
    }

    .filter__custom-checkbox::after {
        background-color: white;
        border: 1px solid white;
        border-radius: 50%;
        box-sizing: border-box;
        content: "";
        height: 28px;
        left: 0;
        position: absolute;
        top: 0;
        transition: left 0.2s ease-in-out;
        width: 28px;
    }

    .filter__checkbox:checked + .filter__custom-checkbox {
        background-color: #F0E5CF;
        border-color:#F0E5CF;
        box-shadow: inset 0 0 5px #F0E5CF;
    }

    .filter__checkbox:checked + .filter__custom-checkbox::after {
        left: 20px;
    }
</style>