import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-reading',
  templateUrl: './add-or-update-reading.component.html',
  styleUrls: ['./add-or-update-reading.component.css']
})
export class AddOrUpdateReadingComponent implements OnInit {

  @Output() readingCreated = new EventEmitter<any>();
  @Input() readingInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearReadingInfo();
    console.log(this.readingInfo.date);
  }

  ngOnInit() {
  }

  private clearReadingInfo = function() {
    // Create an empty reading object
    this.readingInfo = {
      id: undefined,
      date: '',
      pageAmount: 0,
      timeAmount: 0
    };
  };

  public addOrUpdateReadingRecord = function(event) {
    this.readingCreated.emit(this.readingInfo);
    this.clearReadingInfo();
  };

}
