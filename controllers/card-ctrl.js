const Card = require('../models/card-model')

createCard = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a card'
        })
    }

    const card = new Card(body)

    if (!card) {
        return res.status(400).json({ success: false, error: err })
    }

    return card
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: card._id,
                message: 'Card created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Card not created!',
            })
        })
}

updateCard = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    return Card.findOne({ _id: req.params.id }, (err, card) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Card not found!',
            })
        }
        card.name = body.name
        card.url = body.url
        card.description = body.description
        card.time = body.time
        card
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: card._id,
                    message: 'Card updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Card not updated!',
                })
            })
    })
}

deleteCard = async (req, res) => {
    return await Card.findOneAndDelete({ _id: req.params.id }, (err, card) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: card })
    }).catch(err => console.log(err))
}

deleteAllCards = async (req, res) => {
    return await Card.deleteMany({}, (err, cards) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: cards })
    }).catch(err => console.log(err))
}

getCardById = async (req, res) => {
    return await Card.findOne({ _id: req.params.id }, (err, card) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: card })
    }).catch(err => console.log(err))
}

getCards = async (req, res) => {
    return await Card.find({}, (err, cards) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!cards.length) {
            return res
                .status(404)
                .json({ success: false, error: `Card not found` })
        }
        return res.status(200).json({ success: true, data: cards })
    }).catch(err => console.log(err))
}

module.exports = {
    createCard,
    updateCard,
    deleteCard,
    deleteAllCards,
    getCards,
    getCardById,
}