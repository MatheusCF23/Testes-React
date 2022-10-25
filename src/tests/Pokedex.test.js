import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa a Pokedex', () => {
  test('Testa se encontra o h2', () => {
    renderWithRouter(<App />);
    const h2 = screen.getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(h2).toBeInTheDocument();
  });
  test('Testando todos os botões', () => {
    renderWithRouter(<App />);
    const submit = screen.getAllByRole('button');
    expect(submit[1]).toHaveTextContent('Electric');
    expect(submit[2]).toHaveTextContent('Fire');
    expect(submit[3]).toHaveTextContent('Bug');
    expect(submit[4]).toHaveTextContent('Poison');
    expect(submit[5]).toHaveTextContent('Psychic');
    expect(submit[6]).toHaveTextContent('Normal');
    expect(submit[7]).toHaveTextContent('Dragon');
  });
  test('Testando Pokedex', () => {
    renderWithRouter(<App />);
    const submit = screen.getAllByTestId('pokemon-type-button');
    expect(submit).toHaveLength(7);
  });
  test('Testando se é possivel a filtragem no botão All', () => {
    renderWithRouter(<App />);
    const all = screen.getByRole('button', { name: /all/i });
    userEvent.click(all);
    expect(all).toBeInTheDocument();
  });
});
