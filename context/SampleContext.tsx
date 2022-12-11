import { createContext, useState } from "react"

export interface ISampleContext {
  count: number
  incrementCount: () => void
  [key: string | number | symbol]: unknown
}

export const SampleContext = createContext<ISampleContext | null>(null)

const SampleContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState<number>(0)

  const incrementCount = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <SampleContext.Provider value={{ count, incrementCount }}>
      {children}
    </SampleContext.Provider>
  )
}

export default SampleContextProvider
