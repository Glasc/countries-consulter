import { useQuery } from "@tanstack/react-query"
import { useMemo } from "react"
import { Country } from "../App"
import { enUsFormat, kelvinToCelsius } from "../utils"
import { useCountryDetails } from "./useCountryDetails"

interface CountryDetailsProps {
  country: Country
}

const CountryDetails = ({ country }: CountryDetailsProps) => {
  const { name, capital, population, languages, flags, latlng } = useMemo(
    () => country,
    [country]
  )
  
  const [lat, lng] = latlng
  const {
    isLoading,
    isError,
    data: countryDetails,
  } = useCountryDetails({ lat, lng })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>An error has occurred</div>
  }

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

      <h2 className="text-2xl text-base-content">{name.common}</h2>
      <section className="grid grid-cols-2 gap-x-3 gap-y-2 items-center justify-items-end pt-2">
        {capital && (
          <>
            <p className="text-primary-content ">Capital:</p>
            <p className="justify-self-start text-base-content">{capital[0]}</p>
          </>
        )}
        {population > 0 && (
          <>
            <p className="text-primary-content ">Population:</p>
            <p className="justify-self-start text-base-content">{enUsFormat(population)}</p>
          </>
        )}
        {capital && (
          <>
            <p className="text-primary-content  text-right">
              Temperature in {capital}:
            </p>
            <p className="justify-self-start text-base-content">
              {kelvinToCelsius(countryDetails?.main?.temp)} Celcius
            </p>

            <p className="text-primary-content ">Wind:</p>
            <p className="justify-self-start text-base-content">
              {countryDetails?.wind?.speed} m/s
            </p>
          </>
        )}
        <h3 className="text-base-content">Languages: </h3>
        <ul className="justify-self-start text-base-content text-left">
          {Object.entries(languages).map(([, value]: any, idx) => {
            return <li key={idx}>{value}</li>
          })}
        </ul>
      </section>
    </div>
  )
}

export default CountryDetails
