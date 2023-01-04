import { devices } from '../services/websocket.service'

export default {
    action: 'updateScore',
    execute(socket, { playersLocal, playersVisitor }) {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            
            screenSocket.emit("sportizer", { action: 'updateScore', data: { playersLocal, playersVisitor } })
            resolve(true)
        })
    }
}