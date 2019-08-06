function minhafuncao() {
    let hora = new Date().getHours() 
    console.log(hora)
    let mensagem
    if (hora < 18) {
      mensagem = "Bom dia";
      console.log(mensagem)
    } else {
      mensagem = "Boa tarde";
      console.log(mensagem)
    }
    console.log(mensagem)
  }
