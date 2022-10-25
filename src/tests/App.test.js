import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste App', () => {
  test('Testando se o link possui o texto Home', () => {
    renderWithRouter(<App />);
    const Home = screen.getByRole('link', { name: /Home/i });
    userEvent.click(Home);
    expect(Home).toBeInTheDocument();
  });
  test('Testando se o link possui o texto About', () => {
    renderWithRouter(<App />);
    const About = screen.getByRole('link', { name: /About/i });
    userEvent.click(About);
    expect(About).toBeInTheDocument();
  });
  test('Testando se o link possui o texto Favorite Pokemons', () => {
    renderWithRouter(<App />);
    const Favorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(Favorite);
    expect(Favorite).toBeInTheDocument();
  });
});
