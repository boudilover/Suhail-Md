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
global.github=process.env.GITHUB|| "https://github.com/Boudi-lover/Babai";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919064763129";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_30_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgODksXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDk5LFxuICAgICAgICA4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgOTksXG4gICAgICAgIDM5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDczLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI4LFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM4LFxuICAgICAgICA2NyxcbiAgICAgICAgODgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIsXG4gICAgICAgIDU3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJUUmVVcFp4TWgyTEhvNHpoY3ZldWd0aHk2Y1RHdXBEK3MybjI3djFpem5zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTYwOEZERTg3MjMxQTIzRjQxRUU4RjkyRDc5MkRCMUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NDAxNDIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE3Nzk3NzM5MjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMURFMDcwNTNCMjNEQzM1NTNEMkFFRjVBN0JGM0Y2RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk0MDE0MjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVzdMT3JUWjNUVUsxczJDdG5USmZzZ1wiLFxuICBcInBob25lSWRcIjogXCI4NmMwYzk0ZS00NDRlLTRmY2QtOGM5Yy01YmU3MDk5NjQ2NzJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAyMTIsXG4gICAgICAyMDUsXG4gICAgICA5MCxcbiAgICAgIDE0LFxuICAgICAgODksXG4gICAgICAzNyxcbiAgICAgIDIyNixcbiAgICAgIDQ0LFxuICAgICAgMTM4LFxuICAgICAgMjE4LFxuICAgICAgOTcsXG4gICAgICA5NixcbiAgICAgIDIxNyxcbiAgICAgIDE1NCxcbiAgICAgIDExMyxcbiAgICAgIDE3OSxcbiAgICAgIDEzMCxcbiAgICAgIDE5OSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICAxNixcbiAgICAgIDQ5LFxuICAgICAgNzAsXG4gICAgICAyNDYsXG4gICAgICAzNyxcbiAgICAgIDEzNyxcbiAgICAgIDE0LFxuICAgICAgMTA0LFxuICAgICAgNTQsXG4gICAgICAxOTcsXG4gICAgICAyNDcsXG4gICAgICA3NSxcbiAgICAgIDU5LFxuICAgICAgNDQsXG4gICAgICA4OSxcbiAgICAgIDI5LFxuICAgICAgODksXG4gICAgICA3OSxcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKS1ozRjc0SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE3Nzk3NzM5MjQ2OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQwNDI0NjUxNjI4NzcwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pxcm9BREVNZjM3N01HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpRmo4QWtlQmZkZm9pNU5xdkFBeGFSaVNHdG9YbVExK0dCSHBJcGtXS1dJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInI3NVk1Rm4rc2dSYmpNdDVVOEhoV2tyOWYzTmdBVElXWU40SHplbTQ1RkswUWMvcmNpektZQ3V0WGpzbmJ3ZUxnL1luTW9PUlVFYkUrNzRWTjlsRkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImgwc1hub2VTRWZkVHNTZXJVVnVWZVM2cDhBenFKdjBwQWNXR3Z5ZFlWSGtTZUJaaENJYkdOSVh1SjI3RWxLV1h0UzZPWUczYzVib211by9qYUJpVWlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNzc5NzczOTI0Njo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTQwMTQxNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVpNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWk0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiYUtUUmoyYUpLUUtKbncvWU5RN0U1NHlyWXZFWi9lSXExYVFtVzZ0WUJZMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4MDYwNzM3MDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTQwMTQyMjc0M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Babai-yt",
  ownername:process.env.OWNER_NAME|| "Babaiyt",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
