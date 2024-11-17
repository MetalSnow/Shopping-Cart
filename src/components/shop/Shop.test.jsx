import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from './Shop';
import { act } from 'react';
import userEvent from '@testing-library/user-event';

vi.mock('../cart/CartButton', () => ({
  default: () => <div>CartButton</div>,
}));

vi.mock('../nav/NavBar', () => ({
  default: () => <div>NavBar</div>,
}));

describe('Shop Component', () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      category: "men's clothing",
      description: 'Description 1',
      price: 10,
      image: '',
      rating: { rate: 4 },
    },
    {
      id: 2,
      title: 'Product 2',
      category: "women's clothing",
      description: 'Description 2',
      price: 20,
      image: '',
      rating: { rate: 3.5 },
    },
    {
      id: 3,
      title: 'Product 3',
      category: 'electronics',
      description: 'Description 3',
      price: 30,
      image: '',
      rating: { rate: 5 },
    },
  ];

  it('renders NavBar, CartButton, and CardItem components', async () => {
    let resolve;

    globalThis.fetch = vi.fn(
      () =>
        new Promise((res) => {
          resolve = res;
        })
    );

    render(<Shop />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await act(async () => {
      await resolve({ json: () => Promise.resolve(products) });
    });

    const navBar = screen.getByText('NavBar');
    const cartButton = screen.getByText('CartButton');
    const cardItem = await screen.findAllByTestId('card-item-container');

    expect(navBar).toBeInTheDocument();
    expect(cartButton).toBeInTheDocument();
    expect(cardItem.length).toBeGreaterThan(0);
  });

  it('renders loading state initially', () => {
    render(<Shop />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('filters products by selected category', async () => {
    const user = userEvent.setup();

    let resolve;

    globalThis.fetch = vi.fn(
      () =>
        new Promise((res) => {
          resolve = res;
        })
    );

    render(<Shop />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await act(async () => {
      await resolve({ json: () => Promise.resolve(products) });
    });

    const mensClothingButton = screen.getByText("Men's clothing");
    await user.click(mensClothingButton);

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Product 3')).not.toBeInTheDocument();
  });
});
