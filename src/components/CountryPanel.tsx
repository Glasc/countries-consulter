import { Country } from "../App"
import CountryDetails from "./CountryDetails"
import CountryList from "./CountryList"

interface CountryPanelProps {
  countries: Country[]
  isInputEmpty: boolean
}

const CountryPanel = ({ countries, isInputEmpty }: CountryPanelProps) => {
  if (isInputEmpty) {
    return null
  }

  if (countries.length === 0) {
    return <p className="text-error text-center">Not results found.</p>
  }

  if (countries.length >= 10) {
    return (
      <p className="text-warning text-center">
        Too many matches, specify another filter.
      </p>
    )
  }
  
  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />
  }

  return <CountryList countries={countries} />
}

export default CountryPanel
