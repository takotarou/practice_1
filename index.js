const quiz = [
  {
    question: '少人数に対して行うマジックのことは何と言われるか？',
    answers: [
      'ステージマジック',
      'イリュージョン',
      'サロンマジック',
      'クロースアップマジック'
    ],
    correct: 'クロースアップマジック'
  },
  {
    question: '初心者が最初に練習すると良いものは何か？',
    answers: [
      '人体切断マジック',
      'トランプマジック',
      'コインマジック',
      'ロープマジック'
    ],
    correct: 'トランプマジック'
  },
  {
    question: 'マジックで使われるトランプは何製のものが良いか？',
    answers: [
      'プラスチック製',
      '金属製',
      '紙製',
      '革製'
    ],
    correct: '紙製'
  },
  {
    question: 'サーカスデックはどの100円ショップで売られているでしょうか？',
    answers: [
      'ダイソー',
      'セリア',
      'キャンドゥー',
      'ワッツ'
    ],
    correct: 'ダイソー'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

console.log();

const $button = document.getElementsByTagName('button');
 buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }else{
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else{
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};
