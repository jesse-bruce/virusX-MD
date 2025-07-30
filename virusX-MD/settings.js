//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : virusX-MD 
// @author : Jesse Bruce
// @telegram : http://t.me/virusX
// @github : jesse-bruce
// @whatsapp : +254114699755

//----------------------[ virusX-MD ]----------------------//

const fs = require('fs')
const { color } = require('./virusX/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your virusX-MD session id here; must start with virusX~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'virusX-MD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '254114699755' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['254114699755', ''];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Jesse Bruce' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "virusX-MD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Nairobi';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "virusX" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/jessebruce2791"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©virusX-MD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©virusX-MD', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ virusX-MD ]----------------------//