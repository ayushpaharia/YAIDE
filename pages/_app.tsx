import type { AppProps } from "next/app"
import "@/css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
