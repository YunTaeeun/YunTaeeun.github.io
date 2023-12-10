const goodWord = [
  {
    author: "Albert Einstein",
    quote:
      "어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기증세 이다.",
  },
  {
    author: "Lou Holtz",
    quote:
      "당신의 문제를 타인에게 말하지 마십이오. 20%는 신경도 쓰지 않고 80%는 당신의 곤경에 기뻐할 것입니다.",
  },
  {
    author: "Thomas Alva Edison",
    quote: "변명 중에서도 가장 어리석고 못난 변명 -시간이 없어서-",
  },
  {
    author: "Arabic wisdom",
    quote: "네가 말을 할 때에는 그 말이 침묵보다 나는 것이어야 한다.",
  },
  {
    author: "레몬 심리",
    quote: "기분은 태도의 이유가 될지언정 근거일수 없다.",
  },
  {
    author: "Saint Exupéry",
    quote: "삶의 의미는 발견하는 것이 아니라 만들어 가는 것이다.",
  },
  {
    author: "Honoré de Balzac",
    quote: "아무것도 변하지 않으지라도, 내가 변하면 모든것이 변한다.",
  },
  {
    author: "나로부터",
    quote: "지금 바로 당장 하자",
  },
  {
    author: "Peter Drucker",
    quote: "계획이란 미래에 관한 현재의 결정이다.",
  },
  {
    author: "BERSERK",
    quote: "도망쳐서 도착한 곳에 낙원이 없다",
  },
];

const goodWordQ = document.querySelector("div#goodword h1");
const goodWordA = document.querySelector("div#goodword h2");

function getGoodWord() {
  const randomWord = Math.floor(Math.random() * goodWord.length);
  const getquote = goodWord[randomWord].quote;
  const getauthor = goodWord[randomWord].author;
  goodWordQ.innerText = getquote;
  goodWordA.innerText = `-${getauthor}-`;
}

getGoodWord();
