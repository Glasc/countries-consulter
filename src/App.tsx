import { Panel } from "./components/Panel"

export interface Country {
  capital: string[]
  flags: { svg: string; png: string }
  languages: {}
  name: { common?: string }
  population: number
  latlng: number[]
}

const App = () => {
  return (
    <div className="bg-base-200 min-h-screen w-full py-4">
      <Panel />
    </div>
  )
}

export default App
