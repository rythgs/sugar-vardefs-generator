import React, { useState } from 'react'
import styled from 'styled-components'

import Toolbar from './components/Toolbar'
import PasteArea from './components/PasteArea'
import Preview from './components/Preview'

import { parseVardefs } from './utils'

const App = () => {
  const [vardefs, setVardefs] = useState('')
  return (
    <div className="App">
      <Editor>
        <Toolbar text={vardefs} />
        <PasteArea onInput={value => setVardefs(parseVardefs(value))} />
        <Preview text={vardefs} />
      </Editor>
    </div>
  )
}

export default App

const Editor = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
`
