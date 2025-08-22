import {Game} from './Game';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  games?: Game[];
}
