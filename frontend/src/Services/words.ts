import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import { REAL_WORDS } from '../dummyData';

//interface LetterTestResult {
  //inWord: boolean,
  //correctSpot: boolean,
//}

//interface WordTestResult {
  //exists: boolean,
  //guess: string
  //results: LetterTestResult[]
//}
//

export const wordApi = createApi({
  reducerPath: 'wordApi',
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getWords: build.query<Array<string>, void>({
      queryFn: () => {
        return { data: REAL_WORDS }
      }
    }),
    //testWord: build.query<WordTestResult, string>({
      //queryFn:
    //})
  })
})

export const { useGetWordsQuery } = wordApi;
