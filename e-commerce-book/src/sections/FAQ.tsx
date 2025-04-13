import FaqCard from '@/components/FaqCard'
import SectionHeader from '@/components/SectionHeader'
import React, { useState } from 'react'

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };
    const faqs = [
        {
            question: 'Why should I pursue my studies overseas?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
        {
            question: 'How long does the application process take?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
        {
            question: 'How much will it cost to study abroad?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        },
        {
            question: 'Can I work and study at the same time?',
            answer: 'If possible, begin your application process at least a year in advance to give enough time for your applications to be processed and to prepare for your time overseas.'
        }
    ]
  return (
    <section className="w-full flex_center flex-col lg:px-24 px-4 lg:py-16 py-10 gap-12">

    <SectionHeader
        smallTitle="FAQs"
        title="We answer your every queries"
    />
    <div className="flex_center lg:w-[70%] w-full">
        <div className="flex flex-col w-full gap-6">
            {
                faqs.map((faq, index) => {
                    return (
                        <FaqCard
                            key={index}
                            index={index}
                            question={faq.question}
                            answer={faq.answer}
                            isActive={activeIndex === index}
                            toggleFAQ={toggleFAQ}
                        />
                    )
                })
            }
        </div>
    </div>
</section>
  )
}
