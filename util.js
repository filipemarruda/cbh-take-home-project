const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";

const MAX_PARTITION_KEY_LENGTH = 256;

const hashIt = (it) => crypto.createHash("sha3-512").update(it).digest("hex");

const isNullOrEpmty = (input) => input === null || input === undefined || input === "";

const ensureString = (input) =>  typeof input === "string" ? input : JSON.stringify(input)

module.exports = {
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
  hashIt,
  isNullOrEpmty,
  ensureString
}