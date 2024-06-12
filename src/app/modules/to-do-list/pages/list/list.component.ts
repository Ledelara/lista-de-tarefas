import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../components/input-add-item/input-add-item.component';
import { IListItens } from '../../interface/IListItens.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    InputAddItemComponent,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);

  #setListItens = signal<IListItens[]>([this.#parseItens()]);
  getListItens = this.#setListItens.asReadonly();

  #parseItens() {
    return JSON.parse(localStorage.getItem('@my-list') || '[]');
  }

  public getInputAndAddItem(value: IListItens) {
    localStorage.setItem(
      '@my-list', JSON.stringify([value])
    );
  }
}
