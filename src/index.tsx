import ReactDOM from 'react-dom/client'
import App from './App'
import { useLocale } from '@/locale'
import { BrowserRouter } from 'react-router-dom'

useLocale()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
