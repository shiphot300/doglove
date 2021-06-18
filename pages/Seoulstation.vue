<template>
    <div>
        <section class="hero is-warning">
            <div class="hero-body">
              <p class="title">
                서울 지하철
              </p>
              <p class="subtitle">
                모든 지하철 정보및 좌표
              </p>
            </div>
            </section>
            <hr />
            <section class="columns">
                <div class="column">
                    <table class="table is-striped is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>지하철 00선</th>
                                <th>지하철 역</th>
                                <th>전철 code</th>
                                <th>위도</th>
                                <th>좌표</th>
                            </tr>
                        </thead>
                        <tbody>
                        <template v-for ="pos in tablemyblog_age.length">
                            <tr :key="pos">
                                <td>{{tablemyblog_user_name[pos -1]}}</td>
                                <td>{{tablemyblog_age[pos - 1]}}</td>
                                <td>{{tablemyblog_hobby[pos - 1]}}</td>
                            </tr>
                        </template>
</tbody>
</table>
<div class="content">
    <span class="tag is-danger">출처</span>
    <br>
    <span> <a href="https://blog.naver.com/PostView.nhn?blogId=dkyscv820203&logNo=222210469283&categoryNo=95&parentCategoryNo=0">Hobby</a></span>
    <br>
    <span> <a href="https://koreanname.me/">Name</a></span>
</div>
</div>
</section>
</div>
</template>
<script>
    import myblog from "~/assets/myblog_age.json";
    import myblog_station from "~/assets/myblog_hobby.json";
    import myblog_user from "~/assets/myblog_user_name.json";
    export default {
        data() {
            return {
                tablemyblog_age: myblog.names,
                tablemyblog_hobby: myblog_station.names,
                tablemyblog_user_name: myblog_user.names
            };
        }
    };
</script>