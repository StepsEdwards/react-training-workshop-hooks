import React, { useState, useEffect } from 'react'

import { onAuthStateChanged } from 'app/utils'
import LoggedIn from 'app/LoggedIn'
import LoggedOut from 'app/LoggedOut'
import { Binding, Scope } from '@babel/traverse';
import { isTSExpressionWithTypeArguments } from '@babel/types';

export default function App() {
  const auth = null
  const authAttempted = false

  if (!authAttempted) {
    return <p>Authenticating...</p>
  }

  return (
    <div className="Layout">
      {auth ? <LoggedIn auth={auth} /> : <LoggedOut />}
    </div>
  )
}