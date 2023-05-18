function cadastrar() {
    //capturar dados o input
    let titulo = document.getElementById('titulo').value;
    let link = document.getElementById('link').value;
    let descricao = document.getElementById('descricao').value;

    //criar elementos para serem adicionados
    let div = document.createElement('div');
    let h1 = document.createElement('h1');
    let img = document.createElement('img');
    let p = document.createElement('p');

    //capturar dados do tag com id container
    let container = document.getElementById('container');

    //adicionando classes para os elementos criados
    div.classList.add('foto');
    h1.classList.add('agaUm');
    img.classList.add('imagemLink');
    p.classList.add('pe');

    h1.innerHTML = titulo;
    img.src = link;
    p.innerHTML = descricao;

    //adiciona os elementos no html
    div.append(h1);
    div.append(img);
    div.append(p);
    container.append(div);
}
