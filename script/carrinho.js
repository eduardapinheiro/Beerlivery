function addInCar(id, qtd){
    firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
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
