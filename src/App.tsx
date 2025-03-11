import './App.css'
import { HttpMethodContextProvider } from './contexts/httpContextProvider';
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <HttpMethodContextProvider>
      <AppRoutes />
    </HttpMethodContextProvider>
  )
}

export default App;
