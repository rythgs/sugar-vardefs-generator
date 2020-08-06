import { Grid } from 'antd'
import React, { FC } from 'react'
import styled from 'styled-components'

import Pane from './Pane'

type Props = {
  onInput: (value: string) => void
}

const { useBreakpoint } = Grid

const Textarea = styled.textarea<{ small: boolean | undefined }>`
  width: 100%;
  height: ${({ small }) =>
    small ? `calc(50vh - 33px)` : `calc(100vh - 66px)`};
  border: none;
  background-color: #323846;
  color: white;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  line-height: 1.5;
  padding: 1rem;
  outline: none;
  font-size: 14px;
`

const PasteArea: FC<Props> = ({ onInput }) => {
  const { xs } = useBreakpoint()
  return (
    <Pane>
      <Textarea
        placeholder="This app is sugarcrm vardefs generator.
1. Paste the definition.
<fieldName>@<fieldType>:<required>:<length>:<defaultValue>
ex. example@varchar:1:30:hoge
2. Click on the copy button at the top of the screen."
        onInput={({ currentTarget: { value } }) => onInput(value)}
        small={xs}
      />
    </Pane>
  )
}

export default PasteArea
