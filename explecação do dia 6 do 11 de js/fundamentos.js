const aluno = {nome: 'lima', idade: 16, curso: 'Desenvolvimento de Sistemas'};
  const msgdev = 'bem vindo aluno do curso de Desenvolvimento de Sistemas a duração é de 2 ano';
  const msglg = 'bem vindo aluno do curso de Logística a duração é de 1 ano';
  const msgadm = 'bem vindo aluno do curso de Administração a duração é de 1,5 ano'
  const msgnor = 'bem vindo funcionario' 

  switch (aluno.curso) {
    case 'Desenvolvimento de Sistemas':
      console.log(msgdev);
      break;
    case 'Desenvolvimento de Sistemas':
      console.log(msgdev);
    case 'Desenvolvimento de Sistemas':
      console.log(msgdev);
      break;
    default:
      console.log(msgnor);
      break;
  }
 
  const value = {number1: 12, number2: 13, operação: 'soma'};
  const soma = `seu número é ${value.number1} e seu outro número é ${value.number2} a sua operção requirida é ${value.operação} então seu resultado é ${value.number1+value.number2}`;
  const subtração = `seu número é ${value.number1} e seu outro número é ${value.number2} a sua operção requirida é ${value.operação} então seu resultado é ${value.number1-value.number2}`;
  const multiplicação = `seu número é ${value.number1} e seu outro número é ${value.number2} a sua operção requirida é ${value.operação} então seu resultado é ${value.number1*value.number2}`;
  const divisão = `seu número é ${value.number1} e seu outro número é ${value.number2} a sua operção requirida é ${value.operação} então seu resultado é ${value.number1/value.number2}`;

  switch (value.operação) {
    case 'soma':
      console.log(soma);
      break;
    case 'subtração':
      console.log(subtração);
    break;
    case 'multiplicação':
      console.log(multiplicação);
    break;
    case 'divisão':
      console.log(divisão);
    break;
  
    default:
      break;
  }

  const faixa = 60;
  const msginfantil = `Vc tem ${faixa} anos de idade logo sua faixa étaria é infantil`;
  const msgadolescente = `Vc tem ${faixa} anos de idade logo sua faixa étaria é adolescente`;
  const msgadulto = `Vc tem ${faixa} anos de idade logo sua faixa étaria é adulto`;
  const msgaidosos = `Vc tem ${faixa} anos de idade logo sua faixa étaria é idoso`;


  switch (true) {
    case (faixa > 0 && faixa < 12):
      console.log(msginfantil);
      break;
    case (faixa >= 12 && faixa < 18):
      console.log(msgadolescente);
      break;
    case (faixa >= 18 && faixa < 60):
      console.log(msgadulto);
      break;
    default:
      console.log(msgaidosos);
      break;
  }


  const nota = 10;

switch (true) {
  case (nota >= 0 && nota <4):
    console.log('insuficiente');
    break;
  case (nota >= 4 && nota <6):
    console.log('regular');
    break;
  case (nota >= 6 && nota <9):
    console.log('bom');
    break;
  default:
    console.log('excelente');
    break;
}

const diade1a7 = 5;

switch (true) {
  case (diade1a7===1):
    console.log('segunda');
    break;
    case (diade1a7===2):
      console.log('terça');
      break;
      case (diade1a7===3):
      console.log('quarta');
      break;
      case (diade1a7===4):
    console.log('quinta');
    break;
    case (diade1a7===5):
    console.log('sexta');
    break;
    case (diade1a7===6):
    console.log('sabado');
    break;
  default:
    console.log('domingo');
    break;
}

const eventos = 'festa junina';

switch (eventos) {
  case 'festa junina':
    console.log('evento em junho');
    break;
  case 'selibi':
    console.log('regularmente em setembro');
    break;
  case 'semana da tecnologia':
    console.log('não sei te dizer a data');
    break;
  default:
    console.log('desconheço esse evento');
    break;
}


const mes = 5;

switch (mes) {
  case 1:
    console.log('Janeiro');
    break;
  case 2:
    console.log('Fevereiro');
    break;
  case 3:
    console.log('Março');
    break;
  case 4:
    console.log('Abril');
    break;
  case 5:
    console.log('Maio');
    break;
  case 6:
    console.log('Junho');
    break;
  case 7:
    console.log('Julho');
    break;
  case 8:
    console.log('Agosto');
    break;
  case 9:
    console.log('Setembro');
    break;
  case 10:
    console.log('Outubro');
    break;
  case 11:
    console.log('Novembro');
    break;
  case 12:
    console.log('Dezembro');
    break;
  default:
    console.log('Mês inválido');
    break;
}

const estações = 5; 
switch (estações) {
  case 1:
    console.log('Verão');
    break;
  case 2:
    console.log('Outono');
    break;
  case 3:
    console.log('Inverno');
    break;
  case 4:
    console.log('Primavera');
    break;
  default:
    console.log('Desconheço essa estação');
    break;
}

const medidas = {número: 12, medida:'km'}; 
switch (medidas.medida) {
  case 'km':
    console.log(medidas.número*1000);
    break;
  case 'm':
    console.log(medidas.número);
    break;
  case 'cm':
    console.log(medidas.número/100);
    break;
  default:
    console.log('Desconheço esse valor');
    break;
}



const conceito = 'A';

switch (conceito) {
  case 'A':
    console.log('Faixa de nota: 9 a 10');
    break;
  case 'B':
    console.log('Faixa de nota: 7 a 8.9');
    break;
  case 'C':
    console.log('Faixa de nota: 5 a 6.9');
    break;
  case 'D':
    console.log('Faixa de nota: 3 a 4.9');
    break;
  case 'F':
    console.log('Faixa de nota: 0 a 2.9');
    break;
  default:
    console.log('Conceito inválido! Por favor, digite um conceito válido (A, B, C, D, F).');
    break;
}


const moeda = {número: 12, medida:'km'}; 
switch (medidas.medida) {
  case 'usd':
    console.log(moeda.número*5.6);
    break;
  case 'eur':
    console.log(moeda.número*6.09);
    break;
  case 'gbp':
    console.log(moeda.número*7.32);
    break;
  default:
    console.log('Desconheço esse valor');
    break;
}