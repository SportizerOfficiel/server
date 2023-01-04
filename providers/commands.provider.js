import connect from '../commands/connect'
import disconnect from '../commands/disconnect'
import status from '../commands/status'
import askClubsList from '../commands/askClubsList'
import askPlayersList from '../commands/askPlayersList'
import pairing from '../commands/pairing'
import timer from '../commands/timer'
import startMatch from '../commands/startMatch'
import cancelPairing from '../commands/cancelPairing'
import updateScore from '../commands/updateScore'
import updateMistack from '../commands/updateMistack'
import updatePlayersList from '../commands/updatePlayersList'


const commandsProvider = new Map()

const register = {
    connect,
    disconnect,
    status,
    askClubsList,
    pairing,
    timer,
    askPlayersList,
    startMatch,
    cancelPairing,
    updateScore,
    updateMistack,
    updatePlayersList
}

const providers = Object.values(register)
for(const i in providers) {
    commandsProvider.set(providers[i].action, providers[i])
}

export default commandsProvider