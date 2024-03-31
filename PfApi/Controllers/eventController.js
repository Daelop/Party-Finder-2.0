const Models = require("../Models");

const createEvent = async (req, res) => {
    try {
      const Event = await Models.event.create(req.body);
  
      res.status(200).json(Event);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  };

const getEvents = async (req, res) => {
    try {
      const eventInfo = await Models.event.find({});
      res.status(200).json(eventInfo);
      console.log(eventInfo);
    } catch {
      res.status(500).json({ message: "error.message" });
    }
  };

const getEventById = async (req, res) => {
    try {
      const { id } = req.params;
      const eventInfo = await Models.event.findById(id);
      res.status(200).json(eventInfo);
      console.log(eventInfo);
    } catch {
      res.status(500).json({ message: "error.message" });
    }
  };

  const cancelEvent = async (req, res) => {
    try {
      const { id } = req.params;
      const eventInfo = await Models.event.findByIdAndDelete(id);
      res.status(200).json(eventInfo);
      console.log(eventInfo);
    } catch {
      res.status(500).json({ message: "error.message" });
    }
  };
  const updateEvent = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedEvent = await Models.event.findByIdAndUpdate(id, req.body);
      res.status(200).json(updatedEvent);}
    catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }};
  module.exports = {createEvent, getEvents, getEventById, cancelEvent, updateEvent};