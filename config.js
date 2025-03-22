/*░██████╗░░█████╗░██╗░░░░░██████╗░███████╗███╗░░██╗
██╔════╝░██╔══██╗██║░░░░░██╔══██╗██╔════╝████╗░██║
██║░░██╗░██║░░██║██║░░░░░██║░░██║█████╗░░██╔██╗██║
██║░░╚██╗██║░░██║██║░░░░░██║░░██║██╔══╝░░██║╚████║
╚██████╔╝╚█████╔╝███████╗██████╔╝███████╗██║░╚███║
░╚═════╝░░╚════╝░╚══════╝╚═════╝░╚══════╝╚═╝░░╚══╝

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░*/









const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //  සෙසන් අයිඩී එක දාන්න👇👇👇 (උඩු කොමා දෙක ඇතුලේ)
  SESSION_ID: process.env.SESSION_ID || "Golden-Queen-MD-Z953TB6a#XT1h8BTqiyxBrGwcg_agnpGAMtb5ZEpB9QvZeATtmQYftrc", 

//  Mongodp URl එක දාන්න 👇👇👇 (උඩු කොමා දෙක ඇතුලේ )
  MONGODB: process.env.MONGODB || "Golden-Queen-MD-Z953TB6a#XT1h8BTqiyxBrGwcg_agnpGAMtb5ZEpB9QvZeATtmQYftrc",


MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
