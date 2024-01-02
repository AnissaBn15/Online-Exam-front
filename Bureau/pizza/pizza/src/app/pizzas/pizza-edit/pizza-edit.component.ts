import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../Pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent implements OnInit {

  singlePizza: Pizza | undefined

  constructor(private route: ActivatedRoute, private pizzaService: PizzasService) {
  }

  ngOnInit(): void {
    const retrieveIdDormURL = +this.route.snapshot.params['id'];
    this.singlePizza = this.pizzaService.getSinglePizza(retrieveIdDormURL);
    console.log('Vous avez séléctionné ', this.singlePizza);
  }

}
