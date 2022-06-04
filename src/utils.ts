
  export const moneyFormat = (amount: number): string => {
    return "£" + (Math.round(amount * 100) / 100).toFixed(2); 
  }
