import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  
  constructor() {}

  ngOnInit() {

  }

  showAlert(): void {
    alert('Confirma en tu aplicación bancaria');
  }
 


}
