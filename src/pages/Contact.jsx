import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Clock, ArrowRight, ChevronDown, MessageCircle, Navigation, Users, Building, HelpCircle } from 'lucide-react';
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
 <div className="w-full">
  {/* 1. Hero Header */}
  <section className="bg-brand-cream py-20 px-6 md:px-12 border-b border-brand-textDark/10 relative overflow-hidden">
    <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="max-w-2xl">
        <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-brand-magenta uppercase block mb-4">
          // REACH OUT
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[0.85] tracking-tight uppercase text-brand-purple mb-6">
          LET’S TALK<br />
          <span className="text-brand-magenta">ABOUT YOUR</span><br />
          <span className="text-brand-textDark">FUTURE.</span>
        </h1>
        <p className="text-brand-textDark/80 font-sans text-lg md:text-xl leading-relaxed max-w-xl">
          Whether you’re curious about our courses, looking for career guidance, or ready to submit your application, our counselling team is here to help you navigate your journey into event management.
        </p>
      </div>
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square group overflow-hidden bg-brand-purple/5">
        <img 
          src="/images/contact_hero.png" 
          alt="Friendly IIEM Counsellor"
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-in-out filter contrast-125 saturate-150"
        />
        <div className="absolute inset-0 bg-brand-magenta/10 mix-blend-overlay"></div>
      </div>
    </div>
  </section>

 {/* 2 & 3. Contact Details & Enquiry Form */}
 <section className="bg-brand-cream py-20 px-6 md:px-12">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
 
 {/* Details column */}
 <div className="lg:col-span-5 space-y-8">
 <SectionHeader
 eyebrow="CONTACT DETAILS"
 title="DIRECT CHANNELS."
 />

 <div className="space-y-6 font-sans text-sm text-brand-textDark">
 <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
 <MapPin size={24} className="text-brand-purple shrink-0 mt-1" />
 <div>
 <div className="font-display text-xl text-brand-purple">CAMPUS ADDRESS</div>
 <p className="text-brand-textDark/70 mt-1 leading-relaxed">
 Ullal Main Rd, Annapurneshwari Layout, Muneshwara Nagar, Muneshwaranagar, Jnana Ganga Nagar, Bengaluru, Karnataka 560056
 </p>
 </div>
 </div>

 <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
 <Phone size={24} className="text-brand-teal shrink-0 mt-1" />
 <div>
 <div className="font-display text-xl text-brand-purple">PHONE NUMBER</div>
 <div className="text-brand-textDark/70 mt-1">
 <a href="tel:+919019876442" className="hover:text-brand-teal font-semibold underline">+91 9019876442</a>
 </div>
 </div>
 </div>

 <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
 <Mail size={24} className="text-brand-magenta shrink-0 mt-1" />
 <div>
 <div className="font-display text-xl text-brand-purple">EMAIL & WEBSITE</div>
 <div className="text-brand-textDark/70 mt-1">
 <a href="mailto:info@iiem.edu.in" className="hover:text-brand-magenta font-semibold underline">info@iiem.edu.in</a>
 </div>
 <div className="text-brand-textDark/70 mt-0.5">
 <a href="https://www.iiem.edu.in" target="_blank" rel="noreferrer" className="hover:text-brand-magenta font-semibold underline">www.iiem.edu.in</a>
 </div>
 </div>
 </div>

 <div className="flex gap-4 items-start pb-6 border-b border-brand-textDark/10">
 <Clock size={24} className="text-brand-purple shrink-0 mt-1" />
 <div>
 <div className="font-display text-xl text-brand-purple">WORKING HOURS</div>
 <p className="text-brand-textDark/70 mt-1">
 Mon - Sat: 10:00 AM to 6:00 PM<br />
 Sunday: Closed
 </p>
 </div>
 </div>
 
 <div className="flex gap-4 items-start">
 <Building size={24} className="text-brand-teal shrink-0 mt-1" />
 <div>
 <div className="font-display text-xl text-brand-purple">DEPARTMENT CONTACTS</div>
 <ul className="text-brand-textDark/70 mt-1 space-y-1">
 <li><strong>Admissions:</strong> admissions@iiem.edu.in</li>
 <li><strong>Student Support:</strong> students@iiem.edu.in</li>
 <li><strong>Placement Cell:</strong> careers@iiem.edu.in</li>
 <li><strong>Administration:</strong> admin@iiem.edu.in</li>
 </ul>
 </div>
 </div>
 </div>
 </div>

 {/* Quick Enquiry Form */}
 <div className="lg:col-span-7">
 <div className="p-8 border border-brand-textDark/15 bg-brand-cream neo-shadow-purple">
 <div className="flex gap-2 items-center mb-6">
 <Calendar size={20} className="text-brand-magenta" />
 <span className="font-display text-2xl tracking-wider uppercase">Quick Enquiry Form</span>
 </div>

 {submitted ? (
 <div className="p-6 bg-brand-purple/5 border border-brand-purple text-center space-y-4 font-sans">
 <div className="font-display text-2xl text-brand-purple">ENQUIRY SUBMITTED</div>
 <p className="text-xs text-brand-textDark/80">
 Thank you, {formData.name}. We have received your message. Our counselling team will contact you shortly.
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
 placeholder="e.g. Ritesh Sen"
 className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
 />
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
 <div>
 <label className="block font-bold text-brand-textDark mb-1">EMAIL *</label>
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
 </div>
 <div>
 <label className="block font-bold text-brand-textDark mb-1">COURSE / PROGRAM INTERESTED IN *</label>
 <select
 name="course"
 value={formData.course}
 onChange={handleInputChange}
 className="w-full p-3 border border-brand-textDark/15 bg-brand-cream focus:outline-none focus:border-brand-magenta"
 >
 <option value="admissions">Course Admissions / Counselling</option>
 {programsData.map((prog) => (
 <option key={prog.id} value={prog.id}>{prog.title}</option>
 ))}
 <option value="other">Other Enquiry</option>
 </select>
 </div>
 <div>
 <label className="block font-bold text-brand-textDark mb-1">MESSAGE / ENQUIRY</label>
 <textarea
 name="message"
 rows="4"
 value={formData.message}
 onChange={handleInputChange}
 placeholder="Write your questions..."
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

 {/* 4. Campus Location Map (Dark Background) */}
 <section className="bg-brand-dark text-brand-cream py-24 px-6 md:px-12 border-b border-brand-cream/10">
 <div className="max-w-[1400px] mx-auto">
 <SectionHeader
 eyebrow="CAMPUS LOCATION"
 title="FINDING IIEM CAMPUS."
 darkBg={true}
 />
 
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
  <div className="lg:col-span-8">
  {/* Interactive Google Map */}
  <div className="w-full aspect-video border border-brand-cream/15 relative bg-brand-purple/5 flex flex-col items-center justify-center neo-shadow-teal overflow-hidden">
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
  <div className="p-6 bg-brand-cream/5 border border-brand-cream/10">
  <h4 className="font-display text-xl text-brand-teal mb-2">NEARBY LANDMARKS</h4>
  <ul className="text-brand-cream/70 font-sans text-sm space-y-2">
  <li>• Near Bangalore University Campus</li>
  <li>• Easy access from Mysore Road</li>
  <li>• Close to Jnana Ganga Nagar</li>
  </ul>
  </div>
  </div>
 </div>
 </div>
 </section>

 {/* 5 & 6. Admissions Support & Social Media */}
 <section className="bg-white py-20 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
 
 {/* Admissions Support */}
 <div className="flex flex-col h-full">
 <SectionHeader
 eyebrow="GUIDANCE"
 title={<>ADMISSIONS<br />SUPPORT.</>}
 />
 <div className="flex flex-col gap-4 mt-8 flex-1">
 <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta transition-colors flex-1 flex flex-col justify-center">
 <div className="font-display text-xl text-brand-purple mb-1">Admissions Enquiry</div>
 <div className="text-brand-textDark/70 font-sans text-sm">For all preliminary questions about courses and batches.</div>
 </div>
 <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-teal transition-colors flex-1 flex flex-col justify-center">
 <div className="font-display text-xl text-brand-purple mb-1">Application Support</div>
 <div className="text-brand-textDark/70 font-sans text-sm">Facing issues with your application form? We can help.</div>
 </div>
 <div className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-purple transition-colors flex-1 flex flex-col justify-center">
  <div className="font-display text-xl text-brand-purple mb-1">Dedicated Counselling</div>
  <div className="text-brand-textDark/70 font-sans text-sm">Speak directly to our Lead Counsellor: +91 9019876442</div>
  </div>
 </div>
 </div>

 {/* Social Media */}
 <div className="flex flex-col h-full">
 <SectionHeader
 eyebrow="COMMUNITY"
 title={<>CONNECT<br />SOCIALLY.</>}
 />
 <div className="grid grid-cols-2 gap-4 mt-8">
 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta transition-all group">
 <div className="font-display text-xl text-brand-purple mb-1 group-hover:text-brand-magenta transition-colors">Instagram</div>
 <div className="text-brand-textDark/70 font-sans text-sm">Follow our campus stories & event highlights.</div>
 </a>
 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-magenta transition-all group">
 <div className="font-display text-xl text-brand-purple mb-1 group-hover:text-brand-magenta transition-colors">YouTube</div>
 <div className="text-brand-textDark/70 font-sans text-sm">Watch student projects, campus tours & interviews.</div>
 </a>
 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-purple transition-all group">
 <div className="font-display text-xl text-brand-purple mb-1 group-hover:text-brand-teal transition-colors">LinkedIn</div>
 <div className="text-brand-textDark/70 font-sans text-sm">Connect with our alumni & industry network.</div>
 </a>
 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-6 border border-brand-textDark/15 bg-brand-cream hover:border-brand-teal transition-all group">
 <div className="font-display text-xl text-brand-purple mb-1 group-hover:text-brand-teal transition-colors">Facebook</div>
 <div className="text-brand-textDark/70 font-sans text-sm">Join our community page for updates & events.</div>
 </a>
 </div>
 <a href="https://wa.me/919019876442" target="_blank" rel="noreferrer" className="mt-4 block w-full p-6 bg-[#25D366] text-white border border-[#25D366] hover:bg-[#128C7E] transition-all text-center">
 <div className="font-display text-xl mb-1">WhatsApp Us Directly</div>
 <div className="font-sans text-sm text-white/80">Tap to start a conversation on +91 9019876442</div>
 </a>
 </div>

 </div>
 </section>

 {/* 7. FAQ */}
 <section className="bg-brand-cream py-24 px-6 md:px-12 border-b border-brand-textDark/10">
 <div className="max-w-[1000px] mx-auto">
 <div className="text-center mb-12">
 <HelpCircle size={40} className="text-brand-magenta mx-auto mb-4" />
 <h2 className="font-display text-4xl sm:text-5xl text-brand-purple">FREQUENTLY ASKED QUESTIONS</h2>
 <p className="font-sans text-brand-textDark/70 mt-4">Everything you need to know about admissions, fees, and courses.</p>
 </div>

 <div className="space-y-4">
 {faqs.map((faq, idx) => (
 <div key={idx} className="border border-brand-textDark/15 bg-white overflow-hidden">
 <button
 className="w-full p-6 text-left flex justify-between items-center focus:outline-none hover:bg-brand-purple/5 transition-colors"
 onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
 >
 <span className="font-display text-xl text-brand-purple pr-4">{faq.question}</span>
 <ChevronDown size={20} className={`text-brand-magenta transition-transform duration-300 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
 </button>
 <div
 className={`px-6 font-sans text-sm text-brand-textDark/80 transition-all duration-300 ease-in-out ${
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
 <section className="bg-brand-purple text-brand-cream py-24 px-6 md:px-12 text-center relative overflow-hidden">
 <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/20 rounded-full blur-3xl pointer-events-none"></div>
 <div className="max-w-2xl mx-auto space-y-6 relative z-10">
 <h2 className="font-display text-4xl sm:text-6xl text-white">HAVE A QUESTION? TALK TO US.</h2>
 <p className="text-sm text-brand-cream/80 max-w-lg mx-auto font-sans leading-relaxed mb-8">
 Check out campus photographs in the gallery or book a physical walk-through with our career counselors.
 </p>
 
 <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
 <a
 href="tel:+919019876442"
 className="w-full sm:w-auto px-6 py-4 bg-white text-brand-purple hover:bg-brand-magenta hover:text-white transition-all duration-300 font-display text-sm tracking-wider inline-flex items-center justify-center gap-2 neo-shadow"
 >
 <Phone size={18} /> CALL NOW
 </a>
 <a
 href="https://wa.me/919019876442" target="_blank" rel="noreferrer"
 className="w-full sm:w-auto px-6 py-4 bg-[#25D366] text-white hover:bg-brand-dark transition-all duration-300 font-display text-sm tracking-wider inline-flex items-center justify-center gap-2 neo-shadow"
 >
 <MessageCircle size={18} /> WHATSAPP
 </a>
 <button
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className="w-full sm:w-auto px-6 py-4 bg-brand-dark text-white hover:bg-brand-teal transition-all duration-300 font-display text-sm tracking-wider inline-flex items-center justify-center gap-2 neo-shadow"
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
