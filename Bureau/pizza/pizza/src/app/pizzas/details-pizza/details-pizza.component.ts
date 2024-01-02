import {Component, OnInit} from '@angular/core';
import {Pizza} from "../../Pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {PizzasService} from "../pizzas.service";

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent implements OnInit {

  pizzaToDisplay: Pizza | undefined;
  listOfPizzas: Pizza[] | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private pizzaService: PizzasService) {
  }

  ngOnInit(): void {
    // Récupérer le paramètre de la route associée à notre composant
    // Snapshot: récupérer le paramètre de manière asynchrone
    const retrieveIdDormURL = +this.route.snapshot.params['id'];

    this.listOfPizzas = this.pizzaService.getListPizza();

    // this.listOfPizzas.forEach(pizza => {
    //   if (pizza.id === retrieveIdDormURL){
    //     this.pizzaToDisplay = pizza;
    //   }
    // })

    this.pizzaToDisplay = this.pizzaService.getSinglePizza(retrieveIdDormURL);

    console.log('Pizza selectionnée: ', this.pizzaToDisplay);
  }

  goBack(): void {
    this.router.navigate(['/pizzas']);
  }

  editerPizza(pizzaToEdit:Pizza): void {
    const link = ['pizzas/edit',pizzaToEdit.id];
    this.router.navigate(link);
  }

  deletePizza(): void {
    // TODO
  }


}
