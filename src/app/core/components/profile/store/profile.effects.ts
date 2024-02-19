import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProfilesService, User } from 'src/app/core/services/profiles.service';
import {
  getProfile,
  getProfileError,
  getProfileSuccess,
} from './profile.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileEffects {
  constructor(private actions$: Actions, private profileSrv: ProfilesService) {}

  affectProfile$ = createEffect (() =>
  this.actions$.pipe(
    ofType(getProfile),
    switchMap((action: { id: number }) => {
      return this.profileSrv.getProfile(action.id).pipe(
        map(
          (user: User) => getProfileSuccess({ user }),
          catchError((error) => of(getProfileError))
        )
      );
    })
  ));
}
