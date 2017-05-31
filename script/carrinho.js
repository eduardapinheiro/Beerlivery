firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    userID = uid;
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

function addInCar(id, qtd){
  firebase.database().ref('/carrinho/' + userID).once('value').then(function(snapshot) {
  var itens = snapshot.val();
    firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
      qtd: qtd
    });
});

}

function updateQtd (id, qtd){
firebase.database().ref('/carrinho/' + userID + '/itens/').once('value').then(function(snapshot) {
  var itens = snapshot.val();

for (var item in itens) {
  console.log(itens);
  if (item == id) {
    console.log("atualizado");
      firebase.database().ref('carrinho/' + userID + '/itens/'+ id).update({
      qtd: qtd
    
  });
}

//   for (var i = 0 ; i<itens.length ; i++){
//     console.log("aqui");
//     var item = itens[i];
    
//     if (item.id == id) {
//       console.log("atualizado");
//       firebase.database().ref('carrinho/' + userID + '/itens/'+ i).update({
//       qtd: qtd
//     });
//   }
 }
});
}