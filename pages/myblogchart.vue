<template>
    <div>
        <section class="hero is-success">
            <div class="hero-body">
                <p class="title"> <i class="fas fa-blog"></i>
                  Blog User : 이름, 나이, 취미 
                </p>
                <p class="subtitle">
                    내 블로그 사용자틀 통계
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <div id="chart"></div>
            </div>
            <div class="column"></div>
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