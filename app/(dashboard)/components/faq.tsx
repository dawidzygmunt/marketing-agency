import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import SingleFaq from "./single-faq"

const Faq = () => {
  return (
    <div className="bg-black flex flex-col items-center p-10">
      <span className="font-bold tracking-widest uppercase text-xs my-10">
        Faq
      </span>
      <h2 className="text-5xl font-semibold max-w-[70%] text-center leading-snug">
        Masz pytania, My mamy odpowiedzi
      </h2>
      <div className="w-full flex flex-col gap-1">
        <SingleFaq
          title="Czy mogę zobaczyć portfolio?"
          content="Tak, nasze portfolio znajdziesz na naszej stronie głównej."
        />
        <SingleFaq
          title="Jak mogę się skontaktować?"
          content="Możesz skontaktować się z nami poprzez formularz kontaktowy na naszej stronie lub wysłać wiadomość na nasz adres e-mail."
        />
        <SingleFaq
          title="Czy oferujecie darmowe konsultacje?"
          content="Tak, oferujemy darmowe konsultacje dla naszych potencjalnych klientów."
        />
        <SingleFaq
          title="Jak długo trwa realizacja projektu?"
          content="Czas realizacji projektu zależy od jego skali i złożoności. Po dokładnej analizie przedstawimy Ci szacowany czas realizacji."
        />
        <SingleFaq
          title="Czy oferujecie wsparcie techniczne po zakończeniu projektu?"
          content="Tak, zapewniamy wsparcie techniczne po zakończeniu projektu. Możesz skontaktować się z nami w razie jakichkolwiek problemów."
        />
      </div>
    </div>
  )
}

export default Faq
