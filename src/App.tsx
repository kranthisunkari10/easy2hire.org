import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ROUTES } from './config/routes'
import { routerBasename } from './lib/urls'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { GetStarted } from './pages/GetStarted'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { NotFound, Privacy, Terms } from './pages/Legal'
import { Services } from './pages/Services'
import { Thanks } from './pages/Thanks'

export default function App() {
  return (
    <BrowserRouter basename={routerBasename()}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.services} element={<Services />} />
          <Route path={ROUTES.howItWorks} element={<HowItWorks />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path={ROUTES.getStarted} element={<GetStarted />} />
          <Route path={ROUTES.thanks} element={<Thanks />} />
          <Route path={ROUTES.privacy} element={<Privacy />} />
          <Route path={ROUTES.terms} element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
