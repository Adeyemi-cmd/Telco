import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Support.module.css";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Standard shipping typically takes 3-5 business days. Express options are available at checkout for 1-2 business day delivery.",
  },
  {
    q: "What is the return window?",
    a: "You have 14 calendar days to return an item from the date you received it. Items must be in original packaging and condition.",
  },
  {
    q: "How do I update my device software?",
    a: "Navigate to Settings > System > Software Update. Ensure you are connected to Wi-Fi and have at least 50% battery charge.",
  },
  {
    q: "Are Lumina phones water resistant?",
    a: "Yes, our current flagship series features IP68 water and dust resistance, allowing submersion up to 1.5 meters for 30 minutes.",
  },
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Lumina Mobile - Support</title>
        <meta
          name="description"
          content="Get help with your Lumina device. Track orders, find warranty info, and contact support."
        />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo060SYGse8DicluO71UlCb0fsJstnJ-d7AXITuY-etQmUlajbmLAD6tAx8mrUVoB9ITItsMfyZ5iWaBWwKyD1T5-W28R0sxg8lumHEQT9StiB0D4qf43BVYpc66DFYRssXq7tDv9TT_lOnWcUemloE0mXlGJNCa5kq1AGqzj_R5e_hPs_xl_rm9SJMRAoRZhhCoc2WNsyRkV-fbxWjOeO-2IEuCM8W-oXBUgwAm4NlYiezx_xGyfT9b1qdEvDo-zk0Cs6ESxHOXQ"
            alt="Support"
            className={styles.heroImg}
          />
        </div>
        <div className={styles.heroContent}>
          <div className="container">
            <h1 className={styles.heroTitle}>How can we help?</h1>
            <div className={styles.searchBox}>
              <span className="material-symbols-outlined">search</span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search help topics, device manuals, and more..."
              />
            </div>
            <div className={styles.popular}>
              <span className={styles.popularLabel}>Popular:</span>
              <a href="#" className={styles.popularLink}>
                Track my order
              </a>
              <a href="#" className={styles.popularLink}>
                ESIM Setup
              </a>
              <a href="#" className={styles.popularLink}>
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div className={styles.catGrid}>
            <a href="#" className={styles.catCard}>
              <div className={styles.catIcon}>
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
              </div>
              <h3 className={styles.catTitle}>Order Status</h3>
              <p className={styles.catText}>
                Track your shipment and view recent purchases.
              </p>
            </a>
            <a href="#" className={styles.catCard}>
              <div className={styles.catIcon}>
                <span className="material-symbols-outlined">
                  assignment_return
                </span>
              </div>
              <h3 className={styles.catTitle}>Returns &amp; Refunds</h3>
              <p className={styles.catText}>
                Start a return or check your refund status easily.
              </p>
            </a>
            <a href="#" className={styles.catCard}>
              <div className={styles.catIcon}>
                <span className="material-symbols-outlined">
                  settings_suggest
                </span>
              </div>
              <h3 className={styles.catTitle}>Technical Support</h3>
              <p className={styles.catText}>
                Troubleshoot devices and software issues.
              </p>
            </a>
            <a href="#" className={styles.catCard}>
              <div className={styles.catIcon}>
                <span className="material-symbols-outlined">
                  verified_user
                </span>
              </div>
              <h3 className={styles.catTitle}>Warranty</h3>
              <p className={styles.catText}>
                Check coverage and submit a service claim.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={styles.faqHeader}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <p className={styles.faqSub}>
              Quick solutions to our most common customer inquiries.
            </p>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${
                  openFaq === i ? styles.faqOpen : ""
                }`}
                onClick={() => toggleFaq(i)}
              >
                <div className={styles.faqQuestion}>
                  <h4 className={styles.faqQText}>{faq.q}</h4>
                  <span
                    className={`material-symbols-outlined ${styles.faqIcon}`}
                  >
                    expand_more
                  </span>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    openFaq === i ? styles.faqAnswerOpen : ""
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2 className={styles.contactTitle}>Still need help?</h2>
              <p className={styles.contactText}>
                Our dedicated support team is available 24/7 to assist with your
                premium Lumina experience.
              </p>
              <div className={styles.contactDetails}>
                <div className={styles.contactRow}>
                  <span className="material-symbols-outlined">phone</span>
                  <span className={styles.contactValue}>
                    1-800-LUMINA-PRO
                  </span>
                </div>
                <div className={styles.contactRow}>
                  <span className="material-symbols-outlined">schedule</span>
                  <span className={styles.contactValue}>
                    Typical response: Under 5 mins
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.contactCards}>
              <div className={styles.contactCardPrimary}>
                <span className="material-symbols-outlined">forum</span>
                <h3 className={styles.contactCardTitle}>Live Chat</h3>
                <p className={styles.contactCardText}>
                  Instant text messaging with our product experts and support
                  technicians.
                </p>
                <button className={styles.contactBtnLight}>
                  Start Chat
                </button>
              </div>
              <div className={styles.contactCardSecondary}>
                <span className="material-symbols-outlined">mail</span>
                <h3 className={styles.contactCardTitle}>Email Support</h3>
                <p className={styles.contactCardText}>
                  Send us a detailed inquiry and we&apos;ll respond within 24
                  hours.
                </p>
                <button className={styles.contactBtnOutline}>
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className={styles.store}>
        <div className="container">
          <div className={styles.storeCard}>
            <div className={styles.storeInfo}>
              <h2 className={styles.storeTitle}>Visit a Store</h2>
              <p className={styles.storeText}>
                Experience our products in person at a Lumina flagship location
                or authorized service center.
              </p>
              <button className={styles.storeBtn}>
                Find locations near you
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className={styles.storeImage}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiyj3oG5pAw-F3qXH279uQaBPcSZonmkGeKXUeul9mwz048HXLEQIkYMjwy1lbe96A_NWrbJw4hGN_q8HHL0it2XdL7ZKPyR7AtfutqFb1wHJxqqh_1Y0DbiW_KQSUIG6UFXhFtnSJOGPVVYW1klnFw345EW2ZthJ8dvkq_JvsdD9YzpfdhAVmvlmhnC0e28CglIZtxEGu6jjtqc8gIl1KCFZG1b1-xhtZ1ah95vxvTVoYzDq_3cTjx6vVN8d0TV4jdQT66ZmmIPE"
                alt="Store locations map"
                width={600}
                height={400}
                className={styles.storeMap}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
