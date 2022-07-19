$(function(){

    const firebaseConfig = {
        apiKey: "AIzaSyCfEVMcjvEc5aP48EGZKNGvApYBmpPxluw",
        authDomain: "casamento-mateus.firebaseapp.com",
        projectId: "casamento-mateus",
        storageBucket: "casamento-mateus.appspot.com",
        messagingSenderId: "514547738129",
        appId: "1:514547738129:web:fc9ac8cfe7a68ad21433b0",
        measurementId: "G-35M59W0GLJ"
    };

    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    const db = firebase.firestore();

    $("#bPadrinho").click(function(){
        $("#dPrincipal").load("padrinho.html");
    });

    $("#bConvidado").click(function(){
        $("#dPrincipal").load("convidado.html");
    });

    $("#bCancelar").click(function(){
        $("#iSenha").val('');
    });

    $("#bEntrar").click(function(){
        let senha = $("#iSenha").val();

        db.collection('credenciais_noivos').onSnapshot((data) =>{
            data.docs.map((val) => {
                let dbPassword = val.data().senha;

                if(senha == dbPassword){
                    $("#dPrincipal").load("noivos.html");
                }else{
                    alert("Senha inválida!");
                }
            });
        });
    });
})