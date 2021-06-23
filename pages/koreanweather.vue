<template>
    <div>
        <section class="hero is-info">
            <div class="hero-body">
                <p class="title">
                    <i class="fas fa-cloud-sun"></i>한국의 일기예보
                </p>
                <p class="subtitle"></p>
                대한민국 기상청 주간 일기예보
            </div>
        </section>
        <hr />
        <section class="columns">
            <div class="column"></div>
            <div class="column">
                <div id="Chart"></div>
            </div>
        </section>
    </div>
</template>
<script>
    import toastuiChart from '~/plugins/toastuiChart';
    export default {
        mounted() {
            if (process.client) {
                toastuiChart();
            }
        },
    };
</script>