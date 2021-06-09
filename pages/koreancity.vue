<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
              <p class="title">
                대한민국 전국
              </p>
              <p class="subtitle">
                각 지역별 좌표
              </p>
            </div>
            </section>
            <hr />
            <section class="columns"></section>
            <div class="columns">
                <table class="table">
                    <thead>
                        <th>번호</th>
                        <th>도시</th>
                        <th>좌표</th>
                    </thead>
                    <tbody>
                        <template v-for ="pos in tablekoreanKeys.length">
                            <tr :key="pos">
                                <td>{{ pos }}</td>
                                <td>{{ tablekoreanKeys[pos -1] }}</td>
                                <td>
                                    <span class="tag is-black" v-if="ar =tablekorean [tablekoreanKeys[pos -1]], ar.length ==0">좌표</span>
                                    <span v-else><template v-for="subbreed in ar"><span class="tag is-success" :key="subbreed">{{subbreed}}</span>&nbsp;</template></span>
</td>
</tr>
</template>
</tbody>
</table>
</div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const koreancity = await axios.get('https://gist.githubusercontent.com/hmmhmmhm/b3a950e84f865f8abbd00fa460aa4613/raw/84c0bbdcfc0ef96f6841bd5670835beb4756dae6/sigungu.json');
            return {
                tablekorean: koreancity.data,
                tablekoreanKeys: Object.keys(koreancity.data),
            };
        },
    };
</script>