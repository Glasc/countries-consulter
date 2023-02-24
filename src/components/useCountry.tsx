import { useQuery } from "@tanstack/react-query"
import { Country } from "../App"

export const useCountry = () => {
  return useQuery<Country[]>({
    queryKey: ["countries"],
    queryFn: () =>
      fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
