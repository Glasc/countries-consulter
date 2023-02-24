import { useState } from 'react'
import { Country } from '../App'
import CountryDetails from './CountryDetails'

interface CountryListElementProps {
  country: Country
}

const CountryListElement = ({ country }: CountryListElementProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleShowClick = () => {
    setIsVisible((previousValue) => !previousValue)
  }

  return (
    <section className=''>
      <div className='grid grid-cols-3 gap-6 items-center'>
        <p className='col-span-2'>{country?.name.common}</p>
        <button
          className={`col-span-1 mt-0 btn btn-sm btn-outline ${
            isVisible ? 'btn-secondary' : 'btn-accent'
          }`}
          onClick={() => handleShowClick()}
        >
          {isVisible ? 'hide' : 'show'}
        </button>
      </div>
      {isVisible ? (
        <div className='py-2'>
          <CountryDetails country={country} />
        </div>
      ) : (
        null
      )}
    </section>
  )
}

export default CountryListElement
