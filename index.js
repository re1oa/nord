const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const bot = new Discord.Client(); // Объявляем, что robot - бот
const handler = require("./src/structures/commandHandler.js")(bot);
const fs = require('fs'); // Подключаем родной модуль файловой системы node.js 
const message = require("./src/structures/eventHandler.js")(bot);
const { MessageActionRow } = require('discord.js');
let config = require('./config.json'); // Подключаем файл с параметрами и информацией
let token = config.token; // «Вытаскиваем» из него токен
let prefix = config.prefix; // «Вытаскиваем» из него префикс
let developer = config.developer; // «Вытаскиваем» из него префикс

bot.login(token); // Авторизация бота
