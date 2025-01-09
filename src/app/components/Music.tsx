'use client'

import { useState, useEffect } from 'react'
import { Button } from "../../components/ui/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Music() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds }
        
        const newMinutes = prev.minutes - 1
        if (newMinutes >= 0) return { ...prev, minutes: 59, seconds: 59 }
        
        const newHours = prev.hours - 1
        if (newHours >= 0) return { ...prev, hours: newHours, minutes: 59, seconds: 59 }
        
        const newDays = prev.days - 1
        if (newDays >= 0) return { days: newDays, hours: 23, minutes: 59, seconds: 59 }
        
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="w-full bg-black text-white overflow-hidden rounded-lg">
      <div className="container mx-auto px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-green-400 text-sm">Categories</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 leading-tight">
                Enhance Your
                <br />
                Music Experience
              </h1>
            </div>

            <div className="flex gap-4">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center bg-white text-black rounded-full w-16 h-16 md:w-20 md:h-20"
                >
                  <span className="text-lg md:text-xl font-bold">
                    {formatNumber(item.value)}
                  </span>
                  <span className="text-xs">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-green-400 hover:bg-emerald-500 text-white font-semibold px-6 py-4 h-auto text-lg rounded-md"
            >
              Buy Now!
            </Button>
          </div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
            <img
              src="images/Music.png"
              alt="JBL Boombox"
              className="relative right-0 top-1/2 -translate-y-1/2 max-w-none w-[120%] h-auto object-contain z-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

