import { Player } from 'player';

export type Round = {
  id: number;
  currentPlayer: Player;
  selectedPlayer: Player;
};
