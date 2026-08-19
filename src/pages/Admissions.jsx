import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, Phone, Mail, Globe, Briefcase, GraduationCap, Clock, Award, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'advanced-diploma',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-brand-cream">
      {/* Hero Header (Light) */}
      <section className="bg-brand-cream pt-16 pb-8 px-6 md:px-12 relative overflow-hidden border-b border-brand-border text-center">
        <div className="absolute inset-0 bg-[radial-gradient(#4A0A45_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="max-w-[800px] mx-auto w-full flex flex-col items-center justify-center relative z-10">
          <span className="badge-pill bg-brand-purpleMuted text-brand-purple border border-brand-purple/20 text-xs font-bold py-1 px-3.5 mb-6">
            // IIEM ADMISSIONS OPEN
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight uppercase text-brand-purple mb-6">
            START YOUR <br />
            CAREER IN EVENT MANAGEMENT.
          </h1>
          <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl leading-relaxed">
            Admissions are now open for the upcoming batch at IIEM – Indian Institute of Event Management. Join a career-focused program designed for students who are passionate about events, weddings, corporate shows, live productions, exhibitions, and entertainment management.
          </p>
        </div>
      </section>

      {/* Programs Offered & Why Choose Us */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Programs Offered */}
          <div className="academic-card p-8 md:p-12 bg-brand-cream/30 border-l-4 border-l-brand-purple shadow-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                <GraduationCap size={24} fill="currentColor" />
              </div>
              <h2 className="font-display font-bold text-2xl tracking-tight text-brand-purple uppercase">PROGRAMS OFFERED</h2>
            </div>
            <ul className="flex flex-col text-brand-textDark">
              {[
                "Advanced Diploma in Event Management",
                "Wedding & Social Event Management",
                "Corporate Event Management",
                "Live Events & Entertainment",
                "Event Production & Operations",
                "Exhibition & Trade Show Management"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-center py-4 border-b border-brand-border/60 last:border-0">
                  <ArrowRight size={20} className="text-brand-purple shrink-0" />
                  <span className="font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose IIEM */}
          <div className="academic-card p-8 md:p-12 bg-brand-cream/30 border-l-4 border-l-brand-teal shadow-subtle">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} fill="currentColor" />
              </div>
              <h2 className="font-display font-bold text-2xl tracking-tight text-brand-purple uppercase">WHY CHOOSE IIEM?</h2>
            </div>
            <ul className="flex flex-col text-brand-textDark">
              {[
                "Industry-oriented training",
                "Practical event exposure",
                "Experienced faculty",
                "Live event participation",
                "Internship opportunities",
                "Placement assistance",
                "Personality & communication development"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-center py-[13px] border-b border-brand-border/60 last:border-0">
                  <CheckCircle2 size={18} className="text-brand-teal shrink-0" fill="currentColor" />
                  <span className="font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-brand-cream py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ADMISSION PROCESS"
            title="SIX STEPS TO SECURE YOUR SEAT."
            supportingText="A clear, structured enrollment roadmap from application to confirmation."
          />

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block relative mt-24 mb-12">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-border -translate-y-1/2"></div>
            
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {[
                "Submit the admission enquiry form",
                "Attend counselling / course guidance",
                "Select your preferred program",
                "Complete document verification",
                "Pay the registration fee",
                "Confirm your admission"
              ].map((step, idx) => {
                const isTop = idx % 2 === 0;
                return (
                  <div key={idx} className="relative grid grid-rows-[120px_auto_120px] justify-items-center gap-4">
                    {/* Top Content */}
                    <div className={`flex items-end pb-4 text-center ${!isTop ? 'invisible' : ''}`}>
                      <div className="academic-card bg-white p-4 shadow-subtle border-b-4 border-b-brand-purple">
                        <h3 className="font-bold text-brand-textDark text-[11px] xl:text-xs uppercase tracking-wider">
                          {step}
                        </h3>
                      </div>
                    </div>

                    {/* Circle on line */}
                    <div className="w-12 h-12 rounded-full bg-brand-cream border-[3px] border-brand-purple flex items-center justify-center font-display font-bold text-brand-purple z-20 relative shadow-[0_0_0_8px_#f9f8f6]">
                      0{idx + 1}
                    </div>

                    {/* Bottom Content */}
                    <div className={`flex items-start pt-4 text-center ${isTop ? 'invisible' : ''}`}>
                      <div className="academic-card bg-white p-4 shadow-subtle border-t-4 border-t-brand-purple">
                        <h3 className="font-bold text-brand-textDark text-[11px] xl:text-xs uppercase tracking-wider">
                          {step}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="lg:hidden relative mt-12 pl-6 py-4">
            {/* Vertical Line */}
            <div className="absolute top-0 left-[23px] w-[2px] h-full bg-brand-border"></div>
            
            <div className="flex flex-col gap-10 relative z-10">
              {[
                "Submit the admission enquiry form",
                "Attend counselling / course guidance",
                "Select your preferred program",
                "Complete document verification",
                "Pay the registration fee",
                "Confirm your admission"
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-6">
                  {/* Circle on line */}
                  <div className="w-12 h-12 rounded-full bg-brand-cream border-[3px] border-brand-purple flex items-center justify-center font-display font-bold text-brand-purple shrink-0 shadow-[0_0_0_8px_#f9f8f6]">
                    0{idx + 1}
                  </div>

                  {/* Content */}
                  <div className="academic-card bg-white p-4 shadow-subtle border-l-4 border-l-brand-purple flex-1">
                    <h3 className="font-bold text-brand-textDark text-xs uppercase tracking-wider">
                      {step}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="bg-white py-12 lg:py-16 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Eligibility Panel */}
          <div className="academic-card p-8 bg-white">
            <h2 className="font-display font-bold text-2xl text-brand-purple border-b border-brand-border pb-4 mb-6 uppercase">
              ELIGIBILITY
            </h2>
            <div className="space-y-4 font-sans text-sm text-brand-textDark/85">
              <ul className="space-y-3">
                <li className="flex gap-3 items-center bg-brand-cream/60 p-3.5 rounded-xl border border-brand-border">
                  <div className="w-2.5 h-2.5 bg-brand-magenta rounded-full"></div> 
                  <span className="font-bold">10th Pass</span>
                </li>
                <li className="flex gap-3 items-center bg-brand-cream/60 p-3.5 rounded-xl border border-brand-border">
                  <div className="w-2.5 h-2.5 bg-brand-magenta rounded-full"></div> 
                  <span className="font-bold">12th Pass</span>
                </li>
                <li className="flex gap-3 items-center bg-brand-cream/60 p-3.5 rounded-xl border border-brand-border">
                  <div className="w-2.5 h-2.5 bg-brand-magenta rounded-full"></div> 
                  <span className="font-bold">Degree / Graduation Students</span>
                </li>
                <li className="flex gap-3 items-center bg-brand-cream/60 p-3.5 rounded-xl border border-brand-border">
                  <div className="w-2.5 h-2.5 bg-brand-magenta rounded-full"></div> 
                  <div>
                    <span className="font-bold">Working Professionals</span> <span className="text-xs text-brand-textMuted">(interested in the event industry)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Documents Panel */}
          <div className="academic-card p-8 bg-white">
            <div className="flex items-center gap-2.5 mb-6 border-b border-brand-border pb-4">
              <FileText size={22} className="text-brand-purple" />
              <h2 className="font-display font-bold text-2xl tracking-tight uppercase text-brand-purple">DOCUMENTS REQUIRED</h2>
            </div>
            <ul className="space-y-3 text-sm font-sans text-brand-textDark/90">
              {[
                "Passport size photographs",
                "Aadhaar / ID proof",
                "Educational marks cards",
                "Transfer certificate (if applicable)"
              ].map((doc, idx) => (
                <li key={idx} className="flex gap-3 items-center bg-brand-cream/60 p-3.5 rounded-xl border border-brand-border">
                  <CheckCircle2 size={18} className="text-brand-teal shrink-0" />
                  <span className="font-medium">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Career & Contact Section */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Career & Contact Info */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Career Opportunities */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <Briefcase size={24} className="text-brand-purple" />
                <h2 className="font-display font-bold text-3xl text-brand-purple uppercase">CAREER OPPORTUNITIES</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-sm text-brand-textDark">
                {[
                  "Event Coordinator",
                  "Wedding Planner",
                  "Production Executive",
                  "Exhibition Coordinator",
                  "Stage & Technical Coordinator",
                  "Artist & Celebrity Management",
                  "Corporate Event Executive"
                ].map((career, idx) => (
                  <div key={idx} className="flex gap-3 items-center border border-brand-border p-3.5 rounded-xl bg-white shadow-subtle hover:border-brand-purple/40 transition-colors">
                    <ArrowRight size={15} className="text-brand-teal shrink-0" />
                    <span className="font-bold text-xs uppercase tracking-wide">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Card (Light) */}
            <div className="academic-card p-8 bg-white shadow-card">
              <h2 className="font-display font-bold text-2xl text-brand-purple mb-1 tracking-wide uppercase">CONTACT US</h2>
              <h3 className="font-sans font-bold text-brand-teal mb-6 text-xs uppercase tracking-wider">
                IIEM – Indian Institute of Event Management
              </h3>
              
              <div className="space-y-3 font-sans text-xs sm:text-sm text-brand-textDark">
                <div className="flex items-center gap-3.5 border-b border-brand-border pb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <span>Admissions Helpline: <strong className="text-brand-purple tracking-wider ml-1">+91 9019876442</strong></span>
                </div>
                <div className="flex items-center gap-3.5 border-b border-brand-border pb-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <span>Email: <strong className="text-brand-purple ml-1">infotiiemblr@gmail.com</strong></span>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                    <Globe size={16} />
                  </div>
                  <span>Website: <strong className="text-brand-purple ml-1">www.iiem.in</strong></span>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-brand-border text-xs font-bold text-brand-teal tracking-wider uppercase text-center bg-brand-tealLight/60 py-3 rounded-lg">
                Limited seats available. Enquire today!
              </div>
            </div>

          </div>

          {/* Online Enquiry Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start">
            <div className="academic-card p-8 bg-white shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-brand-teal" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Official Portal</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-brand-purple mb-6 tracking-tight uppercase">
                ADMISSION ENQUIRY
              </h3>

              {submitted ? (
                <div className="p-6 bg-brand-tealLight/50 border border-brand-teal/30 rounded-xl text-center space-y-4 min-h-[380px] flex flex-col justify-center">
                  <div className="w-14 h-14 bg-brand-teal text-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <CheckCircle2 size={28} />
                  </div>
                  <div className="font-display font-bold text-xl text-brand-purple">ENQUIRY REGISTERED!</div>
                  <p className="text-xs text-brand-textMuted font-sans leading-relaxed">
                    Thank you for applying. A counselor from our admissions office will contact you on your registered phone number and email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm font-sans">
                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 text-xs uppercase tracking-wider">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyesh Patel"
                      className="w-full p-3 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 text-xs uppercase tracking-wider">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full p-3 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 text-xs uppercase tracking-wider">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      className="w-full p-3 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 text-xs uppercase tracking-wider">DESIRED PROGRAM *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    >
                      <option value="advanced-diploma">Advanced Diploma in Event Management</option>
                      <option value="wedding-social">Wedding & Social Events</option>
                      <option value="corporate-events">Corporate Event Management</option>
                      <option value="live-entertainment">Live Events & Entertainment</option>
                      <option value="production-operations">Event Production & Operations</option>
                      <option value="exhibition-management">Exhibition & Trade Show Management</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-card mt-2"
                  >
                    SUBMIT ENQUIRY →
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
