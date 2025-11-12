import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ContactBanner() {
  return (
    <section className="py-16 text-white" id="contato">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Quer saber mais sobre nossos serviços?</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para descobrir como os lAgentes podem transformar sua empresa e impulsionar seus
          resultados.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/trabalhe-conosco">
            <Button className="button-glass min-w-[200px]">
              Trabalhe conosco
            </Button>
          </Link>
          <Link href="/contato">
            <Button className="button-glass min-w-[200px]">Entre em contato</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
