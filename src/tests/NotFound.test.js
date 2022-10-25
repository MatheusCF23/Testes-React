import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Testando o NotFound', () => {
  test('Testa se contém o h2 = Page requested not found', () => {
    render(<NotFound />);
    const h2 = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(h2).toBeInTheDocument();
  });
  test('Testa se a página contém uma imagem', () => {
    render(<NotFound />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
