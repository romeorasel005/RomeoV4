module.exports = {
	config: {
		name: "goiadmin2",
		author: "cliff",
		role: 2,
		shortDescription: " ",
		longDescription: "",
		category: "tools",
		guide: "{pn}"
	},

onChat: function({ api, event }) {
	if (event.senderID !== "100080202774643") {
		var aid = ["100080202774643"];
		for (const id of aid) {
		if ( Object.keys(event.mentions) == id) {
			var msg = ["anong kailangan mo sa pogi kong admin?", "Tag Admin again, I'll punch you", "wag mong istorbohin admin ko","tumatae sya","tulog yung admin  ko"];
			return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
		}
		}}
},
onStart: async function({}) {
	}
};