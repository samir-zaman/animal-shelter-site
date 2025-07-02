import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
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
            <div className="footer-box-one">
                <form onSubmit={handleSubmit} className="footer-newsletter-form">
                    <label htmlFor="newsletter">Sign up for our newsletter</label>
                    <div className='newsletter-form'>
                        <input 
                            className="newsletter"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
                <NavLink
                    to="/donate"
                    className="fancy-button footer-donate-button"
                >
                    Donate
                </NavLink>
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
            </div>
            <div className='footer-box-two'>
                <p><span className="site-logo" id="footer-logo"> Furry Futures </span>&#169; 2025</p>
            </div>
            <div className='footer-box-three'>
                <h3>Contact us</h3>
                <p>123 Mission St, San Francisco CA 94114</p>
                <p>contact@furryfutures.org</p>
                <p>Hours: 6am - 10pm</p>
                <p>&#40;123&#41;456-7890</p>
            </div>
        </footer>
    )
}

/*Left to right: newsletter signup, Logo with donate button under, contact info*/
/*row2: left: copyright tag, social media icons*/