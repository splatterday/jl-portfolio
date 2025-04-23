import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Experience from './Experience';

test('shows details when company is selected (desktop view)', async () => {
  render(<Experience />);

  const desktopButton = screen.getByLabelText('Penguin Random House-desktop');
  await userEvent.click(desktopButton);

  await waitFor(() => {
    expect(
      screen.getByRole('heading', {
        name: (content, element) =>
          element?.tagName.toLowerCase() === 'h3' &&
          content.includes('Ebook Production Manager'),
      })
    ).toBeVisible();
  });  
});
