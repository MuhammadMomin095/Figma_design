'use client'

import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from 'lucide-react'

interface QuantitySelectorProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function QuantitySelector({ quantity, onQuantityChange }: QuantitySelectorProps) {
  return (
    <div className="flex flex-col items-center rounded-md border">
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6"
        onClick={() => onQuantityChange(quantity + 1)}
      >
        <ChevronUp className="h-4 w-4" />
      </Button>
      <div className="w-10 text-center">{quantity?.toString().padStart(1, '0') || '00'}</div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-6 w-6"
        onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
      >
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )
}

