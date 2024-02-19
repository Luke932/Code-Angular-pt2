import { Component, OnInit } from '@angular/core';
import { ProfileState } from './store/profile.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getDisplayName } from './store/profile.selector';
import { ProfilesService } from '../../services/profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public profileName$: Observable<string> = this.store.pipe(select(getDisplayName) as any);

  constructor(private readonly store: Store<ProfileState>,
    private profileSrv: ProfilesService){}


    ngOnInit(): void {
      this.profileSrv.getProfiles()
      .subscribe(res => console.log(res)
      )
    }
}
