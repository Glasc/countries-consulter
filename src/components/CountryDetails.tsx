import { useQuery } from "@tanstack/react-query"
import { Country } from "../App"
import { enUsFormat, kelvinToCelsius } from "../utils"

interface CountryDetailsProps {
  country: Country
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  const { name, capital, population, languages, flags, latlng } = country

  const [lat, lng] = latlng

  const {
    isLoading,
    isError,
    data: result,
  } = useQuery({
    queryKey: ["countryDetails"],
    queryFn: (): Promise<Country[]> =>
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=73d5b70d0e161c9894f9287f5dd27afd`
      ).then((res) => res.json()),
    // fetch("https://restcountries.com/v3.1/all").then((res) => res.json()),
  })

  console.log(result)

  return (
    <div className="space-y-2 text-center pt-3">
      <div className="w-48 pb-2 mx-auto pointer-events-none">
        {flags ? (
          <img
            className="rounded-lg"
            src={flags.svg}
            alt={`Country's Flag`}
            width={300}
            height={200}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <h2 className="text-2xl text-primary-content">{name.common}</h2>
      <section className="grid grid-cols-2 gap-x-3 gap-y-2 items-center justify-items-end pt-2">
        {capital && (
          <>
            <p className="text-primary-content">Capital:</p>
            <p className="justify-self-start">{capital[0]}</p>
          </>
        )}
        {population > 0 && (
          <>
            <p className="text-primary-content">Population:</p>
            <p className="justify-self-start">{enUsFormat(population)}</p>
          </>
        )}
        {capital && (
          <>
            <p className="text-primary-content text-right">
              Temperature in {capital}:
            </p>
            <p className="justify-self-start">
              {kelvinToCelsius(result?.main?.temp)} Celcius
            </p>

            <p className="text-primary-content">Wind:</p>
            <p className="justify-self-start">{result?.wind?.speed} m/s</p>
          </>
        )}
        <h3 className="text-primary-content">Languages: </h3>
        <ul className="justify-self-start text-left">
          {Object.entries(languages).map(([, value]: any, idx) => {
            return <li key={idx}>{value}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export default CountryDetails
