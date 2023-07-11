export const initialPlan = {
  selectedPlan: JSON.parse(sessionStorage.getItem('selectedPlan')) || {
    id: 0,
    name: 'Arcade',
    priceMonthly: 9,
    priceYearly: 90
  }
}


