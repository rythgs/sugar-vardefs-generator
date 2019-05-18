import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Pane from './Pane'

const PasteArea = ({ generate }) => (
  <Pane>
    <Textarea
      className="paste-area"
      placeholder="This app is sugarcrm vardefs generator.
1. Paste vardef definition!
<fieldName>@<fieldType>:<required>:<length>:<defaultValue>
ex. example@varchar:1:30:hoge
2. ← Click copy button!"
      onInput={({ target: { value } }) => generate(value)}
    />
  </Pane>
)

PasteArea.propTypes = {
  generate: PropTypes.func
}

export default PasteArea

const Textarea = styled.textarea`
  width: 100%;
  height: 100vh;
  border: none;
  background-color: #323846;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  line-height: 1.5;
  padding: 1rem;
  outline: none;
  font-size: 14px;
`
