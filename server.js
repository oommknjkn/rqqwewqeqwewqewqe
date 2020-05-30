const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://newuppte.glitch.me/`);
}, 280000);
const fetch = require('node-fetch');
const Discord = require('discord.js');  
const client = new Discord.Client();
const jimp = require('jimp');
const ownerID = "700316570743996426";
const sql = require("sqlite");
const moment = require('moment');
const zalgo = require('zalgolize');  
const math = require('math-expression-evaluator');   
const figlet = require('figlet');   
const fs = require('fs');  
const Canvas = require('canvas');
const userData = JSON.parse(fs.readFileSync('./userData.json', "utf8"));
const ms = require('ms');  
const prefix = '.'
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyBvc8cJL2Ng8DLEPkONQs7tLwASubP-68I"); //
const ytdl = require("ytdl-core");
const Gamedig = require('gamedig');
const d_languge = 1;
const pref = require('./settings.json');
///////////lang selecte - test
client.on('message', message => {
    var args = message.content.split(" ")
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }

if (args[0] === prefix + "setlanguege") {
    if (!message.member.hasPermission("ADMINISTRATOR")){
        message.channel.send("This Command Only For Admin");
    }else if (!args[1]){
      var select = new Discord.RichEmbed()
          .setColor("BLUE")
          .setTitle(`الرجاء اختيار لغة - Please choose a language`)
          .addField("English", `${prefix}setlanguege en`,true)
          .addField("العربية", `${prefix}setlanguege ar`,true)
          .setFooter(`Xing Bot`)
            message.channel.send(select);
        }else if(args[1]=="en"){
          var en = new Discord.RichEmbed()
          .setTitle(`Languege Change`)
          .addField("The Languege Has Ben Change To :", "Englich")
            message.channel.send(en);
            pref[message.guild.id].lang = 2;
            fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
        }else if(args[1]=="ar"){
          var ar = new Discord.RichEmbed()
          .setTitle(`تغير لغة`)
          .addField("تم تغير الغة الى :", "العربية")
            message.channel.send(ar);
            pref[message.guild.id].lang = 1;
            fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
        }else {
            message.channel.send("> لم يتم العثور على الغة");
        }
}
});
//////ping - command
client.on('message', message => {
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge 
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
	if (message.content === prefix + "ping"){ // هنا الأمر
        if (findlang==1) {
            var pingar = new Discord.RichEmbed()
            .setTitle(`زينق بوت , البنق`)
            .addField(`سرعة البوت الان هي :`, `${(Date.now() - message.createdTimestamp)} MS`)
            message.channel.send(pingar)
        } else if(findlang==2) {
            var pingen = new Discord.RichEmbed()
            .setTitle(`Xing Bot Ping`)
            .addField(`The Bot Ping :`, `${(Date.now() - message.createdTimestamp)} MS`)
            message.channel.send(pingen)
        }
	}
});
////////user - command
client.on('message', message => {
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge 
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
	if (message.content === prefix + "user"){
           var args = message.content.split(" ").slice(1);
       let user = message.mentions.users.first();
       var men = message.mentions.users.first();
          var heg;
          if(men) {
              heg = men
          } else {
              heg = message.author
          }
        var mentionned = message.mentions.members.first();
           var h;
          if(mentionned) {
              h = mentionned
          } else {
              h = message.member
          }
                 moment.locale('ar-TN');
        if (findlang==1) {
const userar = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`${message.author.tag} معلومات`)
.addField("أسمك", `${message.author}`,true)
.addField("أيديك", `${message.author.id}`,true)
.addField("حسآبك", `${message.author.bot.toString().toUpperCase()}`,true)
.addField("الحالة", `${message.author.presence.status.toUpperCase()}`,true)
.addField("التاج", `${message.author.discriminator}`,true)
.addField("يلعب", `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`,true)
.addField("تم انشاء الحساب في", `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')}`,true)
.addField("دخل السيرفر في", `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`,true)
   .setFooter(message.author.username , message.author.avatarURL)
   .setThumbnail(`${message.author.avatarURL}`)
            message.channel.send(userar)
        } else if(findlang==2) {
 const useren = new Discord.RichEmbed()
.setColor("BLUE")
.setTitle(`${message.author.tag} Information`)
.addField("Username", `${message.author}`,true)
.addField("UserID", `${message.author.id}`,true)
.addField("Account", `${message.author.bot.toString().toUpperCase()}`,true)
.addField("Status", `${message.author.presence.status.toUpperCase()}`,true)
.addField("Tag", `${message.author.discriminator}`,true)
.addField("Playing", `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}`,true)
.addField("Your access to Descord before", `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')}`,true)
.addField("Join the server before", `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`,true)
   .setFooter(message.author.username , message.author.avatarURL)
   .setThumbnail(`${message.author.avatarURL}`)
            message.channel.send(useren)
        }
	}
});
/////uptime - command
client.on('message', message => {
    var findprefix;
    var findlang;
    if(message.channel.guild && !pref[message.guild.id]) {
        pref[message.guild.id] = { 
         prefix: prefix,
         lang: d_languge 
        };
     fs.writeFileSync('./settings.json', JSON.stringify(pref, null, 4));
     findprefix = prefix;
     findlang = d_languge;
    }
    if(message.channel.guild && pref[message.guild.id]){
        findprefix = pref[message.guild.id].prefix;
        findlang = pref[message.guild.id].lang;
    }
	if (message.content === prefix + "uptime"){
        let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }
        if (findlang==1) {
            const uptimear = new Discord.RichEmbed()
            .setColor("BLUE")
            .setTitle(`وقت تشغيل البوت`)
            .addField(`أيام`, `${days}`,true)
            .addField(`سأعات`, `${hours}`,true) 
            .addField(`دقآيق`, `${minutes}`,true)
            .addField(`ثواني`, `${seconds}`,true)
            message.channel.send(uptimear)
        } else if(findlang==2) {
 const uptimeen = new Discord.RichEmbed()
            .setTitle(`Uptime`)
            .setColor("BLUE")
            .addField(`Day's`, `${days}`,true)
            .addField(`Hour's`, `${hours}`,true) 
            .addField(`Minute's`, `${minutes}`,true)
            .addField(`Second's`, `${seconds}`,true)
            message.channel.send(uptimeen)
        }
	}
});
client.login("")