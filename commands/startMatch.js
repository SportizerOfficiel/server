
import { devices } from '../services/websocket.service'

export default {
    action: 'startMatch',
    execute(socket, { local, visitor }) {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            
            screenSocket.emit("sportizer", { action: 'startMatch', data: { local, visitor } })
            resolve(true)
        })
    }
}