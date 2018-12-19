<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">버튼</h2>
  </div>
	<div class="inner_cont">
    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#1</strong>
        <a href="#none" class="btn_type_comm btn_type1">버튼1<span class="type1_effect"></span></a>
        <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180718_remaster/update.html" target="_blank" class="link_txt">view</a>
      </div>
    </div>

    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#2</strong>
        <a href="#none" class="btn_type_comm btn_type2">버튼2</a>
        <a href="http://hani.dev.daum.net/kakaogames-2018/basic/promotion/black/181018_halloween/index.html" target="_blank" class="link_txt">view</a>
      </div>
    </div>

    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#3</strong>
        <a href="#none" class="btn_type_comm btn_type3">버튼3</a>
        <a href="http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/181121_vikendi/index.html" target="_blank" class="link_txt">view</a>
      </div>
    </div>

    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#4</strong>
        <a href="#none" class="btn_type_comm btn_type4"><span class="type4_effect"></span><span class="txt_btn">버튼4</span></a>
      </div>
    </div>

    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#5</strong>
        <a href="#none" class="btn_type_comm btn_type5"><span class="txt_btn">버튼5</span></a>
      </div>
    </div>

    <div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#6</strong>
        <a href="#none" class="btn_type_comm btn_type6">버튼6<span class="arrow_type6">&gt;</span></a>
      </div>
    </div>

    <!--<div class="box_btn">
      <div class="inner_box">
        <strong class="tit_box">#</strong>
        <a href="#none" class="btn_type_comm btn_type"><span class="type_effect"></span><span class="txt_btn">버튼</span></a>
        <a href="#none" target="_blank" class="link_txt">view</a>
      </div>-->
    </div>
	</div>
  </div>
</template>

<script>
  import axios from '../axios-auth';

  export default {
    name: 'BtnList',
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
<style>
.btn_type_comm{display:inline-block;width:168px;height:55px;font-size:16px;line-height:55px;border-radius:3px;background-color:#efbc15;vertical-align:top;color:#fff}
.btn_type_comm:hover{text-decoration:none}

.btn_type1{overflow:hidden;position:relative}
.btn_type1 .type1_effect{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transition:0.4s cubic-bezier(.48,0,0,1);-moz-transition:0.4s cubic-bezier(.48,0,0,1);-o-transition:0.4s cubic-bezier(.48,0,0,1);transition:0.4s cubic-bezier(.48,0,0,1)}
.btn_type1 .type1_effect:after{position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(120deg, transparent 15%, hsla(39, 78%, 89%, 0.15) 50%, transparent 85%);opacity:1;content:"";-webkit-transform:translate3d(-100%, 0, 0);-moz-transform:translate3d(-100%, 0, 0);-ms-transform:translate3d(-100%, 0, 0);transform:translate3d(-100%, 0, 0);-webkit-transition:transform 0.4s linear;-moz-transition:transform 0.4s linear;-o-transition:transform 0.4s linear;transition:transform 0.4s linear}
.btn_type1:hover .type1_effect:after{-webkit-transform:translate3d(100%, 0, 0);-moz-transform:translate3d(100%, 0, 0);-ms-transform:translate3d(100%, 0, 0);transform:translate3d(100%, 0, 0)}

.btn_type2{-webkit-transition:transform 0.4s linear;-moz-transition:transform 0.4s linear;-o-transition:transform 0.4s linear;transition:transform 0.3s ease}
.btn_type2:hover{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.05)}

.btn_type3{-webkit-transition:background-color 0.4s linear;-moz-transition:background-color 0.4s linear;-o-transition:background-color 0.4s linear;transition:background-color 0.3s ease}
.btn_type3:hover{background-color:#d8a80b}

.btn_type4{overflow:hidden;position:relative;-webkit-transition:background-color 0.4s linear;-moz-transition:background-color 0.4s linear;-o-transition:background-color 0.4s linear;transition:background-color 0.3s ease}
.btn_type4 .type4_effect{position:absolute;bottom:0;left:0;right:0;height:0;background-color:#d8a80b;-webkit-transition:height 0.4s linear;-moz-transition:height 0.4s linear;-o-transition:height 0.4s linear;transition:height 0.3s ease}
.btn_type4 .txt_btn{position:relative}
.btn_type4:hover{background-color:#d8a80b}
.btn_type4:hover .type4_effect{height:100%}

.btn_type5{-webkit-transition:transform 0.4s linear;-moz-transition:transform 0.4s linear;-o-transition:transform 0.4s linear;transition:transform 0.4s ease}
.btn_type5:hover{-webkit-transform:translateY(-10px);-moz-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-8px)}

.btn_type6{position:relative;-webkit-transition:background-color 0.4s ease;-moz-transition:background-color 0.4s ease;-o-transition:background-color 0.4s ease;transition:background-color 0.4s ease}
.btn_type6:hover{background-color:#d8a80b}
.btn_type6 .arrow_type6{position:absolute;top:0;right:20px;opacity:0;-webkit-animation-play-state:paused;-moz-animation-play-state:paused;animation-play-state:paused;
  -webkit-transition:opacity 0.4s linear;-moz-transition:opacity 0.4s linear;-o-transition:opacity 0.4s linear;transition:opacity 0.4s ease}
.btn_type6:hover .arrow_type6{opacity:1;-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);
  -webkit-transform-origin:left top;-moz-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;
  -webkit-animation-name:anitype6;-moz-animation-name:anitype6;animation-name:anitype6;
  -webkit-animation-duration:3s;-moz-animation-duration:3s;animation-duration:3s;
  -webkit-animation-play-state:running;-moz-animation-play-state:running;animation-play-state:running}

/* animation */
@-webkit-keyframes anitype6 {
  0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  16%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  32%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  48%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  64%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  80%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  100%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
}

@-moz-keyframes anitype6 {
  0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  16%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  32%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  48%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  64%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  80%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  100%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
}

@keyframes anitype6 {
  0%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  16%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  32%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  48%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  64%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
  80%{-webkit-transform:translateX(6px);-moz-transform:translateX(6px);-ms-transform:translateX(6px);transform:translateX(6px)}
  100%{-webkit-transform:translateX(0);-moz-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}
}

</style>

