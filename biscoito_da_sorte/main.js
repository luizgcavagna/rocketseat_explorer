const phrases = [
  "Acredite em si mesmo e tudo será possível.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Desafios são oportunidades disfarçadas.",
  "A persistência é o caminho do êxito.",
  "Não espere por oportunidades, crie-as.",
  "Você é mais forte do que imagina.",
  "O sucesso não é o final, o fracasso não é fatal: é a coragem de continuar que conta.",
  "Grandes conquistas começam com pequenos passos.",
  "A única maneira de fazer um excelente trabalho é amar o que você faz.",
  "A melhor maneira de prever o futuro é criá-lo.",
  "Faça hoje o que outros não fazem para ter amanhã o que outros não terão.",
  "O fracasso é apenas uma oportunidade para começar de novo com mais inteligência.",
  "O único limite para a sua realização de amanhã são as suas dúvidas de hoje.",
  "A disciplina é a ponte entre metas e realizações.",
  "Não importa o quão devagar você vá, desde que não pare.",
  "Você nunca será perfeito, mas sempre pode ser melhor.",
  "A chave para o sucesso é começar antes de estar pronto.",
  "Sonhar grande e sonhar pequeno dá o mesmo trabalho.",
  "O maior erro que você pode cometer é não tentar.",
  "Você não precisa ser perfeito para começar, mas precisa começar para ser perfeito.",
  "Acredite que você pode e você já está no meio do caminho.",
  "Sucesso é a soma de pequenos esforços repetidos diariamente.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "A motivação é o que te faz começar. O hábito é o que te faz continuar.",
  "O medo é apenas uma porta que você precisa abrir para encontrar seu potencial.",
  "Tudo o que você precisa para começar é o primeiro passo.",
  "Quando pensar em desistir, lembre-se do motivo pelo qual começou.",
  "A jornada de mil milhas começa com um único passo.",
  "A cada desafio, você se torna mais forte.",
  "Não tenha medo de falhar. Tenha medo de não tentar.",
  "Se não puder fazer tudo, faça tudo o que puder.",
  "Nunca é tarde demais para ser o que você poderia ter sido.",
  "O caminho para o sucesso é acreditar que você é capaz.",
  "Tenha fé no processo, o sucesso virá no momento certo.",
  "Os vencedores nunca desistem, e os que desistem nunca vencem.",
  "O sucesso é encontrar aquilo que te faz feliz e trabalhar para alcançá-lo.",
  "Você é o único responsável pela sua felicidade.",
  "Seja a mudança que você quer ver no mundo.",
  "Não importa o quão difícil seja o caminho, o importante é continuar caminhando.",
  "Cada dia é uma nova oportunidade de ser melhor que ontem.",
  "Você não pode controlar o vento, mas pode ajustar as velas.",
  "Coragem não é a ausência de medo, mas a decisão de que algo é mais importante que o medo.",
  "Acredite que grandes coisas estão por vir.",
  "Os obstáculos são os degraus para o sucesso.",
  "Seus sonhos não têm prazo de validade.",
  "A diferença entre quem você é e quem você quer ser está no que você faz.",
  "A melhor maneira de fazer algo é simplesmente começar.",
  "O sucesso não é algo que você persegue, é algo que você atrai.",
  "O tempo vai passar de qualquer maneira, então faça com que ele valha a pena."
];

const sectionFortuneCookie = document.querySelector('.fortune-cookie');
const sectionOpenedCookie = document.querySelector('.opened-cookie');
const openCookie = document.querySelector('#imgCookie');
const closeCookie = document.querySelector('#btnCookie');
const phrase = document.querySelector('.phrase p');
let phraseIndex = Math.round(Math.random() * 50);

openCookie.addEventListener('click', () => {
  phrase.innerText = phrases[phraseIndex];

  toggleClass();
  phraseIndex = Math.round(Math.random() * 50);
});

closeCookie.addEventListener('click', toggleClass);

function toggleClass() {
  sectionFortuneCookie.classList.toggle('hide');
  sectionOpenedCookie.classList.toggle('hide');
}