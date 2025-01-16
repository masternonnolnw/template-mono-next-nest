'use client'

import * as React from 'react'

import { format } from 'date-fns'
import { th as thLocale } from 'date-fns/locale/th'
import { Calendar as CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

import { cn } from '@/libs/utils'

interface DatePickerProps {
    date?: Date
    setDate?(date: Date | undefined): void
}

export function DatePicker({ date, setDate }: Readonly<DatePickerProps>) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        'w-full justify-between bg-white px-3 text-left font-normal'
                    )}
                >
                    {date ? (
                        format(date, 'PPP', {
                            locale: thLocale,
                        })
                    ) : (
                        <span className="text-[#71717a]">วว/ดด/ปปปป</span>
                    )}
                    <CalendarIcon className="h-4 w-4 text-[#71717A]" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    locale={thLocale}
                />
            </PopoverContent>
        </Popover>
    )
}
