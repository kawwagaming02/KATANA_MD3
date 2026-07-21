const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "dYFiDBzQ#2ssg2jgSnBpy-EmHLq2ErIgVumnM9j8Wb1ArWNFCjOI",
  MONGODB: process.env.MONGODB || "mongodb://mongo:habtEKdHITgbsKhXNpaHojOIRyZkjYYR@sakura.proxy.rlwy.net:46961",
  OWNER_NUM: process.env.OWNER_NUM || "94761495926",
};
