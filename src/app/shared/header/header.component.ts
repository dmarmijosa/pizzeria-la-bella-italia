import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  selectedValue: string = '';
  constructor(private translate: TranslateService) {}
  changeLanguage(language: string): void {
    this.translate.use(language);
  }
  scrollToContent() {
    const element = document.querySelector('.contenido-principal');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }
  
}
