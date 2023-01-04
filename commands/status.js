import { getScreenStatus } from '../helpers/getScreenStatus'

export default {
    action: 'status',
    execute(socket) {
        const screenStatus = getScreenStatus()
        socket.emit('status', screenStatus)
    }
}