import { devices } from "../services/websocket.service"

export async function getConnectedDevices() {
    console.log('\nList of connected devices :')
    for (const key of devices.keys()) {
        console.log(`- ${key}`);
    }
}