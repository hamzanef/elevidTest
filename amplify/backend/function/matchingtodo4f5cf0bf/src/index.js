const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'eu-central-1'});

exports.handler = async (event) => {
  const params = {
    TableName: process.env.API_MATCHINGTODOAPI_TODOTABLE_NAME, // The name of your DynamoDB table
  };
  const data = await documentClient.scan(params).promise();
  const response = {
    statusCode: 200,
    body: JSON.stringify(data.Items),
  };
  return response;
};
