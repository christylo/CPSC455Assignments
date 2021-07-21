import axios from 'axios'
let api;
if (process.env.NODE_ENV == 'production') {
    api = axios.create({
        baseURL: 'https://memory-collection.herokuapp.com/',
    })
} else {
    api = axios.create({
        baseURL: 'http://localhost:'+process.env.PORT+'/api',
    })
}

export const insertCard = payload => api.post(`/card`, payload)
export const getAllCards = () => api.get(`/cards`)
export const updateCardById = (id, payload) => api.put(`/card/${id}`, payload)
export const deleteCardById = id => api.delete(`/card/${id}`)
export const deleteAllCards = () => api.delete(`/cards`)
export const getCardById = id => api.get(`/card/${id}`)

const apis = {
    insertCard,
    getAllCards,
    updateCardById,
    deleteCardById,
    deleteAllCards,
    getCardById,
}

export default apis