// exemplo de log: "7894561230;-5.83;-35.20;1"

const translateButton = document.querySelector('#translateButton');
const logTextArea = document.querySelector('#logTextArea');

let userLogInput = '';

function mountTable(id, lat, lng, ignState) {
    const resultTable = document.querySelector('#resultTable');

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
    `
}

translateButton.addEventListener('click', (event) => {
    let id = '';
    let lat = '';
    let lng = '';
    let ignState = '';

    if (logTextArea.value === '') {
        console.error('O campo de texto está vazio. Por favor, insira um log para traduzir.');
    } else {
        userLogInput = logTextArea.value;
        for (i = 0; i < userLogInput.length; i++) {
            if (i < 10) {
                id += userLogInput[i];
            } else if (i >= 11 && i < 16) {
                lat += userLogInput[i];
            } else if (i >= 18 && i < 23) {
                lng += userLogInput[i];
            } else if (i == 24) {
                ignState += userLogInput[i];
            }
        }
    }

    mountTable(id, lat, lng, ignState);
});