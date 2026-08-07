import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { faqData } from '../data/siteData';

const Admissions = () => {
  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'advanced-diploma',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
              // JOIN IIEM
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              YOUR JOURNEY<br />
              <span className="text-brand-magenta">STARTS HERE.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Process Timeline (Cream background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ADMISSION PROCESS"
            title="FOUR STEPS TO THE STAGE."
          />

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 relative">
            {/* Step 1 */}
            <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta transition-all duration-300 relative group">
              <div className="font-display text-4xl text-brand-magenta mb-4">01</div>
              <h3 className="font-display text-xl text-brand-purple mb-2">SUBMIT ENQUIRY</h3>
              <p className="font-sans text-xs text-brand-textDark/70 leading-relaxed">
                Fill out our online application enquiry form with details of your background, academic records, and program preferences.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-purple transition-all duration-300 relative group">
              <div className="font-display text-4xl text-brand-purple mb-4">02</div>
              <h3 className="font-display text-xl text-brand-purple mb-2">PORTFOLIO INTERVIEW</h3>
              <p className="font-sans text-xs text-brand-textDark/70 leading-relaxed">
                Attend a virtual or campus interview with our faculty heads to discuss your passion, creative goals, and communication skills.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-teal transition-all duration-300 relative group">
              <div className="font-display text-4xl text-brand-teal mb-4">03</div>
              <h3 className="font-display text-xl text-brand-purple mb-2">SEAT CONFIRMATION</h3>
              <p className="font-sans text-xs text-brand-textDark/70 leading-relaxed">
                Shortlisted candidates receive an Offer Letter. Secure your enrollment by submitting the registration booking fee.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta transition-all duration-300 relative group">
              <div className="font-display text-4xl text-brand-magenta mb-4">04</div>
              <h3 className="font-display text-xl text-brand-purple mb-2">INDUSTRY INDUCTION</h3>
              <p className="font-sans text-xs text-brand-textDark/70 leading-relaxed">
                Complete documentation, receive your official crew lanyard, and join our immersive foundation workshop on campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents (Dark Background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Eligibility Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-sans text-xs font-bold tracking-widest text-brand-teal uppercase">// REQUIREMENT CHECKLIST</div>
            <h2 className="font-display text-4xl sm:text-5xl text-brand-cream">ELIGIBILITY & PREREQUISITES</h2>
            
            <div className="space-y-4 font-sans text-sm text-brand-cream/80 leading-relaxed">
              <p>
                To maintain the quality of collaborative work at IIEM, candidates are evaluated on general aptitude, interest in creative design, and willingness to work flexible event hours.
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-brand-teal">
                <li>• <strong>Advanced Diploma:</strong> 10+2 passing certificate from any recognized national or state board.</li>
                <li>• <strong>Professional Certifications:</strong> 10+2 completed. Prior diploma or undergraduate graduation is preferred but not mandatory.</li>
                <li>• <strong>General Skill:</strong> Creative conceptualization, basic digital awareness, and good interpersonal communication skills.</li>
              </ul>
            </div>
          </div>

          {/* Documents Panel */}
          <div className="lg:col-span-6 border border-brand-cream/15 p-8 bg-brand-purple/5 neo-shadow-magenta">
            <div className="flex gap-2 items-center mb-6">
              <FileText size={20} className="text-brand-magenta" />
              <span className="font-display text-2xl tracking-wider uppercase">DOCUMENTS FOR SUBMISSION</span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm font-sans text-brand-cream/70">
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                <span>Copy of Class 10th and 12th passing marksheets and certificates.</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                <span>Valid Government ID Proof (Aadhaar Card, Passport, or PAN Card).</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                <span>3 passport-size color photographs (recent).</span>
              </li>
              <li className="flex gap-2 items-start">
                <CheckCircle2 size={16} className="text-brand-teal shrink-0 mt-0.5" />
                <span>Creative statement of purpose (Max 300 words explaining your goal in the event industry).</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-brand-cream/10 text-xs text-brand-cream/50">
              * Note: Certified digital copies are accepted for initial evaluation. Original documents must be presented for verification on campus during registration.
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form and FAQs Grid (Cream Background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* FAQ Accordion Section */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeader
              eyebrow="ADMISSIONS HELP"
              title="FREQUENTLY ASKED QUESTIONS."
            />

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border border-brand-textDark/10 bg-brand-cream">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-5 text-left font-display text-lg text-brand-purple hover:text-brand-magenta transition-colors"
                  >
                    <span>{faq.question}</span>
                    {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-brand-textDark/75 font-sans leading-relaxed border-t border-brand-textDark/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Online Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="p-8 border border-brand-textDark/15 bg-brand-cream neo-shadow-purple">
              <h3 className="font-display text-3xl text-brand-purple mb-6 tracking-wide">
                ADMISSION ENQUIRY FORM
              </h3>

              {submitted ? (
                <div className="p-6 bg-brand-purple/5 border border-brand-purple text-center space-y-4">
                  <div className="font-display text-2xl text-brand-purple">ENQUIRY REGISTERED!</div>
                  <p className="text-xs text-brand-textDark/80 font-sans">
                    Thank you for applying. A counselor from our admissions office will contact you on your registered phone number and email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 border border-brand-textDark text-xs font-display hover:bg-brand-purple hover:text-white transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyesh Patel"
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">DESIRED PROGRAM *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                    >
                      <option value="advanced-diploma">Advanced Diploma in Event Management</option>
                      <option value="wedding-social">Wedding & Social Events</option>
                      <option value="corporate-events">Corporate Event Management</option>
                      <option value="live-entertainment">Live Events & Entertainment</option>
                      <option value="production-operations">Event Production & Operations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">QUESTIONS / REMARKS</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your creative goals or background..."
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider text-center"
                  >
                    SUBMIT REGISTRATION ENQUIRY →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Admissions;
