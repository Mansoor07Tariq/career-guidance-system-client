/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SignupPage from '../src/app/signup/page';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('Signup Page', () => {
  it('renders signup form correctly', () => {
    render(<SignupPage />);
    expect(
      screen.getByRole('heading', { name: 'Sign Up' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });

  it('shows error when passwords do not match', async () => {
    render(<SignupPage />);

    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), {
      target: { value: 'password456' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));

    await waitFor(() => {
      expect(screen.getByTestId('error-message')).toHaveTextContent(
        'Invalid email or password (min 6 chars)',
      );
    });
  });
});
