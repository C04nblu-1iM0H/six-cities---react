import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {SortingValueTypes} from '../../const';
import { City } from '../../types/city';

export const getCity = (state: State): City => state[NameSpace.App].city;
export const getSortTypes = (state: State): SortingValueTypes => state[NameSpace.App].sortType;
export const getUserEmail = (state: State): string | null => state[NameSpace.App].userEmail;

