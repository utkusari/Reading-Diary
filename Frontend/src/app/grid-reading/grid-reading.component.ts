import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-reading',
  templateUrl: './grid-reading.component.html',
  styleUrls: ['./grid-reading.component.css']
})
export class GridReadingComponent implements OnInit {
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Input() readingData: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  public deleteRecord(record) {
    this.recordDeleted.emit(record);
  }
  public editRecord(record) {
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);

  }
  public newRecord() {
    this.newClicked.emit();
  }

}
