'use client';

import * as React from 'react';

import { cn } from '@/libs/utils';

import { Input } from './input';

const InputWithColorPicker = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & {
        colorValue?: string;
        onColorChange?: (color: string) => void;

        containerClassName?: string;
    }
>(
    (
        {
            className,
            containerClassName,
            type,
            colorValue = '#2CB76A',
            onColorChange,
            ...props
        },
        ref
    ) => {
        const [color, setColor] = React.useState<string>(colorValue);

        const handleColorChange = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            const newColor = event.target.value;
            setColor(newColor);
            if (onColorChange) {
                onColorChange(newColor);
            }
        };

        return (
            <div
                className={cn('relative flex items-center', containerClassName)}
            >
                {/* Color Picker Overlay */}
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="absolute left-0 z-10 h-10 w-10 cursor-pointer opacity-0"
                />

                {/* Circle Showing Current Color */}
                <div
                    style={{ backgroundColor: color }}
                    className="pointer-events-none absolute left-4 z-0 h-4 w-4 rounded-full border-gray-300"
                ></div>

                {/* Text Input */}
                <Input
                    type={type}
                    {...props}
                    ref={ref}
                    className={cn('pl-10', className)}
                />
            </div>
        );
    }
);

InputWithColorPicker.displayName = 'InputWithColorPicker';

export { InputWithColorPicker };
