// player.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersSubject = new BehaviorSubject<any[]>([]);
  players$ = this.playersSubject.asObservable();

  setPlayers(players: any[]) {
    this.playersSubject.next(players);
  }

  addPlayer(player: any) {
    const currentPlayers = this.playersSubject.value;
    this.playersSubject.next([...currentPlayers, player]);
  }

  updatePlayer(updatedPlayer: any) {
    const currentPlayers = this.playersSubject.value.map(player =>
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    this.playersSubject.next(currentPlayers);
  }
}
