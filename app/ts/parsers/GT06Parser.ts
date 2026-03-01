import type { IPacketParser } from "../IPacketParser.js";
import { Packet } from "../packets/TestePacket.js";

export class GT06Parser implements IPacketParser {
    validate(input: string): boolean {
        console.warn('Validating GT-06 log:', input);
        if (!input.startsWith("7878") || !input.endsWith("0D0A")) {
            console.error('String sem 7878 no início ou 0D0A no final');
            return false;
        }
        return true;
    }

    parse(input: string): Packet | null {
        if (!this.validate(input)) {
            console.error('GT-06 log inválido. Formato esperado: 7878...0D0A');
            return null;
        }

        let startBit = input.substring(0, 4);
        let packetLength = input.substring(4, 6);
        let protocolNumber = input.substring(6, 8);

        let dateTime = input.substring(8, 20);
        let year = parseInt(dateTime.substring(0, 2), 16) + 2000;
        let month = parseInt(dateTime.substring(2, 4), 16);
        let day = parseInt(dateTime.substring(4, 6), 16);
        let hour = parseInt(dateTime.substring(6, 8), 16);
        let minute = parseInt(dateTime.substring(8, 10), 16);
        let second = parseInt(dateTime.substring(10, 12), 16);
        dateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

        let satelliteCount = input.substring(20, 24);
        let lat = input.substring(24, 32);
        let lng = input.substring(32, 40);
        let speed = input.substring(40, 44);
        let courseStatus = input.substring(44, 48);
        let mcc = input.substring(48, 52);
        let mnc = input.substring(52, 56);
        let lac = input.substring(56, 60);
        let cellId = input.substring(60, 68);
        let serialNumber = input.substring(68, 72);
        let errorCheck = input.substring(72, 76);
        let stopBit = input.substring(76, 80);

        console.log(`Parsed GT-06 packet:
        Start Bit: ${startBit}
        Packet Length: ${packetLength}
        Protocol Number: ${protocolNumber}
        Date Time: ${dateTime}
        Satellite Count: ${satelliteCount}
        Latitude: ${lat}
        Longitude: ${lng}
        Speed: ${speed}
        Course Status: ${courseStatus}
        MCC: ${mcc}
        MNC: ${mnc}
        LAC: ${lac}
        Cell ID: ${cellId}
        Serial Number: ${serialNumber}
        Error Check: ${errorCheck}
        Stop Bit: ${stopBit}`);

        return new GT06Packet(
            startBit,
            packetLength,
            protocolNumber,
            dateTime,
            satelliteCount,
            lat,
            lng,
            speed,
            courseStatus,
            mcc,
            mnc,
            lac,
            cellId,
            serialNumber,
            errorCheck,
            stopBit
        );
    }
}