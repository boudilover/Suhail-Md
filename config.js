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
global.github=process.env.GITHUB|| "https://github.com/Babaiyt/babai-yt";
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_21_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDM3LFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEzLFxuICAgICAgICA5NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI3LFxuICAgICAgICA1LFxuICAgICAgICAzOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTksXG4gICAgICAgIDM4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDUwLFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMXhRTTFlSTd3cVRjOGxVeUdzUFRYRVdSZVRYUVE3emI0NUdyUmk4UUZ6az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTc3OTc3MzkyNDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVBMjI3Q0Q5MEYwRTJCNjhFRTc5OUZCRTk3OUIzNDdBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMxNDQ4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxNzc5NzczOTI0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkFCQUFBQ0U2NDhGOEM4QUU5RjkzMTEzRDAwMjFGQThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzE0NDgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZra29Rc0pkU1hTS3RmUk1tcS1ZcmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDU5YmMwNWMtZGUwZS00ZTVhLWEwMmEtODUwNGY0YmMwOTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNixcbiAgICAgIDQ4LFxuICAgICAgMjA1LFxuICAgICAgMjAsXG4gICAgICAxNzQsXG4gICAgICAyMCxcbiAgICAgIDE0LFxuICAgICAgNTMsXG4gICAgICAxODYsXG4gICAgICAzNSxcbiAgICAgIDI1LFxuICAgICAgMjU1LFxuICAgICAgMTAyLFxuICAgICAgMTAxLFxuICAgICAgMjQ0LFxuICAgICAgMTQ2LFxuICAgICAgMTAsXG4gICAgICAyMDUsXG4gICAgICA4NixcbiAgICAgIDEyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA0NyxcbiAgICAgIDQ5LFxuICAgICAgMTUxLFxuICAgICAgMTA2LFxuICAgICAgMjUyLFxuICAgICAgNjUsXG4gICAgICAyMjYsXG4gICAgICAyMzcsXG4gICAgICA5NCxcbiAgICAgIDE0MixcbiAgICAgIDM3LFxuICAgICAgODQsXG4gICAgICAxMzYsXG4gICAgICAyMjgsXG4gICAgICAxOCxcbiAgICAgIDksXG4gICAgICAxMTEsXG4gICAgICAxNDcsXG4gICAgICAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZHNk01Wlc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTc3OTc3MzkyNDY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDA0MjQ2NTE2Mjg3NzA6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimIXlvaEg4Y+0IOGOqiDhj7Qg4Y6qIOGPhiDlvaHimIVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOckNqN1FHRUs3UTZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhZcGZ4c2hkbVQvcWs5TjBUS1loRi9SN3JCNkpjbXFXTkRXN2dXUEhwVU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ0ZZbkFoWVVxUVBPT2xmcUkwTVZ5blBzVzczdUtxdDhsUjJnenQrNVIzMG45ZHJyMFdnY24yUmtvYmZ0dFNHYXhKblh0VFJnN2QvSnlCeFlhcmZDRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0F6TEF3dmdzN0h4VmprZmVpUTFGcUZWOVgyOTJ2U0craGdDc29GampHckMvVkFhZXBJYXlPZkhyejlIZVpURTM2QkFpQ1A1ZUpzU1p6ek42bDJxakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE3Nzk3NzM5MjQ2OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzMTQ0ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhRcC5qc29uIjogIntcImtleURhdGFcIjpcIklVMDNIYWlOVlM3czFWM1JldTBrYjdjd2JhWk9mTGhPazRwMjQxS1o5R0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxOTkxODkzOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MzE0NDgyODM3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || " BABABI YTʜ",
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
  LANG: ( process.env.THEME ||  "BABAI"  ).toUpperCase(),



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
