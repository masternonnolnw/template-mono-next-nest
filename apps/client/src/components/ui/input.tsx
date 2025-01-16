'use client'

import * as React from 'react'

import { cn } from '@/libs/utils'

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                'flex h-10 w-full rounded-md border border-input bg-transparent bg-white px-3 py-1 text-[14px] text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props}
        />
    )
})
Input.displayName = 'Input'

const InputWithRightIcon = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & {
        rightIcon: React.ReactNode
        containerClassName?: string
    }
>(({ className, containerClassName, rightIcon, ...props }, ref) => {
    return (
        <div className={cn('relative flex items-center', containerClassName)}>
            <div className="pointer-events-none absolute right-3 z-0 h-4 w-4 rounded-full">
                {rightIcon}
            </div>

            {/* Text Input */}
            <Input {...props} ref={ref} className={cn('', className)} />
        </div>
    )
})

InputWithRightIcon.displayName = 'InputWithColorPicker'

export { Input, InputWithRightIcon }
