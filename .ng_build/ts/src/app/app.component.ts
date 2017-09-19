import { Component } from '@angular/core';
import { HeaderConfig } from './test/header/header-config';

@Component({
  selector: 'vdl-root',
  template: `
    <vdl-header [config]="config">{{title}}</vdl-header>
  `,
  styles: [`

  `]
})
export class AppComponent {
  title = 'Does this work?';
  config: HeaderConfig = {
    color: '#18a3fa',
    size: '60px',
    align: 'center'
  };
}
