import { devices } from '../services/websocket.service'

export default {
    action: 'updateMistack',
    execute(socket, { playersLocal, playersVisitor }) {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            
            screenSocket.emit("sportizer", { action: 'updateMistack', data: { playersLocal, playersVisitor } })
            resolve(true)
        })
    }
}