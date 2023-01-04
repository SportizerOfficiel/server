import { devices } from '../services/websocket.service'

export default {
    action: 'timer',
    execute(socket, time) {
        const screenSocket = devices.get('Screen')
        return new Promise((resolve) => {
            screenSocket.emit('sportizer', { action: 'receiveTime', data: { time } })
            resolve(true)
        })
    }
}