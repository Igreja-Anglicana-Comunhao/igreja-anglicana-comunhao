const url = 'http://localhost:3001';
function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'http://localhost:3001/cadastro',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function () {
        return retorno;
    });

    consulta.done(function (data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(obj) {



    $.ajax({

        url: 'http://localhost:3001/cadastro',
        type: 'POST',
        data: JSON.stringify(obj),
        contentType: 'application/json',
        success: function(res){
            console.log(res);
        }
    });
}

function validarUsuario(objLoginSenha) {


    var retorno = false;

    console.log(objLoginSenha);

    var validacao = $.ajax({
        url: 'http://localhost:3001/users',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function () {
        return retorno;
    });

    validacao.done(function (data) {
        retorno = data;
    });

    return retorno;
}