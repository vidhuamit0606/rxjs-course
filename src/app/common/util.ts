
import {Observable} from 'rxjs';


export function createHttpObservable(url:string) {
    return Observable.create(observer => {
     const controller = new AbortController();
        const signal = controller.signal;
      
     fetch(`api/courses`,{signal})
       .then(response => {
            return reponse.json();
       })
       .then(body => {
           observer.next(body);
            observer.complete();
       })
      
    });
      .catch(err => {

                observer.error(err);

      });

      controller.abort()
}      
