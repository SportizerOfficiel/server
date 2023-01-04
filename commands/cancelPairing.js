import { devices } from '../services/websocket.service'

export default {
    action: 'cancelPairing',
    execute() {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            
            screenSocket.emit("sportizer", { action: 'cancelPairing', data: { } })
            resolve(true)
        })
    }
}