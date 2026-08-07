import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiryType: 'admissions',
    visitDate: '',
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
              // REACH OUT
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-9xl leading-[0.85] tracking-tight uppercase text-brand-purple">
              LET’S TALK<br />
              <span className="text-brand-magenta">ABOUT YOUR</span><br />
              <span className="text-brand-textDark">FUTURE.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Info Details (Cream Background) */}
      <section className="bg-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeader
              eyebrow="CONTACT DETAILS"
              title="DIRECT CHANNELS."
            />

            <div className="space-y-6 font-sans text-sm text-brand-textDark">
              {/* Address */}
              <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
                <MapPin size={24} className="text-brand-purple shrink-0 mt-1" />
                <div>
                  <div className="font-display text-xl text-brand-purple">CAMPUS ADDRESS</div>
                  <p className="text-brand-textDark/70 mt-1 leading-relaxed">
                    IIEM Campus, 3rd Floor, Creative Arts District,
                    Senapati Bapat Marg, Lower Parel,
                    Mumbai - 400013, India
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
                <Mail size={24} className="text-brand-magenta shrink-0 mt-1" />
                <div>
                  <div className="font-display text-xl text-brand-purple">EMAIL ENQUIRIES</div>
                  <div className="text-brand-textDark/70 mt-1">
                    General: <a href="mailto:info@iiem.edu.in" className="hover:text-brand-magenta font-semibold underline">info@iiem.edu.in</a>
                  </div>
                  <div className="text-brand-textDark/70 mt-0.5">
                    Admissions: <a href="mailto:admissions@iiem.edu.in" className="hover:text-brand-magenta font-semibold underline">admissions@iiem.edu.in</a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
                <Phone size={24} className="text-brand-teal shrink-0 mt-1" />
                <div>
                  <div className="font-display text-xl text-brand-purple">PHONE LINES</div>
                  <div className="text-brand-textDark/70 mt-1">
                    Admissions Office: <a href="tel:+919876543210" className="hover:text-brand-teal font-semibold underline">+91 98765 43210</a>
                  </div>
                  <div className="text-brand-textDark/70 mt-0.5">
                    Corporate Office: <a href="tel:+912288888888" className="hover:text-brand-teal font-semibold underline">+91 22 8888 8888</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 items-start">
                <Clock size={24} className="text-brand-purple shrink-0 mt-1" />
                <div>
                  <div className="font-display text-xl text-brand-purple">CAMPUS VISITING HOURS</div>
                  <p className="text-brand-textDark/70 mt-1">
                    Monday to Saturday: 10:00 AM to 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visit Booking Form column */}
          <div className="lg:col-span-7">
            <div className="p-8 border border-brand-textDark/15 bg-brand-cream neo-shadow-purple">
              <div className="flex gap-2 items-center mb-6">
                <Calendar size={20} className="text-brand-magenta" />
                <span className="font-display text-2xl tracking-wider">BOOK CAMPUS VISIT / SUBMIT ENQUIRY</span>
              </div>

              {submitted ? (
                <div className="p-6 bg-brand-purple/5 border border-brand-purple text-center space-y-4 font-sans">
                  <div className="font-display text-2xl text-brand-purple">APPOINTMENT REQUESTED</div>
                  <p className="text-xs text-brand-textDark/80">
                    Thank you. We have recorded your visit preference on <strong>{formData.visitDate}</strong>. Our guest relations executive will call you to confirm your entry pass.
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-brand-textDark mb-1">YOUR NAME *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Ritesh Sen"
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <label className="block font-bold text-brand-textDark mb-1">ENQUIRY TYPE *</label>
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                      >
                        <option value="admissions">Course Admissions</option>
                        <option value="campus-visit">Book Campus Visit</option>
                        <option value="corporate-hiring">Corporate Recruiter Hiring</option>
                        <option value="other">General Feedback / Questions</option>
                      </select>
                    </div>
                  </div>

                  {formData.enquiryType === 'campus-visit' && (
                    <div>
                      <label className="block font-bold text-brand-textDark mb-1">PREFERRED VISIT DATE *</label>
                      <input
                        type="date"
                        name="visitDate"
                        required
                        value={formData.visitDate}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block font-bold text-brand-textDark mb-1">REMARKS / MESSAGE</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your questions or specify timing coordinates..."
                      className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-purple text-brand-cream hover:bg-brand-magenta transition-all duration-300 font-display text-lg tracking-wider text-center"
                  >
                    SUBMIT INQUIRY SHEET →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map Section (Dark Background) */}
      <section className="bg-brand-dark text-brand-cream py-20 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="MAP LOCATOR"
            title="FINDING IIEM CAMPUS."
            darkBg={true}
          />

          {/* Editorial styled Google Maps placeholder */}
          <div className="w-full aspect-[21/9] border border-brand-cream/15 relative overflow-hidden bg-brand-purple/5 flex items-center justify-center text-center p-8 neo-shadow-teal">
            <div className="absolute inset-0 bg-[radial-gradient(#5a0f55_1px,transparent_1px)] [background-size:16px_16px] opacity-25"></div>
            <div className="relative z-10 max-w-md">
              <MapPin size={48} className="text-brand-magenta mx-auto mb-4" />
              <h3 className="font-display text-2xl text-brand-cream mb-2">GEOGRAPHICAL MAP PLACEHOLDER</h3>
              <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
                This is a stylized simulation representing where the interactive Google Map API frame will reside. Lower Parel is highly connected to Mumbai train networks and central highways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
