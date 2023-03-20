import { useQuery } from "@tanstack/react-query"

interface CountryDetails {
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level?: number
    grnd_level?: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

type Props = {
  lat: number
  lng: number
}

export const useCountryDetails = ({ lat, lng }: Props) => {
  console.log(import.meta.env.MODE)
  return useQuery({
    queryKey: ["countryDetails"],
    queryFn: (): Promise<CountryDetails> =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${
          import.meta.env.VITE_API_KEY 
        }`
      ).then((res) => res.json()),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  })
}
