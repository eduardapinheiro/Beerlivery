
$.getJSON("../json/bebidas.json",function(json){
    
    var produtos = [];

    var length = Object.keys(json["bebidas"]).length;
    
    for(var count = 1; count <= 6 ; count++){
        
        var bebida = json["bebidas"][""+count];
        
        produtos.push({id: bebida.id, nome: bebida.nome, preco: bebida.preco, imagem: "img/bebidas/" + bebida.id + ".png"});
    }
    
    var bebidas = document.getElementById('produtos');
    
    for (var x = 0; x < produtos.length; x = x + 1) {

        var nomeProduto = document.createElement('a');
        nomeProduto.innerHTML = produtos[x].nome;
        nomeProduto.href = "#";

        var namein = document.createElement('h4');
        namein.id = "nameInThumb";
        namein.appendChild(nomeProduto);

        var preco = document.createElement('button');
        preco.innerHTML = produtos[x].preco;
        preco.setAttribute("onclick","addInCar(" + produtos[x].id + ",1)");

        var cap = document.createElement('div');
        cap.className = "caption";
        cap.appendChild(namein);
        cap.appendChild(preco);

        var imagem = document.createElement('img');
        imagem.src = produtos[x].imagem;
        imagem.alt = "";

        var thumb = document.createElement('div');
        thumb.className = "thumbnail";
        thumb.appendChild(imagem);
        thumb.appendChild(cap);

        var celulaProduto = document.createElement('div');
        celulaProduto.className = "col-sm-4 col-lg-4 col-md-4";
        celulaProduto.appendChild(thumb);
        
        bebidas.appendChild(celulaProduto);
        
//        if (i === list.lastIndexOf) {
//            list[i].appendChild(celulaProduto);
//        } else {
//            list[0].insertBefore(celulaProduto, list[i + 1]);
//        }
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


