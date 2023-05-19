const { Participant } = require('../models/participant-model');
const { Event } = require('../models/event-model');
const { v4: uuidv4 } = require('uuid');

const createParticipant = async (req, res) => {
    const ticket_id = uuidv4();
    try {

        if (!Boolean(await Event.findByPk(req.params.id))) {
            res.status(403).send({ status: false });
            return;
        }

        await Participant.create({
            Ticket_ID: ticket_id,
            Event_ID: req.params.id,
            User_Initials: req.body.User_Initials,
            Num_Of_Occupied_Place: req.body.Num_Of_Occupied_Place,
            User_email: req.body.User_email
        });

        await Event.decrement('availablePlaces', {
            by: 1,
            where: {
                id: req.params.id
            }
        });

        res.status(200).send({ status: true })
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: false });
    }
}

module.exports = { createParticipant };