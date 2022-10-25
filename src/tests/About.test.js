import { render, screen } from '@testing-library/react';
import About from '../pages/About';

describe('', () => {
  test('Testa se a página contém informações sobre a Pokédex.', () => {
    render(<About />);
    const link = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
    expect(link).toBeInTheDocument();
  });
  test('Testa se contém uma imagem.', () => {
    render(<About />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
