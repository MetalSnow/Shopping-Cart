import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from './Shop';

vi.mock('../cart/CartButton', () => ({
  default: () => <div>CartButton</div>,
}));

vi.mock('../nav/NavBar', () => ({
  default: () => <div>NavBar</div>,
}));

vi.mock('./CardItem', () => ({
  default: () => <div>CardItem</div>,
}));

describe('Shop Component', () => {
  it('renders NavBar, CartButton, and CardItem components', async () => {
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    const navBar = screen.getByText('NavBar');
    const cartButton = screen.getByText('CartButton');
    const cardItem = await screen.findAllByText('CardItem');

    expect(navBar).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(cardItem.length).toBeGreaterThan(0);
  });
});
