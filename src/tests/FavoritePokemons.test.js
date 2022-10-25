import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

describe('Testa o componente Favorite Pokemons', () => {
  test('Testa se é exibido na tela a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemons />);
    const pokemon = screen.getByText('No favorite pokemon found');
    expect(pokemon).toBeInTheDocument();
  });
});
