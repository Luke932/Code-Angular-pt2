import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbilityService } from '../../services/ability.service';
import {
  Observable,
  Subject,
  Subscription,
  forkJoin,
  map,
  reduce,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  public abilitiesList$!: Observable<any[]>;
  private subscription: Subscription = new Subscription();
  private obsTest$ = new Observable<any>();

  constructor(public route: ActivatedRoute, public abilitySrv: AbilityService) {
    super();
  }

  override ngOnInit(): void {
    this.abilitiesList$ = this.route.params.pipe(
      switchMap((res) => this.abilitySrv.joinHeroAbilities(+res['id'])),
      switchMap((x: any) => {
        var obs: Observable<any>[] = [];
        x.forEach((k: any) => {
          var itemObs = this.abilitySrv.getAbilitiesById(k.abilityId);
          obs.push(itemObs);
        });
        debugger;
        return forkJoin(obs);
      })
    );
    /*obs.subscribe((res) => {
    });*/
    // Aggiungi la sottoscrizione al tuo oggetto Subscription
    this.subscription.add(this.abilitiesList$.subscribe());
    this.obsTest$.pipe(takeUntil(this.unsubscribeAll)).subscribe();
  }

  saveAbility(item: any) {
    this.abilitySrv.saveAbility(item).pipe(take(1)).subscribe();
  }

  override ngOnDestroy(): void {
    //this.abilitiesList$.subscribe().unsubscribe();
    this.subscription.unsubscribe();
  }
}
