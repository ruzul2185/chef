import React, {useState} from 'react';
import classes from './ContactUs.module.css'


const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        });
    };

    return(
        <React.Fragment>
            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.269233346448!2d79.06058399999999!3d21.1416812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c060ee3ae023%3A0x357b5127dfb87fe0!2sSathe&#39;s%20Metalwares!5e0!3m2!1sen!2sin!4v1719117956918!5m2!1sen!2sin"
                    width="100%" height="400" style={{border: '0'}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <form onSubmit={handleSubmit} className={classes.formStyle}>
                    <div className={classes.inputContainerStyle}>
                        <label className={classes.labelStyle} htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={classes.inputStyle}
                            required
                        />
                    </div>
                    <div className={classes.inputContainerStyle}>
                        <label className={classes.labelStyle} htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={classes.inputStyle}
                            required
                        />
                    </div>
                    <div className={classes.inputContainerStyle}>
                        <label className={classes.labelStyle} htmlFor="phone">Phone:</label>
                        <input
                            type="phone"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={classes.inputStyle}
                            required
                        />
                    </div>
                    <div className={classes.inputContainerStyle}>
                        <label className={classes.labelStyle} htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={classes.textareaStyle}
                            required
                        />
                    </div>
                    <button type="submit" className={classes.buttonStyle}>SUBMIT</button>
                </form>
            </div>
        </React.Fragment>
    )
};

export default ContactUs;