import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CopyToClipboard from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

import Pane from './Pane'

const Toolbar = ({ text }) => {
  const [copied, setCopied] = useState(false)
  useEffect(() => setCopied(false), [text])
  return (
    <Wrapper>
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <Button title="copy">
          <FontAwesomeIcon icon={faClipboard} />
        </Button>
      </CopyToClipboard>
      <p>{copied ? <span style={{ color: 'red' }}>ok</span> : null}</p>
    </Wrapper>
  )
}
Toolbar.propTypes = {
  text: PropTypes.string
}

export default Toolbar

const Wrapper = styled(Pane)`
  flex: 1;
  padding: 1rem;
  text-align: center;
`

const Button = styled.button`
  border: none;
  background-color: #323846;
  color: white;
  border-radius: 2px;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #585f6d;
  }
`
