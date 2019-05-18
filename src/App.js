import React, { Component } from 'react'
import _ from 'lodash'
import styled from 'styled-components'

import templates from './templates'
import Toolbar from './components/Toolbar'
import PasteArea from './components/PasteArea'
import Preview from './components/Preview'

const SEP = '@'

class App extends Component {
  constructor() {
    super()
    this.state = {
      vardefs: [],
      copied: false
    }
  }

  render() {
    const vardefs = this.state.vardefs.join('').trim()
    return (
      <div className="App">
        <Editor>
          <Toolbar text={vardefs} />
          <PasteArea generate={this.generate.bind(this)} />
          <Preview text={vardefs} />
        </Editor>
      </div>
    )
  }

  generate(value = '') {
    const list = []
    value.split('\n').forEach(line => {
      const def = line.split(SEP)
      if (def.length !== 2) {
        return
      }

      const fieldName = def[0].trim()
      const fieldDefs = def[1].split(':').map(def => def.trim())

      const [fieldType, required, len, defaultValue, relateModule] = fieldDefs

      switch (fieldType) {
        case 'varchar':
          list.push(this.vardefs(templates.VARCHAR, fieldName, { required, len, defaultValue }))
          break
        case 'phone':
          list.push(this.vardefs(templates.PHONE, fieldName, { required, len, defaultValue }))
          break
        case 'text':
          list.push(this.vardefs(templates.TEXTAREA, fieldName, { required, len, defaultValue }))
          break
        case 'date':
          list.push(this.vardefs(templates.DATE, fieldName, { required }))
          break
        case 'datetime':
          list.push(this.vardefs(templates.DATETIME, fieldName, { required }))
          break
        case 'int':
          list.push(this.vardefs(templates.INT, fieldName, { required, len, defaultValue }))
          break
        case 'enum':
          list.push(this.vardefs(templates.DROPDOWN, fieldName, { required, len, defaultValue }))
          break
        case 'multienum':
          list.push(this.vardefs(templates.MULTISELECT, fieldName, { required, len, defaultValue }))
          break
        case 'radioenum':
          list.push(this.vardefs(templates.RADIO, fieldName, { required, len, defaultValue }))
          break
        case 'currency':
          list.push(this.vardefs(templates.CURRENCY, fieldName, { required, len, defaultValue }))
          break
        case 'relate':
          list.push(this.vardefs(templates.RELATE, fieldName, { required, relateModule }))
          break
        case 'bool':
          list.push(this.vardefs(templates.BOOL, fieldName, { required, defaultValue }))
          break
        default:
          console.log(`found unknown field type! => ${fieldType}`)
          break
      }
    }, this)

    this.setState({ vardefs: list, copied: false })
  }

  vardefs(template, fieldName, extra = {}) {
    const compiled = _.template(template)
    return compiled({
      name: fieldName,
      ...extra
    })
  }
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
