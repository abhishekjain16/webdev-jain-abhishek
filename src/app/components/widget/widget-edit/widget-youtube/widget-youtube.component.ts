import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})
export class WidgetYoutubeComponent implements OnInit {

  url: string;
  width: string;
  userId: string;
  wid: string;
  pid: string;
  wgid: string;
  widget = {};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid);
      this.width = this.widget['width'];
      this.url = this.widget['url'];
    });
  }

  update() {
    this.widget['widgetType'] = 'YOUTUBE';
    this.widget['width'] = this.width;
    this.widget['url'] = this.url;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }
}
