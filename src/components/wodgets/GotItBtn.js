import React, { useEffect, useState } from 'react'

const GotItBtn = (props) => {

    const gotit = {
        text: 'Got It!',
        handler: props.actionProvider.handleGotIt,
        id: 1
    }

  return (
    <div>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md' onClick={gotit.handler}>{gotit.text}</button>
    </div>
  )
}

export default GotItBtn