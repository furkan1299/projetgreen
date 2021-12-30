import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-tesst',
  templateUrl: './tesst.page.html',
  styleUrls: ['./tesst.page.scss'],
})
export class TesstPage {

  eventSource = [];
  viewTitle: string;
  
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  selectedDate = new Date();
  constructor(private db: AngularFirestore) { 

    this.db.collection(`dechets`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        console.log(event);
        this.eventSource.push(event);
      });
    });
  }

  addNewEvent() {
    let start = this.selectedDate;
    let end = this.selectedDate;
    end.setMinutes(end.getMinutes() + 60);
    let event = {
      title: "Réservation de rendez-vous pour le débarrassement d'encombrants",
      startTime: start,
      endTime: end,
      allDay: false,
    };
    this.db.collection(`dechets`).add(event);
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
    this.selectedDate = ev.selectedTime;
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  next() {
    this.myCal.slideNext()
  }

  back() {
    this.myCal.slidePrev()
  }

}
