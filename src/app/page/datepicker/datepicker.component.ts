import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Moment } from 'moment';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  dateClass = (d: Moment): MatCalendarCellCssClasses => {
    const day = d.date();

    // Highlight the 1st and 20th day of each month.
    return (day === 1 || day === 20) ? 'example-custom-date-class' : '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
