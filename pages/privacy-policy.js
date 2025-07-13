import Link from "next/link";
import TagSEO from "@/components/TagSEO";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data

// 1. Go to https://app.chatgpt.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)

// You are an excellent layer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

const PrivacyPolicy = () => {
  return (
    <div className="max-w-xl mx-auto">
      <TagSEO
        title={`Privacy Policy | ${config.appName}`}
        canonicalSlug="privacy-policy"
      />

      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-bold pb-6">Privacy Policy for Flashbar</h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: December 19, 2025

Thank you for visiting Flashbar ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, and protect your personal and non-personal information when you use our popup notification service and website.

By accessing or using our service, you agree to the terms of this Privacy Policy. If you do not agree with the practices described in this policy, please do not use our service.

1. Information We Collect

1.1 Personal Data

We collect the following personal information from you:

Name: We collect your name to personalize your experience and communicate with you effectively.
Email: We collect your email address to send you important information regarding your account, service updates, and communication.
Payment Information: We collect payment details to process your subscription payments securely. However, we do not store your payment information on our servers. Payments are processed by trusted third-party payment processors.

1.2 Non-Personal Data

We may use web cookies and similar technologies to collect non-personal information such as your IP address, browser type, device information, and browsing patterns. This information helps us to enhance your browsing experience, analyze trends, and improve our services.

1.3 Service Usage Data

When you use our popup notification service, we may collect:
- Website URLs where you implement our service
- Popup performance metrics and analytics
- User interaction data with your popups
- Technical information about your implementation

2. Purpose of Data Collection

We collect and use your personal data for the following purposes:
- Processing your subscription payments
- Providing customer support and technical assistance
- Sending important service updates and notifications
- Improving our popup notification service
- Analyzing usage patterns to enhance features
- Ensuring compliance with our terms of service

3. Data Sharing

We do not share your personal data with any third parties except as required for payment processing (e.g., sharing your information with payment processors). We do not sell, trade, or rent your personal information to others.

4. Data Security

We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

5. Children's Privacy

Flashbar is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us at the email address provided below.

6. Your Rights

You have the right to:
- Access your personal data that we hold
- Request correction of inaccurate data
- Request deletion of your personal data
- Opt-out of marketing communications
- Request a copy of your data in a portable format

7. Updates to the Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any updates will be posted on this page, and we may notify you via email about significant changes.

8. Contact Information

If you have any questions, concerns, or requests related to this Privacy Policy, you can contact us at:

Email: panditsouvik50@gmail.com

For all other inquiries, please visit our Contact Us page on our website.

By using Flashbar, you consent to the terms of this Privacy Policy.

Date: December 19, 2025`}
        </pre>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
