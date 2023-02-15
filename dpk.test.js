const { 
  TRIVIAL_PARTITION_KEY, 
  hashIt 
} = require("./util");

const { deterministicPartitionKey } = require("./dpk");

const {
  LITTLE_PARTITION_KEY, 
  BIG_PARTITION_KEY, 
  SIMPLE_EXAMPLE_EVENT,
  EMPTY_PARTITION_KEY_EVENT,
  STRING_LITTLE_PARTITION_KEY,
  STRING_BIG_PARTITION_KEY,
  STRING_SIMPLE_EXAMPLE_EVENT,
  STRING_EMPTY_PARTITION_KEY_EVENT
} = require("./mock.data");


describe("deterministicPartitionKey", () => {
  it("Returns the literal TRIVIAL_PARTITION_KEY when given empty or no input", () => {
    expect(deterministicPartitionKey()).toBe(TRIVIAL_PARTITION_KEY);
    expect(deterministicPartitionKey('')).toBe(TRIVIAL_PARTITION_KEY);
  });

  it(`Returns the string input for partitionKey smaller than MAX_PARTITION_KEY_LENGTH`, () => {
    expect(deterministicPartitionKey({ partitionKey: LITTLE_PARTITION_KEY }))
      .toBe(STRING_LITTLE_PARTITION_KEY);
  });

  it(`Returns the string input for partitionKey smaller than MAX_PARTITION_KEY_LENGTH`, () => {
    expect(deterministicPartitionKey({ partitionKey: LITTLE_PARTITION_KEY }))
      .toBe(STRING_LITTLE_PARTITION_KEY);
  });

  it(`Returns the hash for partitionKey greater than MAX_PARTITION_KEY_LENGTH`, () => {
    expect(deterministicPartitionKey({ partitionKey: BIG_PARTITION_KEY }))
      .toBe(hashIt(STRING_BIG_PARTITION_KEY));
  });
  
  it("Returns event hash if event does not have paritionKey, the key is empty", () => {
    expect(deterministicPartitionKey(SIMPLE_EXAMPLE_EVENT))
      .toBe(hashIt(STRING_SIMPLE_EXAMPLE_EVENT));

    expect(deterministicPartitionKey(EMPTY_PARTITION_KEY_EVENT))
      .toBe(hashIt(STRING_EMPTY_PARTITION_KEY_EVENT));

  });
});

