"use client";

import FaqCard from "@/components/FaqCard";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

const abroadFaqs = [
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

const generalQuestions = [
    {
        question: 'Will my overseas qualification be accepted in my home country?',
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

const helpQuestions = [
    {
        question: 'Will my overseas qualification be accepted in my home country?',
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

const paymenrQuestions = [
    {
        question: 'Will my overseas qualification be accepted in my home country?',
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

export default function FAQs() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current FAQ
    };

    return (
        <main className="w-full overflow-hidden">
            <PageHeader
                title="FAQs"
                link="/faq"
            />
            <section className="w-full lg:px-24 px-4 lg:py-16 py-10 flex lg:flex-row flex-col gap-8">
                <div className="flex lg:flex-col flex-row overflow-x-auto gap-4 lg:w-[20%] w-full">
                    <button className="flex_center py-3 px-6 border  border-tertiary text-tertiary rounded-md w-max font-medium">
                        Abroad Study Process
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        General Questions
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        Help and Support
                    </button>
                    <button className="flex_center py-3 px-6 border-tertiary text-text rounded-md w-max font-medium">
                        Payment Queries
                    </button>
                </div>
                <div className="flex flex-col gap-16 lg:w-[80%] w-full h-[100vh] overflow-y-scroll no-scrollbar">
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl font-semibold text-secondary">
                            Abroad Study Process
                        </h3>
                        <div className="flex flex-col w-full gap-6">
                            {
                                abroadFaqs.map((faq, index) => {
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
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl font-semibold text-secondary">
                            General Questions
                        </h3>
                        <div className="flex flex-col w-full gap-6">
                            {
                                generalQuestions.map((faq, index) => {
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
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl font-semibold text-secondary">
                            Help & Suppport
                        </h3>
                        <div className="flex flex-col w-full gap-6">
                            {
                                helpQuestions.map((faq, index) => {
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
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl font-semibold text-secondary">
                            Payment Queries
                        </h3>
                        <div className="flex flex-col w-full gap-6">
                            {
                                paymenrQuestions.map((faq, index) => {
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
                </div>
            </section>
        </main>
    )
}