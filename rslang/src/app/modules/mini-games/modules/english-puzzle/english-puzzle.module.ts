import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EnglishPuzzleComponent } from './component/english-puzzle/english-puzzle.component';

@NgModule({
  declarations: [EnglishPuzzleComponent],
  imports: [CommonModule, DragDropModule],
})
export class EnglishPuzzleModule {}
