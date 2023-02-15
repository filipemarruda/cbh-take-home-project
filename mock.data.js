const LITTLE_PARTITION_KEY = 12345678901234567890123123123;

const BIG_PARTITION_KEY = {
  a: 1123123123,
  b: {
    c: 123123123,
    d: {
      e: 123123123,
      f: 123123123,
      g: {
        h: 123123123,
        i: {
          j: 123123123,
          d: {
            e: 123123123,
            f: 123123123,
            g: {
              h: 123123123,
              i: {
                j: 123123123,
                d: {
                  e: 123123123,
                  f: 123123123,
                  g: {
                    h: 123123123,
                    i: {
                      j: 123123123,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const SIMPLE_EXAMPLE_EVENT = { a: 1, b: 2, c: 3 };

const EMPTY_PARTITION_KEY_EVENT = { partitionKey: '' };

module.exports = {
  LITTLE_PARTITION_KEY, 
  BIG_PARTITION_KEY, 
  SIMPLE_EXAMPLE_EVENT,
  EMPTY_PARTITION_KEY_EVENT,
  STRING_LITTLE_PARTITION_KEY: JSON.stringify(LITTLE_PARTITION_KEY),
  STRING_BIG_PARTITION_KEY: JSON.stringify(BIG_PARTITION_KEY),
  STRING_SIMPLE_EXAMPLE_EVENT: JSON.stringify(SIMPLE_EXAMPLE_EVENT),
  STRING_EMPTY_PARTITION_KEY_EVENT: JSON.stringify({ partitionKey: '' })
}