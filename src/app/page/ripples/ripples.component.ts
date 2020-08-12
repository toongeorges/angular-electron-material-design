import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ripples',
  templateUrl: './ripples.component.html',
  styleUrls: ['./ripples.component.scss']
})
export class RipplesComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 75;
  color: string = '#' + ('00000'+(Math.random()*0xFFFFFF|0).toString(16)).slice(-6);

  @ViewChild('primary') primary: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }
}
