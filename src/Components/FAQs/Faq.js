
import styles from './Faq.module.css';

const faqs = [
  {
    question: 'What services does a Chartered Accountant provide?',
    answer: 'Chartered Accountants offer a wide range of services including audit, taxation, financial planning, business consulting, GST filing, bookkeeping, and regulatory compliance.'
  },
  {
    question: 'How can a Chartered Accountant help my business grow?',
    answer: 'They provide financial insights, ensure statutory compliance, optimize tax liabilities, and advise on budgeting and strategic planning to enhance business growth.'
  },
  {
    question: 'What is the importance of GST filing?',
    answer: 'GST filing ensures compliance with tax regulations, avoids penalties, and helps maintain transparent financial records for businesses.'
  },
  {
    question: 'How does financial planning benefit individuals and companies?',
    answer: 'Financial planning helps in managing cash flow, investing wisely, minimizing taxes, and preparing for future financial needs or risks.'
  },
  {
    question: "What is the role of an audit in business?",
    answer: "An audit provides an independent assessment of a company’s financial statements to ensure accuracy, detect fraud, and enhance credibility with stakeholders."
  },
  {
    question: "How do I choose the right Chartered Accountant for my needs?",
    answer: "Look for experience, expertise in your industry, good communication skills, and a strong reputation for ethical practices."
  },
  {
    question: "What documents are required for tax filing?",
    answer: "Income statements, expense receipts, investment proofs, bank statements, and previous tax returns are commonly required."
  },
  {
    question: "Can a Chartered Accountant represent me in tax assessments or disputes?",
    answer: "Yes, Chartered Accountants can represent clients before tax authorities and provide expert advice in case of disputes."
  },
  {
    question: "How often should I consult a Chartered Accountant?",
    answer: "Regular consultations are recommended, especially during tax seasons, financial year-end, or significant business changes."
  },
  {
    question: "Are Chartered Accountants certified professionals?",
    answer: "Yes, they are licensed professionals who have cleared rigorous exams and meet continuous professional education requirements to maintain high standards."
  },
];

export default function Faq() {
  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <details className={styles.faqItem} key={idx}>
            <summary className={styles.faqQuestion}>{faq.question}</summary>
            <div className={styles.faqAnswer}>{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}