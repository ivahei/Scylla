import FB from "../assets/images/FB.png";
import Insta from "../assets/images/Insta.png";
import In from "../assets/images/In.png";
import Youtube from "../assets/images/Youtube.png";
import Twitter from "../assets/images/Twitter.png";
import telegram from "../assets/images/telegramm.jpg";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div>
          <ul>
            <li>
              <h4>PRODUCT CENTER</h4>
              <div>
                <p>Gun Detection</p>
                <p>Thermal Screening</p>
                <p>Intrusion Detection & Perimeter Protection System</p>
                <p>Behavior Recognition</p>
              </div>
            </li>
            <li>
              <h4>CASE STUDIES</h4>
              <div>
                <p style={{ opacity: 1 }}>Oman Airports Management Company</p>
                <p>Legrand Mexico Facilities</p>
                <p>Siete 24 Banking Case Study Colombia</p>
                <p>Sterling Consulting Envigado</p>
                <p>ITO R&D Farm Security Case Study South Africa</p>
              </div>
            </li>
            <li>
              <h4>COMPANY</h4>
              <div>
                <p>FAQ</p>
                <p>Team</p>
                <p>About us</p>
                <p>Partners</p>
                <p>Resources</p>
              </div>
            </li>
            <li>
              <h4>LEGAL</h4>
              <div>
                <p>Imprint</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
            </li>
            <li>
              <h4>INTEGRATION WITH</h4>
              <a href="https://www.milestonesys.com/marketplace/scylla-technologies-inc/" target="_blank" rel="noreferrer">
                <img src="https://www.scylla.ai/static/9065151349ab661844d436f052c95f2d/61e93/milestone.webp" alt="Milestone"/>
              </a>
              <br />
              <a href="https://tpp.hikvision.com/tpp/Solution/SolutionDetail?Id=273abead-b6ac-98f2-ab00-39f037d16cbc" target="_blank" rel="noreferrer">
                <img src="https://www.scylla.ai/static/e03bca63b5d7c0dd63767e59956d0ebd/61e93/hikvision.webp" alt="Hikvision"/>
              </a>
              <br />
              <a href="https://nxvms.com/integrations/149" target="_blank" rel="noreferrer">
                <img src="https://www.scylla.ai/static/f282614f062d53aa11b4f12d33ca29fb/61e93/nx.webp" alt="Network Optics"/>
              </a>
              <br />
              <a href="https://www.mobotix.com/en/partner-society/scylla-technologies-inc" target="_blank" rel="noreferrer">
                <img src="https://www.scylla.ai/static/688ac6461ea1d8bf83d2046c040a6ff1/61e93/mobotix.webp" alt="Mobotix"/>
              </a>
              <br />
              <a href="https://www.genetec.com/" target="_blank" rel="noreferrer">
                <img src="https://www.scylla.ai/static/f47471e1dff0665a06d4648118af6163/61e93/genetec.webp" alt="Genetec"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="line" />
        <div className="end">
          <div>
            <a className="social" href="https://www.facebook.com/scyllaAI/" target="_blank" rel="noreferrer">
              <img src={FB} alt="Facebook"/>
            </a>
            <a
              className="social"
              href="https://www.linkedin.com/company/scylla-ai-security/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={In} alt="LinkedIn"/>
            </a>
            <a
              className="social"
              href="https://www.instagram.com/scylla_security/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Insta} alt="Instagram"/>
            </a>
            <a className="social" href="https://tiny.cc/scylla-ai/" target="_blank" rel="noreferrer">
              <img src={Youtube} alt="YouTube"/>
            </a>
            <a className="social" href="https://twitter.com/Scylla_AI/" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="Twitter"/>
            </a>
            <a className="social" href="https://t.me/scylla_ai" target="_blank" rel="noreferrer">
              <img src={telegram} alt="Telegram"style={{ opacity: 0.6 }} />
            </a>
          </div>
          <div className="end-right">
            <a href="https://www.acunetix.com/" target="_blank" rel="noreferrer">
              <img src="https://www.scylla.ai/static/926d9c9ba050d3fee267f1f042b561fa/9f4ce/acunetix.webp" alt="Acunetix"/>
            </a>
            <a href="https://gdpr-info.eu/" target="_blank" rel="noreferrer">
              <img src="https://www.scylla.ai/static/be9b78399a85428a48af05da65f5fa2c/9f4ce/GDPR.webp" alt="GDPR"/>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
