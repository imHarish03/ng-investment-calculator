export interface InvestmentInput{
'duration':number,
'initialInvestment':number,
'expectedReturn':number,
'annualInvestment':number,
}

export interface InvestmentOutput{
    'year':number,
    'interest':number,
    'valueEndOfYear':number,
    'annualInvestment':number,
    'totalInterest':number,
    'totalAmountInvested':number

}