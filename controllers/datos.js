const path = require('path');
const csv = require('csv-parser');
const fs = require('fs');

const {readCSV} = require('../services/ReadCSV')

const getDatos = async(req, res) => {
    const {startRow, endRow} = req.query;

    console.log(startRow, endRow);

    const result = await readCSV(startRow, endRow);
    
    res.status(200).json({
        data: result
    });
}

const downloadCSV = (req, res) => {
    res.sendFile(path.join(__dirname, '../data/data.csv'));
}

module.exports = {
    getDatos,
    downloadCSV
}