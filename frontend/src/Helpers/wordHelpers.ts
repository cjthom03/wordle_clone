import { TAllWords } from '../Reducers/wordsReducer';

export const wordExists = (allWords: TAllWords, word: string): boolean => {
  return allWords.includes(word)
}
