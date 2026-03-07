import { BasePacket } from "./BasePacket.js";

export class GT06Packet extends BasePacket {
    constructor(
        protocol: string,
        public startBit: string,
        public packetLength: string,
        public protocolNumber: string,
        public dateTime: string,
        public satelliteCount: number,
        public lat: number,
        public lng: number,
        public speed: number,
        public courseStatus: string,
        public MCC: string,
        public MNC: string,
        public LAC: string,
        public CellID: string,
        public course: number,
        public serialNumber: string,
        public errorCheck: string,
        public stopBit: string
    ) {
        super(protocol);
    }
}