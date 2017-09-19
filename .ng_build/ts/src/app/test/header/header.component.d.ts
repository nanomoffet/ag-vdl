import { HeaderConfig } from './header-config';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
export declare class HeaderComponent {
    private sanitizer;
    config: HeaderConfig;
    constructor(sanitizer: DomSanitizer);
    getStyle(): SafeStyle;
}
