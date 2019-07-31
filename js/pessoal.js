function carregar(){
    let saudacao = window.document.getElementById('saudacao')
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
        if (hora >= 0 && hora <= 11 && minuto <= 59 ){
            saudacao.innerHTML = 'Bom dia! Seja bem vindo(a) ao meu site.'
        } else if (hora >= 12 && hora <= 17 && minuto <= 59){
            saudacao.innerHTML = 'Boa tarde! Seja bem vindo(a) ao meu site.'
        } else {
            saudacao.innerHTML = 'Boa noite! Seja bem vindo(a) ao meu site.'
        }
}
