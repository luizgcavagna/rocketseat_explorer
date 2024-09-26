let students = [
  {
    name: 'Vitor',
    firstTestScore: 9.5,
    secondTestScore: 9
  },
  {
    name: 'Sao grego',
    firstTestScore: 10,
    secondTestScore: 9
  },
  {
    name: 'Gabi',
    firstTestScore: 7.5,
    secondTestScore: 8
  },
  {
    name: 'Xandy',
    firstTestScore: 5,
    secondTestScore: 4.5
  }
];

const average = (n1, n2) => (n1 + n2) / 2;

for(let student of students) {
  let name = student.name;
  let averageResult = average(student.firstTestScore, student.secondTestScore);

  if(averageResult >= 7)
    alert(`
      A media do(a) ${name} e: ${averageResult}
      Parabens, ${name}! Voce foi aprovado(a) no concurso! 
    `);
  else 
    alert(`
      A media do(a) ${name} e: ${averageResult}
      Nao foi dessa vez, ${name}! Tente novamente! 
    `);  
}

