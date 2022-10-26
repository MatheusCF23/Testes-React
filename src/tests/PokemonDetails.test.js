import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa Pokemon', () => {
  test('Testa informações detalhadas', () => {
    renderWithRouter(<App />);
    const lkMore = screen.getByRole('link', { name: 'More details' });
    userEvent.click(lkMore);
    const details = screen.getByRole('heading', { name: /details/i, level: 2 });
    expect(details).toBeInTheDocument();
    const nameSum = screen.getByRole('heading', { name: /summary/i, level: 2 });
    expect(nameSum).toBeInTheDocument();
    const location = screen.getByRole('heading', { name: /game locations/i, level: 2 });
    expect(location).toBeInTheDocument();
    const img = screen.getAllByRole('img', { name: /pikachu location/i });
    expect(img[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(img[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    const checkFavorite = screen.getByText(/Pokémon favoritado?/i);
    expect(checkFavorite).toBeInTheDocument();
    const summary = screen.getByText(/This intelligent Pokémon roasts/i);
    expect(summary).toBeInTheDocument();
  });
});
