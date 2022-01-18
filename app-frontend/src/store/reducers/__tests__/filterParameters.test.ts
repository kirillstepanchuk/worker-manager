import filterParameters, { initialState } from '../filterParameters';
import { setFilterParameters } from '../../actions/setFilterParameters/setFilterParameters';
import { mockFilterPrameters } from '../../../mocks/store/constants';

describe('filter parameters reducer', () => {
  it('dispatch SET_FILTER_PARAMETERS action', () => {
    const reducer = filterParameters(initialState, setFilterParameters(mockFilterPrameters));
    expect(reducer).toEqual({
      ...initialState,
      data: mockFilterPrameters,
    });
  });
});
