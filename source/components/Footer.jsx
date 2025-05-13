import React from 'react'
import { Link } from 'react-router-dom'
import facebookIcon from '../../source/assets/icons/SocialMedia/facebook.png';
import instagramIcon from '../../source/assets/icons/SocialMedia/instagram.png';
import twitterIcon from '../../source/assets/icons/SocialMedia/twitter.png';

export default function Footer() {
    const socialLinks = [
        { name: 'Facebook', icon: facebookIcon, url: 'https://facebook.com' },
        { name: 'Instagram', icon: instagramIcon, url: 'https://instagram.com' },
        { name: 'Twitter', icon: twitterIcon, url: 'https://twitter.com' }
      ];

    return(
        <footer>
            <div className='footer-top-row'>
                <section>
                    <label htmlFor="newsletter">Signup for our newsletter</label>
                    <input 
                    id="newsletter"
                    type="email"
                    placeholder="Enter your email"
                    />
                    <button>Donate</button>
                </section>
                <section>
                    <h1 className='site-logo'>Furry Futures</h1>
                </section>
                <section>
                    <p>123 Mission St, San Francisco CA 94114</p>
                    <p>&#40;123&#41;456-7890</p>
                    <p>contact@furryfutures.org</p>
                    <p>Hours: 6am - 10pm, every day</p>
                </section>
            </div>
            <div className='footer-bottom-row'>
                    {socialLinks.map((social) => (
                        <Link 
                        to= {social.url}
                        aria-label = {social.name}
                        >
                            <img src={social.icon} />
                        </Link>
                    ))}
            </div>
        </footer>
    )
}

/*Left to right: newsletter signup, Logo with donate button under, contact info*/
/*row2: left: copyright tag, social media icons*/