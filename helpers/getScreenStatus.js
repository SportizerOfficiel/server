import { devices } from "../services/websocket.service"

export function getScreenStatus() {
    let screenStatus = false

    for (const key of devices.keys()) {
        if (key === 'Screen') {
            screenStatus = true
        }
    }
    
    return {
        newScreenStatus: screenStatus
    }
}