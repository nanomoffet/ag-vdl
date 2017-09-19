import { Component, Input } from '@angular/core';
import { HeaderConfig } from './header-config';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'vdl-header',
  template: `
    <h1 [style]="getStyle()">
      <ng-content></ng-content>
    </h1>
  `,
  styles: [`

  `]
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
    const safeStyle: SafeStyle = this.sanitizer.bypassSecurityTrustStyle(style);

    return safeStyle;
  }
}
