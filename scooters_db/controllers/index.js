'use strict';

const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', function(req, res) {
  res.send('Scooters DB server');
});

router.get('/api/monitoring/ping', function(req, res) {
	res.send('PONG!');
});

router.get('/api/scooters', function(req, res) {
    return res.json(getScooters());
});

// FakeDb
// Replace with MongoDb or something equivalent
function getScooters() {
  var scooters = [];
  var scooter1 = {
    key: '1',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.2654430568394954,
      lng: 103.8228269042969
    }
  };
  var scooter2 = {
    key: '2',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.4692067999501632,
      lng: 103.81005358886716
    }
  }
  var scooter3 = {
    key: '3',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.3176148561539478,
      lng: 103.74111608886722
    }
  }
  var scooter4 = {
    key: '4',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.3998773440442758,
      lng: 103.86841845703123
    }
  }

  var scooter5 = {
    key: '5',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.416608835517782,
      lng: 103.6880030625
    }
  }

  var scooter6 = {
    key: '6',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.3404132484686186,
      lng: 103.99630689550781
    }
  }

  var scooter7 = {
    key: '7',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.3095224625345823,
      lng: 103.92626905371094
    }
  }

  var scooter8 = {
    key: '8',
    icon: 'https://skyjuicesoftware.com/temp/rsz_e-vector-scooter.png',
    position: {
      lat: 1.3143277211345725,
      lng: 103.655044078125
    }
  }

  scooters.push(scooter1);
  scooters.push(scooter2);
  scooters.push(scooter3);
  scooters.push(scooter4);
  scooters.push(scooter5);
  scooters.push(scooter6);
  scooters.push(scooter7);
  scooters.push(scooter8);
  return scooters;
}

module.exports = router;
