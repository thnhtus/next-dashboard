import '../styles/_global.scss'
import type { AppProps } from 'next/app'
import Layout from '../layouts'
import 'antd/dist/reset.css'
import { Provider } from 'react-redux'
import store from '../store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
