const { 
  TRIVIAL_PARTITION_KEY,
  MAX_PARTITION_KEY_LENGTH,
  hashIt,
  isNullOrEpmty,
  ensureString
} = require("./util");

const getKeyFromPartitionKey = (partitionKey) => {
  const candidate = ensureString(partitionKey);
  return candidate.length > MAX_PARTITION_KEY_LENGTH ? hashIt(candidate) : candidate;
};

const getKeyFromEvent = (event) => {
  const { partitionKey } = event;

  return isNullOrEpmty(partitionKey) ? 
    hashIt(JSON.stringify(event)) : 
    getKeyFromPartitionKey(partitionKey);

};

const deterministicPartitionKey = (event) => 
  isNullOrEpmty(event) ? 
    TRIVIAL_PARTITION_KEY: 
    getKeyFromEvent(event);

module.exports = { deterministicPartitionKey };