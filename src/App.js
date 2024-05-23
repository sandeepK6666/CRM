import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/config";
import intl from "./locale";
import { IntlProvider } from "react-intl";
import { LocaleContext } from "./globalContext/locale/localeProviders";


function App() {
  const [localeState] = useContext(LocaleContext);
  return (
    <IntlProvider
      messages={intl[localeState?.locale]}
      locale={localeState?.locale}
      defaultLocale="en"
    >
      <Router>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
          
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
