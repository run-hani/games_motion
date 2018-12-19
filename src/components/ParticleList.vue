<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">파티클</h2>
    </div>
	<div class="inner_cont">
   <ul class="list_particle">
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/181121_vikendi/index.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#1</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle1.gif')" class="img_thumb" alt="">
          <span class="txt_type">CANVAS</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">눈보라</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/181114_archer/1_main.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#2</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle2.gif')" class="img_thumb" alt="">
          <span class="txt_type">IMAGE</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">잎사귀 바람</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/181001_bp/index.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#3</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle3.gif')" class="img_thumb" alt="">
          <span class="txt_type">CANVAS</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">불꽃1</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180615_ep1/ep1_180619.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#4</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle4.gif')" class="img_thumb" alt="">
          <span class="txt_type">CANVAS</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">불꽃2</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/180614_sanhok/intro_0618.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#5</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle5.gif')" class="img_thumb" alt="">
          <span class="txt_type">IMAGE</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">불꽃3</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
    <li>
      <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/181018_halloween/index.html" target="_blank" class="link_particle">
        <span class="area_thumb">
          <span class="num_visual">#6</span>
          <img :mouseover="changeUrl" :src="require('@/assets/img/particle/thumb_particle6.gif')" class="img_thumb" alt="">
          <span class="txt_type">IMAGE</span>
        </span>
        <span class="area_info">
          <strong class="tit_particle">피어오르는 불빛</strong>
          <span class="txt_more">보러가기 ></span>
        </span>
      </a>
    </li>
   </ul>
	</div>
  </div>
</template>

<script>
  import axios from '../axios-auth';

  export default {
    name: 'ParticleList',
    data: function () {
      return {

      }
    },
    computed: {

    },
    methods: {
      changeUrl () {
        alert("")
      }
    },
    created () {

    }
  }
</script>