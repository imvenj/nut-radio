Math.randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max))
}

Array.prototype.randonmize = function() {
  function randomIndices(to) {
    const result = []
    while (result.length < to) {
      const r = Math.randomInt(to)
      if (!result.includes(r)) {
        result.push(r)
      }
    }
    return result
  }

  return randomIndices(this.length).map(i => this[i])
}

export class QuizTemplate {
  static initilize() {
    const qt = new QuizTemplate()
    qt.choices = []
    return qt
  }

  constructor(id, question, choices, picture) {
    this.id = id
    this.question = question
    this.choices = choices
    this.picture = picture
  }

  toQuiz() {
    const choice = this.choices[0]
    const choices = this.choices.randonmize()
    const answer = choices.findIndex(i => i === choice)
    return new Quiz(this.id, this.question, choices, answer, this.picture)
  }
}

export class Quiz {
  constructor(id, question, choices, answer, picture) {
    this.id = id
    this.question = question
    this.choices = choices
    this.answer = answer
    this.picture = picture
  }
}
