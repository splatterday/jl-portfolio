import React from 'react';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'next-themes'
import { ModeToggle } from './ModeToggle'

function renderWithTheme(ui: React.ReactNode) {
  return render(<ThemeProvider attribute="class">{ui}</ThemeProvider>)
}

test('toggle switches between light and dark mode', async () => {
  renderWithTheme(<ModeToggle />)

  const toggle = screen.getByRole('switch')
  await userEvent.click(toggle)

  expect(toggle).toHaveAttribute('aria-checked', 'true')
})
