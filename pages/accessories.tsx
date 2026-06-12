import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/Accessories.module.css";

const categories = ["All", "Cases", "Chargers", "Audio", "Protection"];

const products = [
  {
    name: "Titanium Case",
    tag: "New Arrival",
    price: "$49",
    desc: "Ultra-slim aerospace-grade finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwvq2vlhlMqDhIhbOsLyK10dDqmNUr4rTjaipmebaGcFV7EZz3MVjRdX5dc04pjII9Hn72cfAwrS4ijekPZvKJGK1zdmBs_7G2Y3N3BukLCsIgbDEXgvM-AvUEBRxLPcaoKLSctdwzjXeo44_hZWME3AVEw1ZliS8bgOccVK9dP3hrroazYJTHEYRMIhfhVg335B4B4Uf1mf2HroVNFRCAepexFNfGXec0o1sgqKzv67wEkRjFwwFUf7UfjJP23xGKICP0GHEQqg8",
  },
  {
    name: "Wireless MagCharge",
    tag: "Essential",
    price: "$79",
    desc: "15W rapid magnetic alignment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA7LoWm6_01whq71ApKaCNUH7gAY6x6X3g7wG1HrIy0fXfKQYx40lvufDslGLsR57YAOx6DVGOhaNPVhFbVmq-JIaYwcJBHbUJFuz6zZPfJ27duAkd8eVbuis7lKXK0bp9CWLWrB905yUuoaJsrhxoPXG2lvuBqlPrv9fKwv4UhibVuJn_se0NroTYGgggb0MBOnr4n1DGhNMP3rxegveiYo_17UVxPJxMplOQOXXAg5GloFsuFuEot0F-VoyFLDgSlfmQjmcjHhM",
  },
  {
    name: "Pro Studio Buds",
    tag: "Limited Edition",
    price: "$199",
    desc: "Spatial audio with active noise cancellation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHcEEX1rlEFi8VGiT-lEAwbdb37gljXEx56isQAguQG2lwVPtepkQVDXIFE6KWVeM4CVmYmgOKy8vvt7u0ArTZOHqEpyZEH8dNW5J8-_jiPYW_RvRFUy_GDURPriyWPRMUl-EWxh9qAl_7LsbGdDnFy0batjiTeHmilixHPRx64sNjFKzyl3gr1xig7OxWUbcyCxXnFCJeExyDbI8vC5n8uToOPdanOcOJbdCIrpY4Stc2k25kJnfFSdhyQTPjGM8vsF4Wn1FaKps",
  },
  {
    name: "Ultra Screen Guard",
    tag: "Protection",
    price: "$29",
    desc: "9H hardness tempered ceramic glass.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhREvQVW-vcyj43D1moo2av-v6cmy3VqfvP-z_VBhEKb9_3r5t8BhH3gwwokEqjPVfvPz6wdAy9RI_0kC2HU3WjRYvlpBBsChrQV5S3gT0_1BNwrOV6XbUr1ADD0dQNHQh7yjPEqNEpzEZz35eGO0dt1FCuPjo4yR8U_XEByLv6eEjq7O1E9L9fIFP5i4UwywuBpVM4iQJYWh5Ffx2HxN8GuDKtp2BO4q1zvDCERBm_Q1bY8hyPZUzPNvc57Y0V_hm2qBLzTP_e8M",
  },
  {
    name: "Leather Sleeve",
    tag: "Craft",
    price: "$59",
    desc: "Full-grain European leather.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQYS_pp3NtYvJNedOa1mm0R-zW1YHCDzIZsY8oGfI_HqsHqf8k5Te_aXb4vA9kKyhOcJE8rrUYXC4dihZ2xTBL406oGbQ5dbizWjumacz8afcbOlzKk_FiAgxSqFUDbmSK8wFew7fibYlGRWn9UadA47cmi_lH0XoJH-k7-krJBzdSN7efrGQBdCBdgB6GR7yAzRl3tckw8SJvn4B4Tj9evY4xrYJCu2etccrjAZHJchoc_VcK1O7Xy13802rAAdm-bFXbLqIiwgY",
  },
  {
    name: "Fast Wall Charger",
    tag: "Performance",
    price: "$39",
    desc: "45W Dual USB-C GaN power delivery.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6jy1mqPYmUF4tnqmJ-I60Pr4DCkrz88JVVd3SnnxKllfvrfrunCe-rb4_0ypX7qC2CFmX6dpEDAESkf1hp0UHHGh0w8UkkKk7f-06VBzihqSW2rboqjMWag_lH9jOTOfC6pg5Irgz3G_XSNpWJPH7TfioI5Qk8s0MrRXsOrPQp5S-t5WZAre3WHkpXPh8O_pWx1HiNNfkG_C_5wUIMfEEvk6EdjAHoJQfdlmdI5VbfukCC-984B8LPJxXwNceLJ4GAXtgrRL_Ekw",
  },
];

export default function Accessories() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      <Head>
        <title>Lumina Mobile - Premium Accessories</title>
        <meta
          name="description"
          content="Engineered with aerospace-grade titanium and handcrafted Italian leather. Premium phone accessories."
        />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper}>
          <div className={styles.heroOverlay} />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrsto9-5pHIc0pxteWxpds105eW4c7UTCDzzn_EF4SQG37LB4zt8fsiiDIwOknAF8Mitp5LLkhYdoRWg9wyp1ZCWZ6Qj98E_N_QTthGWFTcOZnVbs3UevyPhuflLEksoiYHqrrCSQJQwkX18PWbbwMC-8hNQF-61gB2Yderm8gp0g1FRorXhV5VMq0cerOA6LTOdlwiDbfkwDYtCuI3bR_PegOpFfuiPrcXW2hBgQ-nhZlyFoPWA6m5Lc9R8LKyTPokMaePpKgFQ"
            alt="Premium accessories"
            className={styles.heroBg}
          />
        </div>
        <div className={styles.heroContent}>
          <div className="container">
            <h1 className={styles.heroTitle}>
              Premium Protection <br />
              &amp; Style
            </h1>
            <p className={styles.heroText}>
              Engineered with aerospace-grade titanium and handcrafted Italian
              leather. Our accessories are designed to complement the precision
              of your Lumina device.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Explore All</button>
              <button className={styles.btnOutline}>Watch Film</button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          <div className={styles.filterChips}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.chip} ${
                  activeFilter === cat ? styles.chipActive : ""
                }`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className={styles.sortBy}>
            <span className="material-symbols-outlined">filter_list</span>
            <span>Sort By: Featured</span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className={styles.productSection}>
        <div className="container">
          <div className={styles.productGrid}>
            {products.map((product) => (
              <div key={product.name} className={styles.productCard}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className={styles.productImg}
                  />
                </div>
                <div className={styles.productBody}>
                  <span className={styles.productTag}>{product.tag}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                </div>
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>{product.price}</span>
                  <button className={styles.buyBtn}>Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className={styles.tech}>
        <div className="container">
          <div className={styles.techHeader}>
            <h2 className={styles.techTitle}>Engineered to Excel</h2>
            <p className={styles.techSub}>
              The precision you expect from your Lumina phone, extended to every
              accessory in the ecosystem.
            </p>
          </div>
          <div className={styles.techGrid}>
            <div className={styles.techLarge}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCje2WjOkrNyVkJ95NB89O4MI1pud1b5FH4SHm-Ot1L4gbTEbiN1NlAgd1sWLb6cN-FVGlzlYHJTWh8sKmwX7xKwHEGD_WH2VIuOLs-7_K-cYqhYP8KdXhTqToMh6OTla3ttadkJQ1lKtPBjVnWpgMVyZWZ4lq7ZrZDFcOG02IZmbB8ewz-TbxhVNXx-C0f1HzRuBQT_PaTeUPPqHoufvKcjNW4FmkFfFzpzGS74w3CCFIpguIOiqmBoXJkXRetQVIQLMvrTIyC5n8"
                alt="Proprietary Charging"
                className={styles.techBg}
              />
              <div className={styles.techOverlay}>
                <h4 className={styles.techCardTitle}>Proprietary Charging</h4>
                <p className={styles.techCardText}>
                  Our MagCharge technology delivers 20% faster charging speeds
                  through intelligent thermal management.
                </p>
              </div>
            </div>

            <div className={styles.techCard}>
              <span className="material-symbols-outlined">verified_user</span>
              <h4 className={styles.techCardTitle}>2 Year Warranty</h4>
              <p className={styles.techCardText}>
                We stand behind our materials. Every accessory includes
                comprehensive protection against wear and tear.
              </p>
            </div>

            <div className={`${styles.techCard} ${styles.techCardLight}`}>
              <span className="material-symbols-outlined">eco</span>
              <h4 className={styles.techCardTitle}>Eco Carbon-Neutral</h4>
              <p className={styles.techCardText}>
                100% of our leather and titanium are sourced through
                sustainable, carbon-neutral supply chains.
              </p>
            </div>

            <div className={styles.techLarge}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVhnTw3oAzl-hnKzaS4TC724bvfnnnEW8wGu57ikWoCmZwiTNLyVSvKCCaGGoFKNIZL0nW3DB1nu_BJm8RtT8GCTzytNs8R-gN10P63FyVI5yZDW6wfMGlH7bFKOKH6yPyT5A9D7lQmH21RUm2kCDHf3eAWCciZQYidxDRb2xVtEWcUuJkPb_xUWH9FScQKtYwowkulLNO_XkGYOp4wKZbwmEMoHxuUTV-SKsq3CHlk6CGW5l41WLcO1g6JgOKS9tzust8vycqMhg"
                alt="Precision Manufacturing"
                className={styles.techBg}
              />
              <div className={`${styles.techOverlay} ${styles.techOverlayDark}`}>
                <h4 className={styles.techCardTitle}>
                  Precision Manufacturing
                </h4>
                <p className={styles.techCardText}>
                  Every case is CNC machined to a tolerance of 0.05mm for a
                  perfect seamless fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
