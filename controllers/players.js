const Player = require("../models/players");

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createPlayer = async (req, res) => {
  const { name, position, age, team } = req.body;
  try {
    const newPlayer = await Player.create({ name, position, age, team });
    res.status(201).json(newPlayer);
  } catch (error) {
    console.error("Error creating player:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getPlayerById = async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await Player.findById(playerId);
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    console.error("Error fetching player:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updatePlayer = async (req, res) => {
  const playerId = req.params.id;
  const { name, position, age, team } = req.body;
  try {
    const player = await Player.findByIdAndUpdate(
      playerId,
      { name, position, age, team },
      { new: true }
    );
    if (player) {
      res.json(player);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    console.error("Error updating player:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deletePlayer = async (req, res) => {
  const playerId = req.params.id;
  try {
    const player = await Player.findByIdAndDelete(playerId);
    if (player) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "Player not found" });
    }
  } catch (error) {
    console.error("Error deleting player:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
