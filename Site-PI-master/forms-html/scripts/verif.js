var alunos = [];

function validar() {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let tell = document.getElementById("telefone").value;
  let data = document.getElementById("data").value;
  let genero = document.getElementById("genero").value;
  let correto = true;

  //valida nome
  if (nome.trim() == "" || nome.length < 10) {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu nome está vazio ou possui menos que 10 caracteres";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "none";
  }

  //valida email
  if (email == " " || !email.includes("@") || !email.includes(".")) {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "Flex";
    mensagem.innerText = "Seu email está vazio, ou deve possuir um @ e um .";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "none";
  }

  //valida telefone
  var regex =
    /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
  if (!regex.test(tell)) {
    let mensagem = document.getElementById("erro-telefone");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu telefone deve estar como no exemplo, +55 (55) 23321-5454 ";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-telefone");
    mensagem.style.display = "none";
  }

  //valida data
  if (!data) {
    let mensagem = document.getElementById("erro-data");
    mensagem.style.display = "Flex";
    mensagem.innerText = "Informe uma data de nascimento";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let dataSel = new Date(data);

    // Definir os limites fixos
    let dataMin = new Date(2000, 0, 1); // 1º de janeiro de 2000
    let dataMax = new Date(2020, 11, 31); // 31 de dezembro de 2020

    let mensagem = document.getElementById("erro-data");
    mensagem.style.display = "none";

    if (dataSel > dataMax || dataSel < dataMin) {
      let mensagem = document.getElementById("erro-data");
      let mensagem2 = document.getElementById("erro-data2");
      mensagem.style.display = "Flex";
      mensagem2.style.display = "Flex";
      mensagem.innerText = "A data está fora do intervalo permitido.";
      mensagem2.innerText = "A data deve estar entre 01/01/2000 e 31/12/2020.";
      mensagem.style.color = "red";
      mensagem2.style.color = "red";
      correto = false;
    } else {
      let mensagem = document.getElementById("erro-data");
      let mensagem2 = document.getElementById("erro-data2");
      mensagem.style.display = "none";
      mensagem2.style.display = "none";
    }
  }

  //verifica o genero

  if (
    genero != "Masculino" &&
    genero != "masculino" &&
    genero != "Feminino" &&
    genero != "feminino"
  ) {
    let mensagem = document.getElementById("erro-genero");
    mensagem.style.display = "Flex";
    mensagem.innerText = "O genero deve ser Feminino ou Masculino";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-genero");
    mensagem.style.display = "none";
  }
  //deu tudo certo? exibir a tabela com os alunos cadastrados!

  //descomentar a linha abaixo para caso de testes!
  //correto = true

  if (correto == true) {
    let sucesso = document.getElementById("sucesso");
    sucesso.style.display = "flex";
    sucesso.style.fontSize = "16px";
    sucesso.innerText =
      "Os dados de seu filho foram enviados para a escola com sucesso!, por favor aguarde";

    //tabela com alunos (Sql fake)

    let Vnome = document.getElementById("nome").value;
    let Vemail = document.getElementById("email").value;
    let Vtell = document.getElementById("telefone").value;
    let Vdata = document.getElementById("data").value;
    let Vgenero = document.getElementById("genero").value;

    //adicionando no veto(alunos) de objetos
    alunos.push({
      nome: Vnome,
      email: Vemail,
      tell: Vtell,
      data: Vdata,
      genero: Vgenero,
    });

    //vinculamos a tabela em uma variavel

    let tab = document.getElementById("tabela");

    //cria o cabeçalho
    let html = `<tr>
                      <th>Nome:</th>
                      <th>Email:</th>
                      <th>Telefone:</th>
                      <th>Data:</th>
                      <th>Genero:</th>
                  </tr>`;
    //percorre o vetor de objetos e gera as linhas
    for (let objAluno of alunos) {
      html += `<tr>
                <td>${objAluno.nome}</td>
                <td>${objAluno.email}</td>
                <td>${objAluno.tell}</td>
                <td>${objAluno.data}</td>
                <td>${objAluno.genero}</td>
            </tr>`;
    }

    //coloca os dados na tabela
    tab.innerHTML = html;
  }
}

function limpar() {
  //substiui os campos por uma string vazia
  document.getElementById("nome").value = " ";
  document.getElementById("email").value = " ";
  document.getElementById("telefone").value = " ";
  document.getElementById("data").value = " ";
  document.getElementById("genero").value = " ";

  //reinicia o vetotr
  alunos = [];

  let tab = document.getElementById("tabela");

  //limpa a tabela
  tab.innerHTML = `<tr>
                      <th>Nome:</th>
                      <th>Email:</th>
                      <th>Telefone:</th>
                      <th>Data:</th>
                      <th>Genero:</th>
                  </tr>`;
}

function limparF(event) {
  event.preventDefault();
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("data").value = "";
  document.getElementById("genero").value = "";
}

function login() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let nome = document.getElementById("nome").value;
  let correto = true;

  //valida email
  if (email == " " || !email.includes("@") || !email.includes(".")) {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "Flex";
    mensagem.innerText = "Seu email está vazio, ou deve possuir um @ e um .";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "none";
  }

  //valida senha
  let regex =
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
  if (!regex.test(senha)) {
    let mensagem = document.getElementById("erro-senha");
    mensagem.style.display = "flex";
    mensagem.innerText =
      "Sua senha deve ser mais que 8 caracteres, e deve possuir pelo menos um numero e caractere especial";
    mensagem.style.color = "red";
    correto = false;

    let mensagem2 = document.getElementById("erro-senha2");
    mensagem2.innerText = "Exemplo: Banana456-";
    mensagem2.style.display = "flex";
    mensagem2.style.color = "red";
  } else {
    let mensagem = document.getElementById("erro-senha");
    mensagem.style.display = "none";

    let mensagem2 = document.getElementById("erro-senha2");
    mensagem2.style.display = "none";
  }
  //valida nome
  if (nome.trim() == "" || nome.length < 10) {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu nome está vazio ou possui menos que 10 caracteres";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "none";
  }

  if (correto == true) {
    window.location = "teacher-home.html";
  }
}

function login2() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  let nome = document.getElementById("nome").value;
  let correto = true;

  //valida email
  if (email == " " || !email.includes("@") || !email.includes(".")) {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "Flex";
    mensagem.innerText = "Seu email está vazio, ou deve possuir um @ e um .";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "none";
  }

  //valida senha
  let regex =
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;
  if (!regex.test(senha)) {
    let mensagem = document.getElementById("erro-senha");
    mensagem.style.display = "flex";
    mensagem.innerText =
      "Sua senha deve ser mais que 8 caracteres, e deve possuir pelo menos um numero e caractere especial";
    mensagem.style.color = "red";
    correto = false;

    let mensagem2 = document.getElementById("erro-senha2");
    mensagem2.innerText = "Exemplo: Banana456-";
    mensagem2.style.display = "flex";
    mensagem2.style.color = "red";
  } else {
    let mensagem = document.getElementById("erro-senha");
    mensagem.style.display = "none";

    let mensagem2 = document.getElementById("erro-senha2");
    mensagem2.style.display = "none";
  }
  //valida nome
  if (nome.trim() == "" || nome.length < 10) {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu nome está vazio ou possui menos que 10 caracteres";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "none";
  }

  if (correto == true) {
    window.location = "Area_Aluno.html";
  }
}

var vAlunos = [];

function validar2() {
  //alunos
  let vNome = document.getElementById("nome2").value;
  let vEmail = document.getElementById("email2").value;
  let vRa = document.getElementById("ra2").value;
  let check = document.getElementsByName("serie");

  //notas
  let Nra = document.getElementById("raN").value;
  let cod = document.getElementById("disciplina").value;
  let nota = document.getElementById("nota").value;
  correto = true;

  //valida o radio
  for (let i in check) {
    if (!check[i].checked) {
      let mensagem = document.getElementById("erro-radio");
      mensagem.style.display = "flex";
      mensagem.style.color = "red";
      mensagem.innerText = "Pelo menos um campo deve estar selecionado";
      correto = false;
    }
  }

  for (let i in check) {
    if (check[i].checked) {
      let mensagem = document.getElementById("erro-radio");
      mensagem.style.display = "none";
      correto = true;
    }
  }

  //valida nome
  if (vNome.trim() == "" || vNome.length < 10) {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu nome está vazio ou possui menos que 10 caracteres";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-nome");
    mensagem.style.display = "none";
  }

  //valida email
  if (vEmail.trim() == " " || !vEmail.includes("@") || !vEmail.includes(".")) {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "Flex";
    mensagem.innerText = "Seu email está vazio, ou deve possuir um @ e um .";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-email");
    mensagem.style.display = "none";
  }

  //valida ra
  if (vRa.trim() == "" || vRa.length < 11) {
    let mensagem = document.getElementById("erro-ra2");
    mensagem.style.display = "Flex";
    mensagem.innerText =
      "Seu ra está vazio, ou deve possuir onze 11 caracteres.";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-ra2");
    mensagem.style.display = "none";
  }

  //valida ra nota
  if (Nra.trim() == " " || Nra.length < 11) {
    let mensagem = document.getElementById("raN1");
    mensagem.style.display = "flex";
    mensagem.innerText =
      "Seu ra está vazio, ou deve possuir onze 11 caracteres,";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("raN1");
    mensagem.style.display = "none";
  }
  if (Nra != vRa) {
    let mensagem = document.getElementById("raN2");
    mensagem.style.display = "flex";
    mensagem.innerText = "Os RA não conhecidem";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("raN2");
    mensagem.style.display = "none";
  }

  //valida disciplina
  if (cod.trim() == "" || cod.length < 5) {
    let mensagem = document.getElementById("erro-cod");
    mensagem.style.display = "flex";
    mensagem.innerText =
      "O nome da disciplina esta vazia, ou possui menos que 5 caracteres";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-cod");
    mensagem.style.display = "none";
  }

  if (nota < 0 || nota.trim() == "" || nota > 10) {
    let mensagem = document.getElementById("erro-nt");
    mensagem.style.display = "flex";
    mensagem.innerText =
      "Sua nota esta vazia ou deve ser um valor positivo ou maior que 10";
    mensagem.style.color = "red";
    correto = false;
  } else {
    let mensagem = document.getElementById("erro-nt");
    mensagem.style.display = "none";
  }

  //correto = true
  if (correto == true) {
    //alunos
    let vNome = document.getElementById("nome2").value;
    let vEmail = document.getElementById("email2").value;
    let vRa = document.getElementById("ra2").value;

    let check;
    let series = document.getElementsByName("serie");
    for (let serie of series) {
      if (serie.checked) {
        check = serie.value;
        break;
      }
    }

    //notas
    let Nra = document.getElementById("raN").value;
    let cod = document.getElementById("disciplina").value;
    let nota = document.getElementById("nota").value;
    let btn = document.getElementById("selecionados")
    
    let sucesso = document.getElementById("sucesso");
    sucesso.style.display = "flex";
    sucesso.style.fontSize = "16px";
    sucesso.style.paddingLeft = "42.2%";
    sucesso.innerText = "As informações foram cadastradas!";
    btn.style.display = "flex";
    let erroTab = document.getElementById("erro-tabela");
    erroTab.style.display = "none";

    vAlunos.push({
      nome: vNome,
      email: vEmail,
      ra: vRa,
      ano: check,
      disciplina: cod,
      nota: nota,
    });

    Att();
    
  }
}

function Att()
{
  let tab = document.getElementById("tabela");

    let html = `<tr>
                <th>Selecionar</th>
                <th>Nome:</th>
                <th>Email:</th>
                <th>RA:</th>
                <th>Ano:</th>
                <th>Disciplina:</th>
                <th>Nota:</th>
                </tr>`;

                for (let i = 0; i < vAlunos.length; i++) {
                  let objAluno = vAlunos[i];
                  html += `<tr>
                            <td><input type="checkbox" class="aluno-checkbox" data-index="${i}"></td>
                            <td>${objAluno.nome}</td>
                            <td>${objAluno.email}</td>
                            <td>${objAluno.ra}</td>
                            <td>${objAluno.ano}</td>
                            <td>${objAluno.disciplina}</td>
                            <td>${objAluno.nota}</td>
                          </tr>`;
                }
    tab.innerHTML = html;
}

function limparF2(event) {
  event.preventDefault();
  //alunos
  document.getElementById("nome2").value = "";
  document.getElementById("email2").value = "";
  document.getElementById("ra2").value = "";
  document.getElementsByName("serie").value = "";

  //notas
  document.getElementById("raN").value = "";
  document.getElementById("disciplina").value = "";
  document.getElementById("nota").value = "";
}

function removerSel() {
  let checkboxes = document.querySelectorAll('.aluno-checkbox');
  let indicesParaRemover = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      indicesParaRemover.push(index);
    }
  });

  // Remove os alunos começando pelos índices mais altos
  indicesParaRemover.sort((a, b) => b - a);
  for (let index of indicesParaRemover) {
    vAlunos.splice(index, 1);
  }

  Att();
}
