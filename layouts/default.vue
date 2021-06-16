<template>
  <div>
    <nav class="breadcrumb"></nav>
      <ul>
        <li><nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;홈으로</nuxt-link></li>
        <li><nuxt-link to ="/myblog"><i class="fas fa-file-signature"></i>&nbsp;My blog Users</nuxt-link></li>
        <li><nuxt-link to ="/koreancity"><i class="fas fa-globe-americas"></i>&nbsp;대한민국모든도시모음</nuxt-link></li>
        <li><nuxt-link to ="/myblogchart"><i class="fas fa-chart-bar"></i>&nbsp;내블로그 통계</nuxt-link></li>
      </ul>
    <nuxt/>
    <footer class="footer">
  <div class="content has-text-centered">
    <i class="fas fa-copyright"></i>2021 모든 저작권은 <strong> 나의 블로그 </strong>에 있습니다.
    
  </div>
</footer>
  </div>
</template>