import reducer from './reducers';
import * as types from './types';
import { theme as themeAction } from './actions';
import themeSaga from './sagas';

export { types, themeSaga, themeAction };

export default reducer;
