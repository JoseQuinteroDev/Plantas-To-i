import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  template: `<div class="rounded-lg border border-dashed border-stone-300 bg-white/70 p-8 text-center text-stone-600">{{ message }}</div>`,
})
export class EmptyState {
  @Input() message = 'No hay contenido disponible.';
}
