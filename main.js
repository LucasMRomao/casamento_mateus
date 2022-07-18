$(function(){
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

    });
})