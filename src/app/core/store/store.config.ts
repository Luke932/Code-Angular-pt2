import { ActionReducerMap } from "@ngrx/store";
import { ProfileState, profileReducer } from "../components/profile/store/profile.reducer";

export interface AppState{
    profile: ProfileState;
}

export const reducers: ActionReducerMap<AppState> = {
    profile: profileReducer
}