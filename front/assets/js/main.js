const url = 'http://localhost:3001';

const createbutton = (label, type) => {
    return $('<button>').addClass(`btn btn-${type}`).html(label)
}

const renderRows = cadastros => {
    const rows = cadastros.map(cadastro => {
        const removeButton = createbutton('Excluir', 'danger');
        removeButton.click(() => removeCadastro(cadastro));

        const novaLinha = $('<tr>');
        return $('<tr>')
            .append($('<td>').text(cadastro.nome))
            .append($('<td>').text(cadastro.email))
            .append($('<td>').text(cadastro.telefone))
            .append($('<td>').text(cadastro.valor))
            .append($('<td>').text(cadastro.projeto))
            .append($('<td>').append(removeButton))
    });
    $('#clientsRows').append(rows);
}
const removeCadastro = cadastro => {
    $.ajax({
        method: 'DELETE',
        url: `${url}/${id}`,
        success: getCadastros
    })
}
const getCadastros = () => {
    $.ajax({
        url: `${url}/`,
        success: cadastros => {
            console.log(cadastros);
            renderRows(cadastros);
        }
    });
};



const saveCadastro = () => {
    const id = document.getElementById('id').value;
    const nome = document.getElementById('name').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const valor = document.getElementById('valordoacao').value;
    const projeto = document.getElementById('test').value;
    $.ajax({
        method: id ? 'PUT' : 'POST',
        url: `${url}/${id}`,
        data: id ? { id, nome } : { nome, telefone, email, valor, projeto },
        success: function (response) {
            getCadastros,
            window.alert('Agradecemos sua solicitação, em breve entraremos em contato!');
        }
    })
}
$(() => {
    getCadastros();
    $(`[save]`).click(saveCadastro)
});

/* function obter() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://localhost:3001/cadastro',
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
} */

// ===================== AUTENTICAÇAO ============================
