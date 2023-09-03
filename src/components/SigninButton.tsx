'use client';

import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'

export const SigninButton = () => {
  const {data: session} = useSession()

  if(session && session.user) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-600'>{session.user.name}</p>
        <button className='text-red-600' onClick={()=> signOut()}>
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <div className='flex gap-4 ml-auto'>
      <button className='text-green-600' onClick={()=> signIn()}>
      Sign In
      </button>
    </div>
  )
}
