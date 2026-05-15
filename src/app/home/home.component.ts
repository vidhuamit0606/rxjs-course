import {Component, OnInit} from '@angular/core';
import {Course} from "../model/course";
import {interval, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {
const http$ = createHttpObservable('/api/courses');
                http$
         .pipe(
           tap(() => console.log("HTTP request executed"))
          map(res => Object.values(res["payload"]) ),
           shareReplay(),
           retryWhen(errors =>
             errors.pipe(
                    delayWhen(() => timer(2000)
               )
            )
              )}
   );
    }

}
