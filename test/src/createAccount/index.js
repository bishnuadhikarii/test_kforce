const db = require('./helpers/dbOpreation');
const res = require('./helpers/res');

exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const { email, phoneNumber } = body;
    try {
        const params = {
            TableName: process.env.TABLE_NAME,
            Item: {
                "PK": `USER#${email}`,
                "SK": `PHONENUMBER#${phoneNumber}`,
                ...body
            }
        }
        const result = await db.create(params);
        return res.success({ msg: "Create new record successfully", status: true, data: result });
    } catch (error) {
        console.log(error)
        return res.failure({ msg: "Something went wrong , Please try again", status: false, data: {} });
    }
}