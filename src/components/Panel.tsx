import { useState } from "react"
import CountryPanel from "./CountryPanel"
import FormNewCountry from "./FormNewCountry"
import { useCountry } from "./useCountry"

const PanelContent = () => {
  const { isLoading, isError, data: countries } = useCountry()
  const [inputValue, setInputValue] = useState("")

  if (isLoading) {
    return (
      <div
        className="animate-spin radial-progress mx-auto block"
        style={{ ["--value" as any]: 70 }}
      ></div>
    )
  }

  if (isError) {
    return (
      <p className="text-error text-center">
        An error has occurred attempting to retrieve the data.
      </p>
    )
  }

  const countriesFiltered = countries.filter((country) => {
    const countryName = country.name.common?.toLowerCase()
    const currentInputValue = inputValue.toLowerCase()

    return countryName?.includes(currentInputValue)
  })

  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-accent text-center">
          Country Info
        </h1>
        <hr className="border-accent border-2 mt-2" />
      </section>
      <FormNewCountry setInputValue={setInputValue} inputValue={inputValue} />
      <CountryPanel
        countries={countriesFiltered}
        isInputEmpty={inputValue === ""}
      />
    </>
  )
}

export const Panel = () => {
  return (
    <main className="p-4 mt-4 max-w-lg w-full px-4 bg-base-200 shadow sm:p-10 rounded-lg space-y-6 font-medium m-2 mx-auto">
      <PanelContent />
    </main>
  )
}
