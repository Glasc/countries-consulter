import { Country } from '../App'
import CountryListElement from './CountryListElement'

interface CountryListProps {
  countries: Country[]
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className='space-y-5'>
      {countries?.map((country: Country, idx: number) => (
        <CountryListElement country={country} key={idx} />
      ))}
    </div>
  )
}

export default CountryList
