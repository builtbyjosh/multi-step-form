import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';

export const paymentPlans = {
  monthly: [
    { name: 'Arcade', price: 9, icon: arcade },
    { name: 'Advanced', price: 12, icon: advanced },
    { name: 'Pro', price: 15, icon: pro },
  ],
  yearly: [
    { name: 'Arcade', price: 90, icon: arcade },
    { name: 'Advanced', price: 120, icon: advanced },
    { name: 'Pro', price: 150, icon: pro },
  ],
};

export const addOns = {
  monthly: [
    { name: 'Online service', desc: 'Access to multiplayer games', price: 1 },
    { name: 'Larger Storage', desc: 'Extra 1TB of cloud save', price: 2 },
    {
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: 2,
    },
  ],
  yearly: [
    { name: 'Online service', desc: 'Access to multiplayer games', price: 10 },
    { name: 'Larger Storage', desc: 'Extra 1TB of cloud save', price: 20 },
    {
      name: 'Customizable profile',
      desc: 'Custom theme on your profile',
      price: 20,
    },
  ],
};
