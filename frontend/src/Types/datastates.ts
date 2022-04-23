export enum DataStates {
  ABSENT = 'absent',
  CORRECT = 'correct',
  PRESENT = 'present',
  TBD = 'tbd',
}

export enum RowStates {
  IDLE = 'idle',
  PROCESSING = 'processing',
  COMPLETE = 'complete'
}


export enum GameStatus {
  PLAYING = 'playing',
  LOST = 'lost',
  WON = 'won'
}

export const datastateMap = [DataStates.ABSENT, DataStates.PRESENT, DataStates.CORRECT]

export const letterTestToDatastate = {
  [DataStates.TBD]: -1,
  [DataStates.ABSENT]: 0,
  [DataStates.PRESENT]: 1,
  [DataStates.CORRECT]: 2,
}

