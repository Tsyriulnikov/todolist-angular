import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Notify} from "../../../core/models/notify.models";
import {NotificationService} from "../../../core/services/notification.service";

@Component({
  selector: 'tl-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {
  notify$?: Observable<Notify | null>

  constructor(private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.notify$ = this.notification.notify$
  }
  closeNotification() {
    this.notification.clear()
  }
}
