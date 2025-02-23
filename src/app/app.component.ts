import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

interface Product {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Online Store';
 
  
  // Создаём 4 категории, каждая с 5 товарами
  categories: Category[] = [
    {
      id: 1,
      name: 'Телефоны и гаджеты',
      products: [
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large' , id: 1, name: 'Смартфон Apple iPhone 16 Pro Max', description: '256Gb черный', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',id: 2, name: 'Смартфон Apple iPhone 13', description: '128Gb черный', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',id: 3, name: 'Смартфон Apple iPhone 16 Pro Max', description: '256Gb золотистый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=gallery-medium',id: 4, name: 'Чехол NRS1708', description: 'розовый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',id: 5, name: 'Смартфон Samsung Galaxy A55', description: '5G 8 ГБ/256 ГБ темно-синийh', likes: 0 }
      ]
    },
    {
      id: 2,
      name: 'Компьютеры',
      products: [
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h77/h45/87311746760734.png?format=preview-large',id: 6, name: 'Планшет AIRSTAR', description: 'G2000 10 дюйм 16 Гб/512 Гб черный', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',id: 7, name: 'Планшет Samsung Galaxy Tab A9+ ', description: '5G 11 дюйм 8 Гб/128 Гб серебристый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h58/h61/86274830073886.jpg?format=preview-large',id: 8, name: 'Ноутбук ThundeRobot', description: '911 X Wild Hunter G2 Pro 15.6" / 16 Гб / SSD 512 Гб / Win 11 Pro /', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h5d/h3c/64865317584926.jpg?format=gallery-medium',id: 9, name: 'Планшет Apple iPad', description: '2022 10.9 Wi-Fi 10.9 дюйм 4 Гб/64 Гб серебристый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h28/hfc/83298067742750.jpg?format=gallery-medium',id: 10, name: 'Монитор', description: 'ThundeRobot DF27C240L черный', likes: 0 }
      ]
    },
    {
      id: 3,
      name: 'Бытовая техника',
      products: [
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',id: 11, name: 'Пылесос Deerma', description: 'DX700 белый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',id: 12, name: 'Стиральная машина LG', description: 'F2J3NS0W белый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h90/hd8/85539374170142.jpg?format=gallery-medium',id: 13, name: 'Микроволновая печь', description: 'AVA MMWO-2070B черный', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hd0/h3f/87089997873182.jpg?format=gallery-medium',id: 14, name: 'Электрогриль Xiaomi', description: 'Smart Air Fryer 6.5L BHR7357EU', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/he1/hef/85459712147486.jpg?format=gallery-large',id: 15, name: 'Электрочайник', description: 'Yingzheng ZY-303 черный', likes: 0 }
      ]
    },
    {
      id: 4,
      name: 'Мебель',
      products: [
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',id: 16, name: 'Morbido диван', description: 'прямой Комфорт, обивка микровелюр', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/h02/hda/67423804784670.jpg?format=preview-large',id: 17, name: 'ТВ-тумба напольная', description: 'Modern New Design TT, 180x40x35 см, ', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hbe/hff/85704242266142.jpg?format=gallery-medium',id: 18, name: 'Вешалка напольная', description: 'Singleton TW610, металл, 150x154 см, черный', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/had/hfe/85358048673822.jpg?format=gallery-medium',id: 19, name: 'Стеллаж напольный Abuer', description: '66x31x132 см, белый', likes: 0 },
        { image:'https://resources.cdn-kaspi.kz/img/m/p/hb6/hdf/86657938882590.jpg?format=gallery-medium',id: 20, name: 'Игровое кресло', description: 'ATLANTA мебель GC-1050, черный, красный', likes: 0 }
      ]
    }
  ];

  selectedCategory?: Category;

  // При выборе категории сохраняем её в selectedCategory
  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
