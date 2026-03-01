import { Packet } from "../packets/TestePacket.js";

export class TableRenderer {
    static renderTable(packet: Packet): void {
        const resultTable = document.getElementById('resultTable') as HTMLElement;
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
                                    <th scope="row">${packet.id}</th>
                                    <td>${packet.lat}</td>
                                    <td>${packet.lng}</td>
                                    <td>${packet.ignState}</td>
                                </tr>

                            </tbody>
                        </table>
                        <button type="button" class="btn btn-outline-secondary" id="btn_clearButton">Limpar Tabela</button>
    `
    }
}
