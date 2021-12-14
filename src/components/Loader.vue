<template>
    <div class="spinner-wrapper">
        <div class="spinner">
            <div class="spinner__bounce1"></div>
            <div class="spinner__bounce2"></div>
            <div class="spinner__bounce3"></div>
        </div>
    </div>
</template>

<style lang="scss">

.spinner-wrapper {
    display: flex;
    width: 100%;
    height: calc(100vh - 150px);
    justify-content: center;
    align-items: center;
}

.spinner {
    text-align: center;
    width: 70px;
}

.spinner > div {
    animation: bounceDelay 1.5s infinite ease-in-out both;
    background-color: #4b6587;
    border-radius: 100%;
    display: inline-block;
    height: 18px;
    width: 18px;
}

.spinner .spinner__bounce1 {
    animation-delay: -0.32s;
}

.spinner .spinner__bounce2 {
    animation-delay: -0.16s;
}

@keyframes bounceDelay {
    0%,
    80%,
    100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1);
    }
}
</style>