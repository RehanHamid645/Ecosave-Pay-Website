"use client"

import * as React from "react"
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import Button from "@/components/shared/Button"
import { useState } from "react"
import Image from "next/image"


const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "flex h-12 w-full rounded-xl border border-black bg-white/5 px-4 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5ece6d] transition-all",
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
        "flex min-h-[100px] w-full rounded-xl border border-black bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5ece6d] transition-all",
        className
      )}
      {...props}
    />
  )
}

const contactInfo = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    details: "0161 814 9299",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    details: "info@ecosavepay.com",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office",
    details: "Lloyds House 18-22, Lloyd Street, Manchester, M2 5WA",
  },
]

export function ContactSection() {
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
    <section className="bg-black text-white pt-24 pb-12 px-6 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5ece6d] blur-[150px] rounded-full -mr-40 -mt-40 opacity-20 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Left Side: Text and Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-block bg-[#5ece6d] text-black px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                Contact Us
              </span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.05]">
                Get In Touch <br /> With Our Experts
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg leading-relaxed">
                Have questions? We're here to help you find the best payment and utility solutions for your business.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#5ece6d] group-hover:bg-[#5ece6d] group-hover:text-black transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{info.title}</p>
                    <p className="text-xl font-bold text-white">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours Card */}
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 max-w-sm">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-[#5ece6d] h-5 w-5" />
                <h3 className="text-[#5ece6d] text-lg font-black uppercase tracking-tighter">Operating Hours</h3>
              </div>
              <div className="space-y-2 text-sm font-bold">
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase">Monday — Thursday</span>
                  <span>9:00 — 17:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase">Friday</span>
                  <span>9:00 — 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 uppercase">Saturday — Sunday</span>
                  <span className="text-[#5ece6d]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-[#1a1c23] border border-white/5 p-10 md:p-14 rounded-[3rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">First Name</label>
                  <Input name="firstName"  required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Last Name</label>
                  <Input name="lastName"  required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Business Name</label>
                <Input name="businessName" required />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <Input name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <Input name="phone" type="tel"  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Message</label>
                <Textarea name="message" placeholder="How can we help you?" required />
              </div>

              {submitStatus.message && (
                <div className={cn(
                  "p-4 rounded-xl text-sm font-bold text-center",
                  submitStatus.type === 'success' ? "bg-[#5ece6d]/20 text-[#5ece6d]" : "bg-red-500/20 text-red-400"
                )}>
                  {submitStatus.message}
                </div>
              )}

              <Button 
                type="submit"   
                className="w-full h-14 bg-[#5ece6d] text-black font-black text-lg rounded-full hover:bg-white hover:scale-[1.02] transition-all duration-300 border-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SENDING..." : (
                  <span className="flex items-center justify-center gap-2">
                    SEND MESSAGE <ArrowRight size={20} />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* --- Google Maps Section --- */}
        <div className="w-full h-[450px] rounded-[3rem] overflow-hidden border border-white/10 relative shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2374.3228308466634!2d-2.247161723554044!3d53.48057206411442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1c0ba0f970d%3A0xc3f98233df4c1482!2sLloyds%20House%2C%2018-22%20Lloyd%20St%2C%20Manchester%20M2%205WA!5e0!3m2!1sen!2suk!4v1705000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Overlay to soften the map colors into the theme */}
          <div className="absolute inset-0 pointer-events-none border-[20px] border-black/5 rounded-[3rem]" />
        </div>
      </div>
    </section>
  )
}

export default ContactSection