import type { IPacketParser } from "../IPacketParser.js";
import { GT06Packet } from "../packets/GT06Packet.js";

export class GT06Parser implements IPacketParser<GT06Packet> {
    validate(input: string): boolean {
        console.warn('Validating GT-06 log:', input);
        if (!input.startsWith("7878") || !input.endsWith("0D0A")) {
            console.error('String sem 7878 no início ou 0D0A no final');
            return false;
        }
        return true;
    }

    parse(input: string): GT06Packet | null {
        if (!this.validate(input)) {
            console.error('GT-06 log inválido. Formato esperado: 7878...0D0A');
            return null;
        }

        if (input.length < 72) {
            console.error('GT-06 log inválido. Tamanho mínimo esperado para Location Packet: 72 chars hex.');
            return null;
        }

        const startBit = input.substring(0, 4);
        const packetLength = input.substring(4, 6);
        const protocolNumber = input.substring(6, 8);

        let dateTime = input.substring(8, 20);
        const year = parseInt(dateTime.substring(0, 2), 16) + 2000;
        const month = parseInt(dateTime.substring(2, 4), 16);
        const day = parseInt(dateTime.substring(4, 6), 16);
        const hour = parseInt(dateTime.substring(6, 8), 16);
        const minute = parseInt(dateTime.substring(8, 10), 16);
        const second = parseInt(dateTime.substring(10, 12), 16);
        dateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

        const gpsInfoAndSat = input.substring(20, 22);
        const gpsInfoLength = parseInt(gpsInfoAndSat[0]!, 16);
        const satelliteCount = parseInt(gpsInfoAndSat[1]!, 16);

        const latRaw = input.substring(22, 30);
        const latDec = parseInt(latRaw, 16);
        const lat = (latDec / 30000) / 60;

        const lngRaw = input.substring(30, 38);
        const lngDec = parseInt(lngRaw, 16);
        const lng = (lngDec / 30000) / 60;

        const speed = parseInt(input.substring(38, 40), 16);

        const courseStatus = input.substring(40, 44);
        const courseStatusDec = parseInt(courseStatus, 16);
        const isSouthLatitude = (courseStatusDec & 0x0400) !== 0;
        const isWestLongitude = (courseStatusDec & 0x0800) !== 0;
        const course = courseStatusDec & 0x03ff;

        const signedLat = isSouthLatitude ? -lat : lat;
        const signedLng = isWestLongitude ? -lng : lng;

        const mcc = input.substring(44, 48);
        const mnc = input.substring(48, 50);
        const lac = input.substring(50, 54);
        const cellId = input.substring(54, 60);
        const serialNumber = input.substring(60, 64);
        const errorCheck = input.substring(64, 68);
        const stopBit = input.substring(68, 72);

        return new GT06Packet(
            'GT06',
            startBit,
            packetLength,
            protocolNumber,
            dateTime,
            satelliteCount,
            signedLat,
            signedLng,
            speed,
            courseStatus,
            mcc,
            mnc,
            lac,
            cellId,
            course,
            serialNumber,
            errorCheck,
            stopBit
        );
    }
}