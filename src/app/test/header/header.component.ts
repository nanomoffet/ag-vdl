import { Component, Input } from '@angular/core';
import { HeaderConfig } from './header-config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'vdl-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  @Input() config: HeaderConfig;

  constructor( private sanitizer: DomSanitizer ) {
  }

  getStyle() {
    const style =
      `
      color: ${this.config.color};
      font-size: ${this.config.size};
      text-align: ${this.config.align};
    `;
    console.log(style);

    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
