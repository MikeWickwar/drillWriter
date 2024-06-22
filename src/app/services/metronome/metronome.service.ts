import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetronomeService {
  private audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  private tempo: number = 120; // Beats per minute
  private isPlaying: boolean = false;
  private currentNote: number = 0;
  private nextNoteTime: number = 0.0; // When the next note is due.
  private lookahead: number = 25.0; // How frequently to call scheduling function (in milliseconds)
  private scheduleAheadTime: number = 0.1; // How far ahead to schedule audio (sec)
  private intervalID: any;

  constructor() {}

  start() {
    this.isPlaying = !this.isPlaying;

    if (this.isPlaying) {
      this.currentNote = 0;
      this.nextNoteTime = this.audioContext.currentTime;
      this.intervalID = setInterval(() => this.scheduler(), this.lookahead);
    } else {
      clearInterval(this.intervalID);
    }
  }

  private scheduler() {
    while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime) {
      this.scheduleNote();
      this.nextNote();
    }
  }

  private scheduleNote() {
    const osc = this.audioContext.createOscillator();
    const envelope = this.audioContext.createGain();

    osc.frequency.value = 440.0;
    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(0.001, this.nextNoteTime + 0.05);

    osc.connect(envelope);
    envelope.connect(this.audioContext.destination);

    osc.start(this.nextNoteTime);
    osc.stop(this.nextNoteTime + 0.1);
  }

  private nextNote() {
    const secondsPerBeat = 60.0 / this.tempo;
    this.nextNoteTime += secondsPerBeat;
  }

  setTempo(newTempo: number) {
    this.tempo = newTempo;
  }
}
