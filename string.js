// const client = require('./client');
// async function init() {
//     await client.set("msg:6", "Hey form NodeJs");
//     const result = await client.get("msg:6");
//     console.log("Result ->", result);
// }
// init();


// Setting expiray of message
const client = require('./client');
async function init() {
    await client.expire("msg:6", "Hey form NodeJs");
    const result = await client.get("msg:6");
    console.log("Result ->", result);
}
init();
