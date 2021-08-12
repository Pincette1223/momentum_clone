const quotes = [
  {
    quote:
      "당신이 행한 봉사에 대해서는 말을 아끼라. 허나 당신이 받았던 호의들에 대해서는 이야기하라.",
    author: "세네카",
  },
  {
    quote:
      "인생에서 원하는 것을 얻기 위한 첫 번째 단계는 내가 무엇을 원하는지 결정하는 것이다.",
    author: "벤 스타인",
  },
  {
    quote: "인생이란 네가 다른 계획을 세우느라 바쁠 때 너에게 일어나는 것이다.",
    author: "존 레논",
  },
  {
    quote:
      "교육은 읽을 줄 알지만 무엇이 읽을 가치가 있는지는 모르는 수많은 사람을 배출해냈다.",
    author: "G. M. 트리벨리언",
  },
  {
    quote: "성공의 80%은 일단 출석하는 것이다.",
    author: "우디 알렌",
  },
  {
    quote:
      "늘 명심하라. 성공하겠다는 너 자신의 결심이 다른 어떤 것보다 중요하다는 것을.",
    author: "에이브러햄 링컨",
  },
  {
    quote:
      "너의 성공이나, 친구의 성공만큼 확실하게 친구에 대한 너의 생각을 바꿔주는 것은 없다.",
    author: "프랭클린 P. 존스",
  },
  {
    quote:
      "배움에 대한 애정과 세상을 등진 외딴 곳. 책이 주는 그 모든 달콤한 평온.",
    author: "헨리 W. 롱펠로우",
  },
  {
    quote: "미래를 결정짓고 싶다면 과거를 공부하라.",
    author: "공자",
  },
  {
    quote: "사람을 존경하라, 그러면 그는 더 많은 일을 해 낼 것이다.",
    author: "제임스 오웰",
  },
  {
    quote:
      "밑에 유우명한 사람의 이름이 있다고 해서, 인터넷에서 본 모든 것을 믿지 말아라.",
    author: "핀셋",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote}`;
author.innerText = `-${todaysQuote.author}`;
