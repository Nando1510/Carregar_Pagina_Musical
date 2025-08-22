//Referencia o Botão Enviar ou Entrar,  (da página de index.html)
const botao_Enviar = document.getElementById('entrar');

botao_Enviar.addEventListener('click', carregar_Modal);

async function carregar_Modal(event){
    event.preventDefault();

    const modal = document.getElementById('modal-carregando');
    const texto = document.getElementById('carregando-texto');
    const barra = document.getElementById('progress-bar');
    const som = document.getElementById('som');

    let porcentagens = [25, 50, 75, 100];
    let etapa = 0;

    const totalTempo = 17000;
    const tempoPorEtapa =  totalTempo / porcentagens.length;


    modal.style.display = "flex";
    som.currentTime = 0;
    som.play();


    const intervalo = setInterval(() => {
        let porcentagem = porcentagens[etapa];
        texto.textContent = `Carregando... ${porcentagem}%`;
        barra.style.width = `${porcentagem}%`;
        etapa++;

        if (etapa >= porcentagens.length) {
            clearInterval(intervalo);
            setTimeout(() => { 
                window.location.href = "BomDia.jpg";
            }, 500);
        }
    }, tempoPorEtapa);



    
}
