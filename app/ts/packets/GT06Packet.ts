export class GT06Packet {
    constructor(
        public startBit: string,
        public packetLength: string,
        public protocolNumber: string,
        public informationContent: string,
        public serialNumber: string,
        public errorCheck: string,
        public stopBit: string,

        // Location Data Packet fields
        public dateTime?: string,
        public satelliteCount?: number,
        public lat?: number,
        public lng?: number,
        public speed?: number,
        public courseStatus?: number,
        public MCC?: string,
        public MNC?: string,
        public LAC?: string,
        public CellID?: string
    ) {}
}