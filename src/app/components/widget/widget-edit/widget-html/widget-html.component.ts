import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  text: string;
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
      this.text = this.widget['text'];
    });
  }

  update() {
    this.widget['widgetType'] = 'HTML';
    this.widget['text'] = this.text;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }
}
