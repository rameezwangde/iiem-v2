import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowRight, ChevronDown, MessageCircle, Navigation, Users, Building, HelpCircle, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { programsData } from '../data/siteData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'admissions',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi, I am ${formData.name}. Email: ${formData.email}. Phone: ${formData.phone}. Interested in: ${formData.course}. Message: ${formData.message}`;
    window.open(`https://wa.me/919019876442?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitted(true);
  };

  const faqs = [
    { question: "When do admissions open for the next batch?", answer: "Admissions typically open 3 months prior to the academic session. We offer both Spring and Fall intakes for major diploma programs." },
    { question: "What are the eligibility criteria for the Advanced Diploma?", answer: "Candidates must have completed their 12th grade (or equivalent) in any stream. Graduates and working professionals are also welcome." },
    { question: "How can I get information about fees and payment plans?", answer: "Detailed fee structures are provided during the campus counselling session. We also offer easy installment options for our long-term courses." },
    { question: "Do I need to book an appointment before visiting the campus?", answer: "Yes, we highly recommend booking a visit through our quick enquiry form so a counsellor is available to guide you." },
    { question: "Does IIEM guarantee placements?", answer: "We provide 100% placement assistance, connecting students with our extensive network of event management agencies, though final selection depends on the student's performance." }
  ];

  return (
    <div className="w-full bg-brand-cream">
      {/* 1. Hero Header (Light) */}
      <section className="bg-white pt-24 pb-12 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center space-y-6">
          <div className="badge-pill bg-brand-cream border border-brand-border text-[10px] sm:text-[11px] font-bold text-brand-purple inline-flex items-center gap-2">
            <span className="text-brand-teal">//</span> REACH OUT
          </div>
          
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[0.95] text-brand-purple tracking-tight uppercase max-w-4xl mx-auto">
            LET’S TALK ABOUT YOUR FUTURE.
          </h1>
          <p className="font-sans text-brand-textMuted text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Whether you’re curious about our courses, looking for career guidance, or ready to submit your application, our counselling team is here to help you navigate your journey into event management.
          </p>
        </div>
      </section>

      {/* 2 & 3. Contact Details & Enquiry Form */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details column */}
          <div className="lg:col-span-5 space-y-8">
            <SectionHeader
              eyebrow="CONTACT DETAILS"
              title="DIRECT CHANNELS."
              supportingText="Connect with our academic administration and campus counselling officers."
            />

            <div className="space-y-4 font-sans text-xs sm:text-sm text-brand-textDark">
              <div className="academic-card p-5 flex gap-4 items-start bg-white">
                <div className="w-10 h-10 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-brand-purple uppercase">CAMPUS ADDRESS</div>
                  <p className="text-brand-textMuted mt-1 leading-relaxed text-xs">
                    Ullal Main Rd, Annapurneshwari Layout, Muneshwara Nagar, Muneshwaranagar, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
                  </p>
                </div>
              </div>

              <div className="academic-card p-5 flex gap-4 items-start bg-white">
                <div className="w-10 h-10 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-brand-purple uppercase">PHONE NUMBER</div>
                  <div className="text-brand-textMuted mt-1">
                    <a href="tel:+919019876442" className="hover:text-brand-purple font-bold text-xs">+91 9019876442</a>
                  </div>
                </div>
              </div>

              <div className="academic-card p-5 flex gap-4 items-start bg-white">
                <div className="w-10 h-10 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-brand-purple uppercase">EMAIL & WEBSITE</div>
                  <div className="text-brand-textMuted mt-1">
                    <a href="mailto:infotiiemblr@gmail.com" className="hover:text-brand-purple font-semibold text-xs">infotiiemblr@gmail.com</a>
                  </div>
                  <div className="text-brand-textMuted mt-0.5">
                    <a href="https://www.iiem.edu.in" target="_blank" rel="noreferrer" className="hover:text-brand-purple font-semibold text-xs">www.iiem.edu.in</a>
                  </div>
                </div>
              </div>

              <div className="academic-card p-5 flex gap-4 items-start bg-white">
                <div className="w-10 h-10 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-brand-purple uppercase">WORKING HOURS</div>
                  <p className="text-brand-textMuted mt-1 text-xs">
                    Mon - Sat: 10:00 AM to 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              
              <div className="academic-card p-5 flex gap-4 items-start bg-white">
                <div className="w-10 h-10 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center shrink-0">
                  <Building size={20} />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-brand-purple uppercase">DEPARTMENT CONTACTS</div>
                  <ul className="text-brand-textMuted mt-1 space-y-1 text-xs">
                    <li><strong>General Enquiries:</strong> infotiiemblr@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="academic-card p-8 bg-white shadow-card">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-brand-purple" />
                <span className="font-display font-bold text-xl text-brand-purple uppercase tracking-tight">Quick Enquiry Form</span>
              </div>
              <p className="text-xs text-brand-textMuted font-sans mb-6">
                Fill out the form below and our admissions team will get back to you promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-brand-tealLight/50 border border-brand-teal/30 rounded-xl text-center space-y-4 font-sans min-h-[380px] flex flex-col justify-center">
                  <div className="font-display font-bold text-2xl text-brand-purple">ENQUIRY SUBMITTED</div>
                  <p className="text-xs sm:text-sm text-brand-textMuted leading-relaxed max-w-md mx-auto">
                    Thank you, {formData.name}. We have received your message. Our counselling team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors w-fit mx-auto"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 uppercase tracking-wider">FULL NAME *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ritesh Sen"
                      className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-brand-textDark mb-1.5 uppercase tracking-wider">EMAIL *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-brand-textDark mb-1.5 uppercase tracking-wider">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 99999 99999"
                        className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 uppercase tracking-wider">COURSE / PROGRAM INTERESTED IN *</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs"
                    >
                      <option value="admissions">Course Admissions / Counselling</option>
                      {programsData.map((prog) => (
                        <option key={prog.id} value={prog.id}>{prog.title}</option>
                      ))}
                      <option value="other">Other Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-brand-textDark mb-1.5 uppercase tracking-wider">MESSAGE / ENQUIRY</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Write your questions..."
                      className="w-full p-3.5 rounded-xl border border-brand-border bg-brand-cream/40 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-all text-xs resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-purple hover:bg-brand-purpleLight text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-card mt-2"
                  >
                    SUBMIT INQUIRY SHEET →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Campus Location Map (Light) */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            eyebrow="CAMPUS LOCATION"
            title="FINDING IIEM CAMPUS."
            supportingText="Easily accessible from major transit points in Bengaluru."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
            <div className="lg:col-span-8">
              {/* Interactive Google Map */}
              <div className="w-full aspect-video rounded-2xl border border-brand-border overflow-hidden bg-brand-stone shadow-card">
                <iframe
                  title="IIEM Campus Map"
                  src="https://maps.google.com/maps?q=Ullal%20Main%20Rd,%20Annapurneshwari%20Layout,%20Muneshwara%20Nagar,%20Muneshwaranagar,%20Jnana%20Ganga%20Nagar,%20Bengaluru,%20Karnataka%20560056&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
              <div className="academic-card p-6 bg-brand-cream/50">
                <div className="w-10 h-10 rounded-xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-3">
                  <Navigation size={20} />
                </div>
                <h4 className="font-display font-bold text-xl text-brand-purple mb-3">NEARBY LANDMARKS</h4>
                <ul className="text-brand-textMuted font-sans text-xs sm:text-sm space-y-2.5">
                  <li className="flex items-center gap-2">• Near Bangalore University Campus</li>
                  <li className="flex items-center gap-2">• Easy access from Mysore Road</li>
                  <li className="flex items-center gap-2">• Close to Jnana Ganga Nagar</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 & 6. Admissions Support & Social Media */}
      <section className="bg-brand-cream py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Admissions Support */}
          <div className="flex flex-col h-full">
            <SectionHeader
              eyebrow="GUIDANCE"
              title="ADMISSIONS SUPPORT."
            />
            <div className="flex flex-col gap-4 mt-6 flex-1">
              <div className="academic-card p-6 bg-white">
                <div className="font-display font-bold text-lg text-brand-purple mb-1">Admissions Enquiry</div>
                <div className="text-brand-textMuted font-sans text-xs">For all preliminary questions about courses and batches.</div>
              </div>
              <div className="academic-card p-6 bg-white">
                <div className="font-display font-bold text-lg text-brand-purple mb-1">Application Support</div>
                <div className="text-brand-textMuted font-sans text-xs">Facing issues with your application form? We can help.</div>
              </div>
              <div className="academic-card p-6 bg-white">
                <div className="font-display font-bold text-lg text-brand-purple mb-1">Dedicated Counselling</div>
                <div className="text-brand-textMuted font-sans text-xs">Speak directly to our Lead Counsellor: <span className="font-bold text-brand-purple">+91 9019876442</span></div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col h-full">
            <SectionHeader
              eyebrow="COMMUNITY"
              title="CONNECT SOCIALLY."
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="academic-card p-5 bg-white group">
                <div className="font-display font-bold text-base text-brand-purple mb-1 group-hover:text-brand-purple transition-colors">Instagram</div>
                <div className="text-brand-textMuted font-sans text-xs">Follow our campus stories & event highlights.</div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="academic-card p-5 bg-white group">
                <div className="font-display font-bold text-base text-brand-purple mb-1 group-hover:text-brand-purple transition-colors">YouTube</div>
                <div className="text-brand-textMuted font-sans text-xs">Watch student projects, campus tours & interviews.</div>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="academic-card p-5 bg-white group">
                <div className="font-display font-bold text-base text-brand-purple mb-1 group-hover:text-brand-teal transition-colors">LinkedIn</div>
                <div className="text-brand-textMuted font-sans text-xs">Connect with our alumni & industry network.</div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="academic-card p-5 bg-white group">
                <div className="font-display font-bold text-base text-brand-purple mb-1 group-hover:text-brand-teal transition-colors">Facebook</div>
                <div className="text-brand-textMuted font-sans text-xs">Join our community page for updates & events.</div>
              </a>
            </div>
            
            <a 
              href="https://wa.me/919019876442" 
              target="_blank" 
              rel="noreferrer" 
              className="mt-4 block w-full p-5 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all text-center shadow-card"
            >
              <div className="font-display font-bold text-lg mb-0.5 flex items-center justify-center gap-2">
                <MessageCircle size={20} /> WhatsApp Us Directly
              </div>
              <div className="font-sans text-xs text-white/90">Tap to start a conversation on +91 9019876442</div>
            </a>
          </div>

        </div>
      </section>

      {/* 7. FAQ */}
      <section className="bg-white py-20 lg:py-28 px-6 md:px-12 border-b border-brand-border">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-12">
            <div className="w-12 h-12 rounded-xl bg-brand-purpleMuted text-brand-purple flex items-center justify-center mx-auto mb-3">
              <HelpCircle size={24} />
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-brand-purple uppercase tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-sans text-xs sm:text-sm text-brand-textMuted mt-2">
              Everything you need to know about admissions, fees, and courses.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="academic-card overflow-hidden bg-brand-cream/40">
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none hover:bg-brand-purpleMuted/60 transition-colors"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-brand-purple pr-4">{faq.question}</span>
                  <ChevronDown size={18} className={`text-brand-purple transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`px-6 font-sans text-xs sm:text-sm text-brand-textMuted transition-all duration-300 ease-in-out ${
                    openFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Visit Campus / Final CTA */}
      <section className="bg-brand-purple text-white py-20 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white uppercase tracking-tight">
            HAVE A QUESTION? TALK TO US.
          </h2>
          <p className="text-xs sm:text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed mb-6">
            Check out campus photographs in the gallery or book a physical walk-through with our career counselors.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="tel:+919019876442"
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-brand-purple hover:bg-brand-cream rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-card transition-colors"
            >
              <Phone size={15} /> CALL NOW
            </a>
            <a
              href="https://wa.me/919019876442" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-white hover:bg-[#128C7E] rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-card transition-colors"
            >
              <MessageCircle size={15} /> WHATSAPP
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 backdrop-blur-sm transition-colors cursor-pointer"
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
