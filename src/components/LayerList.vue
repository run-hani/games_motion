<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">레이어 팝업</h2>
    </div>
	<div class="inner_cont">
  <p class="txt_section">닫기 버튼 효과는 다른 레이어 팝업에도 적용이 가능합니다.</p>
    <ul class="list_layers">
      <li>
        <a href="#none" class="link_layers1">
          <strong class="tit_layers">#1.</strong>
          <span class="txt_layers">제자리에서 Fade In 됩니다. <span class="txt_bar">|</span> <strong class="em_layer">닫기 :</strong> 회전 효과</span>
        </a>
      </li>
      <li>
        <a href="#none" class="link_layers2">
          <strong class="tit_layers">#2.</strong>
          <span class="txt_layers">아래에서 위로 Fade In 되며 올라옵니다. <span class="txt_bar">|</span> <strong class="em_layer">닫기 :</strong> 살짝 위로 올라가는 효과</span>
        </a>
      </li>
      <li>
        <a href="#none" class="link_layers3">
          <strong class="tit_layers">#3.</strong>
          <span class="txt_layers">위에서 아래로 Fade In 되며 내려옵니다. <span class="txt_bar">|</span> <strong class="em_layer">닫기 :</strong> 확대 효과</span>
        </a>
      </li>
      <li>
        <a href="#none" class="link_layers4">
          <strong class="tit_layers">#4.</strong>
          <span class="txt_layers">가운데를 기준으로 양옆으로 펼쳐집니다. (이미지 컨텐츠만 가능) <span class="txt_bar">|</span> <strong class="em_layer">닫기 :</strong> 회전 효과</span>
        </a>
      </li>
      <li>
        <a href="#none" class="link_layers5">
          <strong class="tit_layers">#5.</strong>
          <span class="txt_layers">열릴 때 제자리에서 Fade In 되나, 닫힐 때 효과가 없습니다. <span class="txt_bar">|</span> <strong class="em_layer">닫기 :</strong> 회전 효과</span>
        </a>
      </li>
    </ul>

    <div class="dimmed_layer"></div>

    <!-- 레이어 -->
    <div v-for="(site, idx) in 10" :class="'popup_layer type' + (idx + 1) + '_layer'">
      <div :class="'inner_popup_layer inner_type' + (idx + 1) + '_layer'">
        <div class="layer_head">
          <strong class="tit_popup">#TYPE. {{ (idx + 1) }}</strong>
        </div>
        <div class="layer_body">
          레이어 팝업 내용입니다.<br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="layer_foot">
          <a href="#none" class="btn_close"><span class="img_comm ico_close">닫기</span></a>
        </div>
      </div>
    </div>
    <!-- // 레이어 -->
	</div>
  </div>
</template>

<script>
  import axios from '../axios-auth';

  export default {
    name: 'LayerList',
    data: function () {
      return {

      }
    },
    computed: {

    },
    methods: {

    },
    created () {

    },
    mounted () {

      /* IE 버전 체크 */
      function isIE() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
      }

     /* 레이어 팝업 */
     function layerComm(element, settings) {
       var _ = this;

       // 커스텀 가능한 기본 옵션
       _.defaults = {
         btnOpen: $(element),
         btnClose: '.btn_close',
         layerPop: $('.popup_layer'),/* {selector} 오픈되는 팝업 */
         layerPopIn: $('.inner_popup_layer'),
         layerDim: $('.dimmed_layer'),
         showSpeed: 300, /* 레이어 팝업 열리는 속도 */
         closeSpeed: 300 /* 레이어 팝업 닫히는 속도 */
       }

       // 플러그인 내부에서 사용하는 변수
       _.initials = {
         windowLoad: false,
         onClass: 'on'
       }

       $.extend(_, _.initials);
       _.options = $.extend({}, _.defaults, settings);

       // 옵션을 내부변수에 맵핑
       _.btnOpen = _.options.btnOpen;
       _.btnClose = _.options.btnClose;
       _.layerPop = _.options.layerPop;
       _.layerPopIn = _.options.layerPopIn;
       _.layerDim = _.options.layerDim;
       _.showSpeed = _.options.showSpeed;
       _.closeSpeed = _.options.closeSpeed;

       // window load 체크
       $(window).load(function() {
         _.windowLoad = true;
       });

       _.preventDef = function(e){
         e.preventDefault();
         return false;
       }

       // 레이어 열기
       _.btnOpen.on('click', function() {
         _.layerDim.fadeIn(_.showSpeed);
         _.layerPop.show();
         setTimeout(function(){ 
           _.layerPop.addClass(_.onClass);
         },10);

         $('body').css({'overflow':'hidden'});
         $('html,body').bind('mousewheel', _.preventDef);

         return false;
       });

       // 레이어 닫기 (버튼)
       _.layerPop.find(_.btnClose).on('click', function() {	
         _.closeLayer();
         return false;
       });

       // 레이어 닫기 (딤)
       _.layerDim.on('click', function() {	
         _.closeLayer();
         return false;
       });
     }

     //팝업 닫기
     layerComm.prototype.closeLayer = function () {
       var _ = this;

       _.layerDim.fadeOut(_.closeSpeed);
       console.log(_.closeSpeed)
       _.layerPop.removeClass(_.onClass);
       _.layerPop.css({'transition-duration': _.closeSpeed + 'ms'});
       _.layerPopIn.css({'transition-duration': _.closeSpeed + 'ms'});

       setTimeout(function(){ 
         if (isIE() < 10 && isIE()) {
           $('body').css({'overflow':'auto'});
         }else{
           $('body').removeAttr('style');
         }

         _.layerPop.hide();
         _.layerPop.css({'transition-duration': ''});
         _.layerPopIn.css({'transition-duration': ''});
       },_.closeSpeed);

       $('html,body').unbind('mousewheel', _.preventDef);
     }

     // jquery 플러그인으로 생성
     $.fn.layerComm = function() {
       var _ = this,
         opt = arguments[0],
         l = _.length,
         i;

       for (i = 0; i < l; i++) {
         if (typeof opt == 'object' || typeof opt == 'undefined') {
           _[i].layerComm = new layerComm(_[i], opt);
         }
       }
       return _;
     }

     $('.link_layers1').layerComm({ layerPop: $('.type1_layer') });
     $('.link_layers2').layerComm({ layerPop: $('.type2_layer') });
     $('.link_layers3').layerComm({ layerPop: $('.type3_layer') });
     $('.link_layers4').layerComm({ layerPop: $('.type4_layer') });
     $('.link_layers5').layerComm({ layerPop: $('.type5_layer'), closeSpeed: 0});
    }
  }
</script>

<style>
/* layer */
.dimmed_layer{display:none;position:fixed;left:0;right:0;top:0;bottom:0;z-index:1000;background-color:#000;opacity:0.8;filter:alpha(opacity=80)}
.popup_layer{display:none;position:fixed;top:50%;left:50%;z-index:1010;
  -webkit-transform:translate3d(-50%,-50%,0);-moz-transform:translate3d(-50%,-50%,0);-ms-transform:translate(-50%,-50%);transform:translate3d(-50%,-50%,0)}

.inner_popup_layer{position:relative;width:826px;background-color:#fff;color:#333}
.inner_popup_layer .layer_head{padding:57px 55px 0}
.inner_popup_layer .layer_body{padding:17px 55px 56px}
.inner_popup_layer .tit_popup{display:block;font-size:24px;line-height:28px;color:#3e4039;letter-spacing:-0.075em}
.inner_popup_layer .btn_close{position:absolute;top:20px;right:20px;padding:10px;-webkit-transition:all 0.25s ease;-moz-transition:all 0.25s ease;transition:all 0.25s ease}
.inner_popup_layer .ico_close{display:inline-block;overflow:hidden;width:28px;height:28px;font-size:0;line-height:0;background:url(https://t1.kakaocdn.net/gamepub/img-contents/event/promotion/181129_battle/img_comm.png) no-repeat -70px -160px;vertical-align:top;text-indent:-9999px}

/* layer 1 */
.inner_type1_layer{opacity:0;-webkit-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);-moz-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)}
.inner_type1_layer .btn_close:hover{-webkit-transform-origin:center center;-moz-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;
-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}
.on .inner_type1_layer{opacity:1}

/* layer 2 */
.inner_type2_layer{opacity:0;
  -webkit-transform:translateY(60px);-moz-transform:translateY(60px);-ms-transform:translateY(60px);transform:translateY(60px);
  -webkit-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);-moz-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)}
.inner_type2_layer .btn_close:hover{-webkit-transform:translateY(-10px);-moz-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px)}
.on .inner_type2_layer{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}

/* layer 3 */
.inner_type3_layer{opacity:0;
  -webkit-transform:translateY(-60px);-moz-transform:translateY(-60px);-ms-transform:translateY(-60px);transform:translateY(-60px);
  -webkit-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);-moz-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)}
.inner_type3_layer .btn_close:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}
.on .inner_type3_layer{opacity:1;-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}

/* layer 4 */
.type4_layer{width:0;opacity:0;
  -webkit-transform:translate3d(-50%, -50%, 0);-moz-transform:translate3d(-50%, -50%, 0);-ms-transform:translate(-50%, -50%);transform:translate3d(-50%, -50%, 0);
  -webkit-transform-origin:center center;-moz-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;
  -webkit-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);-moz-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)}
.on.type4_layer{width:100%;opacity:1}
.inner_type4_layer{width:100%;height:337px;background:#1c1c1c url(https://t1.kakaocdn.net/gamepub/img-contents/event/promotion/181127_battle/img_distance.png) no-repeat 50% 50%}
.inner_type4_layer .layer_head,
.inner_type4_layer .layer_body{overflow:hidden;font-size:0;line-height:0;text-indent:-9999px}
.inner_type4_layer .btn_close{color:#fff}

/* layer 5 */
.inner_type5_layer{opacity:0;-webkit-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);-moz-transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)}
.on .inner_type5_layer{opacity:1}

</style>