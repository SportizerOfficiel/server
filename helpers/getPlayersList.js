import axios from 'axios'

export const getPlayersList = async (filter, idClub) => {
    
    if (idClub === "") return []

    if (filter?.category === "") {
        console.log("Please select a cat or div!");
    } else {
        const query = await axios.get(`${process.env.API_URI}/players`, {
        params: {
            filter: {"category":[filter.category], "idClub": idClub}
        }
        })
        
        return await query.data;
    }

}