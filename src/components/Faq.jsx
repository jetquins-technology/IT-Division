import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from '../styles/faq.module.css'
const faqs = [
  {
    question: "What does our company do?",
    answer: "We specialize in providing top-quality services and products to meet our customers' needs."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via email at support@yourcompany.com or call us at (123) 456-7890."
  },
  {
    question: "What is your return/refund policy?",
    answer: "We offer a 30-day return policy for unused products in their original packaging."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium bg-gray-100 hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
