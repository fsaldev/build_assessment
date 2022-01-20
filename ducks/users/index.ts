import { AxiosError } from "axios";
import { Users } from "../../interfaces/UserPayloads";

interface IUsersState {
  list: {
    data: Users[];
    isLoading: boolean;
    error: AxiosError | null;
  };
  selectedUser: Users | null;
}

const initialState: IUsersState = {
  list: {
    data: [],
    isLoading: false,
    error: null,
  },
  selectedUser: null,
};

const reducer = (state = initialState, action: {type: string, payload: any}) => {
  const MasterMap: Record<string, () => IUsersState> = {
    "USERS/PUT_USER_REQUEST": (): IUsersState => ({
      ...state,
      list: {
        ...state.list,
        isLoading: true,
        error: null,
      },
    }),
    "USERS/PUT_USER_SUCCESS": (): IUsersState => ({
      ...state,
      list: {
        ...state.list,
        data: action?.payload?.items,
        isLoading: false,
        error: null,
      },
    }),
    "USERS/PUT_USER_FAILURE": (): IUsersState => ({
      ...state,
      list: {
        ...state.list,
        error: action?.payload,
        isLoading: false,
      },
    }),
    "USERS/SELECT_USERS": (): IUsersState => ({
      ...action.payload,
    }),
  };

  try {
    return MasterMap[action?.type]();
  } catch {
    return initialState;
  }
};

export default reducer;
