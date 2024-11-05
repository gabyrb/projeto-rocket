// a função togglemode faz a seguinte verificação 
// if(html.classList.contains('ligth')){
// html.classList.remove ('ligth')
// } else{
// html.classList.add ('ligth')
// }

function toggleMode () {
    const html = document.documentElement //documentElemente é o nome dado ao html
    html.classList.toggle ('ligth')

    // pegar a tag img
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if (html.classList.contains('ligth')){
        img.setAttribute ('src', './assets/assets/avatar-light.png')
        
    //se tiver ligth mode, adicionar a imagem ligth
    } else { 
    //se tiver sem ligth mode, manter a imagem nomal
        img.setAttribute ('src', './assets/assets/avatar.png')
    }
}