const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCzIJE84OmIjXHYBz41";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCzIJE84OmIjXHYBz41" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://mallucampaign.in/images/img_1707943853.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255624741607";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 2
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255624741607";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_05_04_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDYzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDk5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDQzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTczLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXZMMURVa0RBMXVieHBTQ1I0d3pYalBnTjlDTXJqazlTZmNhb3g5bkJROD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MjQ3NDE2MDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZDQTI4RDU3OEI2NkFEMUVDNTIzNDM1RjM1ODlFMkRDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzUzNTUzMFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsWEdmODhJM1JjLVNZOHA1Z0c1UkpBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmNTEwZWUxLWZmNTgtNDhlNS04MGU4LTEzYjk0ODRjN2EwY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOCxcbiAgICAgIDM2LFxuICAgICAgMTEsXG4gICAgICA4NSxcbiAgICAgIDEzNCxcbiAgICAgIDM5LFxuICAgICAgMTkxLFxuICAgICAgMjUzLFxuICAgICAgMjI4LFxuICAgICAgNjYsXG4gICAgICAxODAsXG4gICAgICA4OSxcbiAgICAgIDE1MSxcbiAgICAgIDQsXG4gICAgICAxMTksXG4gICAgICA1MSxcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgMTc3LFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDIwLFxuICAgICAgMTQsXG4gICAgICA1OCxcbiAgICAgIDIxMixcbiAgICAgIDE3MSxcbiAgICAgIDE0NCxcbiAgICAgIDIwNSxcbiAgICAgIDEwMCxcbiAgICAgIDIzNixcbiAgICAgIDEyNyxcbiAgICAgIDM3LFxuICAgICAgMjQ3LFxuICAgICAgMzgsXG4gICAgICAxMTIsXG4gICAgICAxNjgsXG4gICAgICAxMzMsXG4gICAgICAxMjksXG4gICAgICAxLFxuICAgICAgMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVBUUjhUV0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNDc0MTYwNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTI3NTc4MTk1MTMyNDE2OjI5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlZpbmVpXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlVN0drUW92U0pzUVlZQWlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrMzRtc3lXWS9GL2tJeGR0MHhHei90ZGNuQTdWdjd5Q29lSlpKUUV6VkdvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFqMHM5RVUraUxuZ0xFSi9tWnZ4amJYUDQzU0JzUUdUNzNtVUMzT3AvMStjNXhMM3Q3bk5kN0czSkRTc3JDVXh3WXY1a29yenRmQ3A1dzRQM2I3UENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNqT1FJZ2QwNisyNVRXRXVMeHA5Zk1UTXJZRzRoanZwZm1mRXYyNDNhVUwwbVNnNTlhZVpJU09WcWdYWlVhRDdtYnJQYzFpR2M5aUx6cUxFWnBzZ0FnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYyNDc0MTYwNzoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM1MzU1MjcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJYUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlhRi5qc29uIjogIntcImtleURhdGFcIjpcInM3ZGRrUEFjbjVRWFUwT0dtNUx5M1hTRE5NQTB0eXdmOHRoZXBabjhaSk09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjIxOTczMDgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTM0NTUzNTgxMDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©Vinei" ,
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Vinei-Adobe",
  ownername:process.env.OWNER_NAME|| "It'x Vinei",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-984624d2-5a8b-41c8-bd8e-fde234352012",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "VINEI"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
