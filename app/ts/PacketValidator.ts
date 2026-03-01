export class PacketValidator {
    static validate(packet: string): boolean {
        if (packet !== "" && packet.startsWith('START;') && packet.endsWith(';END')) {
            return true;
        } return false;
    }
}