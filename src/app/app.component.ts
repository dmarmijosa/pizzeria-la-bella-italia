import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
 availableLanguages = ['es', 'ca', 'en', 'de', 'fr']; // Lista de idiomas disponibles
 browserLang = navigator.language.split('-')[0];
  constructor(private translateService: TranslateService) {

    if (this.availableLanguages.includes(this.browserLang)) {
      translateService.setDefaultLang(this.browserLang);
    } else {
      translateService.setDefaultLang('es'); // Idioma de respaldo
    }
  }
}
