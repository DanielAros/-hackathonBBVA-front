const path = require('path');
// const csv = require('csv-parser');
const fs = require('fs');
const csv = require('csvtojson')

const readCSV = async(startRow, endRow) => {
    const arrayRows = [];

    const csvFilePath=path.join(__dirname, '../data/data.csv');
    const jsonArray = await csv().fromFile(csvFilePath);

    // console.log(jsonArray[startRow]);

    return jsonArray.slice(startRow, endRow);
}

module.exports = {
    readCSV
}
