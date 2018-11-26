<template>
  <div id="contents" class="cont_games">
	<div class="spot_games">
		<h2 class="tit_cate">사이트</h2>
    </div>
	<div class="inner_cont">
    <div class="box_srch">
      <select class="select_srch" v-model="selYear">
        <option v-for="opt in gameYear" :value="opt.value">{{ opt.label }}</option>
      </select>
      <select class="select_srch" v-model="selGame">
        <option v-for="opt in gameType" :value="opt.value">{{ opt.label }}</option>
      </select>
      <input type="text" class="tf_srch" v-model="search" placeholder="Search title.."/>
    </div>
    
		<ul class="list_visual">
      <li v-for="(site, idx) in filteredType.slice().reverse()">
        <em class="num_visual">#{{ site.id }}</em>
        <div class="area_thumb">
          <img :src="require('@/assets/img/thumb_visu'+site.id+'.jpg')" class="img_thumb" alt="">
        </div>
        <div class="area_info">
          <strong class="tit_visu"><em class="tag_game">{{ gameType[site.type].label }}</em>{{ site.title }}</strong>
          <p class="txt_visu">
            <span v-for="tags in site.tag" class="tag_skill">#{{ tags }}</span>
          </p>
          <dl class="list_info">
            <dt>지원 브라우저</dt>
            <dd class="txt_browser">{{ site.cross }} 이상</dd>
            <dt>업데이트일</dt>
            <dd class="txt_date">{{ site.date }}</dd>
          </dl>
          <div class="group_btn">
            <a :href="site.url" target="_blank" class="link_go">바로가기 &gt;</a>
          </div>
        </div>
      </li>
		</ul>
	</div>
  </div>
</template>

<script>
  import gameList from '@/components/common/data/gameLists'
  import { dateYYYY, dateYYYYMMDD } from '@/mixins/momentDate'
  import axios from '../axios-auth';

  export default {
    name: 'Home',
    data: function () {
      return {
        selGame: 0,
        selYear: 0,
        search: '',
        gameType: gameList.game,
        gameYear: gameList.year,
        listGame: []
      }
    },
    computed: {

      filteredTitle() {
        return this.listGame.filter((site) => {
          return site.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
      filteredYear() {
        return this.filteredTitle.filter((site) => {
          if(this.selYear === 0){
              return site;
          }else{
            return site.year == this.selYear
          }
        })
      },
      filteredType() {
        return this.filteredYear.filter((site) => {
          if(this.selGame === 0){
            return site;
          }else{
            return site.type == this.selGame
          }
        })
      }

    },
    methods: {
      dateYYYY,
      dateYYYYMMDD,

      getGameLists () {
        axios.get('/gameList')
        .then(res => {
          //console.log(res)
          const data = res.data;
          const datas = [];

          this.gameLists = [];

          for (let key in data) {
            const tempData = {
              id: data[key].idx,
              type: data[key].game_type,
              title: data[key].game_title,
              img: data[key].game_img,
              url: data[key].game_url,
              year: this.dateYYYY(data[key].game_date),
              date: this.dateYYYYMMDD(data[key].game_date),
              tag: data[key].game_tag.split(','),
              cross: data[key].game_cross,
            }
            datas.push(tempData)
          }
          this.listGame = datas
        })
        .catch(error => {
          console.log(error);
        })
      }
    },
    created () {
      this.getGameLists()
    }
  }
</script>