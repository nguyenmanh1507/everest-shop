// @flow

type SizeSuit = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL'

export type SizesListType = {
  /** Function handle value on change */
  handleSizeSelect: () => void,
  /** Group name for sizes */
  name: string,
  /** Choose multi size or not */
  selectMulti?: boolean,
  /** Array size of choice (size name follow Material sizes) */
  sizes?: Array<SizeSuit>
}

export type SizeType = {
  /** Size name */
  size: string,
  /** Function handle value on change */
  handleSizeSelect: () => void,
  /** Group name for sizes */
  name: string,
  /** Choose multi size or not */
  selectMulti?: boolean
}
