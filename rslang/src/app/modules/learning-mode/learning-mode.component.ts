import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-mode',
  templateUrl: './learning-mode.component.html',
  styleUrls: ['./learning-mode.component.scss'],
})

export class LearningModeComponent implements OnInit {
  ngOnInit(): void {
    console.log('init');
  }
}
