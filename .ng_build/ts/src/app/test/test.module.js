import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
export class TestModule {
}
TestModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [HeaderComponent],
                exports: [
                    HeaderComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
TestModule.ctorParameters = () => [];
function TestModule_tsickle_Closure_declarations() {
    /** @type {?} */
    TestModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    TestModule.ctorParameters;
}
//# sourceMappingURL=test.module.js.map