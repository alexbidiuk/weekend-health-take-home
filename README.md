## High-Level Approach

The solution employs a frequency mapping strategy that counts occurrences of each character without converting them to a common case. This respects the unique identity of each character, be it English or non-English, and whether it's uppercase or lowercase.

### Functionality

- `createFrequencyMap`: Generates a map with the frequency of each character in a given string, distinguishing between different cases and handling non-English characters.
- `findWords`: The main function to find all possible words from the dictionary that can be formed with the input string, considering the case and character set.
- `canFormWord`: A helper function that checks if a word can be formed using the input string's characters based on the frequency maps.

### Further Testing

With more time, the following additional tests would be considered:

- Performance testing with large dictionaries and input strings.
- Fuzz testing to ensure robustness against unusual or unexpected inputs.

## Setup and Execution
Supports node version 20.0.0 and above.

The following command will install TypeScript, compile the code, and run the test cases that located in index.ts file:

```sh
npm i && npm run start
