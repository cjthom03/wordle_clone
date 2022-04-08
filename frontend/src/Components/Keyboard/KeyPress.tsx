import * as React from 'react';
import {useState, useCallback, useEffect } from 'react';

import { useAppDispatch } from '../../hooks';
import { addLetter, removeLetter, nextRow } from '../../Reducers/rowReducer';

const singleCharacter = new RegExp('^[a-zA-Z]{1}$');

export const KeyPress = () => {
  const [key, setKey] = useState('')
  const dispatch = useAppDispatch();

  const checkKeyPress = useCallback((event) => {
    setKey(event.key)
  }, [key])

  const clearKey = ():void => setKey('');

  useEffect(()=>{
    window.addEventListener("keydown", checkKeyPress)
    window.addEventListener("keyup", clearKey)

    return ()=>{
      window.removeEventListener("keydown", checkKeyPress)
      window.addEventListener("keyup", () => setKey(''))
    }
  }, [])

  useEffect(() => {
    if(key.match(singleCharacter)) dispatch(addLetter(key.toLowerCase()))
    if(key === 'Backspace') dispatch(removeLetter())
    if(key === 'Enter') dispatch(nextRow())
  }, [key])


  return(<div></div>)
}
