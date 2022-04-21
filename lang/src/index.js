import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import i18n from "i18next"
import {initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icons.min.css'


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:["en", "fr", "ar"],
    fallbackLng: "en",
    detection: {
      order: ['path','cookie', 'htmlTag', 'localStorage','subdomain'],
      caches:['cookie'],
    },
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json'
    },
  })

const loadingMarkup = (
    <div className='py-4 text-center'>
      <h2>Loading...</h2>
    </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
