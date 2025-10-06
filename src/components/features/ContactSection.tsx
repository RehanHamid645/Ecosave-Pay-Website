"use client"

import * as React from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Button from "@/components/shared/Button"
import { useState } from "react"
/* import CalendarPicker from "@/components/shared/Calendar"
import { DateValue } from "@internationalized/date" */

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface ContactInfoProps {
  icon: React.ReactNode
  title: string
  details: string
  className?: string
}

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: "0330 403 7373",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: "info@ecosavegasandpower.com",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office",
    details: "Lloyds House 18-22, Lloyd Street, Manchester, England, M2 5WA",
  },
]

function ContactInfo({ icon, title, details, className }: ContactInfoProps) {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <div className="rounded-xl bg-[#3faa4e]/10 p-3 text-[#3faa4e]">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-base">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{details}</p>
      </div>
    </div>
  )
}

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string | null
  }>({ type: null, message: null })
/*   const [selectedDate, setSelectedDate] = useState<DateValue | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined)
 */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: null })

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const data = Object.fromEntries(formData.entries())

 /*      const formattedDate = selectedDate ? selectedDate.toString() : null */
      const finalData = { 
        ...data, 
/*         preferredDate: formattedDate,
        preferredTime: selectedTime */
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.',
      })
      form.reset()
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-[85%]">
                Have questions about our services? Our team is here to help you find the best utility deals for your business.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info) => (
                <ContactInfo key={info.title} {...info} />
              ))}
            </div>

            {/* Operating Hours */}
            <div className="rounded-xl border p-6 bg-muted/50">
              <h3 className="font-semibold text-base">Operating Hours</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday, Sunday & Bank Holidays: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border bg-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2.5">
                  <label htmlFor="firstName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    First name
                  </label>
                  <Input 
                    id="firstName" 
                    name="firstName"
                    placeholder="Enter your first name" 
                    required
                  />
                </div>
                <div className="space-y-2.5">
                  <label htmlFor="lastName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Last name
                  </label>
                  <Input 
                    id="lastName" 
                    name="lastName"
                    placeholder="Enter your last name" 
                    required
                  />
                </div>
              </div>
              <div className="space-y-2.5">
                <label htmlFor="businessName" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Business Name
                </label>
                <Input 
                  id="businessName" 
                  name="businessName"
                  placeholder="Enter your business name" 
                  required
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="Enter your email" 
                  required
                />
              </div>
              <div className="space-y-2.5">
                <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Phone number
                </label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  placeholder="Enter your phone number" 
                />
              </div>
{/*               <CalendarPicker
                label="Preferred Contact Date"
                onChange={(date, time) => {
                  setSelectedDate(date)
                  setSelectedTime(time)
                }}
                value={selectedDate}
                selectedTime={selectedTime}
              /> */}
              <div className="space-y-2.5">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  className="min-h-[130px] resize-none"
                  required
                />
              </div>
              {submitStatus.message && (
                <div
                  className={cn(
                    "p-3 rounded-md text-sm",
                    submitStatus.type === 'success' 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  )}
                >
                  {submitStatus.message}
                </div>
              )}
              <Button 
                type="submit"   
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 