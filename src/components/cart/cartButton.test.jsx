import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartButton from './CartButton';

describe('CustomButton', () => {
  it('should render a button with a number and an icon', () => {
    render(<CartButton onClick={() => {}} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should call the onClick function when its called', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();

    render(<CartButton onClick={onClick} />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", () => {
    const onClick = vi.fn();

    render(<CartButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
