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
console.log(itens);
for (var item in itens) {
  console.log(itens);
  if (item == id) {
    console.log("atualizado");
      firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
      qtd: qtd
    
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
    $("#addCarrinho").text('(' + (itens.length - 1) + ') Carrinho');
  }else if(tela == "carrinho"){
       console.log(itens);
    firebase.database().ref('/bebidas/').once('value').then(function(snapshot2) {
            
        var itens2 = snapshot2.val();
        console.log(itens2);
        for(var count=1 ; count < itens.length ; count++){

            for(var count2=1 ; count2 < itens2.length ; count2++){
                
                if(itens2[count2].id == itens[count].id){

                    $("#preencherCarrinho").append('<tr class="productitm"><td id="itemCarrinho"><img src="img/bebidas/' + itens[count].id + '.png" class="thumb"></td><td id="qtdCarrinho"><input type="number" value="' + itens[count].qtd + '" min="0" max="99" class="qtyinput"></td><td id="produtoCarrinho">' + itens2[count2].nome + '</td><td id="precoCarrinho">' + itens2[count2].preco + '</td><td><span class="remove"><img src="img/trash.png" alt="X"></span></td></tr>');

                }
            }
        }
        
        return itens;
    });
  }
  return itens;
  });
}

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
