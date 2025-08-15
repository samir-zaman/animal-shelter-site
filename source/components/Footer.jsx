import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import facebookIcon from '../../source/assets/icons/SocialMedia/facebook.png';
import instagramIcon from '../../source/assets/icons/SocialMedia/instagram.png';
import twitterIcon from '../../source/assets/icons/SocialMedia/twitter.png';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

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
            <div className='footer-wrapper'>
                <div className="footer-box-one">
                    <h3>Shelter</h3>
                    <p>1234 Mission St <br/> San Francisco, CA 94114</p>
                    <p>Walk-ins welcome: M-F 9am - 5pm</p>
                    <p>&#40;123&#41;456-7890</p>
                    <p>info@furryfutures.org</p>
                </div>


                <div className='footer-box-two'>
                    <h3>Socials</h3>
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

                    <NavLink
                    to="/donate"
                    className="footer-donate-button"
                    >
                        Donate
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
/*
    return (
        <footer>
            <div className='newsletter-div'>
                <form onSubmit={handleSubmit} className="footer-newsletter-form">
                    <label htmlFor="newsletter">Get Updates</label>
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
            </div>
             
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
        </footer>
    )
}
*/

    
    
    )
}
