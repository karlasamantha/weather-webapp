import React from 'react'

const ErrorComponent = ({ error }: { error: string }) => {
  return (
    <div>
      <h3>Oops</h3>
      <p>We apologize, it's not you, it's us :(</p>
      <p>{error}</p>
    </div>
  )
}

export default ErrorComponent