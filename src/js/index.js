/*
OBJETIVO 1 - quando passar o mouse em cima do personagem temos que:

 - colocar a classe selecionada do personagem que passamos o mouse em cima para adicionar
 a animação nele
 - retirar a classe selecionada no personagem que está selecionado
  
 OBJETIVO 2 - quando passar o mouse em cima do personagem, trocar a imagem e nome do 
 personagem grande

  - alterar a imagem do jogador 1
  - alterar o nome do jogador 1
*/

/*
const homemDeFerro = document.getElementById('homem-de-ferro')

homemDeFerro.addEventListener('mouseenter', () => {
    homemDeFerro.classList.add('selecionado');
})

hulk.addEventListener('mouseenter', () => {
    hulk.classList.add('selecionado');
}

A FORMA ACIMA É A MANEIRA SIMPLES DE SELECIONAR OS PERSONAGENS, MAS ABAIXO, IREMOS 
USAR UMA LISTA PARA CHAMAR TODOS OS PERSONAGENS

*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'ultron') return;


        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')


/*
OBJETIVO 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem
 e nome do personagem grande

  - alterar a imagem do jogador 1
  - alterar o nome do jogador 1
*/

        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;
        
     });
});




