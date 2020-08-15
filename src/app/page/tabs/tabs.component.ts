import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  color: ThemePalette = null;
  backgroundColor: ThemePalette = null;

  constructor() { }

  ngOnInit(): void {
  }

}
