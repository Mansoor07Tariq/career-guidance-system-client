/* eslint-disable @typescript-eslint/no-unsafe-call */

import { render, screen } from '@testing-library/react';
import LoginPage from '../src/app/login/page';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockedUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;

mockedUseRouter.mockReturnValue({
  push: jest.fn(),
});

describe('Login Page', () => {
  it('renders login form correctly', () => {
    render(<LoginPage />);
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
