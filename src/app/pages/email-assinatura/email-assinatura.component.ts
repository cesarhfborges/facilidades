import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-assinatura',
  templateUrl: './email-assinatura.component.html',
  styleUrls: ['./email-assinatura.component.scss']
})
export class EmailAssinaturaComponent implements OnInit {

  form: Array<{
    link: string;
    dados: {
      nome: string;
      email: string;
      telefone: string;
      cargo: string;
      empresa: string;
      site: string;
      endereco: string;
      foto: string
    },
    social: {
      linkedin: string;
      facebook: string;
      twitter: string;
      skype: string;
    },
  }>;

  constructor() { }

  ngOnInit(): void {
  }

}
