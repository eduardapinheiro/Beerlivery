function addInCar(id, qtd){
    firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
      id:id,
      qtd: qtd
    });
    
    getCarrinho("home");
}

function updateQtd (id, qtd){
    console.log(userID);
    firebase.database().ref('/carrinho/' + userID + '/itens/').once('value').then(function(snapshot) {
        var itens = snapshot.val();
        
        for (var item in itens) {
            
            if (item == id) {
                
                firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
                    qtd: qtd
                });
                
                firebase.database().ref('/carrinho/' + userID + '/itens/').once('value').then(function(snapshot) {
                    var itens = snapshot.val();

                        firebase.database().ref('/bebidas/').once('value').then(function(snapshot2) {
                            var itens2 = snapshot2.val();
                            var precoTotal = 0;

                            var chavesCarrinho = Object.keys(itens);
                            var chavesBebidas = Object.keys(itens2);

                            for(var count=0 ; count < chavesCarrinho.length ; count++){

                                for(var count2=0 ; count2 < chavesBebidas.length ; count2++){

                                    if(chavesCarrinho[count] == chavesBebidas[count2]){

                                        var idProduto = chavesCarrinho[count];

                                        precoTotal += parseFloat(itens2[idProduto].preco) * parseInt(itens[idProduto].qtd);
                                    }
                                }
                            }

                            $(".thick").text("R$"+precoTotal.toFixed(2));

                            return itens;
                        });
                    return itens;
                });
            }
        }
    });
}

function removeFromCarrinho (id) {
    var event = firebase.database().ref('carrinho/' + userID).orderByChild('id').equalTo(id).on('child_added',function(snapshot){
        console.log("opa");
    })
    // var query = event.orderByChild('id').equalTo(id);
    // query.on('child_added', function(snapshot) {
    //   console.log(snapshot.val());
    //     snapshot.ref.remove();
    // })
}

function imgLoader (id) {
    console.log("aq");
    storageRef.child('images/' + id + '.png').getDownloadURL().then(function(url) {
        var ref = document.getElementById(id);

        ref.src = url;
    // Get the download URL for 'images/stars.jpg'
    // This can be inserted into an <img> tag
    // This can also be downloaded directly
    }).catch(function(error) {
    // Handle any errors
    });
}

function getCarrinho (tela) {
    
    firebase.database().ref('/carrinho/' + userID + '/itens/').once('value').then(function(snapshot) {
        $("#carregando").hide();

        var itens = snapshot.val();
        if(tela == "home"){
            $("#addCarrinho").text('(' + Object.keys(itens).length + ') Carrinho');
        }else if(tela == "carrinho"){
            
            if(itens != null){
                
               firebase.database().ref('/bebidas/').once('value').then(function(snapshot2) {
                    var itens2 = snapshot2.val();
                    var precoTotal = 0;

                    var chavesCarrinho = Object.keys(itens);
                    var chavesBebidas = Object.keys(itens2);

                    for(var count=0 ; count < chavesCarrinho.length ; count++){

                        for(var count2=0 ; count2 < chavesBebidas.length ; count2++){

                            if(chavesCarrinho[count] == chavesBebidas[count2]){

                                temProdutos = 1;

                                var idProduto = chavesCarrinho[count];

                                precoTotal += parseFloat(itens2[idProduto].preco) * parseInt(itens[idProduto].qtd);

                                $("#preencherCarrinho").append('<tr class="productitm"><td id="itemCarrinho"><img src="img/bebidas/' + idProduto + '.png" class="thumb"></td><td id="qtdCarrinho"><input id="precoItem' + idProduto + '" type="number" value="' + itens[idProduto].qtd + '" min="0" max="99" class="qtyinput"></td><td id="produtoCarrinho">' + itens2[idProduto].nome + '</td><td id="precoCarrinho">' + currencyFormatted(itens2[idProduto].preco,"R$") + '</td><td><span class="remove"><img src="img/trash.png" alt="X"></span></td><td><button onclick="atualizarItem('+idProduto+')">Atualizar</button></td></tr>');
                            }
                        }
                    }

                    $(".thick").text(currencyFormatted((precoTotal+3),"R$")); //Soma com 3 por causa do frete

                    return itens;
                }); 
            }else{
                $("#preencherCarrinho").append('<div id="semProdutos"><h1>Não há produtos cadastrados no carrinho</h1></div>');
            }
        }
        return itens;
    });
}

function atualizarItem(id){
    
    var identificador = "#precoItem" + id;
    
    var segundo = $(identificador).val(); 
    
    console.log(id + ' ' + segundo);
    
    updateQtd(id,segundo);
}

function currencyFormatted(value, str_cifrao) {
    return str_cifrao + ' ' + value.formatMoney(2, ',', '.');
}

Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        getCarrinho("carrinho");
    //    removeFromCarrinho(1);
    //      updateQtd(1,0);
    //      updateQtd(2,0);
    //      updateQtd(3,0);
    //      updateQtd(4,0);
    //      updateQtd(5,0);
    //      updateQtd(6,0);
    // ...
    } else {
    // User is signed out.
    // ...
    }
    // ...
});

// updateQtd(1, 100);
