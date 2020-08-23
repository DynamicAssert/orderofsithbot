const express = require("express");
const port = 3000;
const noblox = require("noblox.js");
const app = express();
const groupID = 2931379;
const key = "DO_NOT_SHARE_THIS_KEY_IT_ALLOWS_PEOPLE_TO_TAKE_ADVANTAGE_OF_BOT_MODERATION_FEATURES_35623162625409672457854029728547829457249754272495878457984randomletterspeopleprobablywonteverguess464363456n5426i2456un2453g6i4256jng456j453gn62435j6gnjg62643hngjhgn62hjngjh6njh";

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
