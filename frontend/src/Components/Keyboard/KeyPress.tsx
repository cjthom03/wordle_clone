import * as React from 'react';
import {useState, useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addLetter, removeLetter, checkRow } from '../../Reducers/rowReducer';
import { RowStates } from '../../Types';

const singleCharacter = new RegExp('^[a-zA-Z]{1}$');

export const KeyPress = () => {
  const [key, setKey] = useState('')
  const rowState = useAppSelector((state) => state.rows.rowState)
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
    if(rowState !== RowStates.IDLE) return;
    if(key.match(singleCharacter)) dispatch(addLetter(key.toLowerCase()))
    if(key === 'Backspace') dispatch(removeLetter())
    if(key === 'Enter') dispatch(checkRow())
  }, [key])


  return(<div></div>)
}
