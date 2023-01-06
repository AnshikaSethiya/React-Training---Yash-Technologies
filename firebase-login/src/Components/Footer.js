import React from "react";

const Footer = () => {
  return (
    <div>
        <div className="privacy_policy">
                <div>Privacy Note</div>
                <div>
                    By
                    using www.bookmyshow.com(our website), you are fully accepting the
                    Privacy Policy available at  governing your access to Bookmyshow
                    and provision of services by Bookmyshow to you. If you do not accept
                    terms mentioned in the <a href="/privacy">Privacy Policy</a>,
                    ou must not share any of your personal information and immediately
                    exit Bookmyshow.
                </div>
        </div>
        <div className="part1">
                <div>
                    <div style={{ fontSize: '20px', marginRight: '30px' }}>List your show</div>

                    <div>Got a show, event, activity or a great experience? Partner
                    with us &amp; get listed on BookMyShow
                    </div>
                </div>
                <div className="contact_button">
                    <button>Contact Today!</button>
                </div>
            </div>
      <div className="part6">
        <div>
          Copyright 2021 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </div>
        <div>
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied.
        </div>
        <div>Unauthorized use is prohibited and punishable by law.</div>
      </div>
    </div>
  );
};

export default Footer;
