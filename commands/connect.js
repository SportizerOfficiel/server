import { getConnectedDevices } from "../helpers/getConnectedDevices"

import { devices } from "../services/websocket.service"

import { randomCode } from "../helpers/randomCode"

export default {
    action: 'connect',
    execute(socket, { customName }) {
        return new Promise((resolve, reject) => {
            if (customName) {
                devices.set(customName, socket)
                console.log(`\n💻 ${customName} connected`)
                getConnectedDevices()
                if (customName === "Screen") {
                    socket.emit("sportizer", { action: "pairingCode", data: { pairingCode: randomCode } })
                }
                resolve("Successfully registered !")
            } else {
                reject("Error occured for register !")
            }
        })
    }
}