const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "FMM3mYob#LwKN3FRe96hxBt1JeABwlmL-_c_ZP0YrEbzFfk9lCsw",
  MONGODB: process.env.MONGODB || "mongodb://mongo:habtEKdHITgbsKhXNpaHojOIRyZkjYYR@sakura.proxy.rlwy.net:46961",
  OWNER_NUM: process.env.OWNER_NUM || "94761495926",
};
