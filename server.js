const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_KEY = "fa1b1fd6-87bf-494c-adb5-652b52e6578a";

app.get('/api/live', async (req, res) => {
  try {
    const response = await axios.get(`https://api.oddspapi.io/v1/live?apikey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.json({ error: "Failed to fetch live data", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
