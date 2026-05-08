import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  getValue(): string {
    return 'Hello from MyLibService!';
  }
}
