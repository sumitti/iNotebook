import React from 'react';

export default function TermsAndConditions() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-vh-100 bg-dark">      

      {/* Main Content */}
      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-gray rounded shadow p-4 p-md-5">
              {/* Title Section */}
              <div className="text-center mb-5">
                <h1 className="display-6 text-primary mb-3">Terms and Conditions</h1>
                <p className="text-muted">Last updated: {currentDate}</p>
              </div>

              {/* Introduction */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">1. Introduction</h2>
                <p className="text-secondary">
                  Welcome to iNotebook! These Terms and Conditions ("Terms") govern your use of our note-taking 
                  application and services. By accessing or using iNotebook, you agree to be bound by these Terms. 
                  If you do not agree to these Terms, please do not use our service.
                </p>
                <p className="text-secondary">
                  iNotebook is designed to help people organize their thoughts and ideas. Our mission is to make 
                  note-taking simple, beautiful, and accessible to everyone.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">2. Acceptance of Terms</h2>
                <p className="text-secondary">
                  By creating an account, accessing, or using iNotebook, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms. You also agree to comply with all applicable 
                  laws and regulations.
                </p>
              </section>

              {/* Description of Service */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">3. Description of Service</h2>
                <p className="text-secondary">
                  iNotebook provides a digital platform for creating, organizing, and managing personal notes and ideas. 
                  Our service includes:
                </p>
                <ul className="text-secondary">
                  <li>Note creation and editing tools</li>
                  <li>Organization and categorization features</li>
                  <li>Search and retrieval functionality</li>
                  <li>Synchronization across devices</li>
                  <li>Data backup and storage</li>
                </ul>
              </section>

              {/* User Accounts */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">4. User Accounts</h2>
                <p className="text-secondary">
                  To access certain features of iNotebook, you must create an account. You are responsible for:
                </p>
                <ul className="text-secondary">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and current information</li>
                  <li>Promptly updating your account information</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                </ul>
              </section>

              {/* Acceptable Use */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">5. Acceptable Use Policy</h2>
                <p className="text-secondary">You agree not to use iNotebook to:</p>
                <ul className="text-secondary">
                  <li>Store or share illegal, harmful, or offensive content</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Spam or harass other users</li>
                  <li>Use the service for commercial purposes without permission</li>
                </ul>
              </section>

              {/* Privacy and Data */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">6. Privacy and Data Protection</h2>
                <p className="text-secondary">
                  Your privacy is important to us. Our Privacy Policy, which is incorporated into these Terms, 
                  explains how we collect, use, and protect your information. By using iNotebook, you consent 
                  to our data practices as described in our Privacy Policy.
                </p>
                <div className="alert alert-info" role="alert">
                  <strong>Note:</strong> We encrypt your notes and personal data to ensure maximum security and privacy.
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">7. Intellectual Property</h2>
                <p className="text-secondary">
                  You retain ownership of all content you create and store in iNotebook. By using our service, 
                  you grant us a limited license to store, process, and display your content solely for the 
                  purpose of providing our services to you.
                </p>
                <p className="text-secondary">
                  iNotebook and its original content, features, and functionality are owned by us and are 
                  protected by international copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              {/* Service Availability */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">8. Service Availability</h2>
                <p className="text-secondary">
                  While we strive to provide reliable service, we cannot guarantee that iNotebook will be 
                  available 100% of the time. We reserve the right to modify, suspend, or discontinue the 
                  service at any time, with or without notice.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">9. Limitation of Liability</h2>
                <p className="text-secondary">
                  To the fullest extent permitted by law, iNotebook shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss 
                  of data, profits, or business interruption, arising from your use of our service.
                </p>
                <div className="alert alert-warning" role="alert">
                  <strong>Important:</strong> We recommend regularly backing up your important notes to prevent data loss.
                </div>
              </section>

              {/* Termination */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">10. Termination</h2>
                <p className="text-secondary">
                  You may terminate your account at any time by contacting us or using the account deletion 
                  feature in the app. We may terminate or suspend your account immediately if you violate 
                  these Terms or engage in prohibited activities.
                </p>
                <p className="text-secondary">
                  Upon termination, your right to use iNotebook will cease, and we may delete your account 
                  and associated data after a reasonable grace period.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">11. Changes to These Terms</h2>
                <p className="text-secondary">
                  We reserve the right to modify these Terms at any time. We will notify users of significant 
                  changes via email or in-app notification. Your continued use of iNotebook after such changes 
                  constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">12. Governing Law</h2>
                <p className="text-secondary">
                  These Terms shall be governed by and construed in accordance with the laws, 
                  without regard to its conflict of law principles. Any disputes arising from these Terms or your 
                  use of iNotebook shall be subject to the exclusive jurisdiction of the courts.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-5">
                <h2 className="h4 text-primary border-bottom pb-2 mb-4">13. Contact Information</h2>
                <p className="text-secondary">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-light p-3 rounded">
                  <strong>iNotebook Support</strong><br />
                  Email: support@inotebook.com<br />
                  Website: www.inotebook.com<br />
                  Address: Mumbai,IN
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-5">
                <div className="alert alert-success" role="alert">
                  <h5 className="alert-heading">Acknowledgment</h5>
                  <p className="mb-0">
                    By using iNotebook, you acknowledge that you have read these Terms and Conditions, 
                    understand them, and agree to be bound by them. Thank you for choosing iNotebook 
                    to organize your thoughts and ideas!
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>      
    </div>
  );
}