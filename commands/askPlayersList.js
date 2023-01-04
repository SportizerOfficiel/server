import { getPlayersList } from '../helpers/getPlayersList'

export default {
    action: 'askPlayersList',
    execute(socket, { filter, idClub }) {
        console.log('\naskPlayersList');
        return new Promise((resolve) => {
            getPlayersList(filter, idClub)
            .then((players) => resolve(players))
            .then(() => resolve(false))
        })
    }
}