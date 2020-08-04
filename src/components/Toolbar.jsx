import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import styled from 'styled-components'

import Pane from './Pane'

const Toolbar = ({ text }) => {
  let timer = null
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    setCopied(true)
    timer = setTimeout(() => setCopied(false), 1200)
  }

  useEffect(() => {
    setCopied(false)
    clearTimeout(timer)
  }, [text, timer])

  return (
    <Wrapper>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <Button title="copy">
          <FontAwesomeIcon icon={faCopy} />
        </Button>
      </CopyToClipboard>
      <p>{copied ? <span style={{ color: '#d87d7d' }}>copied</span> : null}</p>
    </Wrapper>
  )
}

Toolbar.propTypes = {
  text: PropTypes.string,
}

Toolbar.defaultProps = {
  text: '',
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
  width: 3rem;
  height: 3rem;
  cursor: pointer;

  &:hover {
    background-color: #585f6d;
  }
`
