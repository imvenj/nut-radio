<template>
  <div class="quiz">
    <nut-navbar
      :leftShow="true"
      :rightShow="true"
      >
      测试练习 ({{current + 1}}/{{quizBank.length}})
      <template v-slot:back-icon>
        <a @click="back" class="navbar-button">
          <nut-icon
            type="cross"
            color="white"
            size="32"
            >
          </nut-icon>
        </a>
      </template>
      <template v-slot:more-icon>
        <a @click="search" class="navbar-button">
          <nut-icon
            type="search"
            color="white"
            size="32"
            >
          </nut-icon>
        </a>
      </template>
    </nut-navbar>
    <div class="quiz-content" v-if="quiz">
      <h5 class="quiz-question">
        [{{ quiz.id }}] {{ quiz.question }}
      </h5>

      <div class="quiz-options" v-if="mode === 0">
        <nut-checkbox
          v-model="answerOnly">
          只显示正确答案
        </nut-checkbox>
      </div>

      <div class="quiz-image" v-if="quiz.picture">
        <img :src="quiz.picture">
      </div>
      <nut-cell :show-icon="true"
        v-for="(choice, index) in ((mode === 0 && answerOnly) ? [quiz.choices[0]] : quiz.choices)"
        :key="`choice-${index}`">
        <span slot="title">{{ cid[index] }}. {{ choice }}</span>
      </nut-cell>
      <nut-buttongroup>
        <nut-button
          type="light"
          :disabled="current === 0"
          @click="--current"
        >
          上一题
        </nut-button>
        <nut-button
          :disabled="current === quizBank.length"
          @click="++current"
        >
          下一题
        </nut-button>
      </nut-buttongroup>
    </div>

    <!-- Search dialog -->
    <nut-dialog :title="`请输入题目序号（1-${quizBank.length}）或题号`" :visible="dialogShow" @ok-btn-click="goToQuiz" @cancel-btn-click="dialogShow=false" @close="dialogShow=false">
      <nut-textinput
        v-model="target"
        :clearBtn="true"
        :disabled="false" />
    </nut-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    mode: {
      type: Number,
      default: 0 // 0: study, 1: exam
    }
  },
  data: () => ({
    quizBank: [],
    suite: 0,
    current: 0,
    dialogShow: false,
    answerOnly: false,
    target: ''
  }),
  computed: {
    quiz() {
      return this.quizBank[this.current]
    },
    cid() {
      return ['A', 'B', 'C', 'D']
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    search() {
      this.dialogShow = true
    },
    goToQuiz() {
      this.dialogShow = false
      if (this.target.match(/^LK\d+$/i)) {
        const tid = this.target.toUpperCase()
        const index = this.quizBank.findIndex(q => q.id === tid)
        if (index !== -1) {
          this.current = index
        } else {
          this.$toast.text('题库中未找到该题号。')
        }
      } else if (this.target.match(/^\d+$/i))  {
        const target = parseInt(this.target) - 1 || -1
        if (target < 0 || target >= this.quizBank.length) {
          this.target = ''
          this.$toast.text('题目序号超出允许的范围。')
        } else {
          this.current = target
        }
      } else {
        this.$toast.text('无效的查询条件。')
      }
      this.target = ''
    },
    async fetchData(suite) {
      const resp = await axios.get(`/static/data/suite_${suite}.json`)
      return resp.data
    }
  },
  mounted() {
    this.$nextTick(async () => {
      const suite = parseInt(this.$route.query.suite) || 0
      const t = this.$toast.loading('题库加载中...')
      this.quizBank = await this.fetchData(suite)
      t.hide()
      console.log('quiz bank:', this.quizBank)
    })
  }
}
</script>

<style lang='scss' scoped>
.quiz {
  .nut-buttongroup {
    padding: 0.4rem 0.2rem;
    .nut-button {
      margin: auto 0.2rem;
    }
  }

  .quiz-question {
    font-size: 0.4rem;
    margin: 0.4rem;
  }

  a.navbar-button {
    display: inline-block;
    margin-top: 10px;
  }

  .quiz-image  {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.4rem 0;
    img {
      display: block;
      height: 200px;
    }
  }

  .quiz-options {
    margin: 0.4rem;
  }
}
</style>
