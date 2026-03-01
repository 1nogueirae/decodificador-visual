export class Packet {
    constructor(
        public protocol: string,
        public id: number,
        public lat: number,
        public lng: number,
        public ignState: boolean
    ) {}
}