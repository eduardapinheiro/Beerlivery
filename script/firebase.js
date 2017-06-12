  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCoQRDRLFlzoT22RqSmxTXf0-RqdUm_2Aw",
    authDomain: "beerlivery-c4abe.firebaseapp.com",
    databaseURL: "https://beerlivery-c4abe.firebaseio.com",
    projectId: "beerlivery-c4abe",
    storageBucket: "beerlivery-c4abe.appspot.com",
    messagingSenderId: "572063144744"
  };
  firebase.initializeApp(config);
  
var userID;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    userID = uid;
    console.log(userID);
    getCatalogo();
    // ...
  } else {
    // User is signed out.
    // ...
  }
  // ...
});

function login (){
    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
    });
}

login();

function getCatalogo () {
    firebase.database().ref('/bebidas/').once('value').then(function(snapshot) {
        var itens = snapshot.val();

        var json = itens;

        //      console.log(json);

        var produtos = [];

        var length = json.length;
        //console.log(length);
        for(var count = 1; count <= length - 1 ; count++){

            var bebida = json[count];

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
            preco.innerHTML = currencyFormatted(produtos[x].preco,"R$");
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

        return itens;
    });
}

// // Points to the root reference
var storageRef = firebase.storage().ref();
// var storage = firebase.storage();

// // Points to 'images'
// var imagesRef = storageRef.child('images');

// // Points to 'images/space.jpg'
// // Note that you can use variables to create child values
// var fileName = 'corona.jpg';
// var coronaRef = imagesRef.child(fileName);

// // File path is 'images/space.jpg'
// var path = coronaRef.fullPath

// // File name is 'space.jpg'
// var name = coronaRef.name

// // Points to 'images'
// var imagesRef = coronaRef.parent;
