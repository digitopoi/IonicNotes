import { Note } from './../../_models/note.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class NoteService {

  private notes: Note[] = [];

  constructor(public storage: Storage) {
  }

  saveNote(note: Note) {
    note.createDate = Date.now(); 
    this.notes.push(note);
    this.storage.set('notes', this.notes);
  }

  getAllNotes() {
    return this.storage.get('notes').then(
      (notes) => {
        this.notes = notes == null ? [] : notes;
        return [...this.notes];
      }
    )
  }

}
