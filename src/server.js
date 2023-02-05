const app=require('./index');
require("dotenv").config();

const connect = require('./configs/db');
const port =2345
app.listen(port, async function(){
    await connect();
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});