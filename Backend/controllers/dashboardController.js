// controllers/employeeController.js
const config = require('../config/config');
const nano = require('nano')(config.database.url);
const db = nano.use(config.database.dbName);

const getDOJData = (req,res) => {
    db.view('getInfo', 'DOJview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching date_of_joining data:', err);
          res.status(500).json({ message: 'Error fetching date_of_joining data' });
        }
    });
}

const getDOLData = (req,res) => {
    db.view('getInfo', 'DOLview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching date_of_leaving data:', err);
          res.status(500).json({ message: 'Error fetching data_of_leaving data' });
        }
    });
}

const getEmpTypeData = (req,res) => {
    db.view('getInfo', 'emptypeview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching employee type data:', err);
          res.status(500).json({ message: 'Error fetching employee type data' });
        }
    });
}

const getDiversityData = (req,res) => {
    db.view('getInfo', 'diversityview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching diversity data:', err);
          res.status(500).json({ message: 'Error fetching diversity data' });
        }
    });
}

const getLocationData = (req,res) => {
    db.view('getInfo', 'locationview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching location data:', err);
          res.status(500).json({ message: 'Error fetching location data' });
        }
    });
}

const getFullData = (req,res) => {
    db.view('getInfo', 'fullview?group=true', (err, body) => {
        if (!err) {
          res.status(200).json(body);
        } else {
          console.error('Error fetching full data:', err);
          res.status(500).json({ message: 'Error fetching full data' });
        }
    });
}

const getDeptEmpTypeData = (req,res) => {
  db.view('getInfo', 'dept_emptypeview?group=true', (err, body) => {
      if (!err) {
        res.status(200).json(body);
      } else {
        console.error('Error fetching full data:', err);
        res.status(500).json({ message: 'Error fetching full data' });
      }
  });
}

const getDeptDiversityData = (req,res) => {
  db.view('getInfo', 'dept_diversityview?group=true', (err, body) => {
      if (!err) {
        res.status(200).json(body);
      } else {
        console.error('Error fetching full data:', err);
        res.status(500).json({ message: 'Error fetching full data' });
      }
  });
}

const getDeptLocationData = (req,res) => {
  db.view('getInfo', 'dept_locationview?group=true', (err, body) => {
      if (!err) {
        res.status(200).json(body);
      } else {
        console.error('Error fetching full data:', err);
        res.status(500).json({ message: 'Error fetching full data' });
      }
  });
}

module.exports = {
    getDOJData,
    getDOLData,
    getEmpTypeData,
    getDiversityData,
    getLocationData,
    getFullData,
    getDeptEmpTypeData,
    getDeptDiversityData,
    getDeptLocationData
};
