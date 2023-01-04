import { getClubsList } from '../helpers/getClubsList'

export default {
    action: 'askClubsList',
    execute() {
        console.log('\naskClubsList');
        return new Promise((resolve) => {
            getClubsList()
            .then((clubs) => resolve(clubs))
            .then(() => resolve(false))
        })
    }
}