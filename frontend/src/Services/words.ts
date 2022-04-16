import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { REAL_WORDS, CORRECT_WORD } from '../dummyData';

type TWordTestResult = number[]

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getWords: build.query<Array<string>, void>({
      queryFn: () => {
        return { data: REAL_WORDS }
      }
    }),
    testWord: build.query<TWordTestResult , string>({
      queryFn: async (word) => {
        return { data: testWordResults(word) }
      }
    })
  })
})

export const { useGetWordsQuery, useTestWordQuery } = wordApi;


// Temp Functions until implemented in backend

const testWordResults = (word: string): TWordTestResult => {
  return word.split('').map((letter, i): number => {
    if(!CORRECT_WORD.includes(letter)) return 0;
    return CORRECT_WORD[i] === letter ? 2 : 1;
  })
}
