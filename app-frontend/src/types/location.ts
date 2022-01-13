export type Background = {
  hash: string
  key: string
  pathname: string
  search: string
  state: undefined
} | undefined;

export interface Location {
  pathname: string;
  state?: {
    background?: Background
  }
}
