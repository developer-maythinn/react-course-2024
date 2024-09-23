import React from 'react'
import { withBlueBackground } from './HOC'

function Test() {
  return (
    <div>Test</div>
  )
}

export default withBlueBackground(Test)