import {Component, OnInit} from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {

  textHeader: string;
  sizeHeader: string;
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
      this.textHeader = this.widget['text'];
      this.sizeHeader = this.widget['size'];
    });
  }

  update() {
    this.widget['widgetType'] = 'HEADING';
    this.widget['text'] = this.textHeader;
    this.widget['size'] = this.sizeHeader;
    this.widgetService.updateWidget(this.wgid, this.widget);
  }

  delete() {
    this.widgetService.deleteWidget(this.wgid);
  }

}
