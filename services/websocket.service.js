import { Server } from 'socket.io'

import commandsProvider from '../providers/commands.provider'

import { randomCode } from '../helpers/randomCode'

export let devices = new Map()

export const webSocket = () => {
    const io = new Server(process.env.WSSERVER_PORT, {
        cors: {
            origin: "*",
            credentials: true
        },
        allowEIO3: true
    })

    console.log(`🔑 RandomCode is : ${randomCode}`)
    
    io.on('connection', socket => {
        socket.on('sportizer', ({ action, data }, callback) => {
            if(commandsProvider.has(action)) {
                commandsProvider.get(action).execute(socket, data)
                .then((res) => callback(res))
                .catch((res) => callback(res))
            } else {
                console.log('Unknow command')
            }
        })

        setInterval(() => {
            commandsProvider.get('status').execute(socket)
        }, 1000)
        
        socket.on('disconnect', () => {
            commandsProvider.get('disconnect').execute(socket)
        })
    })

    console.log('✅ Websocket start success')
}