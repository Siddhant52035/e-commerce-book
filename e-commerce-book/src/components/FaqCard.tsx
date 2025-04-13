import { FaMinus, FaPlus } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function FaqCard({
    index,
    question,
    answer,
    isActive,
    toggleFAQ
}: {
    index: number;
    question: string;
    answer: string;
    isActive: boolean;
    toggleFAQ: (index: number) => void
}) {
    return (
        <div className={twMerge("faqcard flex_center flex-col w-full border border-text/50 rounded-md transition duration-300 text-text gap-2", isActive === true ? 'border-tertiary text-tertiary' : '')}>
            <button
                onClick={() => toggleFAQ(index)}
                className='question flex justify-between items-center text-start py-4 px-6 w-full'
            >
                <p className="font-bold">
                    {question}
                </p>
                {
                    isActive === true
                        ? <FaMinus />
                        : <FaPlus />

                }
            </button>
            {
                isActive &&
                <p className="px-6 pb-4">
                    {answer}
                </p>
            }
        </div>
    )
}