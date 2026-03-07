import { BasePacket } from "./BasePacket.js";

export class TestePacket extends BasePacket {
    constructor(
        protocol: string,
        public id: number,
        public lat: number,
        public lng: number,
        public ignState: boolean
    ) {
        super(protocol);
    }
}