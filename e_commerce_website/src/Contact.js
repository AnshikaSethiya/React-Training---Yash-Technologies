import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 4rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 5rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s; 

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.1400734013455!2d75.87007761399981!3d22.685828934524206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fce9643647dd%3A0xc1ffcef90e9b429d!2sCrystal%20IT%20Park!5e0!3m2!1sen!2sin!4v1678863107593!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xbjekqpw" method="POST" className="contact-inputs">
            <input
              type="text"
              placeholder="Username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              autoComplete="off"
            />

            <textarea
              name="Message"
              placeholder="Enter Your Message"
              rows="10"
              cols="30"
              required
              autoComplete="off"
            ></textarea>

            <input type="submit"  value="Send" />

          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
