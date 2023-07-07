import AppNav from '@/components/AppNav'
import React, { useState, useEffect } from 'react';
import styles from '../components/nav.module.css'
import Image from 'next/image'


const index = () => {

  const testimonials = [
    {
      id: 1,
      image: '/one.png',
      text: `Joining Pashione has been a game-changer for my business. The platform's wide customer reach and powerful marketing tools have significantly boosted sales for my brand, Stellar Fashion. I'm impressed by the user-friendly interface and dedicated seller support. Highly recommended!`,
      name: '- Jane Thompson, Stellar Fashion',
    }, 
    {
      id: 2,
      image: '/two.png',
      text: `"Selling on Pashione has exceeded my expectations for my brand, Glow Beauty. The personalized recommendations have helped me connect with the right customers, resulting in higher conversions. The secure transaction system gives me peace of mind, and the prompt seller support has been outstanding. It's the best platform for sellers!" `,
      name: '- Sarah Evans, Glow Beauty',
    }, 
    {
      id: 3,
      image: '/three.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: '-  - Michael Johnson, HomeStyle Decor',
    }, 
    {
      id: 4,
      image: '/four.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: ' - Michael Johnson, HomeStyle Decor',
    }, 
    {
      id: 5,
      image: '/four.png',
      text: `"I was hesitant at first, but Pashione has proven to be a game-changer for my brand, HomeStyle Decor. The exposure to millions of active shoppers has given my products the visibility they needed. The platform's marketing tools and promotional campaigns have helped HomeStyle Decor stand out in a competitive market. I'm grateful for the support and opportunities they provide."`,
      name: '- Jane Thompson, Stellar Fashion',
    }, 
  ]

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={styles.body} >
      <div>
      <AppNav/>
      </div>
      
      <section>
        <div className={styles.secondsection}>
          <div className={styles.herotexts}>
            <div className={styles.textbody}>
            <h3>Super Charge Your Sales With Pashione</h3>
            <p>Reach More Customers, Expand Your Business.</p>
            <div>
            <div className={styles.navbuttons}>
            <div><button className={styles.getstartedbutton}>Get Started</button></div>
          <div><button className={styles.loginbutton}>Login</button></div>
          
        </div>
            </div>
            </div>
          </div>
          <div className={styles.heroimg}>
            <Image src='/heroimage.png' width={500} height={500} alt='heroimage' className={styles.imageWidth} />
          </div>
        </div>
      </section>
      <main>
        <div className={styles.challenges}>
          <div className={styles.innerbox}>
            <div>
            <h3 className={styles.innerboxheader}>Overcome Selling Challenges, Unleash Your Potential.</h3>
            <p className={styles.innerboxtexts}>Are you struggling to reach a wider customer base and boost your sales? Do you find it challenging to navigate the complex world of e-commerce? We understand your pain points and are here to help.</p>
            </div>
  
          </div>
        </div>
      </main>
      <main>
        <div className={styles.thirdsection}>
          <div className={styles.thirdparagraph}>
            <div className={styles.ecommercetexts}>
            <h3 className={styles.innerecommerce}>The Ultimate E-commerce Solution for Sellers.</h3>
            <p className={styles.paragrapghs}>At  Pashione, we provide you with the tools and resources to overcome obstacles and thrive in the online marketplace. From maximizing your product visibility to streamlining your operations, we have you covered.</p>
            <button className={styles.getstartedbutton}>Get Started</button>
            </div>
          </div>
          <div>
            <Image src='/ecommerce.png' width={500} height={500} alt='ecommerce pic' />
          </div>
        </div>
      </main>
      <main>
        <div className={styles.sectionfour}>
          <div className={styles.fourheader}>
          <h3 className={styles.innerecommerce}>Why Choose Pashione for Your Business?</h3>
          </div>
          
          <div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Wide Customer Base</h6>
              <p className={styles.description}>Access millions of active shoppers, expanding your potential customer reach.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>User-Friendly Setup</h6>
              <p className={styles.description}>Easily create and manage your product listings with our intuitive interface.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Marketing Tools</h6>
              <p className={styles.description}>Leverage powerful marketing tools to promote your products and boost sales.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Seamless Order Management</h6>
              <p className={styles.description}>Effortlessly track orders, manage inventory, and fulfill customer needs.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Secure Transactions</h6>
              <p className={styles.description}>Ensure safe and secure transactions with our trusted payment gateway.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Insights and Analytics</h6>
              <p className={styles.description}>Gain valuable business insights through comprehensive analytics and reports.</p>
            </div>
            <div className={styles.comparism}>
              <h6 className={styles.item}>Dedicated Seller Support</h6>
              <p className={styles.description}>Rely on our responsive seller support team for assistance whenever you need it.</p>
            </div>
          </div>
        </div>
      </main>
      <main>
        <div>
          <div className={styles.fiveheader}>
            <div>
            <h3 className={styles.innerecommerce}>Trusted by Successful Sellers.</h3>
            <p className={styles.description}>Join a community of thriving sellers who have achieved remarkable growth and success on our platform. Benefit from our trusted reputation and industry expertise.</p>
            </div>
          </div>
          <div className={styles.sellerimg}>
            <Image src='/seller.png' width={400} height={400} alt='seller' className={styles.seller}/>
          </div>
        </div>
      </main>
      <main>
        <div>
          <div className={styles.fiveheader}>
          <h3 className={styles.innerecommerce}>Hear from Our Successful Sellers</h3>
          </div>
          {/* TESTIMONIAL SLIDER */}
          {/* <div className={styles.container}>
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className={styles.slide}>
          <div>
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.content}>
          <img className={styles.image} src={testimonial.image} alt="Testimonial" />
            <p className={styles.name}>{testimonial.name}</p>
          </div>
          </div>
          
        </div>
      ))}
    </div> */}
     {/* <div className={styles.container}>
      <div className={styles.slider}> */}
       <div className={styles.container}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 424}px)`, // Adjusted to include the slide width and gap
          transition: 'transform 0.3s ease-in-out',
        }}
      >
         {testimonials.map((testimonial, index) => {
          let slideIndex = index - currentSlide;
          if (slideIndex < 0) {
            slideIndex += testimonials.length;
          }
          return (
          <div
            key={testimonial.id}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ''
            }`}
            style={{
              transform: `translateX(${slideIndex * 424}px)`, // Adjusted to include the slide width and gap
            }}
          >
            <div>
          <p className={styles.text}>{testimonial.text}</p>
          <div className={styles.content}>
          <img className={styles.image} src={testimonial.image} alt="Testimonial" />
            <p className={styles.name}>{testimonial.name}</p>
          </div>
          </div>
          </div>
         );
        })}
      </div>
      <button className={styles.arrow} onClick={prevSlide}>
        &lt;
      </button>
      <button className={styles.arrow} onClick={nextSlide}>
        &gt;
      </button>
    </div>
        </div>
      </main>
      {/* Footer Section */}
      <div className={styles.mainfooter}>
        <div className={styles.footer}>
          <div>
            <div className={styles.footerlogo}>
            <Image src='/pashionelogo.png' width={100} height={30} alt='pashione logo'/>
            </div>
         
          <div className={styles.socialicons}>
          <Image src='/facebook.png' width={20} height={20} alt='facebook logo'/> 
          <Image src='/instagram.png' width={20} height={20} alt='instagram logo'/> 
          <Image src='/twitter.png' width={20} height={20} alt='twitter logo'/> 
          <Image src='/youtube.png' width={20} height={20} alt='youtube logo'/> 
          <Image src='/linkedin.png' width={20} height={20} alt='linkedin logo'/> 
          </div>
          <div className={styles.reserved}>
            <p className={styles.copyright}>© 2023, Pashione All rights reserved</p>
          </div>
          </div>
          <div className={styles.submenus}>
            <div>
              <div className={styles.submenuheading}>Company</div>
              <p className={styles.submenutext}>About-Us</p>
              <p className={styles.submenutext}>Media</p>
              <p className={styles.submenutext}>Privacy Policy</p>
            </div>
            <div>
              <div className={styles.submenuheading}>Resources</div>
              <p className={styles.submenutext}>FAQs</p>
              <p className={styles.submenutext}>Blog</p>
              <p className={styles.submenutext}>Pashione University</p>
            </div>
            <div>
              <div className={styles.submenuheading}>Support</div>
              <p className={styles.submenutext}>Seller help</p>
              <p className={styles.submenutext}>Contact-Us</p>
              <p className={styles.submenutext}>Payments</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default index