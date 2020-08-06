import { Grid } from 'antd'
import { throttle } from 'lodash-es'
import React, { FC } from 'react'
import styled from 'styled-components'

import { PasteArea, Preview } from '~/components'
import { parseVardefs } from '~/utils'

type Props = {
  vardefs: string
  setVardefs: React.Dispatch<React.SetStateAction<string>>
}

const { useBreakpoint } = Grid

const Wrapper = styled.section<{ small: boolean | undefined }>`
  background-color: #282c34;
  height: 100vh;
  display: flex;
  flex-direction: ${({ small }) => (small ? 'column' : 'row')};
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
  padding-top: 66px;
`

const Editor: FC<Props> = ({ vardefs, setVardefs }) => {
  const { xs } = useBreakpoint()
  return (
    <Wrapper small={xs}>
      <PasteArea
        onInput={throttle((value) => {
          setVardefs(parseVardefs(value))
        }, 800)}
      />
      <Preview vardefs={vardefs} />
    </Wrapper>
  )
}

export default Editor
