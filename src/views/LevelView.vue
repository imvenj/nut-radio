<template>
  <div class="quiz-bank">
    <nut-navbar
      :leftShow="false"
      :rightShow="false"
      >
      {{ title }}
    </nut-navbar>
    <div class="content">
      <h4>请选择无线电操作考试题库种类</h4>
      <nut-cell>
        <template v-slot:title>
          <nut-radio v-model="quizBankID" :label="0">A类</nut-radio>
          <nut-radio v-model="quizBankID" :label="1">B类</nut-radio>
          <nut-radio v-model="quizBankID" :label="2">C类</nut-radio>
        </template>
      </nut-cell>
      <div class="start-button">
        <nut-button
          @click="start"
          block
        >开始学习</nut-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: '题库选择',
      quizBankID: 0
    }
  },
  methods: {
    start() {
      this.$router.push({ name: 'Quiz', query: { suite: this.quizBankID } })
    }
  }
}
</script>

<style lang='scss' scoped>
.quiz-bank {
  .start-button {
    margin: 0.4rem;
  }
  h4 {
    font-size: 0.46rem;
    margin: 0.4rem;
  }
}
</style>
