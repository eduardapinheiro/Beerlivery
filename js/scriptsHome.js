var bebidasPrincipaisProdutos = [ {nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/absolute_vodka.png"},
                                 {nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/ciroc.png"},
                                 {nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/whisky.png"}];

var bebidasCervejas = [ {nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/absolute_vodka.png"},
                        {nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/ciroc.png"},
                        {nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/whisky.png"}];

var bebidasVinhos = [ {nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/absolute_vodka.png"},
                        {nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/ciroc.png"},
                        {nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/whisky.png"}];

var bebidasWhiskys = [ {nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/absolute_vodka.png"},
                        {nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/ciroc.png"},
                        {nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/whisky.png"}];

var bebidasVodkas = [ {nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/absolute_vodka.png"},
                    {nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/ciroc.png"},
                    {nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/whisky.png"}];

var list = [document.getElementById('principaisProdutos'),
            document.getElementById('cervejas'),
            document.getElementById('vinhos'),
            document.getElementById('whiskys'),
            document.getElementById('vodkas')];

var bebidas;
var i = 0;
for (i = 0; i < list.length; i = i + 1) {

    switch (i) {
    case 0:
        bebidas = bebidasPrincipaisProdutos;
        break;
    case 1:
        bebidas = bebidasCervejas;
        break;
    case 2:
        bebidas = bebidasVinhos;
        break;
    case 3:
        bebidas = bebidasWhiskys;
        break;
    case 4:
        bebidas = bebidasVodkas;
        break;
    }
    
    var x = 0;
    for (x = 0; x < bebidas.length; x = x + 1) {

        var nomeProduto = document.createElement('a');
        nomeProduto.innerHTML = bebidas[x].nome;
        nomeProduto.href = "#";

        var namein = document.createElement('h4');
        namein.id = "nameInThumb";
        namein.appendChild(nomeProduto);

        var preco = document.createElement('h4');
        preco.innerHTML = bebidas[x].preco;

        var cap = document.createElement('div');
        cap.className = "caption";
        cap.appendChild(namein);
        cap.appendChild(preco);

        var imagem = document.createElement('img');
        imagem.src = bebidas[x].imagem;
        imagem.alt = "";

        var thumb = document.createElement('div');
        thumb.className = "thumbnail";
        thumb.appendChild(imagem);
        thumb.appendChild(cap);

        var celulaProduto = document.createElement('div');
        celulaProduto.className = "col-sm-4 col-lg-4 col-md-4";
        celulaProduto.appendChild(thumb);
        
        if (i === list.lastIndexOf) {
            list[i].appendChild(celulaProduto);
        } else {
            list[0].insertBefore(celulaProduto, list[i + 1]);
        }
    
    }
    
}

//<div class="col-sm-4 col-lg-4 col-md-4">
//    <div class="thumbnail">
//        <img src="img/bebidas/absolute_vodka.png" alt="">
//        <div class="caption">
//            <h4 id="nameInThumb"><a href="#">Absolute Vodka</a></h4>
//            <h4>R$ 66,99</h4>
//        </div>
//    </div>
//</div> 


