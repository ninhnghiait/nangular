import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({      // Dependency injection , design patern 
  providedIn: 'root'
})

export class DataService {
	private _textFromHelloSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

	textFromHello$ : Observable<string> = this._textFromHelloSubject.asObservable();

	setTextFromHello(text: string) {
		return this._textFromHelloSubject.next(text);
	}

   constructor() { }
}
