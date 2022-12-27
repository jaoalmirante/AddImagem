function cadastrar(){
    //capturar dados o input
    let titulo = document.getElementById('titulo').value
    let link = document.getElementById('link').value
    let descricao = document.getElementById('descricao').value


    //criar elementos para serem adicionados
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    let p = document.createElement('p')


    //capturar dados do tag com id container
    let container = document.getElementById('container')


    //adicionando id's para os elementos criados


    div.id='foto'
    h1.innerHTML = titulo
    h1.id='agaUm'
    img.src = link
    img.id='imagemLink'
    p.innerHTML = descricao
    p.id='pe'

    //adiciona os elementos no html
    div.append(h1)
    div.append(img)
    div.append(p)
    container.append(div)

}