import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from '../styles/faq.module.css'
const faqs = [
  {
    question: "What does our company do?",
    answer: "We specialize in providing top-quality services and products to meet our customers' needs."
  },
  {
    question: "What is endpoint security software??",
    answer: "Endpoint security software is a program that is installed on laptops, desktops, and/or servers that protects them from the slew of attacks that can infect an endpoint – malware, exploits, live attacks, script-based attacks, and more – with the purpose of stealing data, profiting financially, or otherwise harming systems, individuals, or organizations."
  },
  {
    question: "What are your business hours?",
    answer: "Our standard business hours are [Operating Days & Hours]. You can also contact us via email or our website 24/7."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept [list payment options, e.g., credit/debit cards, PayPal, bank transfers, etc.]."
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
          <div key={index} className={`${styles.faq_container} rounded-lg shadow-sm`}>
            <button
              className={`${styles.faq_btn} w-full flex justify-between items-center p-4 text-left text-lg font-medium `}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <div className={`${styles.faq_ans} p-4 bg-white text-gray-700`}>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
