// Lista de pessoas com nomes correspondentes
const pessoas = [
  { nome: "Lucas", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "João", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Carlos", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Ana", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Mariana", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Juliana", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Ricardo", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Camila", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Gustavo", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Fernanda", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Rafael", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Larissa", genero: "feminino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" },
  { nome: "Eduardo", genero: "masculino", foto: "https://i.ibb.co/bgk2xKk/download-removebg-preview.png" }
];

// Lista de mensagens
const mensagens = [
  'Acabei de comprar a minha rifa! Boa sorte para todos!',
  'Estou super empolgado para ganhar! Espero que eu tenha sorte!',
  'Comprei minha rifa! Já estou na torcida!',
  'Acabei de participar da rifa, que venha o prêmio!',
  'Estou participando! Que a sorte esteja ao meu favor!',
  'Espero ganhar essa rifa, seria incrível! Boa sorte a todos!',
  'Já garanti minha chance! Que venha a sorte! Boa sorte a todos!',
  'Comprei a minha rifa, e estou na expectativa de ganhar! Vamos com tudo!',
  'Tô na rifa! Ansioso para saber quem vai ganhar!',
  'Participando e torcendo para ser o grande vencedor!',
  'Já fiz a minha aposta! Vamos ganhar essa!',
  'Rumo ao prêmio! Que a sorte me acompanhe!'
];

// Função para gerar um comentário aleatório com nome e sem repetição
let pessoasUsadas = [];

function gerarComentario() {
  // Se todas as pessoas já foram usadas, resetamos a lista
  if (pessoasUsadas.length === pessoas.length) {
    pessoasUsadas = [];
  }

  // Seleciona uma pessoa aleatória que ainda não foi usada
  let pessoaAleatoria;
  do {
    pessoaAleatoria = pessoas[Math.floor(Math.random() * pessoas.length)];
  } while (pessoasUsadas.includes(pessoaAleatoria));

  // Marca a pessoa como usada
  pessoasUsadas.push(pessoaAleatoria);

  // Seleciona uma mensagem aleatória
  const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

  return { pessoa: pessoaAleatoria, mensagem: mensagemAleatoria };
}

// Função para exibir o comentário
function exibirComentario() {
  const comentariosContainer = document.getElementById("mensagens");
  const { pessoa, mensagem } = gerarComentario();

  const novoComentario = document.createElement("div");
  novoComentario.classList.add("comentario");

  novoComentario.innerHTML = `
    <div class="foto-nome">
      <img src="${pessoa.foto}" alt="${pessoa.nome}" class="foto">
      <span class="nome">${pessoa.nome}</span>
    </div>
    <div class="balon">
      ${mensagem}
    </div>
  `;

  comentariosContainer.appendChild(novoComentario);

  // Remoção do comentário após 6 segundos
  setTimeout(() => {
    novoComentario.style.opacity = "0";
    setTimeout(() => comentariosContainer.removeChild(novoComentario), 1000);
  }, 6000);
}

// Exibe um novo comentário a cada 5 segundos
window.onload = function () {
  setInterval(exibirComentario, 5000); // Exibe novo comentário a cada 5 segundos
};

// Função para lidar com o envio do formulário
function handleSubmit(event) {
  event.preventDefault(); // Impede o envio do formulário e a rolagem para o topo

  // Esconde o formulário e exibe a mensagem de bloqueio
  document.getElementById("form-section").style.display = "none"; // Esconde o formulário
  document.getElementById("locked-section").style.display = "block"; // Exibe a mensagem de bloqueio
}