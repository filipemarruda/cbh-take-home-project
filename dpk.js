const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) { // event is not null or undefined
    if (event.partitionKey) {
      candidate = event.partitionKey; // event has a partitionKey
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex"); // event does not have a partitionKey
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate); // candidate is not a string
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY; // candidate is null or undefined
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex"); // candidate is too long
  }
  return candidate;
};