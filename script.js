// Aguarda o documento HTML ser totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Saudação dinâmica baseada no horário
    const horaAtual = new Date().getHours();
    let saudacao = "";

    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde!";
    } else {
        saudacao = "Boa noite!";
    }

    console.log(`${saudacao} Bem-vindo aos bastidores do site do Canal do João!`);

    // 2. Interação com o botão de inscrever
    const btnInscrever = document.getElementById("btn-inscrever");
    
    if(btnInscrever) {
        btnInscrever.addEventListener("click", () => {
            // Este alerta aparece logo antes de abrir a aba do YouTube
            alert("Obrigado por apoiar o Canal do João! Você será redirecionado para o YouTube.");
        });
    }
});