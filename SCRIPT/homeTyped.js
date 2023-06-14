// home type.js
const typed = new Typed('.typed', {
    strings: ['<i class="font-normal">DESARROLLADOR</i>',
              '<i class="font-normal">SOPORTE TI</i>',
              '<i class="font-normal">DISEÑADOR UI</i>'
            ],
    typeSpeed: 75,
    loop: true,
    backSpeed: 75,
    startDelay: 300,
    backDelay: 1500
});

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrases = ["Desarrollador", "Soporte TI"];
const el = document.getElementById("typewriter");

let sleepTime = 100;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhraseIndex];

    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0;
    } else {
      curPhraseIndex++;
    }
  }
};
