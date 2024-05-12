//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "astromedia0010@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github = process.env.GITHUB || "https://github.com/Astropeda/Asta-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaPGt3QEwEjpBXT4Rv0z";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/P37NWrz.jpeg";
global.devs = "254103491213";
global.sudo = process.env.SUDO || "254103491213";
global.owner = process.env.OWNER_NUMBER || "254103491213";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254103491213";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Astro;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0x3SmJuNlZqeDZjN0E1RmhmWkRnVGtISUZYaXBVQkdxdzhXc2xnY1lrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTM5WnVkVnZvNVV1N25WTnhaYzBIaVpBNnpGSDNQSXFYSVJPRWZhNzRIaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRmtNbUFKZlBvdzhSQTVnTVNodzd2eHROc3pZQU1USGNIK2tkSE16WTM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzaU1QaXJSWVhHampQRlAxRStoY2hkenNWazNmckY1ejNRVU5QQThxYzBZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCWjIxN3hLWXhVZ1FuZ1VUZGYrejRVWi9oVmNqM2Y1STdXbndrdTNpSHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ3b0dlWDlEc05namRkQjlsaXJKcnpjby81L29kMDlNUDdITjdyNk9JbWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS053Rms3MFF0Ymxld1IyY2Y5YVJSZDJxb2RPbFBjbE16UnRrR3I3K3NsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3J1djlwTzk3VkEvRnltYytibTBXenhBTUgzSEwzNDQvZ2pSZzFjTi8wYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kRERrU25ITUJOUzZUS1VUaU5Hc2pteGVaZUp2bktwSU1NK1FsbWZSaklnb0JjQnBHWko3N08xSDl6MzlZV0QwQy85TE5zdXMzVHRoaml0aUlaUUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJ3WE1YVzdUNW9NYUUwUG5KQUVSU1FBbmp1eXQ1eU1hMDdCb0VZeURrK3JJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEdENEMVc4UFNQS1VpMmhCZGo1RktnIiwicGhvbmVJZCI6IjE4YTI2YWVmLWQ1YmQtNDBkZS1hYjc0LWU5N2JmMDY1ZmZhYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQXQrcDZyRnd3a25tVzFVTVZmemNqeEpXQjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDdncm9TNmZkc3ZKQms0V1p2NGg3YUY5d09NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpQS1I3OVc4IiwibWUiOnsiaWQiOiIyNTQxMDM0OTEyMTM6MzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSU5GSU5JVEVDT0RJTkdURUNIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaUw0T3NFRVBXRWhMSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0aE9YVzg3WW1TZzlRcEd6eVNydEQzN05SSnV4cng5TGI4OHpGOFRiYUVVPSIsImFjY291bnRTaWduYXR1cmUiOiJ3QWtMUHowaHp2UkFIYm56SU05V2FSNm9wU2UzUG4vK2l3ejg0MUltUnVFYjFJeHBLUTQreHFrZVBnQzZqSlhiTzdOcFZVRFlJRXgwa1BRMVd2bGNDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ3EyR3ZEanZVQnZZczhUc1FEOVlZUWJWKzVvSndQOVVmWGJjTE1tVkhOOWRNY1RwdEM0MjMrY0c2U3ZGOXBYdDFpMlVzZThocDVGaWZ4OGcxenRWRHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQxMDM0OTEyMTM6MzVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUlUbDF2TzJKa29QVUtSczhrcTdROSt6VVNic2E4ZlMyL1BNeGZFMjJoRiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNTUzNjUxOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHUGgifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©ᴀsᴛᴀ ᴍᴅ",
  author: process.env.PACK_AUTHER || "ᴀsᴛᴀ ᴍᴅ",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "infinitebot",
  ownername: process.env.OWNER_NAME || "infinite",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
