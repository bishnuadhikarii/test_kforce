const db = require('./helpers/dbOpreation')
const res = require('./helpers/res');

exports.handler = async (event) => {
    const { email, phoneNumber } = event.queryStringParameters;
    try {
        const params = {
            TableName: process.env.TABLE_NAME,
            KeyConditionExpression: "#PK = :email and #SK = :phoneNumber",
            ExpressionAttributeNames: {
                "#PK": "PK",
                "#SK": "SK"
            },
            ExpressionAttributeValues: {
                ":email": `USER#${email}`,
                ":phoneNumber": `PHONENUMBER#${phoneNumber}`
            }
        };
        const { Items } = await db.query(params);
        return res.success({ msg: "User record", status: true, data: Items });
    } catch (error) {
        return res.failure({ msg: "Something went wrong , Please try again", status: false, data: {} });
    }
}