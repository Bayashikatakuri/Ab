//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767,2348123179877";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05Dd21Fa2xxaXdCQUZsZVUzNWNjNG5OQXJvdlJHVzllZjFPTGIvbE9YVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUVpVnlMY0NqVXl5SUVRNUZTckdoOXRtQWpJam05YzAydmVZZTg5ckpVZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Ti9ncmtKWEhmc05Jd3NTOTE4U1RjK0NqWE80N0I5TnBhM2NxS3lYUzBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWcURMaG8yYUpnODZ2czEwQ0MyUytGMDhLYWVaQW1LY2hxVVRlaWlDd3prPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEMStpZXcrdXM4bUdrY2lMOVdTcFhzczBzcUw3eW5PcWw0U3VnMEVVV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRGVEFLT09OWE1KL1E0WGU0UFZFOTZ5MW1OajMwRVY5VVgvSEpCei9NQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0lPdzJydk1ISlpOMlEycDBqRE16c2VzRStmeXJYajMwako1VERkZHQxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHl5K2pBeWVHZkxKbkxtRTQ4WW1tNHRnNkJDZGJpZGV3dlR6d0tpMEJCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJUUDJaMXM0dE5MS0pGUGV1Ris4TEVXUi9iVGhGeFdhbzhkNnFqNHc2TnQvOWNxeXIwS0EwL3dJbUV4bWY4bndnTmlrRFZDOVoxdWViUFNTbzhMbEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJoQ3FvbktmN2ljS2psMHo4Wld3SEJaMncrQjM1YWM1VlMrVEo1eXFSSTljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNzY1NzE5OTkxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGNzA0ODUyMkIzNDREQzJGMDAzMDA4MTIwNjFEMTQ3QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NTEyNzA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzc2NTcxOTk5MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkRCN0I3QjEzRDMxNzRBOTI5QUJENTU2MDIzOEI0RDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjUxMjcwN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWmVwUDFHSXRTS1NSVEpkM2dSWDFNQSIsInBob25lSWQiOiJkOWZlMWU4MS00OTNmLTRjZTctOTM0Yy1mZWMzZWRmMjlkOGUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZm1QOW1FVEk5WjN4ZlNMd2ZQNENid1E2RXFrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRxaEZGTm9uZ1pKNWl0NVdBWWZvYW1WQUhMMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0NVY3NjFTUiIsIm1lIjp7ImlkIjoiMjM3NjU3MTk5OTEwOjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4pyq4o+kzZ/NnuKYheKDneqqtvCdkLbwnZGM8J2QtfCdm6/wnZGFIPCdkL/wnZuv8J2QuvCdm6/wnZuu8J2Qt/CfkZHinroifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0luYitwd0VFTFA4b2JjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjAwUW5rMXpvU3dtT2RtanhFakdmOHVwVmJPSU9wL0RQdVV6WE82VVpYUU09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik11SkpXK0k0MHdBaEk0WjhFQnRsTVJxU0VLeEJvSDVJa1I2N1RpNGtSeXI1azlnNCt6dGp6M3pXbHZJZUVaNWo2MU9NT2tuOEpTZWhzS3pZZlhkOUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlSDRwS1Q0QkZQMWk2c3g0ZUpIUm5YZ2ovT0NEYU02V3ZQQmhUNTV1aXZxY01yMkF1ODM4MVhodU9FUVpLdkxibFloYk5maHlSd2tCalNEV2lJTERDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1NzE5OTkxMDo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRORUo1TmM2RXNKam5abzhSSXhuL0xxVld6aURxZnd6N2xNMXp1bEdWMEQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY1MTI3MDQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkZYIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
