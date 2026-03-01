import type { IPacketParser } from "../IPacketParser.js";
import { Packet } from "../packets/TestePacket.js";

export class TesteParser implements IPacketParser {
    validate(input: string): boolean {
        const parts = input.split(';');
        if (parts[0] !== 'START' || parts[parts.length - 1] !== 'END') {
            if (parts[0] !== 'START') {
                console.error('String sem START no início');
            } else if (parts[parts.length - 1] !== 'END') {
                console.error('String sem END no final');
            } else if (parts[0] !== 'START' && parts[parts.length - 1] !== 'END') {
                console.error('String sem START e END');
            }
            return false;
        }
        parts.pop();
        parts.shift();
        return parts.length === 4;
    }
    
    parse(input: string): Packet | null {
        if (!this.validate(input)) return null;
        const parts = input.split(';');
        const id = parseInt(parts[1]!);
        const lat = parseFloat(parts[2]!);
        const lng = parseFloat(parts[3]!);
        return new Packet('Teste', id, lat, lng, false);
    }
}