<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">스크롤 모션</h2>
    </div>
	<div class="inner_cont">
    <ul class="list_spa">
      <li>휠스크롤 시 한페이지씩 내려가는 형태입니다.
        <div class="group_link">
          <a href="#none" class="link_page">가로형</a>
          <a href="#none" class="link_page">세로형</a>
        </div>
      </li>
      <li>휠스크롤 시 아래에서 한페이지씩 올라오는 형태입니다.
        <div class="group_link">
          <a href="#none" class="link_page">가로형</a>
          <a href="#none" class="link_page">세로형</a>
        </div>
      </li>
      <li>스크롤 스파이만 적용된 형태입니다.
        <div class="group_link">
          <a href="#none" class="link_page">가로형</a>
          <a href="#none" class="link_page">세로형</a>
        </div>
      </li>
    </ul>
	</div>
  </div>
</template>

<script>
  import axios from '../axios-auth';

  export default {
    name: 'ScrollList',
    data: function () {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    created () {

    }
  }
</script>