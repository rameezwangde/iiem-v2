import React, { useState } from 'react';
import { ArrowRight, FileText, CheckCircle2, Phone, Mail, Globe, Briefcase, GraduationCap } from 'lucide-react';
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
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-4xl">
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
              // IIEM ADMISSIONS OPEN
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              START YOUR <br />
              <span className="text-brand-magenta">CAREER</span> IN EVENT MANAGEMENT.
            </h1>
            <p className="font-sans text-brand-textDark/80 text-lg mt-6 max-w-2xl">
              Admissions are now open for the upcoming batch at IIEM – Indian Institute of Event Management. Join a career-focused program designed for students who are passionate about events, weddings, corporate shows, live productions, exhibitions, and entertainment management.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Offered & Why Choose Us */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programs Offered */}
          <div className="border border-brand-cream/15 p-8 bg-brand-purple/10 neo-shadow-teal h-full">
            <div className="flex gap-2 items-center mb-6">
              <GraduationCap size={24} className="text-brand-teal" />
              <h2 className="font-display text-3xl tracking-wider text-brand-cream uppercase">PROGRAMS OFFERED</h2>
            </div>
            <ul className="space-y-4 font-sans text-sm text-brand-cream/80">
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Advanced Diploma in Event Management</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Wedding & Social Event Management</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Corporate Event Management</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Live Events & Entertainment</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Event Production & Operations</span>
              </li>
              <li className="flex gap-2 items-start">
                <ArrowRight size={16} className="text-brand-magenta mt-1 shrink-0" />
                <span>Exhibition & Trade Show Management</span>
              </li>
            </ul>
          </div>

          {/* Why Choose IIEM */}
          <div className="border border-brand-cream/15 p-8 bg-brand-magenta/5 neo-shadow-purple h-full">
            <div className="flex gap-2 items-center mb-6">
              <CheckCircle2 size={24} className="text-brand-magenta" />
              <h2 className="font-display text-3xl tracking-wider text-brand-cream uppercase">WHY CHOOSE IIEM?</h2>
            </div>
            <ul className="space-y-4 font-sans text-sm text-brand-cream/80">
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Industry-oriented training</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Practical event exposure</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Experienced faculty</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Live event participation</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Internship opportunities</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Placement assistance</span>
              </li>
              <li className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-teal"></div>
                <span>Personality & communication development</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="ADMISSION PROCESS"
            title="SIX STEPS TO SECURE YOUR SEAT."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mt-12">
            {[
              "Submit the admission enquiry form",
              "Attend counselling / course guidance",
              "Select your preferred program",
              "Complete document verification",
              "Pay the registration fee",
              "Confirm your admission"
            ].map((step, idx) => (
              <div key={idx} className="p-4 border border-brand-textDark/15 bg-white hover:border-brand-purple hover:bg-brand-purple/5 transition-all duration-300 relative group text-center flex flex-col justify-center">
                <div className="font-display text-4xl text-brand-purple mb-3 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                <p className="font-sans text-xs font-bold text-brand-textDark uppercase leading-tight">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents (White Background) */}
      <section className="bg-white py-20 px-6 md:px-12 border-b border-brand-textDark/10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Eligibility Panel */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl text-brand-purple border-b border-brand-purple/20 pb-4">ELIGIBILITY</h2>
            <div className="space-y-4 font-sans text-base text-brand-textDark/80 pt-2">
              <ul className="space-y-4 pl-2">
                <li className="flex gap-3 items-center">
                  <div className="w-2 h-2 bg-brand-magenta rounded-full"></div> <span className="font-semibold">10th Pass</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-2 h-2 bg-brand-magenta rounded-full"></div> <span className="font-semibold">12th Pass</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-2 h-2 bg-brand-magenta rounded-full"></div> <span className="font-semibold">Degree / Graduation Students</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-2 h-2 bg-brand-magenta rounded-full"></div> <span className="font-semibold">Working Professionals</span> <span className="text-sm">(interested in the event industry)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Documents Panel */}
          <div className="border border-brand-textDark/15 p-8 bg-brand-cream neo-shadow-magenta">
            <div className="flex gap-2 items-center mb-6 border-b border-brand-textDark/10 pb-4">
              <FileText size={24} className="text-brand-magenta" />
              <span className="font-display text-3xl tracking-wider uppercase text-brand-purple">DOCUMENTS REQUIRED</span>
            </div>
            <ul className="space-y-5 text-sm font-sans text-brand-textDark/90 pt-2">
              <li className="flex gap-3 items-center">
                <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                <span className="font-medium">Passport size photographs</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                <span className="font-medium">Aadhaar / ID proof</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                <span className="font-medium">Educational marks cards</span>
              </li>
              <li className="flex gap-3 items-center">
                <CheckCircle2 size={20} className="text-brand-teal shrink-0" />
                <span className="font-medium">Transfer certificate (if applicable)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career & Contact Section */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Career & Contact Info */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Career Opportunities */}
            <div>
              <div className="flex gap-2 items-center mb-6">
                <Briefcase size={28} className="text-brand-magenta" />
                <h2 className="font-display text-4xl text-brand-purple uppercase">CAREER OPPORTUNITIES</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm text-brand-textDark/80">
                {[
                  "Event Coordinator",
                  "Wedding Planner",
                  "Production Executive",
                  "Exhibition Coordinator",
                  "Stage & Technical Coordinator",
                  "Artist & Celebrity Management",
                  "Corporate Event Executive"
                ].map((career, idx) => (
                  <div key={idx} className="flex gap-3 items-center border border-brand-textDark/10 p-4 bg-white hover:bg-brand-purple/5 transition-colors group">
                    <ArrowRight size={16} className="text-brand-teal shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="font-bold text-xs uppercase tracking-wide">{career}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-8 border border-brand-textDark/15 bg-brand-dark text-brand-cream neo-shadow-teal">
              <h2 className="font-display text-3xl mb-6 tracking-wide">CONTACT US</h2>
              <h3 className="font-sans font-bold text-brand-teal mb-6 text-lg uppercase tracking-wide">IIEM – Indian Institute of Event Management</h3>
              
              <div className="space-y-5 font-sans text-base text-brand-cream/90">
                <div className="flex items-center gap-4 border-b border-brand-cream/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-magenta/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-brand-magenta" />
                  </div>
                  <span>Admissions Helpline: <strong className="text-white tracking-wider ml-1">+91 XXXXX XXXXX</strong></span>
                </div>
                <div className="flex items-center gap-4 border-b border-brand-cream/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-magenta/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-brand-magenta" />
                  </div>
                  <span>Email: <strong className="text-white ml-1">admissions@iiem.in</strong></span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-magenta/20 flex items-center justify-center shrink-0">
                    <Globe size={18} className="text-brand-magenta" />
                  </div>
                  <span>Website: <strong className="text-white ml-1">www.iiem.in</strong></span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-brand-cream/10 text-sm font-bold text-brand-magenta uppercase tracking-widest text-center bg-brand-magenta/5 py-4">
                Limited seats available. Enquire today!
              </div>
            </div>

          </div>

          {/* Online Enquiry Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-[120px] self-start">
            <div className="p-8 border border-brand-textDark/15 bg-white neo-shadow-purple">
              <h3 className="font-display text-3xl text-brand-purple mb-6 tracking-wide">
                ADMISSION ENQUIRY
              </h3>

              {submitted ? (
                <div className="p-6 bg-brand-purple/5 border border-brand-purple text-center space-y-4 h-full flex flex-col justify-center min-h-[400px]">
                  <div className="w-16 h-16 bg-brand-teal/20 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <div className="font-display text-2xl text-brand-purple">ENQUIRY REGISTERED!</div>
                  <p className="text-sm text-brand-textDark/80 font-sans leading-relaxed">
                    Thank you for applying. A counselor from our admissions office will contact you on your registered phone number and email within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 mt-4 border-2 border-brand-purple text-brand-purple font-display hover:bg-brand-purple hover:text-white transition-colors uppercase tracking-wider"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm font-sans">
                  <div>
                    <label className="block font-bold text-brand-textDark mb-2 text-xs tracking-widest">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyesh Patel"
                      className="w-full p-4 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-2 text-xs tracking-widest">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@example.com"
                      className="w-full p-4 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-2 text-xs tracking-widest">PHONE NUMBER *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 99999 99999"
                      className="w-full p-4 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-brand-textDark mb-2 text-xs tracking-widest">DESIRED PROGRAM *</label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta focus:ring-1 focus:ring-brand-magenta transition-all"
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
                    className="w-full py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-xl tracking-wider text-center mt-2 shadow-[4px_4px_0px_0px_rgba(255,51,102,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
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
