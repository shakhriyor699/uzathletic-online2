import React, { FC } from 'react'

interface Params {
  params: {
    id: string
  }
}


const Page: FC<Params> = ({ params }) => {

  return (
    <div>Page</div>
  )
}

export default Page