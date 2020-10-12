<template>
  <div id="app">
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :leftShow="true"
      :rightShow="false"
    >测试练习</nut-navbar>
    <h5 class="quiz-question">这是题目的主题内容。。。详情如下。。。有很长的描述内容，请选择正确的答案。</h5>
    <nut-cell :show-icon="true">
      <span slot="title">A. 答案 A</span>
      <nut-icon type="tick" slot="icon" size="15px" color="#848484"></nut-icon>
    </nut-cell>
    <nut-cell :show-icon="true">
      <span slot="title">B. 答案 B</span>
    </nut-cell>
    <nut-cell :show-icon="true">
      <span slot="title">C. 答案 C</span>
    </nut-cell>
    <nut-cell :show-icon="true">
      <span slot="title">D. 答案 D</span>
    </nut-cell>
    <nut-buttongroup>
      <nut-button
        type="light"
      >
        上一题
      </nut-button>
      <nut-button>
        下一题
      </nut-button>
    </nut-buttongroup>
    <nut-tabbar
      @tab-switch="tabSwitch"
      :tabbar-list="tabList"
      :bottom="true"
    >
    </nut-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList:[
        {
          'tabTitle':'主页',
          'curr':true,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/29316/38/1115/3203/5c0f3d61E35d0c7da/9e557f2cb5c9dab6.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/9996/36/8646/4833/5c0f3d61E7c1b7e0f/c98ad61124172e93.jpg',
          'href':'###'
        },
        {
          'tabTitle':'分类',
          'curr':false,
          'icon':'http://img12.360buyimg.com/uba/jfs/t1/25443/23/1062/4600/5c0f3d61E2e9f1360/c9b3421fe18614e2.jpg',
          'activeIcon':'http://img20.360buyimg.com/uba/jfs/t1/19241/12/1048/8309/5c0f3d61E17ed5a56/c3af0964cade47f8.jpg',
          'href':'###'
        },
        {
          'tabTitle':'发现',
          'curr':false,
          'icon':'http://img13.360buyimg.com/uba/jfs/t1/10361/35/4713/4643/5c0f3d62E437a3c94/273fd0fb90798f03.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/26604/35/1073/7896/5c0f3d61Eb9f5f184/5f01c938abe4216d.jpg',
          'href':'###'
        },
        {
          'tabTitle':'购物车',
          'curr':false,
          'num':2,
          'icon':'http://img11.360buyimg.com/uba/jfs/t1/14848/18/1066/3723/5c0f41bdE9f2a38fe/e6ed6768717297fb.jpg',
          'activeIcon':'http://img30.360buyimg.com/uba/jfs/t1/17538/16/1070/6214/5c0f41bdE4bc9a1db/74cf978e5015454b.jpg',
          'href':'###'
        },
        {
          'tabTitle':'我的',
          'curr':false,
          'icon':'http://img20.360buyimg.com/uba/jfs/t1/20004/20/1045/3620/5c0f3d61Eaaec1670/9e59db63983b7b9f.jpg',
          'activeIcon':'http://img14.360buyimg.com/uba/jfs/t1/23967/14/1072/6714/5c0f3d61E0ad8991e/8f741953f6e38f15.jpg',
          'href':'###'
        }
      ]
    }
  },
  methods: {
    tabSwitch: function(value,index){
      console.log(index);
    },
    back() {},
    title() {},
    more() {}
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #efefef !important;

  .nav-title {
    font-size: 0.5rem;
    color: white;
  }

  .nut-navbar {
    background-color: sienna;
  }

  .nut-buttongroup {
    padding: 0.4rem 0.2rem;
    .nut-button {
      margin: auto 0.2rem;
    }
  }

  .quiz-question {
    font-size: 0.4rem;
    margin: 0.8rem 0.4rem;
  }
}
</style>
