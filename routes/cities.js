const express = require('express');

const router = express.Router();

const CITIES = [
  {
    id: 1,
    name: 'Oslo',
    country: 'Norway',
  },
  {
    id: 2,
    name: 'Paris',
    country: 'France',
  },
];

router.get('/', (req, res) => {
  res.send(CITIES);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const city = CITIES.find((c) => c.id === id);
  if (!city) {
    res.status(404).send('Not found');
  }
  res.send(city);
});

router.post('/', (req, res) => {
  const city = {
    id: CITIES.length + 1,
    name: req.body.name,
    country: req.body.country,
  };
  CITIES.push(city);
  res.send(city);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const city = CITIES.find((c) => c.id === id);
  if (!city) {
    res.status(404).send('Not found');
  }
  const index = CITIES.indexOf(city);
  CITIES.splice(index, 1);
  res.send(city);
});

module.exports = router;
