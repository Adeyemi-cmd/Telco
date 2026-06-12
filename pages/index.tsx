import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

const models = [
  {
    name: "Model Ultra",
    price: "$1,199",
    badge: "New Release",
    colors: ["#002045", "#74777f", "#e0e3e5"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChg9g2C_7lsSth_pFuD5XC3MF1jyr7PinCDSTvYCfGF9F6-zFX8qwVBWmOImAHsfw3Kd10VMUvjj4epz5TeOgk-hcrPILu-CjaM5zR7jRgUKzXkept65B9WG8JWXdkKEt2qtXLHfLch9le7IgzahTi3mRKIU2r0RJvyQUYvB9Kqk4ZB6ml-9dZNBOfBNUR2WOlwhgLWu3yvDY6eiuSWi_dxLHWuPUzuojwpirif-0dxNjJyZRgqdrUeZLwG_2Tb1v0H0LaDkvLHCI",
  },
  {
    name: "Model Pro",
    price: "$999",
    badge: null,
    colors: ["#002045", "#43474e"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAenDOo92IBZgZ_q74wIeZKrUpeBxu6H1i-im5nUgO1CJn0dUs5u4tINcbJaBlut7LOGUSW3pVcElGm-vWxqk6L10BGKh5a_tdIgEGKjYQO-LyvdFyuzcMu8JbuyJvFs-Zmqb3uJy_wxek0trUa3RparmulwI_qSAK2YHCQY4sD3dprgprEapdGznczKLRQdt0V-FB9WrhDT-6OoMCXTQQwj4OH3jW-YBwsf83IZUspYAJ8kBQuof2kZOXqaYS2V-3IwcwBIhl2kVk",
  },
  {
    name: "Model Air",
    price: "$799",
    badge: null,
    colors: ["#e0e3e5", "#ffdad6"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLNHkf0C5Xc5rDb03uVxdqI8x1X_U1ErD0tSPheAbr3zrwz7oHgU7LHtfCzMMMOZhZ7FA8yQ-rqxwuK4iXhWiQ2bVLS2--xIrLCGjU6lgMipxSuS3A3uCSxdQ6oX9GXFyz8VIzKXcmIU3fclQVgDQBfN5tisq0y5W7vtGjLgz2NsWpsH1QIXrXGeWkZMuFOx31jK6DCU29BIjbFkl-851zLhEYHPt-d6AHG9Q7Y-dDOl6Ki-1-P1MTw8kXDkOZVSaJPciiP78oT_Y",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TELCO.PREMIUM | Future in Your Hands</title>
        <meta
          name="description"
          content="Experience the pinnacle of mobile engineering. Precision-milled titanium meets our most advanced neural engine ever created."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Titanium Edition</span>
            <h1 className={styles.heroTitle}>Future in Your Hands</h1>
            <p className={styles.heroText}>
              Experience the pinnacle of mobile engineering. Precision-milled
              titanium meets our most advanced neural engine ever created.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Pre-order Now</button>
              <button className={styles.btnOutline}>Watch Film</button>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.heroGlow} />
            <div className={styles.heroImgWrapper}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsqb-rJZReqFwkifOghMeEVVyr54uH0hCiBq3QOlJa7-6wWppSuHTXG8dNDHDO3t__M7qRwp_Lx6MsZ-O2ct_NQVkuWZ7xaBm3usq1veHlJ6BFqpIe6-8FcSY_4BiIYKckFo-WJqqwd5l2jLqzba_8nzii7sSqnZJ6RiIVKwwXgp0PAyLzD7MHnHW19WZpk1A2C4g6Cabf_jSNrYHG29ufQKh2lFAO11-vxdvBlru82PQ6-keKAoxRXIsmF3tf03MILsrMu15Mn9w"
                alt="Flagship Smartphone"
                width={500}
                height={600}
                className={styles.phoneImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specs Bento Grid */}
      <section className={styles.specs}>
        <div className="container">
          <div className={styles.specsHeader}>
            <h2 className={styles.specsTitle}>Engineered for Excellence</h2>
            <div className={styles.specsDivider} />
          </div>
          <div className={styles.specsGrid}>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>
                <span className="material-symbols-outlined">photo_camera</span>
              </div>
              <h3 className={styles.specCardTitle}>Pro Camera System</h3>
              <p className={styles.specCardText}>
                A triple-lens array with 48MP main sensor, 10x optical zoom, and
                advanced computational night photography capabilities.
              </p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>
                <span className="material-symbols-outlined">5g</span>
              </div>
              <h3 className={styles.specCardTitle}>Ultra-Fast 5G</h3>
              <p className={styles.specCardText}>
                Next-generation modem technology ensures blazing-fast downloads
                and ultra-low latency, anywhere in the world.
              </p>
            </div>
            <div className={styles.specCard}>
              <div className={styles.specIcon}>
                <span className="material-symbols-outlined">battery_full</span>
              </div>
              <h3 className={styles.specCardTitle}>All-Day Battery</h3>
              <p className={styles.specCardText}>
                Up to 30 hours of video playback with intelligent power
                management and 100W lightning-fast charging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className={styles.gallery}>
        <div className="container">
          <div className={styles.galleryHeader}>
            <div>
              <h2 className={styles.galleryTitle}>Find Your Model</h2>
              <p className={styles.gallerySub}>
                Precision designed for every lifestyle.
              </p>
            </div>
            <button className={styles.galleryCta}>
              View All Models
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className={styles.modelGrid}>
            {models.map((model) => (
              <div key={model.name} className={styles.modelCard}>
                <div className={styles.modelImage}>
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={400}
                    height={500}
                    className={styles.modelImg}
                  />
                  {model.badge && (
                    <span className={styles.modelBadge}>{model.badge}</span>
                  )}
                </div>
                <div className={styles.modelInfo}>
                  <div className={styles.modelMeta}>
                    <h4 className={styles.modelName}>{model.name}</h4>
                    <span className={styles.modelPrice}>{model.price}</span>
                  </div>
                  <div className={styles.modelColors}>
                    {model.colors.map((color, i) => (
                      <span
                        key={i}
                        className={styles.colorDot}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Experience the Transformation</h2>
          <p className={styles.ctaText}>
            Join the thousands who have already upgraded to the world&apos;s most
            intelligent smartphone.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaPrimary}>Get Started</button>
            <button className={styles.ctaOutline}>Compare Models</button>
          </div>
        </div>
      </section>
    </>
  );
}
