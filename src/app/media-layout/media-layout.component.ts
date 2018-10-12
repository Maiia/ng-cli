import { Component, HostListener } from '@angular/core';
import { Breakpoints, MediaMatcher } from '@angular/cdk/layout';

export function debounce(delay: number = 300): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let timeout = null

    const original = descriptor.value;

    descriptor.value = function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => original.apply(this, args), delay);
    };

    return descriptor;
  };
}

@Component({
  selector: 'app-media-layout',
  templateUrl: './media-layout.component.html',
  styleUrls: ['./media-layout.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})

@HostListener('window:resize', ['$event'])
export class MediaLayoutComponent {
  _query: string;

  get defineClass(): string {
    return this._query;
  }

  set query(query: string) {
    this._query = query;
  }

  constructor(
    public media: MediaMatcher
  ) {
    this.onResize()
  }

  // @debounce()
  onResize(){
    const xs = this.media.matchMedia(Breakpoints.XSmall).matches;
    const sm = this.media.matchMedia(Breakpoints.Small).matches;
    const md = this.media.matchMedia(Breakpoints.Medium).matches;
    const lg = this.media.matchMedia(Breakpoints.Large).matches;

    this.query = xs ? 'xs' : sm ? 'sm' : md ? 'md' : lg ? 'lg' : 'xlg';
  }
}
