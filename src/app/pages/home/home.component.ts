import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  links: Array<{
    name: string;
    description: string;
    image: string;
    button: {
      text: string,
      url: string;
    }
  }> = [
    {
      name: 'Gerador de Assinaturas de E-Mail',
      description: 'Crie sua assinatura de email corporativo brasal.',
      image: 'https://freeiconshop.com/wp-content/uploads/edd/mail-open-flat.png',
      button: {
        text: 'Gerar minha assinatura',
        url: 'assinatura-email'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
