import type { GT06Packet } from "../packets/GT06Packet.js";

export class GT06TableRenderer {
    static renderTable(packet: GT06Packet): void {
        const resultTable = document.getElementById('resultTable') as HTMLElement;
        resultTable.innerHTML = `
                            <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Data Completa</th>
                                    <th scope="col">Latitude</th>
                                    <th scope="col">Longitude</th>
                                    <th scope="col">Quantidade de Satélites</th>
                                    <th scope="col">Velocidade</th>
                                    <th scope="col">MCC</th>
                                    <th scope="col">MNC</th>
                                    <th scope="col">LAC</th>
                                    <th scope="col">Cell ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${packet.dateTime}</td>
                                    <td>${packet.lat.toFixed(6)}</td>
                                    <td>${packet.lng.toFixed(6)}</td>
                                    <td>${packet.satelliteCount}</td>
                                    <td>${packet.speed}</td>
                                    <td>${packet.MCC}</td>
                                    <td>${packet.MNC}</td>
                                    <td>${packet.LAC}</td>
                                    <td>${packet.CellID}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-outline-secondary" id="btn_clearButton">Limpar Tabela</button>
    `
    }
}
