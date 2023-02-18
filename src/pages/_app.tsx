import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/components/ui/header/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={"content"}>
          <Header />
          <Component {...pageProps} />
      </div>
  )
}
