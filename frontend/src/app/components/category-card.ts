import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-card',
  template: `
    <button type="button" (click)="selected.emit(category.slug)" class="soft-card group flex h-full w-full flex-col overflow-hidden text-left">
      <div class="overflow-hidden p-2 pb-0">
        <img [src]="category.imageUrl" [alt]="category.name" class="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.03]">
      </div>
      <span class="flex flex-1 flex-col p-5">
        <span class="text-xl font-black text-stone-950">{{ category.name }}</span>
        <span class="mt-2 min-h-14 text-base leading-7 text-stone-600">{{ category.description }}</span>
        <span class="mt-5 inline-flex font-black text-emerald-800">Ver productos</span>
      </span>
    </button>
  `,
})
export class CategoryCard {
  @Input({ required: true }) category!: Category;
  @Output() selected = new EventEmitter<string>();
}
