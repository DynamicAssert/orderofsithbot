const express = require("express");
const port = 3000;
const noblox = require("noblox.js");
const app = express();
const groupID = 2931379;
const key = "";

async function run() {
	await noblox.setCookie("_|:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|");
}

run();
app.get("/promote", (req, res) => {
	var headerKey = req.headers.key;
	var userPromote = req.headers.userid;
	if (headerKey != key) {
		res.send(403); //Forbidden, you need a key for this
		return;
	}
	console.log(`KEY: ${headerKey}`);
	noblox.promote(Number(groupID), Number(userPromote)).then(result => {
		res.send(result);
	});
})

app.listen(port, () => {
	console.log(`Bot listening on localhost:${port}`);
});
