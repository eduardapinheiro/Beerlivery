
$.getJSON("../json/bebidas.json",function(json){
    
    var bebidasPrincipaisProdutos = [];
    var bebidasCervejas = [];
    var bebidasVinhos = [];
    var bebidasWhiskys = [];
    var bebidasVodkas = [];

    var length = Object.keys(json["bebidas"]).length;
    
    for(var count = 1; count <= 6 ; count++){
        
        var bebida = json["bebidas"][""+count];
        
        bebidasPrincipaisProdutos.push({id: bebida.id, nome: bebida.nome, preco: bebida.preco, imagem: "img/bebidas/" + bebida.id + ".png"});
    }

    bebidasCervejas = [ {id: 4, nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/1.png"},
                            {id: 5, nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/2.png"},
                            {id: 6, nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/3.png"}];

    bebidasVinhos = [ {id: 7, nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/1.png"},
                            {id: 8, nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/2.png"},
                            {id: 9, nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/3.png"}];

    bebidasWhiskys = [ {id: 10, nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/1.png"},
                            {id: 11, nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/2.png"},
                            {id: 12, nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/3.png"}];

    bebidasVodkas = [ {id: 13, nome: "vodka", preco: "R$66,99", imagem: "img/bebidas/1.png"},
                        {id: 14, nome: "whisky", preco: "R$66,99", imagem: "img/bebidas/2.png"},
                        {id: 15, nome: "cerveja", preco: "R$66,99", imagem: "img/bebidas/3.png"}];

    var list = [document.getElementById('principaisProdutos'),
            document.getElementById('cervejas'),
            document.getElementById('vinhos'),
            document.getElementById('whiskys'),
            document.getElementById('vodkas')];

    var bebidas = [];
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

            var preco = document.createElement('button');
            preco.innerHTML = bebidas[x].preco;
            preco.setAttribute("onclick","addInCar(" + bebidas[x].id + ",1)");

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
});

//<div class="col-sm-4 col-lg-4 col-md-4">
//    <div class="thumbnail">
//        <img src="img/bebidas/absolute_vodka.png" alt="">
//        <div class="caption">
//            <h4 id="nameInThumb"><a href="#">Absolute Vodka</a></h4>
//            <h4>R$ 66,99</h4>
//        </div>
//    </div>
//</div> 


