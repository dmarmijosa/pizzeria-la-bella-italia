import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PizzasService } from '../../services/pizzas.service';
import { Menu_Item } from 'src/app/interfaces/menu-item.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, AfterViewInit {
  activeCarouselItem: string = 'item1';
  menu_nuestras_pizzas!: Menu_Item[];
  menu_pizzas_especiales!: Menu_Item[];
  menu_tapas!:Menu_Item[];
  menu_postres!:Menu_Item[];
  menu_bebidas!:Menu_Item[];
  menu_vino!:Menu_Item[];
  constructor(
    private pizzasService: PizzasService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.pizzasService.getPizzas().subscribe((resp: any) => {
      this.menu_nuestras_pizzas = resp.menuPrincipal;
      this.menu_pizzas_especiales = resp.pizzasEspeciales;
      this.menu_tapas = resp.tapas;
      this.menu_postres = resp.postres;
      this.menu_bebidas = resp.bebidas;
      this.menu_vino = resp.vino;
    });

  }
  ngAfterViewInit(): void {
    const carouselEl = document.getElementById('menuCarousel');
        if (carouselEl) {
            carouselEl.addEventListener('slid.bs.carousel', (event: any) => {
                this.activeCarouselItem = event.relatedTarget.id;
            });
        }
  }
  getTranslatedIngredients(ingredientes?: string[]): string {
    if (!ingredientes) {
      return '';
    }
    return ingredientes
      .map((ingrediente) => this.translateService.instant(ingrediente))
      .join(', ');
  }
}
