<template>
  <ul class="sidebar navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">
        <i class="fas fa-table"></i>
        <span>SO 관리 목록</span>
      </a>
    </li>

    <!--hcn-->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder"></i>
        <span>HCN</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="sp_detail.html">hcn</a>
      </div>
    </li>

    <!--sk-->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder"></i>
        <span>SK</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <a class="dropdown-item" href="sp_detail.html">sk IOT tv</a>
        <a class="dropdown-item" href="sp_detail.html">sk magic</a>
        <a class="dropdown-item" href="sp_detail.html">sk school app</a>
      </div>
    </li>

    <!--cj-->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fas fa-fw fa-folder"></i>
        <span>CJ</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="pagesDropdown">
        <!--<h6 class="dropdown-header">Login Screens:</h6>-->
        <a class="dropdown-item" href="sp_detail.html">cj</a>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  name: 'spmAside'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
