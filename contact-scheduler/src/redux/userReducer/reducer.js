import { USERFAIL, USERREQUEST, USERSUCESS } from "./actionType";

const initState = {
  isLoading: false,
  isError: true,
  users: [],
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USERREQUEST:
      return { ...state, isLoading: true };
    case USERSUCESS:
      return { ...state, isLoading: false, isError: false, Users: payload };
    case USERFAIL:
      return { ...state, isError: true };
    default:
      return state;
  }
};

// "name": "",
//     "email": "",
//     "phone": "",
//     "lable": "",
//     "userID":"",
//     "book_slots":""
