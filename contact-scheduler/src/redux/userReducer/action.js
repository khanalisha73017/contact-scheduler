import { USERFAIL, USERSUCESS } from "./actionType";
import axios from "axios";

export const gatAllDATA = (dispatch) => {
  axios.get(`https://worrisome-plum-parka.cyclic.app/allUser`);
};
