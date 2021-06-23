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
            <div class="column">
                <div id="chart"></div>
            </div>
            <div class="column"></div>
        </section>
        <div class="content">
            <span class="tag is-danger">출처</span>
            <br>
             <span> <a href="https://www.weather.go.kr/w/weather/forecast/short-term.do">weather</a></span>
        </div>
    </div>
    
</template>
<script>
    import toastuiChart from '~/plugins/toastuiChart';
    let showChart = false;
    export default {
        mounted() {
            if (!showChart && process.client) {
                toastuiChart();
                showChart = true;
            }
        },
    }
</script>