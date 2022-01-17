export type FilterParameters = {
  positionType?: string,
  sortingType?: string,
  time?: string,
} | null;

export interface FilterParametersData {
  data: FilterParameters,
}
