const gameList = {
  // site: [
  //   {
  //     id: 1,
  //     type: 5,
  //     title: '란 각성 혈류인',
  //     img: require('@/assets/img/thumb_visu1.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/black/promotion/180109_lahn/lahn.html',
  //     date: '2018-10-18',
  //     tag: ['파티클', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 2,
  //     type: 5,
  //     title: '검은사막 유럽 개편',
  //     img: require('@/assets/img/thumb_visu2.jpg'),
  //     url: 'http://html.gt.dev.daum.net/bdo-2018/service/top/top.html',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '스크롤', '맵', '베너', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 3,
  //     type: 1,
  //     title: '란 소개',
  //     img: require('@/assets/img/thumb_visu3.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/black/promotion/180426_lahn/lahn.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '풀스크린'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 4,
  //     type: 3,
  //     title: '공성전 티저',
  //     img: require('@/assets/img/thumb_visu4.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/eos/promotion/180313_eos/teaser.html',
  //     date: '2018-10-18',
  //     tag: ['파티클', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 5,
  //     type: 3,
  //     title: '공성전 사전예약',
  //     img: require('@/assets/img/thumb_visu5.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/eos/promotion/180416_eos/reserve.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '원페이지', '오브젝트', '영상BG'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 6,
  //     type: 3,
  //     title: '공성전 영지쟁탈전',
  //     img: require('@/assets/img/thumb_visu6.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/eos/promotion/180321_eos/guide.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '오브젝트', '파티클'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 7,
  //     type: 1,
  //     title: '2018 아르샤의 창 시즌1',
  //     img: require('@/assets/img/thumb_visu7.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/black/promotion/180409_black/competition.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 8,
  //     type: 3,
  //     title: 'gs 상품권 신규,복귀 이벤트',
  //     img: require('@/assets/img/thumb_visu8.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/eos/promotion/180405_gs/gs.html',
  //     date: '2018-10-18',
  //     tag: ['마우스', '스크롤', '오브젝트'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 9,
  //     type: 1,
  //     title: '검은사막 모바일 오픈기념',
  //     img: require('@/assets/img/thumb_visu9.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/black/promotion/180305_gift/pc.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '오브젝트'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 10,
  //     type: 2,
  //     title: '2018년 4월 포인트샵',
  //     img: require('@/assets/img/thumb_visu10.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/battlegrounds/html/event/pointshop.html?gnb_on',
  //     date: '2018-10-18',
  //     tag: ['슬라이드'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 11,
  //     type: 5,
  //     title: '카카오게임즈 PC',
  //     img: require('@/assets/img/thumb_visu11.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/service/official/html/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 12,
  //     type: 5,
  //     title: '카카오게임즈 M',
  //     img: require('@/assets/img/thumb_visu12.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/mobile/official/html/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 13,
  //     type: 5,
  //     title: '배틀그라운드 메인 개편 PC',
  //     img: require('@/assets/img/thumb_visu13.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/service/battle/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 14,
  //     type: 5,
  //     title: '배틀그라운드 메인 개편 M',
  //     img: require('@/assets/img/thumb_visu14.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/mobile/battle/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 15,
  //     type: 5,
  //     title: '북유럽 A:ir Cat PC',
  //     img: require('@/assets/img/thumb_visu15.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/service/air/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['로딩', '메뉴', '스크롤', '오브젝트', '슬라이드'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 16,
  //     type: 5,
  //     title: '북유럽 A:ir Cat M',
  //     img: require('@/assets/img/thumb_visu16.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/mobile/air/home/home.html',
  //     date: '2018-10-18',
  //     tag: ['로딩', '메뉴', '탭', '슬라이드', '오브젝트'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 17,
  //     type: 3,
  //     title: '신규서버 압데이트 랜딩',
  //     img: require('@/assets/img/thumb_visu17.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/eos/180601_newserver/newserver.html',
  //     date: '2018-10-18',
  //     tag: ['영상BG', '메뉴'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 18,
  //     type: 4,
  //     title: 'refine 이벤트 랜딩',
  //     img: require('@/assets/img/thumb_visu18.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2017/service/promotion/180126_rf_refine/rf.html',
  //     date: '2018-10-18',
  //     tag: ['마우스', '오브젝트'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 19,
  //     type: 2,
  //     title: '사녹 업데이트 랜딩',
  //     img: require('@/assets/img/thumb_visu19.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/sanhok_180614/intro_0618.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '메뉴', '원페이지', '영상', '탭', '슬라이드', '메인비주얼', '파티클'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 20,
  //     type: 1,
  //     title: '2018 여름 캠페인 티저',
  //     img: require('@/assets/img/thumb_visu20.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180605_summer/summer.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '영상BG', '사운드', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 21,
  //     type: 1,
  //     title: '2018 여름 캠페인 ep.1',
  //     img: require('@/assets/img/thumb_visu21.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180615_ep1/ep1_180619.html',
  //     date: '2018-10-18',
  //     tag: ['메뉴', '슬라이드', '영상', '파티클'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 22,
  //     type: 1,
  //     title: '2018 여름 캠페인 ep.2',
  //     img: require('@/assets/img/thumb_visu22.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180625_ep2/ep2.html',
  //     date: '2018-10-18',
  //     tag: ['영상BG', '사운드', '스크롤', '풀스크린', '슬라이드', '오브젝트', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 23,
  //     type: 1,
  //     title: '2018 여름 캠페인 ep.3',
  //     img: require('@/assets/img/thumb_visu23.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180712_ep3/ep3_180718.html',
  //     date: '2018-10-18',
  //     tag: ['영상BG', '사운드', '스크롤', '풀스크린', '슬라이드', '오브젝트', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 24,
  //     type: 1,
  //     title: '2018 여름 캠페인 ep.4',
  //     img: require('@/assets/img/thumb_visu24.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180810_ep4/ep4.html',
  //     date: '2018-10-18',
  //     tag: ['풀스크린', '슬라이드'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 25,
  //     type: 1,
  //     title: '리마스터 사전예약',
  //     img: require('@/assets/img/thumb_visu25.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180718_remaster/reserve.html',
  //     date: '2018-10-18',
  //     tag: ['버튼', '메인비주얼', '스크롤', '풀스크린'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 26,
  //     type: 1,
  //     title: '리마스터 업데이트',
  //     img: require('@/assets/img/thumb_visu26.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180718_remaster/update.html',
  //     date: '2018-10-18',
  //     tag: ['파티클', '스크롤', '슬라이드', '풀스크린'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 27,
  //     type: 1,
  //     title: '그랜드 오픈 3주년',
  //     img: require('@/assets/img/thumb_visu27.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180705_grandyear3/grand.html?login',
  //     date: '2018-10-18',
  //     tag: ['파티클', '스크롤', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 28,
  //     type: 1,
  //     title: '리마스터 업데이트(유럽)',
  //     img: require('@/assets/img/thumb_visu28.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180817_remaster_eu/remaster.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '오브젝트', '슬라이드', '사운드'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 29,
  //     type: 1,
  //     title: '카카오 뮤지엄',
  //     img: require('@/assets/img/thumb_visu29.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180912_museum/index.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '메뉴', '오브젝트', '메인비주얼', '원페이지'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 30,
  //     type: 1,
  //     title: '2018 아르샤의 창 시즌2 승부예측',
  //     img: require('@/assets/img/thumb_visu30.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/black/180920_arsha_forecast/index.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 31,
  //     type: 1,
  //     title: '카카오 뮤지엄',
  //     img: require('@/assets/img/thumb_visu31.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/180912_museum/index.html',
  //     date: '2018-10-18',
  //     tag: ['스크롤', '메뉴', '오브젝트', '메인비주얼', '원페이지'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 32,
  //     type: 2,
  //     title: '배포 큰 출석이벤트',
  //     img: require('@/assets/img/thumb_visu32.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/181001_bp/index.html',
  //     date: '2018-10-18',
  //     tag: ['파티클'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 33,
  //     type: 2,
  //     title: '스페셜 아이템 보급',
  //     img: require('@/assets/img/thumb_visu33.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/180717_camp/point.html',
  //     date: '2018-10-18',
  //     tag: ['메인비주얼'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 34,
  //     type: 2,
  //     title: 'PC방 전용 플레이 미션',
  //     img: require('@/assets/img/thumb_visu34.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/180622_camp/pcroom.html',
  //     date: '2018-10-18',
  //     tag: ['파티클'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 35,
  //     type: 2,
  //     title: '사녹 이벤트 포인트 교환소',
  //     img: require('@/assets/img/thumb_visu35.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/promotion/battle/180622_camp/point.html',
  //     date: '2018-10-18',
  //     tag: ['오브젝트'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 36,
  //     type: 1,
  //     title: '다음게임탑 개편',
  //     img: require('@/assets/img/thumb_visu36.jpg'),
  //     url: 'http://html.gt.dev.daum.net/kakaogames-2018/basic/project/top/181001_topnew/index.html?login&card',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '영상'],
  //     cross: 'ie10'
  //   },
  //   {
  //     id: 37,
  //     type: 5,
  //     title: '지스타',
  //     img: require('@/assets/img/thumb_visu37.jpg'),
  //     url: '',
  //     date: '2018-10-18',
  //     tag: ['슬라이드', '스크롤', '오브젝트'],
  //     cross: 'ie10'
  //   }
  // ]
}

export default gameList
