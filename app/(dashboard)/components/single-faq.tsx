import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface SingleFaqProps {
  title: string
  content: string
}

const SingleFaq: React.FC<SingleFaqProps> = ({ title, content }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-xl font-bold mb-8">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-lg font-semibold">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default SingleFaq
