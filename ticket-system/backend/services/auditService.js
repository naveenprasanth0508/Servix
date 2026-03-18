const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand, QueryCommand } = require("@aws-sdk/lib-dynamodb");
const logger = require("../middleware/logger");

const client = new DynamoDBClient({ region: process.env.AWS_REGION || "ap-south-1" });
const dynamo = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "ticket-audit-logs";

const logAuditEvent = async ({ ticketId, action, performedBy, details }) => {
  try {
    await dynamo.send(new PutCommand({
      TableName: TABLE_NAME,
      Item: {
        ticketId: ticketId.toString(),
        timestamp: new Date().toISOString(),
        action,
        performedBy,
        details,
      },
    }));
    logger.info(`Audit log saved: ${action} on ticket ${ticketId}`);
  } catch (error) {
    logger.error(`DynamoDB Error: ${error.message}`);
  }
};

const getAuditLogs = async (ticketId) => {
  try {
    const result = await dynamo.send(new QueryCommand({
      TableName: TABLE_NAME,
      KeyConditionExpression: "ticketId = :tid",
      ExpressionAttributeValues: { ":tid": ticketId.toString() },
      ScanIndexForward: false,
    }));
    return result.Items || [];
  } catch (error) {
    logger.error(`DynamoDB Query Error: ${error.message}`);
    return [];
  }
};

module.exports = { logAuditEvent, getAuditLogs };