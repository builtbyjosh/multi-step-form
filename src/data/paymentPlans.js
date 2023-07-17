import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';

export const paymentPlans = {
  yearly: [
    { name: 'Arcade', price: 9, icon: arcade },
    { name: 'Advanced', price: 12, icon: advanced },
    { name: 'Pro', price: 15, icon: pro },
  ],
  monthly: [
    { name: 'Arcade', price: 90, icon: arcade },
    { name: 'Advanced', price: 120, icon: advanced },
    { name: 'Pro', price: 150, icon: pro },
  ],
};
