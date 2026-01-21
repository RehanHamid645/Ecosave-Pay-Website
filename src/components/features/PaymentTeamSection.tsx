"use client"

import * as React from "react"
import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Button from "@/components/shared/Button"

export function PaymentTeamSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string | null
  }>({ type: null, message: null })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: null })

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully!',
      })
      form.reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Side: Form Card */}
        <div className="bg-[#d1fae5] rounded-[2.5rem] p-10 md:p-14 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tighter mb-4">
              Speak With Our Payment Team
            </h2>
            <p className="text-gray-700 font-medium leading-relaxed max-w-md">
              Complete the form and a team member will reach out to help you choose the right payment solution for your business.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                name="firstName"
                placeholder="First Name"
                className="h-14 px-6 rounded-xl bg-white text-black border-none focus:ring-2 focus:ring-[#5ece6d] outline-none transition-all placeholder:text-gray-400"
              />
              <input
                required
                name="lastName"
                placeholder="Last Name"
                className="h-14 px-6 rounded-xl bg-white text-black border-none focus:ring-2 focus:ring-[#5ece6d] outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <input
              required
              name="businessName"
              placeholder="Business Name"
              className="w-full h-14 px-6 rounded-xl bg-white text-black border-none focus:ring-2 focus:ring-[#5ece6d] outline-none transition-all placeholder:text-gray-400"
            />

            <input
              required
              name="email"
              type="email"
              placeholder="Email"
              className="w-full h-14 px-6 rounded-xl bg-white text-black border-none focus:ring-2 focus:ring-[#5ece6d] outline-none transition-all placeholder:text-gray-400"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full h-14 px-6 rounded-xl bg-white text-black border-none focus:ring-2 focus:ring-[#5ece6d] outline-none transition-all placeholder:text-gray-400"
            />


            {submitStatus.message && (
              <p className={cn(
                "text-sm font-bold text-center p-2 rounded-lg",
                submitStatus.type === 'success' ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"
              )}>
                {submitStatus.message}
              </p>
            )}

            <Button 
              type="submit"   
              className="w-full h-14 bg-[#6ec99c] text-white font-black text-lg rounded-xl hover:bg-black hover:scale-[1.01] transition-all duration-300 shadow-lg border-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "SEND"
              )}
            </Button>
          </form>
        </div>

        {/* Right Side: Image */}
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] bg-gray-900 border border-white/10 group">
          <Image 
            src="/images/ecosave-pay-home-page/terminal-hand.png" 
            alt="EcoSave Payment Terminal" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

      </div>
    </section>
  )
}

export default PaymentTeamSection