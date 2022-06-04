import Scoreboard from "../../components/Scoreboard";
import { render, screen } from '@testing-library/react';

describe('Tests for Scoreboard', () => {

  it('Scoreboard renders username and time', () => {
    render(<Scoreboard />);

    const username = screen.getByText(/username/i);
    const time = screen.getByText(/1:37/i);

    expect(username).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  }) 

})