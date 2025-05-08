"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

import { FormInput } from "@/components/ui/form-input"
import { DatePickerField } from "@/components/ui/date-picker-field"
import { TextAreaField } from "@/components/ui/text-area-field"

export function TourInquiryForm() {
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => setIsSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Inquire About This Tour</h3>
      {isSuccess && (
        <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
          Thank you for your inquiry! We will contact you shortly.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <FormInput id="name" label="Your Name" placeholder="John Doe" required />
          <FormInput id="email" label="Email Address" type="email" placeholder="john@example.com" required />
          <FormInput id="phone" label="Phone Number" placeholder="+1 234 567 8900" />
          <DatePickerField date={date} setDate={setDate} />
          <FormInput id="people" label="Number of People" type="number" min={1} placeholder="2" required />
          <TextAreaField id="message" label="Your Message" placeholder="Any specific requirements or questions?" />
        </div>
        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  )
}