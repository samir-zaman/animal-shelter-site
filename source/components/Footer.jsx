import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import facebookIcon from '../../source/assets/icons/SocialMedia/facebook.png';
import instagramIcon from '../../source/assets/icons/SocialMedia/instagram.png';
import twitterIcon from '../../source/assets/icons/SocialMedia/twitter.png';

export default function Footer() {
    const [email, setEmail] = useState('');

    const socialLinks = [
        { name: 'Facebook', icon: facebookIcon, url: 'https://facebook.com' },
        { name: 'Instagram', icon: instagramIcon, url: 'https://instagram.com' },
        { name: 'Twitter', icon: twitterIcon, url: 'https://twitter.com' }
      ];

    /*newsletter signup is UI only. I'm including the state variable and
    handleSubmit function to demonstrate proper React implementation practices*/   
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    };

    return(
        <footer>
            <div className="footer-media-container">
                <form onSubmit={handleSubmit} id="footer-newsletter-form">
                    <label htmlFor="newsletter">Sign up for our newsletter</label>
                    <input 
                        id="newsletter"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Subscribe</button>
                </form>
                <div className='social-media-icons'>
                    {socialLinks.map((social) => (
                        <Link 
                        to= {social.url}
                        aria-label = {social.name}
                        className='social-media-icon'
                        >
                            <img src={social.icon} />
                        </Link>
                    ))}
                </div>
                <button className="footer-donate-button">Donate</button>
            </div>
            <div className='footer-logo-container'>
                <p><span className="site-logo" id="footer-logo">Furry Futures</span> &#169; 2025</p>
            </div>
            <div className='footer-contact-info-container'>
                <h3>Contact Information</h3>
                <p>123 Mission St, San Francisco CA 94114</p>
                <p>&#40;123&#41;456-7890</p>
                <p>contact@furryfutures.org</p>
                <p>Hours: 6am - 10pm, every day</p>
            </div>
        </footer>
    )
}

/*Left to right: newsletter signup, Logo with donate button under, contact info*/
/*row2: left: copyright tag, social media icons*/