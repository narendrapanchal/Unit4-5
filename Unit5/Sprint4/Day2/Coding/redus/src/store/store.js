import { reducer } from "./reducer";
import {createStore} from "redux"
export const store = new createStore(reducer);