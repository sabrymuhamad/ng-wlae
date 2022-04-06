import { Injectable, OnInit } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyUrl implements OnInit {

  api: string = environment.server;

  ngOnInit() { }


}
