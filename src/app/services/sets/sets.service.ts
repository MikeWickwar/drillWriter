// services/set.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Set } from '../../models/set.model';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  private setsSubject = new BehaviorSubject<Set[]>([]);
  sets$ = this.setsSubject.asObservable();

  private sets: Set[] = [];

  addSet(set: Set) {
    this.sets.push(set);
    this.setsSubject.next(this.sets);
  }

  updateSet(updatedSet: Set) {
    const index = this.sets.findIndex(set => set.id === updatedSet.id);
    if (index !== -1) {
      this.sets[index] = updatedSet;
      this.setsSubject.next(this.sets);
    }
  }
}
