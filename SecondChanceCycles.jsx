
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Link from "next/link";

export default function SecondChanceCycles() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const products = [
    { name: "Silverback Competition", price: "R7,000", description: "29'' Wheels, Large frame, Mint condition" },
    { name: "Giant Talon", price: "R6,000", description: "29'' Wheels, Large frame, Mint condition" },
    { name: "Silverback Stride Delight", price: "R6,000", description: "29'' Wheels, Extra Large frame, Mint condition" },
    { name: "KTM Ultra Sport", price: "R9,000", description: "29'' Wheels, Large frame, Mint condition" },
    { name: "Titan Elite", price: "R6,000", description: "29'' Wheels, Large frame, Very Good condition" },
    { name: "Momsen", price: "R5,000", description: "29'' Wheels, Medium frame, Good condition" },
    { name: "Silverback Stride", price: "R6,500", description: "29'' Wheels, Large frame, Mint condition" },
    { name: "Scott Aspect 960 (Good)", price: "R6,000", description: "29'' Wheels, Medium frame, Good condition" },
    { name: "Silverback Sido 3", price: "R12,000", description: "29'' Wheels, Medium frame, Mint condition" },
    { name: "Scott Spark 950", price: "R17,000", description: "29'' Wheels, Medium frame, Mint condition" },
    { name: "Scott Aspect 960 (Mint)", price: "R14,000", description: "29'' Wheels, Medium frame, Mint condition" },
    { name: "Silverback Sport (1)", price: "R6,000", description: "29'' Wheels, Medium frame, Good condition" },
    { name: "Silverback Sport (2)", price: "R6,000", description: "29'' Wheels, Medium frame, Good condition" },
    { name: "Silverback Stride (Used)", price: "R5,000", description: "29'' Wheels, Large frame, Used condition" },
    { name: "Silverback E-selectro Trail", price: "R26,500", description: "29'' Wheels, Large frame, Mint condition" },
    { name: "Scott Ladies Bicycle", price: "R6,000", description: "27.5'' Wheels, Small frame, Good condition" }
  ];

  const testimonials = [
    { name: "Thabo M.", message: "Bought a bike for my son — great service and amazing value!" },
    { name: "Lerato K.", message: "They truly give bikes a second chance. God bless this business." },
    { name: "Sipho N.", message: "Fast communication, honest sellers. Highly recommend." }
  ];

  return (
    <div className="p-6 space-y-12 max-w-5xl mx-auto">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Second Chance Cycles</h1>
        <p className="text-lg">Giving bicycles a second chance, just like Christ gave us one.</p>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Available Bicycles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((bike, i) => (
            <Card key={i} className="rounded-2xl shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 italic">No image</div>
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-bold">{bike.name}</h3>
                <p className="text-sm text-gray-600">{bike.description}</p>
                <p className="font-semibold text-green-700">{bike.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Customer Testimonials</h2>
        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-4 shadow-sm">
              <p className="italic">"{t.message}"</p>
              <p className="text-right font-semibold mt-2">- {t.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Or contact Walner at 078 099 2258
        </p>
      </section>

      <footer className="text-center text-sm text-gray-600 pt-8 border-t mt-12">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="https://www.facebook.com/SecondChanceCycles" target="_blank" className="hover:underline">Facebook</Link>
          <Link href="https://www.instagram.com/secondchancecycles" target="_blank" className="hover:underline">Instagram</Link>
          <Link href="https://api.whatsapp.com/send?phone=2780992258" target="_blank" className="hover:underline">WhatsApp</Link>
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Second Chance Cycles. All rights reserved.</p>
      </footer>
    </div>
  );
}
