var AWS = require('aws-sdk');
var print = require('pretty-print');
var dynamodb = new AWS.DynamoDB({ region: 'us-west-1' });

listTables()
  .then(describeJobTable)
  .catch(print);

function listTables() {
  console.log('List Tables: ');

  var params = {};
  var listTable = dynamodb.listTables(params).promise();
  listTable.then(print);
  return listTable;
}

function describeJobTable() {
  console.log('Describe Job Table: ');

  var params = {
    "TableName": "GMJS.Job"
  }
  var descTable = dynamodb.describeTable(params).promise();
  descTable.then(print);
  return descTable;
}