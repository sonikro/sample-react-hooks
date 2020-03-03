import { useEffect, useState } from "react";
import { fetchSquads } from "../backend/SquadApi";
import { Squad } from "../model/Squad";

export const useSquad = () => {
  const [squad, setSquads] = useState([] as Squad[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const fetch = async () => {
    try {
      setIsLoading(true);
      setSquads(await fetchSquads());
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return { squad, isLoading, error };
};
