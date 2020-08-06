import { Layout } from 'antd'
import React, { FC, useState } from 'react'

import { Editor, Header } from '~/layouts'

const { Content } = Layout

const App: FC = () => {
  const [vardefs, setVardefs] = useState('')
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header vardefs={vardefs} />
      <Content>
        <Editor vardefs={vardefs} setVardefs={setVardefs} />
      </Content>
    </Layout>
  )
}

export default App
