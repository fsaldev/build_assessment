import { createApiConstants } from '../../utils/constant';
import { SELECT_USERS } from './constants';

export const NAMESPACE = 'USERS';
export const PUT_Users_TYPES = createApiConstants(NAMESPACE, 'put_user');
export const SELECT_USERS_TYPE = `${NAMESPACE}/${SELECT_USERS}`