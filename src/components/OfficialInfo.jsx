import React from 'react'
import { MapPin, Clock, Phone, Facebook, Ticket } from 'lucide-react'

function InfoRow({ icon:Icon, label, children }) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <div>
        <p className="font-semibold">{label}</p>
        <div className="text-black/80">{children}</div>
      </div>
    </div>
  )
}

export default function OfficialInfo() {
  return (
    <section id="official-info" className="bg-brand-green text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
        <h3 className="text-3xl md:text-4xl mb-6 tracking-wide font-brand">Official Info</h3>
        <div
        style={{ fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif' }}
        className="bg-white text-black rounded-2xl shadow-lg p-6 md:p-8 grid md:grid-cols-2 gap-6">
          <InfoRow icon={Ticket} label="Rates">
            ₱100 per person — Unlimited time per day
          </InfoRow>
          <InfoRow icon={Clock} label="Hours">
            <div>Mon–Sat: 8:00 AM – 10:00 PM</div>
            <div>Sunday: 12:00 NN – 10:00 PM</div>
          </InfoRow>
          <InfoRow icon={MapPin} label="Location">
            3rd Floor, Roxas Building, N. Bacalso National Road, Lawaan 3, Talisay City, Cebu
          </InfoRow>
          <InfoRow icon={Phone} label="Contact / Viber">
            <a href="tel:+639053193858" className="underline hover:no-underline">0905 319 3858</a>
          </InfoRow>
          <InfoRow icon={Facebook} label="Facebook Page">
            <a className="underline hover:no-underline" href="https://www.facebook.com/roxasbldg" target="_blank" rel="noreferrer">facebook.com/roxasbldg</a>
          </InfoRow>
        </div>
      </div>
    </section>
  )
}
