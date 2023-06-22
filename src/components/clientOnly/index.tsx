'use client'

import { useEffect, useState } from "react"

const ClientOnly = ({children} : ReactChild) => {
    const [mount, setMount] = useState(false)

    useEffect(() => {
        setMount(true)
    }, [])

    if(!mount) return null

  return (
    <>
        {children}
    </>
  )
}

export default ClientOnly