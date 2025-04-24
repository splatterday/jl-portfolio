import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileNav } from './MobileNav'

test('mobile menu toggles open and closed', async () => {
  render(<MobileNav />)

  const button = screen.getByLabelText('toggle', { name: /menu/i })
  await userEvent.click(button)

  expect(screen.getByText(/projects/i)).toBeInTheDocument()

  await userEvent.click(screen.getByLabelText('close', { name: /close/i }))
  expect(screen.queryByText(/projects/i)).not.toBeInTheDocument()
})
