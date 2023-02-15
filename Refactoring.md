# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
The first thing I did was to idenfity what is the intent and how works the actual code.
Some points that I identified:
- The function should return a string with the deterministic partition key
- The function should return a string with the max length of MAX_PARTITION_KEY_LENGTH
- The function should return TRIVIAL_PARTITION_KEY if the input event is an empty string or null
- The function should return a hash of the input event if the input event does not have a property called `partitionKey` or if this property exists but is an empty string or null
- If the input event has a property called `partitionKey` the function should:
  - ensure that the partitionKey is a string (if not, it should be converted to a string)
  - ensure that the partitionKey is not longer than MAX_PARTITION_KEY_LENGTH (if it is, should return a hash of it)
  - return the partitionKey
After that I wrote the unit tests to cover the existing functionality and ensure that my refactor doesn't break it.
Then I started to refactor the function to be as "clean" and "readable" as possible (including the unit tests).