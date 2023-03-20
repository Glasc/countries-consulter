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
            <p className=" font-semibold ">Capital:</p>
            <p className="justify-self-start text-base-content/85">{capital[0]}</p>
          </>
        )}
        {population > 0 && (
          <>
            <p className=" font-semibold ">Population:</p>
            <p className="justify-self-start text-base-content/85">{enUsFormat(population)}</p>
          </>
        )}
        {capital && (
          <>
            <p className=" font-semibold text-right">
              Temperature in {capital}:
            </p>
            <p className="justify-self-start text-base-content/85">
              {kelvinToCelsius(countryDetails?.main?.temp)} Celcius
            </p>

            <p className=" font-semibold ">Wind:</p>
            <p className="justify-self-start text-base-content/85">
              {countryDetails?.wind?.speed} m/s
            </p>
          </>
        )}
        <h3 className=" font-semibold">Languages: </h3>
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
