export const kelvinToCelsius = (kelvin: number) => {
  const celcius = kelvin - 273.15
  const celciusRounded = celcius.toFixed(2)

  return celciusRounded
}

export const enUsFormat = (number: number) => {
  return new Intl.NumberFormat("en-US").format(number)
}

