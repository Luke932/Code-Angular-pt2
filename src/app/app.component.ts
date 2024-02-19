import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  ConnectableObservable,
  Observable,
  ReplaySubject,
  Subject,
  bufferTime,
  combineLatest,
  concat,
  debounceTime,
  delay,
  distinctUntilChanged,
  empty,
  every,
  filter,
  from,
  fromEvent,
  generate,
  iif,
  interval,
  map,
  mergeMap,
  multicast,
  of,
  publish,
  range,
  share,
  startWith,
  take,
  tap,
  timer,
  withLatestFrom,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'appModule';
  message: any;

  ngOnInit(): void {
    /*this.exampleObsCold();
    this.exampleObsHot();
    this.exampleMouseClick();
    this.exampleCombineLatest();*/
    //this.exampleConcat();
    //this.exampleStartWith();
    //this.exampleWithLatestFrom();
    //this.exampleZip();
    //this.exampleEvery();
    //this.exampleIIf();
    //this.exampleEmpty();
    //this.exampleMulticasting();
    //this.exampleOf();
    //this.exampleFrom();
    //this.exampleGenerate();
    //this.exampleDebounceTime();
    //this.exampleUntilChanged();
    //this.exampleFilter();
    //this.exampleMap();
    //this.exampleBufferTime();
    //this.exampleTap();
    //this.exampleSubjet();
    //this.exampleBehaviorSubjet();
    this.exampleAsyncSubject();
    //this.exampleReplaySubject();
  }

  private exampleMouseClick() {
    const source = fromEvent(document, 'click');
    source.subscribe((res: Event) => {
      const pointer = <PointerEvent>res;
      console.log(pointer.clientX, pointer.clientY);
    });
    source.subscribe((res: Event) => {
      const pointer = <PointerEvent>res;
      console.log(pointer.clientX, pointer.clientY);
    });
    source.subscribe((res: Event) => {
      const pointer = <PointerEvent>res;
      console.log(pointer.clientX, pointer.clientY);
    });
  }

  private exampleObsCold() {
    console.log('exampleObsCold');
    const observable$ = new Observable((observer: any) => {
      console.log('observable$');
      observer.next(Math.random());
    });
    observable$.subscribe((res) => {
      console.log(res);
    });
    observable$.subscribe((res) => {
      console.log(res);
    });
  }

  private exampleObsHot() {
    console.log('exampleObsHot');
    const value = Math.random();
    const observable$ = new Observable((observer: any) => {
      console.log('observable$ HOT');
      observer.next(value);
    });
    observable$.subscribe((res) => {
      console.log(res);
    });
    observable$.subscribe((res) => {
      console.log(res);
    });
  }

  exampleCombineLatest() {
    const firstTimer = timer(0, 1000).pipe(take(5));
    const secondTimer = timer(500, 1000).pipe(take(5));
    combineLatest([firstTimer, secondTimer]).subscribe((res) =>
      console.log(res)
    );
  }

  exampleConcat() {
    concat(
      of('Get Ready!'),
      of(3).pipe(delay(1000)),
      of(2).pipe(delay(1000)),
      of(1).pipe(delay(1000)),
      of('Go!').pipe(delay(1000)),
      of(null).pipe(delay(1000))
    ).subscribe((message: any) => {
      this.message = message;
      console.log(message);
    });
  }

  exampleStartWith() {
    const source = of(1, 2, 3);
    source.pipe(startWith('startWith')).subscribe((x) => console.log(x));
  }

  exampleWithLatestFrom() {
    const source = interval(5000).pipe(take(5));
    const source2 = interval(1000).pipe(take(5));
    source.pipe(withLatestFrom(source2)).subscribe((res) => console.log(res));
  }

  exampleZip() {
    const source = interval(1000).pipe(take(5));
    const source1 = interval(2000).pipe(take(5));
    const source2 = interval(3000).pipe(take(5));
    zip(source, source1, source2).subscribe((x) => console.log(x));
  }

  exampleEvery() {
    of(1, 2, 3, 4, 5)
      .pipe(every((res) => res % 2 === 0))
      .subscribe((x) => console.log(x));

    of(2, 4, 6)
      .pipe(every((res) => res % 2 === 0))
      .subscribe((x) => console.log(x));
  }

  exampleIIf() {
    const r = of('R');
    const x = of('X');
    interval(1000)
      .pipe(mergeMap((v: number) => iif(() => v % 4 === 0, r, x)))
      .subscribe((res) => console.log(res));
  }

  exampleEmpty() {
    const r = of('R');
    const x = empty();
    interval(1000)
      .pipe(mergeMap((v: number) => iif(() => v < 5, r, x)))
      .subscribe((res) => console.log(res));
  }

  exampleMulticasting() {
    const source = share()(range(0, 5));
    source.subscribe((x) => console.log('SHARE 1', x));
    source.subscribe((x) => console.log('SHARE 2', x));

    const sourcePublish = publish()(range(0, 5));
    sourcePublish.subscribe((x) => console.log('PUBLISH 1', x));
    sourcePublish.subscribe((x) => console.log('PUBLISH 2', x));
    sourcePublish.connect();

    const sourceM = range(0, 5).pipe(multicast(new Subject<number>()));
    sourceM.subscribe((x) => console.log('MULTICAST 1', x));
    sourceM.subscribe((x) => console.log('MULTICAST 1', x));
    (sourceM as ConnectableObservable<any>).connect();

    const sourceMs = range(0, 5).pipe(
      multicast(new BehaviorSubject<any>('INIZIO'))
    );
    sourceMs.subscribe((x) => console.log('MULTICAST 1', x));
    sourceMs.subscribe((x) => console.log('MULTICAST 2', x));
    (sourceMs as ConnectableObservable<any>).connect();
  }

  exampleOf() {
    of(['A', 'B', 'V']).subscribe((x) => console.log(x));
  }

  exampleFrom() {
    from([1, 2, 3]).subscribe((x) => console.log(x));
  }

  exampleGenerate() {
    generate(
      0,
      (x) => x < 8,
      (x) => x + 1,
      (x) => '.'.repeat(x)
    ).subscribe((x) => console.log(x));
  }

  exampleDebounceTime() {
    fromEvent(document, 'click')
      .pipe(debounceTime(1000))
      .subscribe((x) => console.log(x));
  }

  exampleUntilChanged() {
    from([1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 1])
      .pipe(distinctUntilChanged())
      .subscribe((x) => console.log(x));
  }

  exampleFilter() {
    from([1, 2, 2, 2, 2, 3, 3, 1, 2, 2, 2, 1])
      .pipe(filter((x) => x > 2))
      .subscribe((x) => console.log(x));
  }

  exampleMap() {
    from([1,2,3])
    .pipe(map(x => x*10))
    .subscribe((x) => console.log(x));
  }

  exampleBufferTime() {
    interval(1000)
    .pipe(bufferTime(3000))
    .subscribe((x) => console.log(x));
  }

  exampleTap() {
    from([1,2,3])
    .pipe(tap(x => console.log('TAP',x)))
    .subscribe(x => console.log('S',x));
  }

  exampleSubjet() {
    const subject = new Subject();
    subject.asObservable()
    .subscribe(x => console.log(x));
    subject.next('subjet');
  }

  exampleBehaviorSubjet() {
    const bSubject = new BehaviorSubject('BS');
    bSubject.asObservable()
    .subscribe(x => console.log(x));
    bSubject.next('BS 1');
  }

  exampleReplaySubject() {
    const rSubject = new ReplaySubject();
    let bs$ = rSubject.asObservable();
    bs$.subscribe(x => console.log(x));
    rSubject.next('RS 1');
    rSubject.next('RS 2');
    rSubject.next('RS 3');
    bs$.subscribe(x => console.log(x));
  }

  exampleAsyncSubject() {
    const aSubject = new AsyncSubject();
    let bs$ = aSubject.asObservable();
    bs$.subscribe(x => console.log(x));
    aSubject.next('RS 1');
    aSubject.next('RS 2');
    aSubject.next('RS 3');
    bs$.subscribe(x => console.log(x));

    aSubject.complete();
  }

}
