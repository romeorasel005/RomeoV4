module.exports = {
      config: {
         name: "ping",
         aliases: ["p"],
         author: "UPoL",
         role: 0,
         version: "2.9",
         shortDescription: "Check ping status",
         longDescription: "Check net speed",
         guide: {
            en: "{pn}"
        }
   },
   onStart: async function ({ api, event, message }) {
         const timeStart = Date.now();
         await message.reply("💬 𝗖𝗛𝗘𝗖𝗞𝗜𝗡𝗚 𝗣𝗜𝗡𝗚...");
         const ping = Date.now() - timeStart;
         let pingStatus = " 🟢 | Very Good ";
    if (ping > 200) {
      pingStatus = " 🌸 | Good..";
    }
    if (ping > 500) {
      pingStatus = " ✅ | Medium..!!";
    }
    if (ping > 800) {
      pingStatus = " ⚠ | Not Good-";
    }
    if (ping > 1000) {
      pingStatus = " 👀 | Net slow.....";
    }
    if (ping > 1200) {
      pingStatus = " 🚫 | Oho Net Issue.";
    }
    if (ping > 1500) {
      pingStatus = " ⚠ | Bad.!";
    }
    if (ping > 1800) {
      pingStatus = " ❌ | Very Bad..";
    }
    if (ping > 2000) {
      pingStatus = " 💀 | Fully Dead.";
    }
         message.reply(` ———|PING STATUS|———\n📝 The current ping is :${ping}ms.\nStatus: ${pingStatus}`);
       } 
  };
