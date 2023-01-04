import { getConnectedDevices } from "../helpers/getConnectedDevices"

import { devices } from "../services/websocket.service"

export default {
    action: 'disconnect',
    execute(socket) {
        const keys = devices.keys()
        for (const i of keys) {
            if(devices.get(i).id === socket.id) {
                devices.delete(i)
                console.log(`\n🚪 ${i} has disconnected`)
                getConnectedDevices()
                break
            }
        }
    }
}