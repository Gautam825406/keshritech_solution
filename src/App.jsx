import React, { useState, useEffect, useRef } from 'react';
import { Send, Menu, X, MessageCircle, Phone, Mail, MapPin, Code, Smartphone, TrendingUp, Film, Palette, Briefcase, ChevronRight, Zap, Users, Award, Clock, Star, ArrowRight, Sparkles, Globe, Target, Rocket, Heart, TrendingDown } from 'lucide-react';

export default function KeshriTechWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Namaste! Main KeshriTech ka AI Assistant hoon. Aapki kaise madad kar sakta hoon?' }
  ]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const chatEndRef = useRef(null);

  // Gemini API Key - Replace with your actual key
  const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';

  // Hinglish rotating hero texts
  const heroTexts = [
    "AAPKE SAPNO KO DIGITAL BANATE HAIN",
    "BUSINESS KO GROW KARNE KA BEST SOLUTION",
    "INDIA KI NO.1 DIGITAL AGENCY",
    "AAPKI SUCCESS HUMARA MISSION HAI",
    "QUALITY WORK PE VISHWAS KAREN"
  ];

  // Auto-rotate hero text
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Handle Gemini AI Chat
  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newUserMessage = { role: 'user', content: userMessage };
    setChatMessages(prev => [...prev, newUserMessage]);
    setUserMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a helpful assistant for KeshriTech Solutions in Hinglish (Hindi+English mix). We are India's premium digital agency led by Gautam Keshri. Services: Website Development, App Development, Digital Marketing, Ad Campaigns, Business Support, Video Editing & Production, Graphic Design. 50+ projects complete kiye hain with 100% client satisfaction. Location: Chouparan, Hazaribagh, Jharkhand 825406. Contact: +91 6203094055 or keshrigautam825406@gmail.com. Reply in friendly Hinglish style. User: ${userMessage}`
            }]
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, main abhi kuch problem face kar raha hoon. Please WhatsApp pe contact karein!';
      setChatMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry yaar, connection me thoda issue hai. Aap direct WhatsApp karein +91 6203094055 pe!' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // WhatsApp handlers
  const handleWhatsAppContact = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const whatsappMessage = `Namaste KeshriTech!%0A%0ANaam: ${formData.get('name')}%0AEmail: ${formData.get('email')}%0AService: ${formData.get('service')}%0AMessage: ${formData.get('message')}`;
    window.open(`https://wa.me/916203094055?text=${whatsappMessage}`, '_blank');
  };

  const openWhatsApp = () => window.open(`https://wa.me/916203094055`, '_blank');

  const services = [
    { 
      icon: <Code />, 
      title: 'Website Development', 
      titleHindi: 'वेबसाइट बनाएं',
      desc: 'Professional website banate hain jo aapke business ko online famous kare',
      features: ['React/Next.js Latest Tech', 'Mobile Friendly Design', 'Fast Loading Speed', 'Google Pe Top Ranking']
    },
    { 
      icon: <Smartphone />, 
      title: 'App Development', 
      titleHindi: 'मोबाइल ऐप',
      desc: 'Android aur iPhone dono ke liye best quality apps banate hain',
      features: ['User-Friendly Interface', 'Fast Performance', 'Secure & Safe', 'Regular Updates']
    },
    { 
      icon: <TrendingUp />, 
      title: 'Digital Marketing', 
      titleHindi: 'डिजिटल मार्केटिंग',
      desc: 'Online marketing karke aapka business 10x grow karenge',
      features: ['Social Media Marketing', 'Google Ads Expert', 'SEO Specialist', 'Content Creation']
    },
    { 
      icon: <Zap />, 
      title: 'Ad Campaigns', 
      titleHindi: 'विज्ञापन कैंपेन',
      desc: 'Facebook, Instagram, Google pe effective ads chalate hain',
      features: ['Targeted Audience', 'Budget Friendly', 'High ROI Guarantee', 'Professional Management']
    },
    { 
      icon: <Film />, 
      title: 'Video Production', 
      titleHindi: 'वीडियो प्रोडक्शन',
      desc: 'Professional video editing aur shooting - cinema quality me',
      features: ['4K Video Quality', 'Color Grading', 'Motion Graphics', 'YouTube Optimized']
    },
    { 
      icon: <Palette />, 
      title: 'Graphic Design', 
      titleHindi: 'ग्राफिक डिजाइन',
      desc: 'Attractive logos, posters, thumbnails - sab kuch design karte hain',
      features: ['Logo Design', 'Thumbnail Creation', 'Brand Identity', 'Print & Digital']
    },
    { 
      icon: <Briefcase />, 
      title: 'Business Support', 
      titleHindi: 'बिजनेस सपोर्ट',
      desc: 'Aapke business ko digital duniya me successful banane ka complete solution',
      features: ['Business Consultation', 'Strategy Planning', 'Technical Support', '24/7 Help Available']
    },
  ];

  const recentProjects = [
    { 
      name: 'E-Commerce Platform', 
      nameHindi: 'ऑनलाइन शॉपिंग साइट',
      category: 'Website', 
      tech: 'React + Node.js',
      description: 'Complete online shopping site with payment gateway integration',
      descHindi: 'पूरी तरह से काम करने वाली ऑनलाइन शॉपिंग साइट',
      image: '🛍️',
      result: '300% Sales Increase'
    },
    { 
      name: 'Fitness Tracking App', 
      nameHindi: 'फिटनेस ऐप',
      category: 'Mobile App', 
      tech: 'React Native',
      description: 'AI-powered workout recommendation app for fitness enthusiasts',
      descHindi: 'स्वास्थ्य और फिटनेस के लिए बेहतरीन ऐप',
      image: '💪',
      result: '50K+ Downloads'
    },
    { 
      name: 'Restaurant Campaign', 
      nameHindi: 'रेस्टोरेंट मार्केटिंग',
      category: 'Marketing', 
      tech: 'Facebook + Instagram',
      description: 'Successful social media campaign reaching massive audience',
      descHindi: 'सोशल मीडिया पर धमाकेदार सफलता',
      image: '🍽️',
      result: '5 Lakh+ Reach'
    },
    { 
      name: 'Corporate Videos', 
      nameHindi: 'कॉर्पोरेट वीडियोज',
      category: 'Video', 
      tech: '4K Professional',
      description: 'High-quality professional videos for corporate training',
      descHindi: 'प्रोफेशनल क्वालिटी वीडियो सीरीज',
      image: '🎬',
      result: '100% Client Happy'
    },
    { 
      name: 'Real Estate Portal', 
      nameHindi: 'प्रॉपर्टी पोर्टल',
      category: 'Website', 
      tech: 'Next.js Advanced',
      description: 'Advanced property listing with virtual tour features',
      descHindi: 'प्रॉपर्टी खोजने का आसान तरीका',
      image: '🏠',
      result: '1000+ Listings'
    },
    { 
      name: 'Fashion E-Store', 
      nameHindi: 'फैशन स्टोर',
      category: 'E-Commerce', 
      tech: 'Full Stack',
      description: 'Trendy fashion store with latest shopping features',
      descHindi: 'लेटेस्ट फैशन के लिए ऑनलाइन स्टोर',
      image: '👗',
      result: '500+ Daily Orders'
    },
  ];

  const testimonials = [
    {
      name: 'राजेश कुमार',
      nameEng: 'Rajesh Kumar',
      company: 'Tech Startup, Mumbai',
      text: 'KeshriTech ne hamare startup ke liye bahut badiya website banaya. Team ekdum professional hai aur kaam bhi time pe complete kiya. Highly recommended! 🌟',
      rating: 5
    },
    {
      name: 'प्रिया शर्मा',
      nameEng: 'Priya Sharma',
      company: 'E-Commerce Brand, Delhi',
      text: 'Hamara sales 300% badh gaya sirf 3 mahine me! Digital marketing ka kaam outstanding hai. Best investment for our business. Thank you KeshriTech! 💯',
      rating: 5
    },
    {
      name: 'अमित पटेल',
      nameEng: 'Amit Patel',
      company: 'Digital Agency, Bangalore',
      text: 'Jo commitment dete hain wo deliver bhi karte hain. Quality work aur affordable price. Isse better digital partner nahi mil sakta. Keep it up team! 👍',
      rating: 5
    },
  ];

  const stats = [
    { icon: <Award />, number: '50+', label: 'Projects Complete', labelHindi: 'प्रोजेक्ट पूरे' },
    { icon: <Users />, number: '40+', label: 'Happy Clients', labelHindi: 'खुश ग्राहक' },
    { icon: <Clock />, number: '3+', label: 'Years Experience', labelHindi: 'साल का अनुभव' },
    { icon: <Star />, number: '5.0', label: 'Client Rating', labelHindi: 'क्लाइंट रेटिंग' },
  ];

  const processSteps = [
    { 
      number: '01', 
      title: 'समझें ज़रूरतें', 
      titleEng: 'Understanding',
      desc: 'Sabse pehle aapki requirements aur business goals samajhte hain', 
      icon: <Target /> 
    },
    { 
      number: '02', 
      title: 'प्लानिंग करें', 
      titleEng: 'Planning',
      desc: 'Detailed strategy aur timeline banate hain project ke liye', 
      icon: <Globe /> 
    },
    { 
      number: '03', 
      title: 'काम शुरू', 
      titleEng: 'Development',
      desc: 'Latest technology use karke best quality me kaam karte hain', 
      icon: <Code /> 
    },
    { 
      number: '04', 
      title: 'लॉन्च करें', 
      titleEng: 'Launch',
      desc: 'Complete testing ke baad project launch karte hain aur support dete hain', 
      icon: <Rocket /> 
    },
  ];

  const whyChooseUs = [
    { icon: <Zap />, title: 'Fast Delivery', titleHindi: 'तेज़ डिलीवरी', desc: 'Time pe kaam complete karte hain, guaranteed!' },
    { icon: <Heart />, title: 'Quality First', titleHindi: 'क्वालिटी फर्स्ट', desc: 'Best quality me hi kaam deliver karte hain' },
    { icon: <Award />, title: 'Affordable Price', titleHindi: 'सस्ती कीमत', desc: 'Budget-friendly packages har business ke liye' },
    { icon: <Users />, title: '24/7 Support', titleHindi: '24/7 सपोर्ट', desc: 'Hamesha available for your queries and issues' },
  ];

  return (
    <div className="keshritech-website">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@700;900&family=Noto+Sans+Devanagari:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary-gold: #D4AF37;
          --primary-orange: #FF6B35;
          --accent-blue: #0066FF;
          --accent-green: #00D9A3;
          --accent-purple: #7C3AED;
          --accent-pink: #FF006E;
          --dark-navy: #0F172A;
          --darker-navy: #020617;
          --charcoal: #1E293B;
          --slate: #334155;
          --light-gray: #F8FAFC;
          --glow-gold: rgba(212, 175, 55, 0.5);
          --glow-orange: rgba(255, 107, 53, 0.5);
          --glow-blue: rgba(0, 102, 255, 0.4);
        }

        body {
          font-family: 'Montserrat', 'Noto Sans Devanagari', sans-serif;
          background: var(--darker-navy);
          color: #fff;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .keshritech-website {
          position: relative;
          min-height: 100vh;
        }

        /* Promotional Animated Background */
        .keshritech-website::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(ellipse at 15% 20%, rgba(255, 107, 53, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 80%, rgba(0, 102, 255, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, var(--darker-navy) 0%, var(--dark-navy) 50%, var(--charcoal) 100%);
          z-index: -2;
          animation: bgPulse 18s ease-in-out infinite;
        }

        @keyframes bgPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.88; }
        }

        /* Dynamic Grid */
        .keshritech-website::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(255, 107, 53, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.04) 1px, transparent 1px);
          background-size: 35px 35px;
          z-index: -1;
          pointer-events: none;
          animation: gridMove 25s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(35px, 35px); }
        }

        /* Promotional Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 2px solid rgba(255, 107, 53, 0.3);
          animation: slideDown 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 0 8px 32px rgba(255, 107, 53, 0.2);
        }

        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          font-weight: 900;
          background: linear-gradient(135deg, #FFD700, var(--primary-orange), #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: logoShine 3s ease-in-out infinite;
          letter-spacing: 2px;
          position: relative;
          cursor: pointer;
          text-shadow: 0 0 30px var(--glow-orange);
        }

        @keyframes logoShine {
          0%, 100% { filter: drop-shadow(0 0 15px var(--glow-orange)); }
          50% { filter: drop-shadow(0 0 28px var(--glow-orange)); }
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          position: relative;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          padding: 0.5rem 0;
          text-transform: uppercase;
        }

        .nav-links a::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--primary-orange), transparent);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transform: translateX(-50%);
          box-shadow: 0 0 10px var(--glow-orange);
        }

        .nav-links a:hover {
          color: var(--primary-orange);
          transform: translateY(-2px);
        }

        .nav-links a:hover::before {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          border: none;
          color: #fff;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.6rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 0 25px var(--glow-orange);
        }

        .menu-toggle:active {
          transform: scale(0.95);
        }

        /* Promotional Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 8rem 1.5rem 4rem;
          position: relative;
          overflow: hidden;
        }

        .hero-bg-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          overflow: hidden;
          z-index: 0;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.22;
          animation: shapeFloat 22s infinite;
        }

        .shape-1 {
          width: 450px;
          height: 450px;
          background: var(--primary-orange);
          top: 8%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 550px;
          height: 550px;
          background: var(--accent-blue);
          bottom: 8%;
          right: 5%;
          animation-delay: 7s;
        }

        .shape-3 {
          width: 400px;
          height: 400px;
          background: var(--primary-gold);
          top: 50%;
          left: 50%;
          animation-delay: 14s;
        }

        @keyframes shapeFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(45px, -45px) rotate(120deg) scale(1.12); }
          66% { transform: translate(-45px, 45px) rotate(240deg) scale(0.88); }
        }

        .hero-content {
          max-width: 1150px;
          z-index: 1;
          animation: heroFadeIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(80px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 2rem;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(0, 102, 255, 0.2));
          border: 2px solid var(--primary-orange);
          border-radius: 50px;
          color: var(--primary-orange);
          font-size: 0.95rem;
          font-weight: 800;
          margin-bottom: 2rem;
          animation: badgeGlow 2.5s ease-in-out infinite;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @keyframes badgeGlow {
          0%, 100% { box-shadow: 0 0 25px var(--glow-orange); transform: scale(1); }
          50% { box-shadow: 0 0 40px var(--glow-orange), 0 0 60px var(--glow-orange); transform: scale(1.05); }
        }

        .hero-title {
          font-family: 'Playfair Display', 'Noto Sans Devanagari', serif;
          font-size: clamp(2.5rem, 7vw, 5.5rem);
          font-weight: 900;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #FFD700, var(--primary-orange), #FF8C42, var(--primary-orange));
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleGradient 5s ease infinite;
          line-height: 1.15;
          text-shadow: 0 0 40px var(--glow-orange);
          min-height: 1.4em;
          transition: opacity 0.5s ease;
        }

        @keyframes titleGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .hero-subtitle {
          font-size: clamp(1.15rem, 3vw, 1.8rem);
          color: rgba(255, 255, 255, 0.92);
          margin-bottom: 2rem;
          font-weight: 500;
          line-height: 1.7;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          animation: heroFadeIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s backwards;
        }

        .hero-subtitle-hindi {
          font-size: clamp(1.05rem, 2.5vw, 1.5rem);
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 3.5rem;
          font-weight: 400;
          font-family: 'Noto Sans Devanagari', sans-serif;
          animation: heroFadeIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s backwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: heroFadeIn 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s backwards;
        }

        .btn {
          padding: 1.2rem 3rem;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          letter-spacing: 0.5px;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .btn:hover::before {
          width: 450px;
          height: 450px;
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          color: #fff;
          box-shadow: 0 15px 40px var(--glow-orange);
          position: relative;
          z-index: 1;
        }

        .btn-primary:hover {
          transform: translateY(-7px) scale(1.08);
          box-shadow: 0 22px 50px var(--glow-orange);
        }

        .btn-secondary {
          background: transparent;
          color: var(--primary-orange);
          border: 2px solid var(--primary-orange);
          box-shadow: 0 0 25px rgba(255, 107, 53, 0.3);
        }

        .btn-secondary:hover {
          background: var(--primary-orange);
          color: #fff;
          transform: translateY(-7px) scale(1.08);
          box-shadow: 0 22px 50px var(--glow-orange);
        }

        /* Promotional Stats */
        .stats-section {
          padding: 4.5rem 1.5rem;
          background: linear-gradient(180deg, rgba(30, 41, 59, 0.45), transparent);
          border-top: 2px solid rgba(255, 107, 53, 0.25);
          border-bottom: 2px solid rgba(255, 107, 53, 0.25);
          position: relative;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2.5rem;
        }

        .stat-item {
          text-align: center;
          padding: 2.8rem 1.5rem;
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border-radius: 24px;
          border: 2px solid rgba(255, 107, 53, 0.25);
          transition: all 0.5s ease;
          animation: statFadeIn 1s ease-out backwards;
          position: relative;
          overflow: hidden;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.15), transparent);
          transition: left 0.8s ease;
        }

        .stat-item:hover::before {
          left: 100%;
        }

        .stat-item:hover {
          transform: translateY(-15px) scale(1.08);
          border-color: var(--primary-orange);
          box-shadow: 0 28px 55px var(--glow-orange);
        }

        .stat-item:nth-child(1) { animation-delay: 0.1s; }
        .stat-item:nth-child(2) { animation-delay: 0.2s; }
        .stat-item:nth-child(3) { animation-delay: 0.3s; }
        .stat-item:nth-child(4) { animation-delay: 0.4s; }

        @keyframes statFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1.2rem;
          color: var(--primary-orange);
          filter: drop-shadow(0 0 20px var(--glow-orange));
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.2rem, 6vw, 4.5rem);
          color: var(--primary-orange);
          margin-bottom: 0.5rem;
          text-shadow: 0 0 30px var(--glow-orange);
          font-weight: 900;
        }

        .stat-label {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
          letter-spacing: 0.5px;
          margin-bottom: 0.3rem;
        }

        .stat-label-hindi {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        /* Section Styles */
        .section {
          padding: 6rem 1.5rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
          position: relative;
          display: inline-block;
          width: 100%;
        }

        .section-title::after {
          content: '';
          display: block;
          width: 130px;
          height: 5px;
          background: linear-gradient(90deg, transparent, var(--primary-orange), transparent);
          margin: 1.5rem auto 0;
          border-radius: 3px;
          box-shadow: 0 0 25px var(--glow-orange);
        }

        .section-subtitle {
          text-align: center;
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
          font-weight: 500;
        }

        .section-subtitle-hindi {
          text-align: center;
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: rgba(255, 255, 255, 0.75);
          margin-bottom: 4.5rem;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
        }

        .service-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(255, 107, 53, 0.25);
          border-radius: 28px;
          padding: 3rem 2.5rem;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 107, 53, 0.18) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .service-card:hover::before {
          opacity: 1;
          animation: serviceRipple 2s ease-out;
        }

        @keyframes serviceRipple {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 0;
          }
        }

        .service-card:hover {
          transform: translateY(-20px) scale(1.03);
          border-color: var(--primary-orange);
          box-shadow: 0 35px 70px var(--glow-orange);
        }

        .service-icon {
          width: 70px;
          height: 70px;
          color: var(--primary-orange);
          margin-bottom: 2rem;
          filter: drop-shadow(0 0 18px var(--glow-orange));
          transition: all 0.5s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.3) rotate(15deg);
          filter: drop-shadow(0 0 30px var(--glow-orange));
        }

        .service-title {
          font-size: 1.7rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--primary-orange);
          font-family: 'Playfair Display', serif;
        }

        .service-title-hindi {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .service-desc {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .service-features {
          list-style: none;
          padding: 0;
        }

        .service-features li {
          padding: 0.7rem 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.98rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .service-features li::before {
          content: '✓';
          color: var(--accent-green);
          font-weight: bold;
          font-size: 1.4rem;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(0, 102, 255, 0.3);
          border-radius: 28px;
          padding: 2.8rem;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .project-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, var(--primary-orange), var(--accent-blue));
          transform: scaleX(0);
          transition: transform 0.6s ease;
        }

        .project-card:hover::after {
          transform: scaleX(1);
        }

        .project-card:hover {
          transform: translateY(-18px) scale(1.03);
          border-color: var(--accent-blue);
          box-shadow: 0 28px 60px var(--glow-blue);
        }

        .project-image {
          font-size: 5rem;
          margin-bottom: 1.5rem;
          display: block;
          animation: projectFloat 4s ease-in-out infinite;
        }

        @keyframes projectFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        .project-name {
          font-size: 1.7rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: var(--accent-blue);
          font-family: 'Playfair Display', serif;
        }

        .project-name-hindi {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 0.8rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .project-category {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .project-desc-hindi {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.95rem;
          margin-bottom: 1.2rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .project-tech {
          font-size: 0.9rem;
          color: var(--primary-orange);
          background: rgba(255, 107, 53, 0.15);
          padding: 0.5rem 1.3rem;
          border-radius: 25px;
          display: inline-block;
          margin-right: 0.8rem;
          margin-top: 0.8rem;
          border: 1px solid rgba(255, 107, 53, 0.3);
          font-weight: 700;
        }

        .project-result {
          font-size: 0.9rem;
          color: var(--accent-green);
          background: rgba(0, 217, 163, 0.15);
          padding: 0.5rem 1.3rem;
          border-radius: 25px;
          display: inline-block;
          margin-top: 0.8rem;
          border: 1px solid rgba(0, 217, 163, 0.3);
          font-weight: 700;
        }

        /* Why Choose Us */
        .why-choose-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        .why-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(255, 107, 53, 0.25);
          border-radius: 24px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.5s ease;
        }

        .why-card:hover {
          transform: translateY(-12px);
          border-color: var(--primary-orange);
          box-shadow: 0 25px 50px var(--glow-orange);
        }

        .why-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 1.5rem;
          color: var(--primary-orange);
          filter: drop-shadow(0 0 15px var(--glow-orange));
        }

        .why-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-orange);
          margin-bottom: 0.5rem;
        }

        .why-title-hindi {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .why-desc {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1rem;
          line-height: 1.6;
        }

        /* Process Section */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        .process-step {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(255, 107, 53, 0.25);
          border-radius: 28px;
          padding: 2.8rem;
          text-align: center;
          transition: all 0.5s ease;
          position: relative;
        }

        .process-step:hover {
          transform: translateY(-15px);
          border-color: var(--primary-orange);
          box-shadow: 0 28px 55px var(--glow-orange);
        }

        .process-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 1.5rem;
          color: var(--primary-orange);
          filter: drop-shadow(0 0 18px var(--glow-orange));
        }

        .process-number {
          font-family: 'Playfair Display', serif;
          font-size: 3.8rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .process-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--primary-orange);
          margin-bottom: 0.5rem;
          font-family: 'Noto Sans Devanagari', serif;
        }

        .process-title-eng {
          font-size: 1.3rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1rem;
        }

        .process-desc {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1rem;
          line-height: 1.7;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2.5rem;
          margin-top: 3.5rem;
        }

        .testimonial-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(255, 107, 53, 0.25);
          border-radius: 28px;
          padding: 2.8rem;
          transition: all 0.5s ease;
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-15px);
          border-color: var(--primary-orange);
          box-shadow: 0 28px 55px var(--glow-orange);
        }

        .testimonial-rating {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: var(--primary-gold);
          font-size: 1.4rem;
        }

        .testimonial-text {
          color: rgba(255, 255, 255, 0.88);
          font-size: 1.08rem;
          line-height: 1.85;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: 700;
          color: var(--primary-orange);
          font-size: 1.2rem;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .testimonial-author-eng {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 0.3rem;
        }

        .testimonial-company {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.98rem;
          margin-top: 0.5rem;
        }

        /* About Section */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .about-text h3 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: var(--primary-orange);
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .about-text p {
          font-size: 1.18rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.88);
          margin-bottom: 2rem;
        }

        .founder-info {
          margin-top: 2.8rem;
          padding: 2.8rem;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.12), rgba(0, 102, 255, 0.12));
          border-left: 4px solid var(--primary-orange);
          border-radius: 16px;
        }

        .founder-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--primary-orange);
          margin-bottom: 0.5rem;
          font-family: 'Playfair Display', serif;
        }

        .founder-title {
          color: rgba(255, 255, 255, 0.75);
          font-size: 1.2rem;
          margin-bottom: 1.3rem;
          font-weight: 600;
        }

        .founder-description {
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .team-image {
          width: 100%;
          height: 580px;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.28), rgba(0, 102, 255, 0.28));
          border-radius: 28px;
          border: 2px solid rgba(255, 107, 53, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: rgba(255, 255, 255, 0.65);
          position: relative;
          overflow: hidden;
          box-shadow: 0 28px 75px var(--glow-orange);
          transition: all 0.5s ease;
        }

        .team-image:hover {
          transform: scale(1.03);
          box-shadow: 0 35px 85px var(--glow-orange);
        }

        .team-image::before {
          content: '👥';
          font-size: 11rem;
          opacity: 0.28;
          position: absolute;
          animation: teamPulse 4s ease-in-out infinite;
        }

        @keyframes teamPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.18); }
        }

        .team-image-text {
          position: relative;
          z-index: 1;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 2rem;
        }

        /* Contact Section */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
        }

        .contact-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          color: var(--primary-orange);
          margin-bottom: 2.8rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.3rem;
          margin-bottom: 2.2rem;
          font-size: 1.18rem;
          padding: 1.3rem;
          background: rgba(255, 107, 53, 0.1);
          border-radius: 14px;
          border-left: 4px solid var(--primary-orange);
          transition: all 0.4s ease;
        }

        .contact-item:hover {
          transform: translateX(15px);
          background: rgba(255, 107, 53, 0.18);
          box-shadow: 0 10px 30px rgba(255, 107, 53, 0.25);
        }

        .contact-item svg {
          color: var(--primary-orange);
          width: 32px;
          height: 32px;
          flex-shrink: 0;
        }

        .contact-form {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.9));
          border: 2px solid rgba(255, 107, 53, 0.25);
          border-radius: 28px;
          padding: 3.2rem;
          box-shadow: 0 18px 55px rgba(255, 107, 53, 0.18);
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.9rem;
          color: var(--primary-orange);
          font-weight: 700;
          font-size: 1.08rem;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1.2rem 1.4rem;
          background: rgba(15, 23, 42, 0.7);
          border: 2px solid rgba(255, 107, 53, 0.3);
          border-radius: 14px;
          color: #fff;
          font-size: 1.08rem;
          font-family: 'Montserrat', sans-serif;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-orange);
          box-shadow: 0 0 28px var(--glow-orange);
          background: rgba(15, 23, 42, 0.85);
          transform: translateY(-2px);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 150px;
        }

        /* Footer */
        .footer {
          background: var(--darker-navy);
          border-top: 2px solid rgba(255, 107, 53, 0.25);
          padding: 4rem 1.5rem;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 1.08rem;
          margin-bottom: 1rem;
        }

        .footer-love {
          color: var(--accent-pink);
          animation: heartBeat 1.8s ease-in-out infinite;
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        /* Chat Widget */
        .chat-widget {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 1000;
        }

        .chat-toggle {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          border: none;
          color: #fff;
          font-size: 2.2rem;
          cursor: pointer;
          box-shadow: 0 15px 40px var(--glow-orange);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: chatPulse 3s ease-in-out infinite;
        }

        @keyframes chatPulse {
          0%, 100% { box-shadow: 0 15px 40px var(--glow-orange); }
          50% { box-shadow: 0 15px 50px var(--glow-orange), 0 0 0 22px rgba(255, 107, 53, 0.18); }
        }

        .chat-toggle:hover {
          transform: scale(1.25) rotate(15deg);
          box-shadow: 0 20px 55px var(--glow-orange);
        }

        .chat-window {
          position: fixed;
          bottom: 130px;
          right: 2rem;
          width: min(500px, calc(100vw - 2rem));
          height: min(700px, calc(100vh - 170px));
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.98), rgba(15, 23, 42, 0.98));
          border: 2px solid rgba(255, 107, 53, 0.35);
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 28px 75px rgba(0, 0, 0, 0.75);
          animation: chatSlideUp 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          backdrop-filter: blur(25px);
        }

        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(45px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .chat-header {
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          border-radius: 28px 28px 0 0;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px var(--glow-orange);
        }

        .chat-header h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 900;
        }

        .chat-close {
          background: rgba(255, 255, 255, 0.25);
          border: none;
          color: #fff;
          font-size: 1.7rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .chat-close:hover {
          background: rgba(255, 255, 255, 0.35);
          transform: rotate(90deg);
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }

        .chat-messages::-webkit-scrollbar {
          width: 8px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: var(--primary-orange);
          border-radius: 10px;
        }

        .chat-message {
          padding: 1.2rem 1.5rem;
          border-radius: 20px;
          max-width: 85%;
          animation: messageSlide 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          word-wrap: break-word;
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .chat-message.user {
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          color: #fff;
          align-self: flex-end;
          box-shadow: 0 8px 22px var(--glow-orange);
          font-weight: 600;
        }

        .chat-message.assistant {
          background: rgba(30, 41, 59, 0.95);
          color: #fff;
          border: 1px solid rgba(255, 107, 53, 0.25);
          align-self: flex-start;
        }

        .chat-input-container {
          padding: 1.5rem;
          border-top: 2px solid rgba(255, 107, 53, 0.25);
          display: flex;
          gap: 1.2rem;
          background: rgba(30, 41, 59, 0.6);
          border-radius: 0 0 28px 28px;
        }

        .chat-input {
          flex: 1;
          padding: 1.2rem;
          background: rgba(15, 23, 42, 0.85);
          border: 2px solid rgba(255, 107, 53, 0.3);
          border-radius: 16px;
          color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 1.08rem;
          transition: all 0.3s ease;
        }

        .chat-input:focus {
          outline: none;
          border-color: var(--primary-orange);
          box-shadow: 0 0 22px var(--glow-orange);
        }

        .chat-send {
          padding: 1.2rem 2rem;
          background: linear-gradient(135deg, var(--primary-orange), #FF8C42);
          border: none;
          border-radius: 16px;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px var(--glow-orange);
        }

        .chat-send:hover {
          transform: scale(1.15);
          box-shadow: 0 12px 28px var(--glow-orange);
        }

        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: scale(1);
        }

        /* WhatsApp Button */
        .whatsapp-float {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          z-index: 1000;
        }

        .whatsapp-btn {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          color: white;
          font-size: 2.4rem;
          cursor: pointer;
          box-shadow: 0 15px 40px rgba(37, 211, 102, 0.55);
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: whatsappPulse 3s ease-in-out infinite;
        }

        @keyframes whatsappPulse {
          0%, 100% { box-shadow: 0 15px 40px rgba(37, 211, 102, 0.55); }
          50% { box-shadow: 0 15px 50px rgba(37, 211, 102, 0.75), 0 0 0 22px rgba(37, 211, 102, 0.18); }
        }

        .whatsapp-btn:hover {
          transform: scale(1.25) rotate(-15deg);
          box-shadow: 0 20px 55px rgba(37, 211, 102, 0.75);
        }

        /* Loading Animation */
        .loading-dots {
          display: flex;
          gap: 0.7rem;
          align-items: center;
          justify-content: center;
          padding: 0.7rem;
        }

        .loading-dot {
          width: 12px;
          height: 12px;
          background: var(--primary-orange);
          border-radius: 50%;
          animation: dotPulse 1.6s ease-in-out infinite;
        }

        .loading-dot:nth-child(1) { animation-delay: 0s; }
        .loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .loading-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.35); }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(25px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.8rem;
          z-index: 999;
          animation: menuFadeIn 0.5s ease-out;
        }

        @keyframes menuFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-menu a {
          color: #fff;
          text-decoration: none;
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          position: relative;
          text-transform: uppercase;
        }

        .mobile-menu a::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 4px;
          background: var(--primary-orange);
          transition: width 0.3s ease;
        }

        .mobile-menu a:hover {
          color: var(--primary-orange);
          transform: translateX(18px);
        }

        .mobile-menu a:hover::after {
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: block;
          }

          .about-content,
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .team-image {
            height: 420px;
          }

          .services-grid,
          .projects-grid,
          .testimonials-grid,
          .process-grid,
          .why-choose-grid {
            grid-template-columns: 1fr;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .section {
            padding: 4rem 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .hero {
            padding: 7rem 1rem 3rem;
          }

          .hero-badge {
            font-size: 0.82rem;
            padding: 0.6rem 1.4rem;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.15rem;
          }

          .hero-buttons {
            gap: 1rem;
          }

          .btn {
            padding: 1.1rem 2.2rem;
            font-size: 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .chat-window {
            width: calc(100vw - 1rem);
            right: 0.5rem;
            left: 0.5rem;
            bottom: 110px;
            height: calc(100vh - 140px);
          }

          .whatsapp-float {
            left: 1rem;
            bottom: 1.5rem;
          }

          .chat-widget {
            right: 1rem;
            bottom: 1.5rem;
          }

          .whatsapp-btn,
          .chat-toggle {
            width: 65px;
            height: 65px;
            font-size: 1.8rem;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stat-item {
            padding: 2.2rem 1.3rem;
          }

          .service-card,
          .project-card,
          .testimonial-card,
          .process-step,
          .why-card {
            padding: 2.2rem 1.8rem;
          }

          .about-text h3 {
            font-size: 2.4rem;
          }

          .contact-info h3 {
            font-size: 2.4rem;
          }

          .contact-form {
            padding: 2.5rem 2rem;
          }

          .founder-info {
            padding: 2.2rem;
          }
        }

        /* Extra Polish */
        ::selection {
          background: var(--primary-orange);
          color: #fff;
        }

        ::-webkit-scrollbar {
          width: 12px;
        }

        ::-webkit-scrollbar-track {
          background: var(--darker-navy);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, var(--primary-orange), #FF8C42);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #FF8C42, var(--primary-orange));
        }

        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">KESHRITECH</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={20} />
            <span>50+ PROJECTS COMPLETE ✅</span>
          </div>
          <h1 className="hero-title" key={currentTextIndex}>
            {heroTexts[currentTextIndex]}
          </h1>
          <p className="hero-subtitle">
            Best Quality, Affordable Price & On-Time Delivery Guaranteed!
          </p>
          <p className="hero-subtitle-hindi">
            हम बनाते हैं Professional Websites, Apps, Digital Marketing और भी बहुत कुछ! 🚀
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              अभी संपर्क करें <ChevronRight />
            </a>
            <a href="#projects" className="btn btn-secondary">
              Projects देखें <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-label-hindi">{stat.labelHindi}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <h2 className="section-title">HAMARI SERVICES</h2>
        <p className="section-subtitle">
          Complete Digital Solutions for Your Business Growth
        </p>
        <p className="section-subtitle-hindi">
          आपके बिजनेस को बढ़ाने के लिए सभी Digital Services एक जगह! 💼
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-title-hindi">{service.titleHindi}</div>
              <p className="service-desc">{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">HAMARE PROJECTS</h2>
        <p className="section-subtitle">
          Check Out Our Recent Successful Projects
        </p>
        <p className="section-subtitle-hindi">
          देखिए हमारे latest successful projects जो clients को दिए हैं! 🎯
        </p>
        <div className="projects-grid">
          {recentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.image}</div>
              <h3 className="project-name">{project.name}</h3>
              <div className="project-name-hindi">{project.nameHindi}</div>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              <p className="project-desc-hindi">{project.descHindi}</p>
              <span className="project-tech">{project.tech}</span>
              <span className="project-result">{project.result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <h2 className="section-title">HUMEIN KYU CHOOSE KAREIN?</h2>
        <p className="section-subtitle">
          We Are Different From Others - See Why!
        </p>
        <p className="section-subtitle-hindi">
          हम दूसरों से अलग हैं - देखिए कैसे! ⭐
        </p>
        <div className="why-choose-grid">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <div className="why-title-hindi">{item.titleHindi}</div>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <h2 className="section-title">HUMARA PROCESS</h2>
        <p className="section-subtitle">
          Simple 4-Step Process for Your Project
        </p>
        <p className="section-subtitle-hindi">
          सिर्फ 4 steps में हम आपका project complete करते हैं! 📋
        </p>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-icon">{step.icon}</div>
              <div className="process-number">{step.number}</div>
              <h3 className="process-title">{step.title}</h3>
              <div className="process-title-eng">{step.titleEng}</div>
              <p className="process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <h2 className="section-title">CLIENTS KYA KEHTE HAIN</h2>
        <p className="section-subtitle">
          Real Reviews from Our Happy Clients
        </p>
        <p className="section-subtitle-hindi">
          हमारे खुश clients की असली राय सुनिए! 💯
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="testimonial-author-eng">{testimonial.nameEng}</div>
              <div className="testimonial-company">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">HAMARE BAARE MEIN</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>India Ki Best Digital Agency</h3>
            <p>
              KeshriTech Solutions mein hum sirf websites aur apps nahi banate – hum complete digital transformation provide karte hain jo aapke business ko next level pe le jata hai. 50+ successful projects deliver kar chuke hain different industries mein, aur har client 100% satisfied hai!
            </p>
            <p>
              Humara mission hai har business ko digital duniya mein successful banana. Latest technology, creative ideas aur professional team ke saath hum guarantee dete hain best results ka. Affordable prices mein premium quality – yahi hai humare kaam ka USP!
            </p>
            <div className="founder-info">
              <div className="founder-name">Gautam Keshri</div>
              <div className="founder-title">Founder & Lead Developer</div>
              <p className="founder-description">
                Passionate developer aur digital marketing expert jo har project ko apna manta hai. Innovation aur quality pe focus karte hue, Gautam ek talented team ke saath kaam karte hain jo clients ke dreams ko reality banata hai. Experience, dedication aur commitment – yahi hai humari strength!
              </p>
            </div>
          </div>
          <div className="team-image">
            <img src="/hero.jpg" alt="Our Exceptional Team"               className="team-hero" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/team-hero.svg'; }}             />

            <span className="team-image-text"></span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">HUMSE CONTACT KAREIN</h2>
        <p className="section-subtitle">
          Ready to Start Your Project? Let's Talk!
        </p>
        <p className="section-subtitle-hindi">
          आज ही बात करें और शुरू करें अपना dream project! 📞
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Details</h3>
            <div className="contact-item">
              <Phone />
              <span>+91 6203094055</span>
            </div>
            <div className="contact-item">
              <Mail />
              <span>keshrigautam825406@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin />
              <span>Chouparan, Hazaribagh, Jharkhand 825406</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleWhatsAppContact}>
            <div className="form-group">
              <label>Aapka Naam *</label>
              <input type="text" name="name" required placeholder="अपना पूरा नाम लिखें" />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" name="email" required placeholder="your@email.com" />
            </div>
            <div className="form-group">
              <label>Kaun Si Service Chahiye? *</label>
              <select name="service" required>
                <option value="">Service Select Karein</option>
                <option value="Website Development">Website Development</option>
                <option value="App Development">App Development</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Ad Campaigns">Ad Campaigns</option>
                <option value="Video Production">Video Production</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Business Support">Business Support</option>
              </select>
            </div>
            <div className="form-group">
              <label>Apna Message *</label>
              <textarea name="message" required placeholder="अपने project के बारे में detail में बताएं..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              WhatsApp Pe Bhejein <Send />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            &copy; 2026 KeshriTech Solutions. All rights reserved.
          </p>
          <p className="footer-text">
            Made with <span className="footer-love">❤️</span> by Gautam Keshri & Team | India Ki Best Digital Agency 🇮🇳
          </p>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="whatsapp-float">
        <button className="whatsapp-btn" onClick={openWhatsApp} title="WhatsApp Pe Chat Karein" aria-label="WhatsApp Contact">
          💬
        </button>
      </div>

      {/* AI Chat Widget */}
      <div className="chat-widget">
        {!isChatOpen && (
          <button className="chat-toggle" onClick={() => setIsChatOpen(true)} aria-label="AI Chat Open Karein">
            <MessageCircle />
          </button>
        )}

        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <h3>🤖 AI Assistant</h3>
              <button className="chat-close" onClick={() => setIsChatOpen(false)} aria-label="Chat Close Karein">
                <X />
              </button>
            </div>

            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.role}`}>
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="chat-message assistant">
                  <div className="loading-dots">
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                    <div className="loading-dot"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="chat-input-container">
              <input
                type="text"
                className="chat-input"
                placeholder="Kuch bhi puchhiye..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
              />
              <button 
                className="chat-send" 
                onClick={handleSendMessage}
                disabled={isLoading || !userMessage.trim()}
                aria-label="Message Bhejein"
              >
                <Send size={26} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}




