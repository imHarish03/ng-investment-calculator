import { Component, Input } from '@angular/core';
import {  InvestmentOutput } from './investment.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required:true}) calculatedData?:InvestmentOutput[];

}
