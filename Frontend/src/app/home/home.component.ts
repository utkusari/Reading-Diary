import { Component, OnInit } from '@angular/core';
import { ReadingService } from '../reading.service';
import * as _ from 'lodash';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public readingData: Array<any>;
  public currentReading: any;
  public isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService, private readingService: ReadingService) {
    // get authentication state for immediate use
    this.oktaAuth.isAuthenticated().then(result => {
      this.isAuthenticated = result;
    });
    // subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
    readingService.get().subscribe((data: any) => this.readingData = data);
    this.currentReading = this.setInitialValuesForReadingData();
  }

  private setInitialValuesForReadingData() {
    return {
      id: undefined,
      date: '',
      pageAmount: 0,
      timeAmount: 0
    };
  }

  public createOrUpdateReading = function(reading: any) {
    // if reading is present in readingData, we can assume this is an update
    // otherwise it is adding a new element
    let readingWithId;
    readingWithId = _.find(this.readingData, (el => el.id === reading.id));

    if (readingWithId) {
      const updateIndex = _.findIndex(this.readingData, {id: readingWithId.id});
      this.readingService.update(reading).subscribe(
        readingRecord => this.readingData.splice(updateIndex, 1, reading)
      );
    } else {
      this.readingService.add(reading).subscribe(
        readingRecord => this.readingData.push(reading)
      );
    }

    this.currentReading = this.setInitialValuesForReadingData();
  };

  public editClicked = function(record) {
    this.currentReading = record;
  };

  public newClicked = function() {
    this.currentReading = this.setInitialValuesForReadingData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.readingData, {id: record.id});
    this.readingService.remove(record).subscribe(
      result => this.readingData.splice(deleteIndex, 1)
    );
  }

  ngOnInit() {
  }

}
