import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Country } from "../App"

interface FormNewCountryProps {
  setInputValue: Dispatch<SetStateAction<string>>
  inputValue: string
}

const FormNewCountry = ({
  setInputValue,
  inputValue,
}: FormNewCountryProps) => {
  const handleInputChange = (e: any) => {
    e.preventDefault()
    setInputValue(e.target.value)
  }

  return (
    <form className="" onSubmit={(e) => e.preventDefault()}>
      <label className="label">
        <span className="label-text text-base">Type a country</span>
      </label>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        className="input input-bordered text-lg mt-1 w-full placeholder-base-content/40"
        placeholder="Mexico, Uruguay, Spain..."
      />
    </form>
  )
}

export default FormNewCountry
