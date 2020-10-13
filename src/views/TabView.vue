<template>
  <div id="tab-view">
    <router-view class="router-view"></router-view>
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
      title: '',
      tabList:[
        {
          'tabTitle':'学习',
          'curr':true,
          'icon':'/static/img/tab1.jpg',
          'activeIcon':'/static/img/tab1_active.jpg',
        },
        {
          'tabTitle':'错题集',
          'curr':false,
          'icon':'/static/img/tab2.jpg',
          'activeIcon':'/static/img/tab2_active.jpg',
        }
      ]
    }
  },
  methods: {
    tabSwitch: function(value, index){
      if (index === 0) {
        this.$router.push({ name: 'Home' })
      } else if (index === 1) {
        this.$router.push({ name: 'WrongCollection' })
      }

    }
  }
};
</script>

<style lang="scss">
#tab-view {
  .nut-tabbar {
    height: 1.4rem;
    .icon-box {
      .icon {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    .tabbar-nav-word {
      font-size: 0.28rem;
    }
  }
}
</style>
