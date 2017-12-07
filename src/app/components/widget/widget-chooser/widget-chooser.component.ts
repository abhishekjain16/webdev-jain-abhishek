import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WidgetService} from '../../../services/widget.service.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  pid: string;
  userId: string;
  widget: any;
  wid: string;
  size: number;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private router: Router,
              private widgetService: WidgetService) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
          this.pid = params['pid'];
          this.wid = params['wid'];
        }
      );
    this.widgetService.findWidgetsByPageId(this.pid)
      .subscribe(
        (widgets: any) => {
          this.size = widgets.length;
        }
      );
  }

  create(type) {
    const widget = {
      widgetType: type,
      position: this.size
    }
    this.widget = this.widgetService.createWidget(this.pid, widget)
      .subscribe(
        (new_widget: any) => {
          this.router.navigate([
            'user/',
            this.userId,
            'website',
            this.wid,
            'page',
            this.pid,
            'widget',
            new_widget._id]);
        }
      );
  }


}
