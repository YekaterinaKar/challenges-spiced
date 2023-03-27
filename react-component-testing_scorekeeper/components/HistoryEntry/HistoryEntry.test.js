import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HistoryEntry from ".";

test("renders name of game and 'show score' button only", () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const nameOfGame = screen.getByText("Dodelido");
  const button = screen.getByRole("button", { name: "Display more" });

  expect(nameOfGame).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders player names and scores after button click", async () => {
  render(
    <HistoryEntry
      nameOfGame="Dodelido"
      players={[
        { name: "John", score: 2, id: "xyz" },
        { name: "Jane", score: 1, id: "abc" },
      ]}
    />
  );

  const noPlayer1 = screen.queryByText("John");
  const noPlayer2 = screen.queryByText("Jane");
  const noPlayerScore1 = screen.queryByText("2");
  const noPlayerScore2 = screen.queryByText("1");

  expect(noPlayer1).not.toBeInTheDocument();
  expect(noPlayer2).not.toBeInTheDocument();
  expect(noPlayerScore1).not.toBeInTheDocument();
  expect(noPlayerScore2).not.toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Display more" });
  await userEvent.click(button);

  const player1 = screen.getByText("John");
  const player2 = screen.getByText("Jane");
  const playerScore1 = screen.getByText("2");
  const playerScore2 = screen.getByText("1");

  expect(player1).toBeInTheDocument();
  expect(player2).toBeInTheDocument();
  expect(playerScore1).toBeInTheDocument();
  expect(playerScore2).toBeInTheDocument();
});
