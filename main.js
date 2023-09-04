const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];
const spanNome = '<span class= "nome completo">Nome</span>'
const spanTelefone = '<span class= "telefone para contato">Telefone</span>'

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();

});

function adicionarLinha() {
    const inputNomeCompleto = document.getElementById('nome-completo');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (nomes.includes(inputNomeCompleto.value)) {
        alert(`O nome : ${inputNomeCompleto.value} já foi inserido`);
    } else {
        nomes.push(inputNomeCompleto.value);
        telefones.push(parseFloat(inputTelefoneContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeCompleto.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeCompleto.value = '';
    inputTelefoneContato.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
