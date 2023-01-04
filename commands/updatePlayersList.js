import { devices } from '../services/websocket.service'

export default {
    action: 'updatePlayersList',
    execute(socket, { players, side }) {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            
            screenSocket.emit("sportizer", { action: 'updatePlayersList', data: { players, side } })
            resolve({ players, side })
        })
    }
}