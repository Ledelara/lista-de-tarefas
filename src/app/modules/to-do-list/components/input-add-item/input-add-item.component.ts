import { 
  ChangeDetectorRef, 
  Component, 
  ElementRef, 
  EventEmitter, 
  Output, 
  ViewChild, 
  inject 
} from '@angular/core';
import { IListItens } from '../../interface/IListItens.interface';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {
  #cdr = inject(ChangeDetectorRef)

  @ViewChild('inputText') public inputText!: ElementRef

  @Output() public outputListItens = new EventEmitter<IListItens>()
  public focusAndAddItem(value: string) {
    if (value) {
      this.#cdr.detectChanges()
      this.inputText.nativeElement.value = ''

      const dataAtual = new Date()
      const timeStamp = dataAtual.getTime()
      const id = `ID ${timeStamp}`

      this.outputListItens.emit({
        id,
        checked: false,
        value
      })

      return this.inputText.nativeElement.focus()
    }
  }
}
