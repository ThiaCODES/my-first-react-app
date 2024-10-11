import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          {/* About Us Section */}
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              Welcome to Thiamy Shoes, your one-stop shop for all kinds of
              stylish footwear. We are dedicated to bringing you the best
              products from around the world.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h3 className="heading">Contact Information</h3>
            <ul>
              <li>
                Address: 15 Fashion Street, Victoria Island, Lagos, Nigeria
              </li>
              <li>Phone: +234 800 123 4567</li>
              <li>Email: support@thiamyshoes.ng</li>
              <li>Working Hours: Mon - Fri, 9:00 AM - 5:00 PM</li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="footer-section">
            <h3 className="heading">Quick Links</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
              <li>
                <a href="">FAQs</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="heading">Follow Us</h3>
            <ul className="social-links">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2024 ThiamyShoes. All rights reserved.</p>
        <p>Designed by ThiaCODES</p>
      </div>
    </footer>
  );
};

export default Footer;
