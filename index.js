function pesquisar(){
  let pesquisa = document.getElementById('pesquisa').value
  let url = ('https://www.google.com/search?q=' + pesquisa)
  if (pesquisa == ''){
    return
  }
  window.location.href = url
}
let pesquisa = document.getElementById('pesquisa')
pesquisa.addEventListener('keydown', function(busca){
 if(busca.key === 'Enter'){
  pesquisar()
 }

})
document.getElementById('pesquisa').focus()
