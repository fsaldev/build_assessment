import { createAction, createApiAction } from '../../utils/actions';
import { PUT_Users_TYPES, SELECT_USERS_TYPE } from './types';
import api from './api';

export const getUserss = createApiAction(PUT_Users_TYPES, api.putUserRequest);
export const selectUsers = createAction(SELECT_USERS_TYPE);
