import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audiocall',
  templateUrl: './audiocall.component.html',
  styleUrls: ['./audiocall.component.scss'],
})
export class AudiocallComponent implements OnInit {
  ngOnInit(): void {
    console.log('init');
  }
}
