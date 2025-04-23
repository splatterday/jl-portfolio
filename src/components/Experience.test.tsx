import React from 'react';
import { render, screen } from '@testing-library/react'
import Experience from './Experience';

test("shows details when company is selected", () => {
    render(<Experience />);
    screen.getByText("Penguin Random House").click();
    expect(screen.getByText(/Ebook Production Manager/)).toBeVisible();
  });
  