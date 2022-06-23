import React from "react";
import localstyles from "./Footer.module.css";
import { FiTwitter, FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <div className={localstyles.footer_container}>
      
      <div className={localstyles.footer_links}>
        <div className={localstyles.footer_link_wrapper}>
          <div className={localstyles.footer_link_items}>
            {/*column 1 */}
            <button className={localstyles.footer_subscription_text}>
              {" "}
              About Us
            </button>

            {/* <Link href=''>How it works</Link>
            <Link href=''>Testimonials</Link>
            <Link href=''>Careers</Link>
            <Link href=''>Investors</Link>
            <Link href=''>Terms of Service</Link> */}
          </div>
          {/*column 2 */}
          <div className={localstyles.footer_link_items}>
            <button className={localstyles.footer_subscription_text}>
              {" "}
              Contact Us
            </button>

            {/* <Link href=''>Contact</Link>
            <Link href=''>Support</Link>
            <Link href=''>Destinations</Link>
            <Link href=''>Sponsorships</Link> */}
          </div>

          {/* <div className={localstyles.footer_link_wrapper}>*/}
          {/*column 3 */}
          <div className={localstyles.footer_link_items}>
            <button className={localstyles.footer_subscription_text}>
              Videos
            </button>

            {/* <Link href=''>Submit Video</Link>
            <Link href=''>Ambassadors</Link>
            <Link href=''>Agency</Link>
            <Link href=''>Influencer</Link> */}
          </div>

          {/*column 4 */}
          {/* <div className={localstyles.footer_link_items}>
            <h2>Social Media</h2> */}
          {/* <Link href=''>Instagram</Link>
            <Link href=''>Facebook</Link>
            <Link href=''>Youtube</Link>
            <Link href=''>Twitter</Link> 
            </div>*/}

          {/*column 5 */}
          <div className={localstyles.footer_link_items}>
            <button className={localstyles.footer_subscription_text}>
              {" "}
              Careers
            </button>

            {/* <Link href=''>Instagram</Link>
            <Link href=''>Facebook</Link>
            <Link href=''>Youtube</Link>
            <Link href=''>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className={localstyles.footer_subscription}>
        
        <div>
          <button className={localstyles.social_media_icon} href="">
            <FiTwitter />{" "}
          </button>
          <button className={localstyles.social_media_icon} href="">
            <FiInstagram />{" "}
          </button>
          <button className={localstyles.social_media_icon} href="">
            <FiFacebook />{" "}
          </button>
          <button className={localstyles.social_media_icon} href="">
            <FiYoutube />{" "}
          </button>
        </div>

        {/* <div className={localstyles.input_areas}>
          <form>
            <input
              className={localstyles.footer_input}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button >Subscribe</button>
          </form>
        </div> */}
      </section>
    </div>
  );
}

export default Footer;

