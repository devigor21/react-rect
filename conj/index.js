"use strict";

function conj(verb, pron) {
  const pronoun = ['я', 'мы', 'ты', 'вы', 'он', 'она', 'оно', 'они'];

  const conjugationFirst = ['ать', 'оть', 'уть', 'еть', 'ять'];
  const conjugationSecond = 'ить';

  const verbChank = verb.slice(0, verb.length - 3);
  if (verb.includes(conjugationSecond)) {
    switch (pron) {
      case pronoun[0]:
        console.log(`${verbChank}лю`);
        break;
      case pronoun[1]:
        console.log(`${verbChank}им`);
        break;
      case pronoun[2]:
        console.log(`${verbChank}ишь`);
        break;
      case pronoun[3]:
        console.log(`${verbChank}те`);
        break;
      case pronoun[4]:
      case pronoun[5]:
      case pronoun[6]:
        console.log(`${verbChank}ит`);
        break;
      case pronoun[7]:
        console.log(`${verbChank}ят`);
        break;
      default:
        break;
    }
  }

  for (const i of conjugationFirst) {
    if (verb.includes(i)) {
      switch (pron) {
        case pronoun[0]:
          console.log(`${verbChank}ою`);
          break;
        case pronoun[1]:
          console.log(`${verbChank}оём`);
          break;
        case pronoun[2]:
          console.log(`${verbChank}оёшь`);
          break;
        case pronoun[3]:
          console.log(`${verbChank}оёте`);
          break;
        case pronoun[4]:
        case pronoun[5]:
        case pronoun[6]:
          console.log(`${verbChank}оёт`);
          break;
        case pronoun[7]:
          console.log(`${verbChank}оют`);
          break;
        default:
          break;
      }
    }
  }
}

conj('петь', 'оно');
