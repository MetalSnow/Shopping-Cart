import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardItem from './CardItem';

describe('CardItem Component', () => {
  it('should display fetched shop products', () => {
    const product = {
      title: 'title',
      description: 'description',
      image: 'image',
      price: 'price',
      rating: 'rating',
    };

    render(
      <MemoryRouter>
        <CardItem
          title={product.title}
          description={product.description}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      </MemoryRouter>
    );

    const image = screen.getByAltText('title');
    const title = screen.getByText('title');
    const description = screen.getByText('description');
    const price = screen.getByText('$ price');

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
