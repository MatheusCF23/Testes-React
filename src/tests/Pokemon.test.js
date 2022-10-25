import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('', () => {
  test('Testando se o card de informões é renderizado.', () => {
    renderWithRouter(<App />);
    const name = screen.getByTestId('pokemon-name');
    expect(name).toHaveTextContent('Pikachu');
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');
    const weight = screen.getByTestId('pokemon-weight');
    expect(weight).toHaveTextContent('Average weight: 6.0 kg');
    const details = screen.getByRole('link', { name: /more details/i });
    expect(details.href).toBe('http://localhost/pokemons/25');
    const img = screen.getByRole('img');
    expect(img.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(img.alt).toBe('Pikachu sprite');
  });
  test('', () => {
    renderWithRouter(<App />);
    const details = screen.getByRole('link', { name: /more details/i });
    expect(details).toBeInTheDocument();
    userEvent.click(details);
    const favorite = screen.getByRole('checkbox');
    expect(favorite).toBeInTheDocument();
    userEvent.click(favorite);
    const img = screen.getByAltText('Pikachu is marked as favorite');
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost/star-icon.svg');
  });
});
