import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {

  ngOnInit(): void {
    console.log('init');
  }
}


