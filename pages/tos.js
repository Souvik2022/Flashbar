import Link from "next/link";
import TagSEO from "@/components/TagSEO";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data

// 1. Go to https://app.chatgpt.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)

// You are an excellent layer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

const TOS = () => {
  return (
    <div className="max-w-xl mx-auto">
      <TagSEO
        title={`Terms and Conditions | ${config.appName}`}
        canonicalSlug="tos"
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-bold pb-6">Terms and Conditions for Flashbar</h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: December 19, 2025

This Terms and Conditions agreement describes the terms and conditions for using Flashbar ("we", "us", or "our") and our website. By accessing or using our website and services, you agree to be bound by these terms.

1. Service Description

Flashbar is a popup notification tool that helps website owners create attention-grabbing messages to improve conversion rates. Our service includes:
- Popup notification creation and management
- Analytics and tracking features
- Customization options for branding
- Technical support and documentation

2. User Accounts and Registration

To use certain features of Flashbar, you may need to create an account. You are responsible for:
- Providing accurate and complete information
- Maintaining the security of your account credentials
- All activities that occur under your account
- Notifying us immediately of any unauthorized use

3. Payment Terms

- All prices are listed in USD
- Payment is required upfront for all services
- We offer a 7-day money-back guarantee
- Refunds will be processed within 5-7 business days
- No refunds after 7 days from purchase date

4. License and Usage Rights

When you purchase Flashbar, you receive:
- A license to use the popup notification tool
- Access to our dashboard and features
- Technical support during your subscription period
- The right to use the service for your own websites

You may NOT:
- Resell or redistribute our service
- Reverse engineer our code
- Use our service for illegal activities
- Share your account credentials with others

5. User Responsibilities

You agree to:
- Use our service only for lawful purposes
- Not interfere with the proper functioning of our service
- Not attempt to gain unauthorized access to our systems
- Comply with all applicable laws and regulations
- Respect the intellectual property rights of others

6. Privacy and Data Protection

Your privacy is important to us. We collect and process personal data as described in our Privacy Policy. By using our service, you consent to our data practices as outlined in our Privacy Policy.

7. Limitation of Liability

To the maximum extent permitted by law, Flashbar shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.

8. Termination

We may terminate or suspend your account and access to our service at any time, with or without cause, with or without notice. Upon termination, your right to use the service will cease immediately.

9. Changes to Terms

We reserve the right to modify these terms at any time. We will notify users of any material changes via email. Your continued use of the service after such changes constitutes acceptance of the new terms.

10. Governing Law

These terms shall be governed by and construed in accordance with the laws of the jurisdiction where Flashbar operates.

11. Contact Information

For questions about these Terms and Conditions, please contact us at:

Email: panditsouvik50@gmail.com

12. Severability

If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these terms will otherwise remain in full force and effect.

By using Flashbar, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.

Date: December 19, 2025`}
        </pre>
      </div>
    </div>
  );
};

export default TOS;
