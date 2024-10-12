import "../Styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          {/* About Us Section */}
          <div className="footer-section">
            <h3 className="heading">About Us</h3>
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
                <button>About Us</button>
              </li>
              <li>
                <button>Shop</button>
              </li>
              <li>
                <button>FAQs</button>
              </li>
              <li>
                <button>Contact Us</button>
              </li>
              <li>
                <button>Privacy Policy</button>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="heading">Follow Us</h3>
            <ul className="social-links">
              <li>
                <button>Fcebook</button>
              </li>
              <li>
                <button> Twitter</button>
              </li>
              <li>
                <button>Instagram</button>
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
