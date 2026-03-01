import { Packet } from "./packets/TestePacket.js";

export interface IPacketParser {
    parse(input: string): Packet | null;
    validate(input: string): boolean;
}