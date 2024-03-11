/* tslint:disable */
/* auto-generated angular directive proxies */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  NgZone,
} from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '../../../dist/types/index';

@ProxyCmp({
  inputs: ['description', 'label'],
})
@Component({
  selector: 'amalitech-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['description', 'label'],
})
export class AmalitechAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle']);
  }
}

export declare interface AmalitechAccordion
  extends Components.AmalitechAccordion {
  /**
   * Event emitted when the accordion is toggled.
   */
  toggle: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: [
    'autoClose',
    'closeSecs',
    'closeText',
    'closeable',
    'rounded',
    'variant',
  ],
})
@Component({
  selector: 'amalitech-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'autoClose',
    'closeSecs',
    'closeText',
    'closeable',
    'rounded',
    'variant',
  ],
})
export class AmalitechAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}

export declare interface AmalitechAlert extends Components.AmalitechAlert {
  /**
   * Event emitted when the alert is closed
   */
  closed: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: ['align', 'separator', 'size'],
})
@Component({
  selector: 'amalitech-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'separator', 'size'],
})
export class AmalitechBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechBreadcrumb
  extends Components.AmalitechBreadcrumb {}

@ProxyCmp({
  inputs: ['active', 'href', 'target'],
})
@Component({
  selector: 'amalitech-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'href', 'target'],
})
export class AmalitechBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechBreadcrumbItem
  extends Components.AmalitechBreadcrumbItem {}

@ProxyCmp({
  inputs: ['disabled', 'iconPosition', 'size', 'type', 'variant'],
})
@Component({
  selector: 'amalitech-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'iconPosition', 'size', 'type', 'variant'],
})
export class AmalitechButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechButton extends Components.AmalitechButton {}

@ProxyCmp({
  inputs: ['disabled', 'href', 'target'],
})
@Component({
  selector: 'amalitech-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'target'],
})
export class AmalitechCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechCard extends Components.AmalitechCard {}

@ProxyCmp({
  inputs: [
    'anyStyle',
    'anyTabIndex',
    'binary',
    'checkboxIcon',
    'checked',
    'disabled',
    'inputId',
    'label',
    'labelStyleClass',
    'name',
    'readonly',
    'styleClass',
    'value',
  ],
  methods: ['inputFocus'],
})
@Component({
  selector: 'amalitech-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'anyStyle',
    'anyTabIndex',
    'binary',
    'checkboxIcon',
    'checked',
    'disabled',
    'inputId',
    'label',
    'labelStyleClass',
    'name',
    'readonly',
    'styleClass',
    'value',
  ],
})
export class AmalitechCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnFocus', 'aOnBlur']);
  }
}

export declare interface AmalitechCheckbox
  extends Components.AmalitechCheckbox {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: [
    'disabled',
    'firstDayOfWeek',
    'label',
    'max',
    'min',
    'outputFormat',
    'outputType',
    'value',
  ],
  methods: ['open', 'close'],
})
@Component({
  selector: 'amalitech-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'disabled',
    'firstDayOfWeek',
    'label',
    'max',
    'min',
    'outputFormat',
    'outputType',
    'value',
  ],
})
export class AmalitechDatePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechDateChange', 'amalitechDateClear']);
  }
}

export declare interface AmalitechDatePicker
  extends Components.AmalitechDatePicker {
  /**
   * The date change event that is emitted when the date changes
   */
  amalitechDateChange: EventEmitter<CustomEvent<string | Date>>;
  /**
   * The date clear event is emitted when the date selection is cleared
   */
  amalitechDateClear: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    'aTitle',
    'anyAriaRequired',
    'anyTabIndex',
    'ariaDetailedId',
    'autocomplete',
    'counter',
    'disabled',
    'floatLabel',
    'helperText',
    'inputAutofocus',
    'inputClass',
    'inputHolderClass',
    'inputId',
    'inputStyle',
    'inputWrapperClass',
    'label',
    'leftIconClass',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size',
    'styles',
    'type',
    'value',
  ],
  methods: ['getInputRef'],
})
@Component({
  selector: 'amalitech-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'aTitle',
    'anyAriaRequired',
    'anyTabIndex',
    'ariaDetailedId',
    'autocomplete',
    'counter',
    'disabled',
    'floatLabel',
    'helperText',
    'inputAutofocus',
    'inputClass',
    'inputHolderClass',
    'inputId',
    'inputStyle',
    'inputWrapperClass',
    'label',
    'leftIconClass',
    'list',
    'max',
    'maxLength',
    'min',
    'minLength',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'size',
    'styles',
    'type',
    'value',
  ],
})
export class AmalitechInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

export declare interface AmalitechInput extends Components.AmalitechInput {
  /**
   * Callback to invoke when value of input text changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: [
    'cancelText',
    'closeButtonType',
    'confirmText',
    'confirmation',
    'scrollable',
    'visible',
  ],
  methods: ['openModal', 'closeModal'],
})
@Component({
  selector: 'amalitech-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'cancelText',
    'closeButtonType',
    'confirmText',
    'confirmation',
    'scrollable',
    'visible',
  ],
})
export class AmalitechModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechConfirm', 'amalitechCancel']);
  }
}

export declare interface AmalitechModal extends Components.AmalitechModal {
  /**
   * Event is emmited when a user clicks on confirm button
   */
  amalitechConfirm: EventEmitter<CustomEvent<void>>;
  /**
   * Event is emmitted when user clicks on cancel button or close button
   */
  amalitechCancel: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ['active', 'disabled'],
})
@Component({
  selector: 'amalitech-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'disabled'],
})
export class AmalitechNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['switch']);
  }
}

export declare interface AmalitechNavItem extends Components.AmalitechNavItem {
  /**
   * Event emitted when the nav item is clicked
   */
  switch: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: ['align'],
})
@Component({
  selector: 'amalitech-nav-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
})
export class AmalitechNavMobile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechNavMobile
  extends Components.AmalitechNavMobile {}

@ProxyCmp({
  inputs: ['layout', 'mobileIconAlign'],
})
@Component({
  selector: 'amalitech-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout', 'mobileIconAlign'],
})
export class AmalitechNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechNavbar extends Components.AmalitechNavbar {}

@ProxyCmp({
  inputs: [
    'currentValue',
    'indeterminate',
    'labeledBy',
    'maxValue',
    'minValue',
    'steps',
    'valueText',
  ],
})
@Component({
  selector: 'amalitech-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'currentValue',
    'indeterminate',
    'labeledBy',
    'maxValue',
    'minValue',
    'steps',
    'valueText',
  ],
})
export class AmalitechProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechProgress
  extends Components.AmalitechProgress {}

@ProxyCmp({
  inputs: [
    'anyStyle',
    'anyTabIndex',
    'disabled',
    'inputId',
    'label',
    'labelStyleClass',
    'name',
    'styleClass',
    'value',
  ],
  methods: ['setFocus'],
})
@Component({
  selector: 'amalitech-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'anyStyle',
    'anyTabIndex',
    'disabled',
    'inputId',
    'label',
    'labelStyleClass',
    'name',
    'styleClass',
    'value',
  ],
})
export class AmalitechRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnSelect', 'aOnFocus', 'aOnBlur']);
  }
}

export declare interface AmalitechRadioButton
  extends Components.AmalitechRadioButton {
  /**
   * Callback to invoke on radio button select.
   */
  aOnSelect: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button receives focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: ['name', 'value'],
})
@Component({
  selector: 'amalitech-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'value'],
})
export class AmalitechRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import type { RadioGroupChangeEventDetail as IAmalitechRadioGroupRadioGroupChangeEventDetail } from '../../../dist/types/index';

export declare interface AmalitechRadioGroup
  extends Components.AmalitechRadioGroup {
  /**
   * Emitted when the value has changed.
   */
  valueChange: EventEmitter<
    CustomEvent<IAmalitechRadioGroupRadioGroupChangeEventDetail>
  >;
}

@ProxyCmp({
  inputs: ['disabled', 'label', 'multiple', 'open', 'selectedStyle', 'size'],
})
@Component({
  selector: 'amalitech-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'multiple', 'open', 'selectedStyle', 'size'],
})
export class AmalitechSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechChange']);
  }
}

export declare interface AmalitechSelect extends Components.AmalitechSelect {
  /**
   * This event emmits the value of the selected option or an array of values if option is multiple
   */
  amalitechChange: EventEmitter<CustomEvent<Record<string, string | string[]>>>;
}

@ProxyCmp({
  inputs: [
    'disabled',
    'multiple',
    'selected',
    'selectedStyle',
    'size',
    'value',
  ],
})
@Component({
  selector: 'amalitech-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'disabled',
    'multiple',
    'selected',
    'selectedStyle',
    'size',
    'value',
  ],
})
export class AmalitechSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selection', 'removeSelection']);
  }
}

export declare interface AmalitechSelectOption
  extends Components.AmalitechSelectOption {
  /**
   * This event is triggered when a selection is made
   */
  selection: EventEmitter<CustomEvent<string>>;
  /**
   * This event is triggered when a selection is removed
   */
  removeSelection: EventEmitter<CustomEvent<string>>;
}

@ProxyCmp({
  inputs: [
    'autoClose',
    'callToActionText',
    'closeSecs',
    'closeable',
    'href',
    'rounded',
    'snackbarText',
    'target',
  ],
})
@Component({
  selector: 'amalitech-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'autoClose',
    'callToActionText',
    'closeSecs',
    'closeable',
    'href',
    'rounded',
    'snackbarText',
    'target',
  ],
})
export class AmalitechSnackbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}

export declare interface AmalitechSnackbar
  extends Components.AmalitechSnackbar {
  /**
   * This event is emitted when the close button is clicked
   */
  closed: EventEmitter<CustomEvent<any>>;
}

@ProxyCmp({
  inputs: [
    'animated',
    'count',
    'disabled',
    'hoverDisabled',
    'readonly',
    'size',
    'strokeColor',
    'value',
  ],
})
@Component({
  selector: 'amalitech-star-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'animated',
    'count',
    'disabled',
    'hoverDisabled',
    'readonly',
    'size',
    'strokeColor',
    'value',
  ],
})
export class AmalitechStarRating {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechRatingChange']);
  }
}

export declare interface AmalitechStarRating
  extends Components.AmalitechStarRating {
  /**
   * The event emmitted when the star rating is changed or a selection is made
   */
  amalitechRatingChange: EventEmitter<CustomEvent<number>>;
}

@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'size', 'switchId', 'value'],
})
@Component({
  selector: 'amalitech-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'size', 'switchId', 'value'],
})
export class AmalitechSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechSwitchChange']);
  }
}

export declare interface AmalitechSwitch extends Components.AmalitechSwitch {
  /**
   * The event that is emitted when the component is clicked
   */
  amalitechSwitchChange: EventEmitter<
    CustomEvent<Record<string, string | boolean>>
  >;
}

@ProxyCmp({
  inputs: ['activeIndex', 'anyStyle', 'styleClass'],
})
@Component({
  selector: 'amalitech-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeIndex', 'anyStyle', 'styleClass'],
})
export class AmalitechTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechTab extends Components.AmalitechTab {}

@ProxyCmp({
  inputs: ['disabled', 'selected', 'tabName'],
})
@Component({
  selector: 'amalitech-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'tabName'],
})
export class AmalitechTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface AmalitechTabPanel
  extends Components.AmalitechTabPanel {}

@ProxyCmp({
  inputs: ['label', 'max', 'meridian', 'min', 'seconds', 'size', 'value'],
})
@Component({
  selector: 'amalitech-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'max', 'meridian', 'min', 'seconds', 'size', 'value'],
})
export class AmalitechTimePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechTimeChange', 'amalitechTimeClear']);
  }
}

export declare interface AmalitechTimePicker
  extends Components.AmalitechTimePicker {
  /**
   * This event emmits the value of the selected time in the format {time: '00:00 AM', hour: '00', minute: '00', meridian: 'AM'}
   */
  amalitechTimeChange: EventEmitter<
    CustomEvent<
      Partial<
        Record<'time' | 'hour' | 'minute' | 'meridian' | 'second', string>
      >
    >
  >;
  /**
   * This event is emitted when the time picker value is cleared
   */
  amalitechTimeClear: EventEmitter<CustomEvent<void>>;
}

@ProxyCmp({
  inputs: [
    'autoClose',
    'closeButtonType',
    'closeSecs',
    'transition',
    'variant',
  ],
})
@Component({
  selector: 'amalitech-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [
    'autoClose',
    'closeButtonType',
    'closeSecs',
    'transition',
    'variant',
  ],
})
export class AmalitechValidation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechClose']);
  }
}

export declare interface AmalitechValidation
  extends Components.AmalitechValidation {
  /**
   * This event is emmitted when the close button is clicked
   */
  amalitechClose: EventEmitter<CustomEvent<void>>;
}
