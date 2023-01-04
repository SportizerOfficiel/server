import { randomCode } from '../helpers/randomCode'

import { devices } from '../services/websocket.service'

export default {
    action: 'pairing',
    execute(socket, { pairingCodeReceive }) {
        return new Promise((resolve, reject) => {
            const screenSocket = devices.get('Screen')
            if (randomCode === pairingCodeReceive) {
                resolve(true)
                screenSocket.emit('sportizer', { action: 'successPairing', data: { result: true } })
            } else {
                reject(false)
            }
        })
    }
}