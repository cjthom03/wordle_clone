import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { CORRECT_WORD } from '../dummyData';

type TWordTestResult = number[]

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
    getWords: build.query<Array<string>, void>({
      query: () => 'words'
    }),
    getWord: build.query<string, void>({
      queryFn: () => {
        return { data: CORRECT_WORD }
      }
    }),
    testWord: build.query<TWordTestResult , string>({
      queryFn: (word) => {
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
