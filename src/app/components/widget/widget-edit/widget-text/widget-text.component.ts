import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  text: string;
  rows: string;
  placeholder: string;
  baseUrl = environment.baseUrl;
  widgets = [{}];
  widget = {};
  userId: string;
  wid: string;
  pid: string;
  wgid: string;
  formatted: string;
  name: string;

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      this.userId = params['userId'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.wgid = params['wgid'];
      this.widget = this.widgetService.findWidgetById(this.wgid)
        .subscribe(
          (widget: any) => {
            this.widget = widget;
            this.rows = widget['rows'];
            this.text = widget['text'];
            this.placeholder = widget['placeholder'];
            this.formatted = widget['formatted'];
            this.name = widget['name'];
          }
        );
    });
  }

  update() {
    this.widget['widgetType'] = 'TEXT';
    this.widget['rows'] = this.rows;
    this.widget['text'] = this.text;
    this.widget['name'] = this.name;
    this.widget['formatted'] = this.formatted;
    this.widget['placeholder'] = this.placeholder;
    this.widgetService.updateWidget(this.wgid, this.widget)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid)
      .subscribe(
        (widgets: any) => {
          this.widgets = widgets;
        }
      );
  }

}
