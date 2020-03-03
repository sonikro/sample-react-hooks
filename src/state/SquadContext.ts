import * as React from "react";
import { Fetchable } from "../util/Fetchable";
import { Squad } from "../model/Squad";

export interface SquadContextData {
  squads: Fetchable<Squad[]>;
}

export const DEFAULT_SQUAD_CONTEXT_DATA = {
  squads: {
    data: [{id: 1, name: "teste"}],
    error: undefined,
    isLoading: false
  }
} as SquadContextData;
export const SquadContext = React.createContext(DEFAULT_SQUAD_CONTEXT_DATA);