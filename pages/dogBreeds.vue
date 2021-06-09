<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
              <p class="title">
                강아지의 종류
              </p>
              <p class="subtitle">
                강아지 품종 설명
              </p>
            </div>
          </section>
        <hr />
        <section class="columns"></section>
        <div class="columns">
          <table class="table">
            <thead>
              <th>번호</th>
              <th>강아지 품종</th>
              <th>강아지 아품종</th>
            </thead>
            <tbody>
              <template v-for ="pos in tableDogKeys.length">
            
                <tr :key="pos">
                    <td>{{ pos }}</td>
                    <td>{{ tableDogKeys[pos -1] }}</td>
                    <td>
                      <span class="tag is-black" v-if="ar =tableDogBreeds [tableDogKeys[pos - 1]], ar.length == 0">없음</span>
                      <span v-else><template v-for="subbreed in ar"><span class="tag is-success" :key="subbreed">{{subbreed}}</span>&nbsp;</template></span>
</td>
</tr>
</template>
</tbody>
</table>
<div class="content">
    <p class="tag is-danger">출처</p><a href="https://dog.ceo/dog-api/documentation/">Dog CEO</a><br>
    <a href="" class="button is-primary is-small"></a>
</div>
</div>
<div class="columns"></div>
</div>
</template>
<script>
    import axios from 'axios';
    export default {
        async asyncData() {
            const dogBreeds = await axios.get('https://dog.ceo/api/breeds/list/all');
            //alert(Object.keys(dogBreeds));
            return {
                tableDogBreeds: dogBreeds.data.message,
                tableDogKeys: Object.keys(dogBreeds.data.message),
            };
        },
    };
</script>