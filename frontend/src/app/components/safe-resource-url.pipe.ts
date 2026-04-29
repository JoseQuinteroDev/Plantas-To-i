import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({ name: 'safeResourceUrl' })
export class SafeResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(url: string | null | undefined): SafeResourceUrl {
    const safeUrl = url?.startsWith('https://www.google.com/maps') ? url : 'about:blank';
    return this.sanitizer.bypassSecurityTrustResourceUrl(safeUrl);
  }
}
