import type { BasePacket } from "./packets/BasePacket.js";


export interface IPacketParser<TPacket extends BasePacket> {
    parse(input: string): TPacket | null;
    validate(input: string): boolean;
}