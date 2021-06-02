<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title"> <i class="fas fa-blog"></i>
                  Blog User : 이름, 나이, 취미 
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>나이</th>
                            <th>성별</th>
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
<div class="content">
    <span class="tag is-warning">JSON</span>
    <nuxt-link to="~/assets/myblog.json">사용자 정보 JSON</nuxt-link>
</div>
</div>
</section>
</div>
</template>
<script>
    import myblog from "~/assets/myblog_age.json";
    import myblog_female from "~/assets/myblog_hobby.json";
    import myblog_user from "~/assets/myblog_user_name.json";
    export default {
        data() {
            return {
                tablemyblog_age: myblog.names,
                tablemyblog_hobby: myblog_female.names,
                tablemyblog_user_name: myblog_user.names
            };
        }
    };
</script>