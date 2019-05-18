import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CopyToClipboard from 'react-copy-to-clipboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'

import Pane from './Pane'

class Toolbar extends Component {
  constructor() {
    super()
    this.state = {
      copied: false
    }
  }

  render() {
    return (
      <Wrapper>
        <CopyToClipboard text={this.props.text} onCopy={() => this.setState({ copied: true })}>
          <Button title="copy">
            <FontAwesomeIcon icon={faClipboard} />
          </Button>
        </CopyToClipboard>
        <p>{this.state.copied ? <span style={{ color: 'red' }}>ok</span> : null}</p>
      </Wrapper>
    )
  }
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
