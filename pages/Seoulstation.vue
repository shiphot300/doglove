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
                        <th>00호선</th>
                        <th>도시</th>
                        <th>코드</th>
                        <th>위도</th>
                        <th>좌표</th>
                    </thead>
                    <tbody>
                        <template v-for ="(item,index) in tablekorean">
                            <tr :key="index">
                                <td>{{item.line }}</td>
                                <td>{{item.name}}</td>
                                <td><span class="tag is-warning" >{{item.code}}</span></td>
                                <td><span class="tag is-success" >{{item.lat}}</span></td>
                                <td><span class="tag is-danger" >{{item.lng}}</span></td>

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
            const koreancity = await axios.get('https://raw.githubusercontent.com/shiphot300/doglove/master/assets/station_coordinate.json');
            return {
                tablekorean: koreancity.data,
                tablekoreanKeys: Object.keys(koreancity.data),
            };
        },
    };
</script>