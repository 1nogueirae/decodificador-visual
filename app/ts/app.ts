import type { IPacketParser } from "./IPacketParser.js";
import type { BasePacket } from "./packets/BasePacket.js";
import { TestePacket } from "./packets/TestePacket.js";
import { GT06Packet } from "./packets/GT06Packet.js";

import { TesteParser } from "./parsers/TesteParser.js";
import { TesteTableRenderer } from "./tablesRenderers/TesteTableRenderer.js";

import { GT06Parser } from "./parsers/GT06Parser.js";
import { GT06TableRenderer } from "./tablesRenderers/GT06TableRenderer.js";

const btn_translateButton = document.querySelector('#btn_translateButton') as HTMLButtonElement;

const protocolSelect = document.querySelector('#protocolSelect') as HTMLSelectElement;

const logTextArea = document.querySelector('#logTextArea') as HTMLTextAreaElement;

const resultTable = document.querySelector('#resultTable') as HTMLDivElement;

const validProtocols = ['1', '2'];

function updateButtonState(): void {
    if (logTextArea.value === "" || !validProtocols.includes(protocolSelect.value)) {
        btn_translateButton.disabled = true;
        btn_translateButton.classList.add('btn-secondary');
        btn_translateButton.classList.remove('btn-dark');
    } else {
        btn_translateButton.disabled = false;
        btn_translateButton.classList.remove('btn-secondary');
        btn_translateButton.classList.add('btn-dark');
    }
}

logTextArea.addEventListener('input', updateButtonState);
protocolSelect.addEventListener('change', updateButtonState);

btn_translateButton?.addEventListener('click', () => {
    console.info("Translate button clicked");
    const input = logTextArea.value.trim();
    let parser: IPacketParser<BasePacket> | null = null;
    switch (protocolSelect.value) {
        case '1':
            console.info('Teste parser selected');
            parser = new TesteParser();
            break;
        case '2':
            console.info('GT-06 parser selected');
            parser = new GT06Parser();
            break;
    }

    const packet = parser?.parse(input) ?? null;
    
    if (packet) {
        if (packet instanceof TestePacket) {
            console.info('Rendering Teste packet');
            TesteTableRenderer.renderTable(packet);
        } else if (packet instanceof GT06Packet) {
            console.info('Rendering GT06 packet');
            GT06TableRenderer.renderTable(packet);
        }
    } else {
        resultTable.innerHTML = '<p>Log inválido.';
    }
});

resultTable.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.id === 'btn_clearButton') {
        resultTable.innerHTML = '<p>Sua tabela será exibida aqui.</p>';
        logTextArea.value = '';
        updateButtonState();
    }
});

protocolSelect.addEventListener('change', () => {
    const logTeste = document.querySelector('#log-teste') as HTMLParagraphElement;
    if (protocolSelect.value === '1') {
        logTeste.textContent = 'Exemplo de log para TesteParser: START;123;45.67;-89.01;END';
    } else {
        logTeste.textContent = '78781F120B081D112E10CC027AC7EB0C46584900148F01CC00287D001FB8000380810D0A';
    }
});