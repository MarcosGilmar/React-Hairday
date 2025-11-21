import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const scheduleItemVariants = cva(`
    
    `, {
    variants: {
        variant: {

        }
    },
    defaultVariants: {

    }
})

interface ScheduleItemProps 
    extends VariantProps<typeof scheduleItemVariants>,
    React.ComponentProps<"div"> {

    }

export default function ScheduleItem({
    
}: ScheduleItemProps) {
    return (
        
    )
}