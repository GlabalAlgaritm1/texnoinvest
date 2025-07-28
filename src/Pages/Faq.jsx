import React, { useState } from 'react'
import rasm30 from '../img/img-logo/rasm30.jpg'
import openIcon from '../img/img-logo/dawn.png'   // Ochilgan holat uchun rasm (pastga qaragan)
import closeIcon from '../img/img-logo/up.png'    // Yopilgan holat uchun rasm (tepaga qaragan)
import { Elements } from '../Elements'

const faqData = [
    {
        question: "01. What does your company do?",
        answer: `Today our company is multidisciplinary and provides services in the following areas:
        • Manufacture and installation of double-glazed windows
        • Manufacture and supply of architectural glass
        • Production of flat and curved tempered glass
        • Production of laminated glass (Triplex)
        • Stained glass production
        • Artistic glass processing
        • Artistic metal processing
        • Manufacture of plastic windows and aluminum structures
        • Production of facade systems
        • PVC production
        • Custom furniture production`,
    },
    {
        question: "02. When was your company founded?",
        answer: "Our company was founded in 2005 and has been growing ever since.",
    },
    {
        question: "03. Is it possible to export your products to other countries?",
        answer: "Yes, we have experience exporting to neighboring countries and Europe.",
    },
    {
        question: "04. What are your competitive advantages?",
        answer: "High quality, experienced staff, and modern technologies.",
    },
    {
        question: "05. Who are your clients?",
        answer: "We serve both individual and corporate clients across various industries.",
    },
    {
        question: "06. Where is your office located?",
        answer: "Our head office is located in Tashkent, Uzbekistan.",
    },
]

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-600">
        <button
            className="w-full text-left py-4 px-2 flex justify-between items-center hover:text-green-500 transition-colors duration-200"
            onClick={onClick}
        >
            <span className="font-semibold">{question}</span>
            <span className="w-6 h-6 ml-2 flex-shrink-0">
                <img
                    src={isOpen ? openIcon : closeIcon}
                    alt="toggle icon"
                    className="w-full h-full object-contain transition-transform duration-300"
                />
            </span>
        </button>

        {/* Smooth open/close block */}
        <div
            className={`px-4 text-gray-300 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0'
                }`}
        >
            <div className="whitespace-pre-line">
                {answer}
            </div>
        </div>
    </div>
)

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={`${Elements.Container}text-white py-10 px-5`}>
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mb-10">
                {/* Text Block */}
                <div className="w-full md:max-w-[400px]">
                    <h2 className="text-5xl font-bold mb-4 leading-tight">
                        Questions and <br /> answers
                    </h2>
                    <p className="text-lg">
                        Here we have collected general answers to the most frequently asked questions by our customers.
                    </p>
                </div>

                {/* Image Block */}
                <div className="relative w-full max-w-[525px] h-auto">
                    <div className="absolute -left-5 -bottom-5 w-full h-full bg-green-600 rotate-[5deg] z-0 rounded-sm"></div>
                    <img
                        src={rasm30}
                        alt="faq visual"
                        className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg"
                    />
                </div>
            </div>
            <h2 className='text-3xl font-semibold pb-4'>
                Questions and answers
            </h2>
            {/* Accordion Block */}
            <div className="max-w-5xl mx-auto bg-[#1a1a1a] rounded-md">
                {faqData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggle(index)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Faq
