import Scoreboard from "../../components/Scoreboard";
import { render, screen } from '@testing-library/react';

describe('Tests for Scoreboard', () => {

  it('If no user prop renders anonymous and time', () => {
    render(<Scoreboard time={'1:37'} />);

    const username = screen.getByText(/anonymous/i);
    const time = screen.getByText(/1:37/i);

    expect(username).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  }) 

  it('If user prop exists renders user string and time', () => {
    render(<Scoreboard time='1:37' user='John' />);

    const user = screen.getByText(/john/i);
    const time = screen.getByText(/1:37/i);

    expect(user).toBeInTheDocument();
    expect(time).toBeInTheDocument();
  })

})