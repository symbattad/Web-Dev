import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery?: string[];
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone 13 ',
      description: '128Gb черный',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },

    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h42/h78/82920434892830.jpg?format=gallery-medium',
      name: 'Чехол для зарядного устройства',
      description: 'NRS1708 розовый',
      rating: 4.0,
      link: 'https://kaspi.kz/shop/p/nrs1708-rozovyi-112638500/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
      name: 'Смартфон Samsung Galaxy A55',
      description: '5G 8 ГБ/256 ГБ темно-синий',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hef/87295488163870.png?format=gallery-medium',
      name: 'Смартфон Apple iPhone 16 Pro',
      description: '256Gb серебристый',
      rating: 3.9,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-256gb-serebristyi-123889893/?c=750000000',
     
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h7a/84985846595614.jpg?format=gallery-medium',
      name: 'Наушники OEM P9 большие с шумоизоляцией ',
      description: 'серебристый',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000',
     
      
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case',
      description: 'белый',
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
      name: 'Мышь wireless mouse оптическая светодиодная',
      description: 'Wireless Mouse черный оптическая светодиодная USB, Bluetooth, Wi-Fi',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
      name: 'Планшет Samsung Galaxy Tab A9+ ',
      description: '5G 11 дюйм 8 Гб/128 Гб серебристый',
      rating: 3.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
    
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
      name: 'Кухонные весы белого цвета',
      description: 'Generic SF-400',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
    
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6045250.jpeg?format=gallery-medium',
      name: 'Диван',
      description: 'прямой Nasip Raiana, обивка ткань, 85х230х70 см, светло-коричневый',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/divan-prjamoi-nasip-raiana-obivka-tkan-85h230h70-sm-svetlo-korichnevyi-115023255/?c=750000000',
    
    }
  ];

  // Функция для шеринга в WhatsApp
  shareOnWhatsApp(product: Product): void {
    const text = encodeURIComponent(`Посмотрите этот товар: ${product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  // Функция для шеринга в Telegram
  shareOnTelegram(product: Product): void {
    const url = encodeURIComponent(product.link);
    window.open(`https://t.me/share/url?url=${url}`, '_blank');
  }
}
