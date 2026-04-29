import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-card',
  template: `
    <button type="button" (click)="selected.emit(category.slug)" class="group w-full overflow-hidden rounded-lg bg-white text-left shadow-sm ring-1 ring-emerald-900/5 transition hover:-translate-y-0.5 hover:shadow-xl">
      <img [src]="category.imageUrl" [alt]="category.name" class="h-32 w-full object-cover transition duration-500 group-hover:scale-105">
      <span class="block p-4">
        <span class="block font-semibold text-stone-900">{{ category.name }}</span>
        <span class="mt-1 line-clamp-2 block text-sm leading-5 text-stone-600">{{ category.description }}</span>
      </span>
    </button>
  `,
})
export class CategoryCard {
  @Input({ required: true }) category!: Category;
  @Output() selected = new EventEmitter<string>();
}
