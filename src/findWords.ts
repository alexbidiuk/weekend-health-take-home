/**
 * This function creates a frequency map of letters from a given string, treating uppercase
 * and lowercase letters as distinct and accommodating non-English characters.
 * @param s - A string from which the letter frequency map is generated.
 * @returns A record object with keys as letters and values as their frequency.
 */
function createFrequencyMap(s: string): Record<string, number> {
    const freqMap: Record<string, number> = {};
    // Note: No conversion to lowercase, to maintain case sensitivity
    for (const char of s) {
        if (!freqMap[char]) {
            freqMap[char] = 1;
        } else {
            freqMap[char]++;
        }
    }
    return freqMap;
}

/**
 * This function finds all words in the dictionary that can be formed by the letters
 * of the input string, considering case sensitivity and non-English characters.
 * @param inputString - The string of letters to be used for forming words.
 * @param dictionary - An array of valid words.
 * @returns An array of words that can be formed from the input string.
 */
function findWords(inputString: string, dictionary: string[]): string[] {
    const result: string[] = [];
    const inputFreqMap = createFrequencyMap(inputString);

    for (const word of dictionary) {
        const wordFreqMap = createFrequencyMap(word);
        if (canFormWord(wordFreqMap, inputFreqMap)) {
            result.push(word);
        }
    }

    return result;
}

/**
 * Helper function to determine if a word can be formed from the letters in the input string,
 * considering case sensitivity and non-English characters.
 * @param wordFreqMap - The frequency map of the word being tested.
 * @param inputFreqMap - The frequency map of the input string.
 * @returns A boolean indicating whether the word can be formed or not.
 */
function canFormWord(wordFreqMap: Record<string, number>, inputFreqMap: Record<string, number>): boolean {
    for (const [letter, count] of Object.entries(wordFreqMap)) {
        if (!(letter in inputFreqMap) || inputFreqMap[letter] < count) {
            return false;
        }
    }
    return true;
}

export default findWords;