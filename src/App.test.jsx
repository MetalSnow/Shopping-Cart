import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component', () => {
  it('Render Homepage', () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
