import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
    title:string,
    className?:string
}

const PageTitle = ({title,className}: Props) => {
  return (
    <h1 className={cn('text-2xl font-semibold p-2',className)}>
    {title}
    </h1>
  )
}
    
export default PageTitle