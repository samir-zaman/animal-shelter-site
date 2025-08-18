import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import FacebookIcon from '../../source/assets/icons/SocialMedia/facebook.svg?react';
import InstagramIcon from '../../source/assets/icons/SocialMedia/instagram.svg?react';
import TwitterIcon from '../../source/assets/icons/SocialMedia/twitter.svg?react';
import YoutubeIcon from '../../source/assets/icons/SocialMedia/youtube.svg?react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const socialLinks = [
        { name: 'Facebook', icon: FacebookIcon, url: 'https://facebook.com' },
        { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' },
        { name: 'Twitter', icon: TwitterIcon, url: 'https://twitter.com' },
        { name: 'Youtube', icon: YoutubeIcon, url: 'https://youtube.com' }
      ];

    /*newsletter signup is UI only. I'm including the state variable and
    handleSubmit function to demonstrate proper React implementation practices*/ 

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    };

    return(
        <footer>
            <Link className="site-logo footer-logo" to="/">Furry Futures</Link>
            <hr className='footer-divider'></hr>
            <div className='footer-grid-container'>
                <div className="footer-box-one">
                    <h3>Shelter</h3>
                    <p>1234 Mission St <br/> San Francisco, CA 94114</p>
                    <p>Walk-ins welcome: M-F 9am - 5pm</p>
                    <p>&#40;123&#41;456-7890</p>
                    <p>info@furryfutures.org</p>
                </div>


                <div className='footer-box-two'>
                    <h3>Socials</h3>
                    <div className='social-media-icon-container'>
                        {socialLinks.map((social) => (
                            <Link 
                            to= {social.url}
                            aria-label = {social.name}
                            >
                                <social.icon className='social-media-icon'/>
                            </Link>
                        ))}
                    </div>

                    <NavLink
                        to="/donate"
                        className="footer-donate-link"
                    >
                        Donate >
                    </NavLink>
                </div>


                <div className='footer-box-three'>
                    <div className='form-wrapper'>
                    <form onSubmit={handleSubmit} className="get-updates-form">
                        <h3 >Get Updates</h3>
                        <div className='input-fields-wrapper'>
                            <div className='name-fields'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First"
                                    aria-label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last"
                                    aria-label="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            
                            <input
                                type="email"
                                className='email-input'
                                name="email"
                                placeholder="Email"
                                aria-label="Email Address"
                                aria-describedby="newsletter-email-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

        </footer> 
    )
}
