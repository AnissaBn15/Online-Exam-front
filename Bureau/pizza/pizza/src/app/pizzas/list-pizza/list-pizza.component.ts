import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../Pizza";
import {Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  PIZZAS: Pizza[] | undefined;

  constructor(private router: Router, private pizzaService: PizzasService) {
  }

  ngOnInit(): void {
    this.PIZZAS = this.pizzaService.getListPizza();
  }

  selectPizza(seletedPizza: Pizza): void {
    // alert('Vous avez sélectionné: ' + seletedPizza.name);

    // Passer en paramètre 'url de redirection + les paramètres éventuels de la rotue.'
    const link = ['pizzas', seletedPizza.id];
    this.router.navigate(link);
  }
}
