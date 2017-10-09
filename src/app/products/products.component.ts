import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: Array<Object> = [{
    title: "Header",
    cardTitle: "Card title",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    lastUpdates: "Last updated 3 mins ago",
    img: "http://lorempixel.com/400/200/sports/" + this.getRandomInt()
  },{
    title: "Header",
    cardTitle: "Card title",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    lastUpdates: "Last updated 3 mins ago",
    img: "http://lorempixel.com/400/200/sports/" + this.getRandomInt()
  },{
    title: "Header",
    cardTitle: "Card title",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    lastUpdates: "Last updated 3 mins ago",
    img: "http://lorempixel.com/400/200/sports/" + this.getRandomInt()
  },{
    title: "Header",
    cardTitle: "Card title",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer",
    lastUpdates: "Last updated 3 mins ago",
    img: "http://lorempixel.com/400/200/sports/" + this.getRandomInt()
  }]

  constructor() { }

  ngOnInit() {}

  getRandomInt(min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
