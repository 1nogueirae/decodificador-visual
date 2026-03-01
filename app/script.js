// exemplo de log: "START;7894561230;-5.83;-35.20;1;END"

const translateButton = document.querySelector('#translateButton');
const clearButton = document.querySelector('#clearButton');
const logTextArea = document.querySelector('#logTextArea');

// Div onde a tabela de resultados será exibida.
const resultTable = document.querySelector('#resultTable');

let userLogInput = '';

function mountTable(id, lat, lng, ignState) {
    resultTable.innerHTML = `
                            <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Latitude</th>
                                    <th scope="col">Longitude</th>
                                    <th scope="col">Ignição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">${id}</th>
                                    <td>${lat}</td>
                                    <td>${lng}</td>
                                    <td>${ignState}</td>
                                </tr>

                            </tbody>
                        </table>
                        <button type="button" class="btn btn-outline-secondary" id="clearButton">Limpar Tabela</button>
    `
}

function validateLogInput(logInput) {
    if (logInput !== '' && logInput.startsWith('START;') && logInput.endsWith(';END')) {
        return true;
    } return false;
}

function parseLogInput(logInput) {
    const logParts = logInput.split(';');
    return logParts;
}

logTextArea.addEventListener('input', () => {
    if (logTextArea.value === '') {
        translateButton.classList.remove('btn-dark');
        translateButton.classList.add('btn-secondary');
        translateButton.disabled = true;
    } else {
        translateButton.classList.remove('btn-secondary');
        translateButton.classList.add('btn-dark');
        translateButton.disabled = false;
    }

});

translateButton.addEventListener('click', () => {
    let id = '';
    let lat = '';
    let lng = '';
    let ignState = '';

    if (logTextArea.value === '') {
        resultTable.innerHTML = '<p>O campo de texto está vazio. Por favor, insira um log para traduzir.</p>';
    } else {
        userLogInput = logTextArea.value;
        if (!validateLogInput(userLogInput)) {
            resultTable.innerHTML = '<p>O log inserido não é válido. Por favor, insira um log no formato correto.</p>';
            logTextArea.value = '';
            return;
        }

        const logParts = parseLogInput(userLogInput);
        id = logParts[1];
        lat = logParts[2];
        lng = logParts[3];
        ignState = logParts[4];
        mountTable(id, lat, lng, ignState);
    }
});

resultTable.addEventListener('click', (event) => {
    if (event.target && event.target.id === 'clearButton') {
        resultTable.innerHTML = '<p>Sua tabela será exibida aqui.</p>';
    }
});