import * as React from 'react'
import { navigate } from 'gatsby'

import { linkResolver } from '../utils/linkResolver'

// TODO: refactor based on design
export const LanguageSwitcher = ({ lang, altLangs }) => {
  // Render the current language
  const currentLangOption = (
    <option value={lang}>{lang.slice(0, 2).toUpperCase()}</option>
  )

  // Render all the alternate language options
  const alternateLangOptions = altLangs.map((altLang, index) => (
    <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
      {altLang.lang.slice(0, 2).toUpperCase()}
    </option>
  ))

  // Trigger select change event
  const handleLangChange = (event) => {
    navigate(event.target.value)
  }

  return (
    <div
      style={{ width: 'max-content', margin: '0 auto 50px', display: 'none' }}
    >
      <select value={lang} onChange={handleLangChange}>
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </div>
  )
}
