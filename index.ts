import findWords from './src/findWords';

// Example test cases
const testCases = [
    {
        inputString: 'examplestring',
        dictionary: ['sample', 'example', 'string', 'ring', 'sting', 'extras'],
        expected: ['sample', 'example', 'string', 'ring', 'sting', 'extras'],
    },
    {
        inputString: 'aäA',
        dictionary: ['aä', 'Aä', 'aa', 'äA'],
        expected: ['aä', 'Aä', 'äA'],
    },
    {
        inputString: 'dD',
        dictionary: ['Dd', 'dd', 'D', 'd'],
        expected: ['Dd', 'D', 'd'],
    },
    {
        inputString: 'a',
        dictionary: ['a', 'aa', 'aaa', 'b', 'ab'],
        expected: ['a'], // Only 'a' can be formed since there's only one 'a' in the input string.
    },
    {
        inputString: 'aa',
        dictionary: ['a', 'aa', 'aaa', 'b', 'ab'],
        expected: ['a', 'aa'], // Both 'a' and 'aa' can be formed.
    },
    // Add more test cases, especially edge cases
];

// Running the test cases
testCases.forEach((testCase, index) => {
    const result = findWords(testCase.inputString, testCase.dictionary);
    console.warn(
        `\n \n Start running Test Case ${index + 1} with \n`,
        `dictionary: ${result.join(', ')} \n`,
        `AND inputString: ${testCase.inputString}`
    );
    console.warn(`\n Test Case ${index + 1} results: \n`, result.join(', '));
    console.assert(JSON.stringify(result) === JSON.stringify(testCase.expected), `\n Test Case ${index + 1} failed \n`);
});
