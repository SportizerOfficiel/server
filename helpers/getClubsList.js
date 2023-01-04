import axios from 'axios'

export const getClubsList = async () => {
    const query = await axios.get(`${process.env.API_URI}/clubs`)
    return await query.data
}