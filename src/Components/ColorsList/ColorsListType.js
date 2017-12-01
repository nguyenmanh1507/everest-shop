// @flow

type ColorSuit =
  | 'red'
  | 'pink'
  | 'purple'
  | 'deep-blue'
  | 'indigo'
  | 'blue'
  | 'light-blue'
  | 'cyan'
  | 'teal'
  | 'green'
  | 'light-green'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'deep-orange'
  | 'brow'
  | 'grey'
  | 'blue-grey'
  | 'black'

export type ColorsListType = {
  /** Function handle value on change */
  handleColorSelect: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Group name for colors */
  name: string,
  /** Choose multi color or not */
  selectMulti?: boolean,
  /** Array color of choice (color name follow Material colors) */
  colors?: Array<ColorSuit>
}

export type ColorType = {
  /** Color name */
  color: string,
  /** Function handle value on change */
  handleColorSelect: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Group name for colors */
  name: string,
  /** Choose multi color or not */
  selectMulti?: boolean
}
