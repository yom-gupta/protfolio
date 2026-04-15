"use client";

import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who do you work with?",
    answer: "I primarily work with YouTubers and influencers to create engaging videos and eye-catching thumbnails."
  },
  {
    question: "What software do you use?",
    answer: "I use Adobe Premiere Pro for video editing, Photoshop for thumbnail design, and After Effects for motion graphics."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Reels usually take around 3 to 5 hours, while longer videos can take anywhere from 1 day to 1 week."
  },
  {
    question: "How many revisions do you offer?",
    answer: "I offer unlimited revisions until you're fully satisfied with the results."
  },
  {
    question: "How do you determine pricing?",
    answer: "My pricing is flexible and depends on the project's requirements. Contact me on WhatsApp for a personalized quote."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach me directly on WhatsApp for inquiries and bookings."
  },
  {
    question: "What if I'm not satisfied with the final result?",
    answer: "No worries! I offer unlimited revisions to ensure your satisfaction."
  },
  {
    question: "Fun Question: What's your favorite part of video editing?",
    answer: "I love adding creative transitions and effects to bring stories to life."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12 md:max-w-[98%] mx-auto">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group p-4 rounded-xl shadow-lg bg-gray-900 border border-gray-800 transition-all duration-300 open:bg-gray-800"
            >
              <summary className="flex justify-between items-center cursor-pointer text-white text-lg font-semibold list-none">
                {faq.question}
                <span className="text-primary transition-transform duration-300 group-open:rotate-180 ml-4 flex-shrink-0">
                  <ChevronDown className="w-6 h-6" />
                </span>
              </summary>
              <p className="text-gray-400 mt-4 leading-relaxed pr-8">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
