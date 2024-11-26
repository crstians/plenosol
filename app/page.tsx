import { Phone } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold tracking-tight">SOLAR ENERGY</h1>
          <a
            href="tel:866-330-3260"
            className="flex items-center gap-2 text-lime-600 hover:text-lime-700"
          >
            <Phone className="h-4 w-4" />
            Call: 866-330-3260
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl text-white">
              <h2 className="text-5xl font-bold leading-tight">
                ARE YOU READY
                <br />
                TO
                <br />
                GO SOLAR?
              </h2>
              <p className="mt-4 text-lg">
                We make the process as easy as possible taking care of the design,
                permitting, installation, monitoring, rebates, and financing
              </p>
              <Button className="mt-8 bg-lime-500 text-white hover:bg-lime-600">
                GET A FREE QUOTE
              </Button>
            </div>
            <div className="hidden lg:block">
              <svg
                className="h-32 w-32 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 15a3 3 0 110-6 3 3 0 010 6z" />
                <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2M7.05 7.05L5.63 5.63M18.37 18.37l-1.42-1.42M7.05 16.95l-1.42 1.42M18.37 5.63l-1.42 1.42" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-lime-500 py-12 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold">100MW</div>
            <div className="mt-2">Installed and Under Development</div>
          </div>
          <div>
            <div className="text-4xl font-bold">50</div>
            <div className="mt-2">US States and Countries Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold">10000</div>
            <div className="mt-2">Solar Orders Delivered to Installers</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            EXPERTLY INSTALLED SOLAR ENERGY
            <br />
            PANEL SYSTEMS FOR BUSINESSES, FARMS, AND HOMES
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "HOMES",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour.",
              },
              {
                title: "BUSINESSES",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour.",
              },
              {
                title: "FARMS",
                image: "/placeholder.svg?height=300&width=400",
                description:
                  "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour.",
              },
            ].map((service) => (
              <Card key={service.title}>
                <CardContent className="p-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-6">
                    <h3 className="mb-4 text-center text-xl font-bold text-lime-500">
                      {service.title}
                    </h3>
                    <p className="text-center text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-lime-500 py-16 text-white">
        <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
          {[
            {
              quote:
                "All the Lorem Ipsum generator on the Internet to repeat predefined chunks as necessary, making this the first true generator on with a handful of model sentence of lorem.",
              author: "JOHN SMITH",
            },
            {
              quote:
                "All the Lorem Ipsum generator on the Internet to repeat predefined chunks as necessary, making this the first true generator on with a handful of model sentence of lorem.",
              author: "KEVIN HALL",
            },
          ].map((testimonial) => (
            <div key={testimonial.author} className="text-center">
              <p className="mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative bg-[url('/placeholder.svg?height=400&width=1200')] bg-cover bg-center py-24">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative mx-auto text-center text-white">
          <h2 className="text-4xl font-bold">ARE YOU READY TO GO SOLAR?</h2>
          <p className="mx-auto mt-4 max-w-2xl">
            We make the process as easy as possible taking care of the design,
            permitting, installation, monitoring, rebates, and financing.
          </p>
          <Button className="mt-8 bg-lime-500 text-white hover:bg-lime-600">
            GET A FREE QUOTE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-4 text-center text-sm text-gray-600">
        <p>
          Copyright © domainname.com. All Rights Reserved | Designed by:
          buylandingpagedesign.com
        </p>
      </footer>
    </div>
  )
}