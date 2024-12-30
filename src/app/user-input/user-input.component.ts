import { Component, inject, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms'
import type { InvestmentInput } from '../investment-results/investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 100000;
  annualInvestment: number = 5000;
  expectedReturn: number = 10;
  duration: number = 5;

  saveInvestmentInfo = output<InvestmentInput>();

  onSubmit() {
    console.log(this.initialInvestment + "-" + this.annualInvestment + "-" + this.expectedReturn);
    
    let investmentInfo: InvestmentInput = {
      duration: this.duration,
      initialInvestment: this.initialInvestment,
      expectedReturn: this.expectedReturn,
      annualInvestment: this.annualInvestment
    };

    this.saveInvestmentInfo.emit(investmentInfo);
  }

}
