<template>
    <div>
        <section class="hero is-link">
            <div class="hero-body">
                <p class="title">
                    나만의 블로그
                </p>
                <p class="subtitle"><i class="fas fa-blog"></i>
                    나의 블로그 탐방
                </p>
            </div>
        </section>
        <section class="columns">
            <div class="column">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>남성</th>
                            <th>여성</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for ="pos in tablemyblog.length">
                            <tr : key="pos">
                                <td>{{pos}}</td>
                                <td>{{tablemyblog[pos - 1]}}</td>
                                <td>{{tablemyblog_female[pos - 1]}}</td>
                            </tr>
                        </template>
</tbody>
</table>
<div class="content">
    <span class="tag is-danger">출처</span> <span> <a href="https://github.com/sindresorhus/dog-names/blob/main/male-dog-names.json">
        sindresorhus/dog-names</a></span>
</div>
</div>
<div class="column">
    <table class="table is-striped is-hoverable is-fullwidth">
        <thead>
            <tr>
                <th>번호</th>
                <th>남성</th>
            </tr>
        </thead>
        <tbody>
            <template v-for="pos in tablemyblog_user.length">
                <tr : key="pos">
                    <td>{{pos}}</td>
                    <td>{{tablemyblog_user[pos - 1]}}</td>
        
                </tr>
            </template>
        </tbody>
    </table>
    <div class="content">
        <span class="tag is-danger">출처</span> <span> <a href="https://github.com/sindresorhus/cat-names/blob/main/cat-names.json">
            sindresorhus/cat-names</a></span>
    </div>
</div>
</section>
</div>
</template>
<script>
    import myblog from "~/assets/myblog.json";
    import myblog_female from "~/assets/myblog_female.json";
    import myblog_user from "~/assets/myblog_user.json";
    export default {
        data() {
            return {
                tablemyblog: myblog.names,
                tablemyblog_female: myblog_female.names,
                tablemyblog_user: myblog_user.names
            };
        }
    };
</script>