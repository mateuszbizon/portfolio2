import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type DotsLoadingProps = ComponentProps<"div">

function DotsLoading({ className, ...props }: DotsLoadingProps) {
  return (
    <div className={cn('flex gap-2 p-2 rounded-lg bg-muted/50', className)} {...props}>
        <div className='dot-loading'></div>
        <div className='dot-loading delay-300'></div>
        <div className='dot-loading delay-500'></div>
    </div>
  )
}

export default DotsLoading