import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Heart, 
  Users, 
  Shield, 
  Music, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ChevronRight,
  MapPin,
  Quote,
  Star
} from "lucide-react";

// Import school images
import schoolBuilding from "@/assets/school-building.jpg";
import schoolChildren from "@/assets/school-children-playing.jpg";
import schoolSignboard from "@/assets/school-signboard.jpg";
import schoolLaboratory from "@/assets/school-laboratory.jpg";
import schoolClassrooms from "@/assets/school-classrooms.jpg";
import { SEO } from "@/components/SEO";

// School sections data
const academicSections = [
  {
    title: "Early Childhood Education (E.C.E)",
    description: "Our E.C.E program provides a nurturing foundation for young learners aged 3-6 years. Through play-based learning, we develop cognitive, social, and motor skills while introducing Christian values that shape character from an early age.",
    features: ["Play-based learning", "Character development", "Basic literacy & numeracy", "Creative activities"],
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Primary School",
    description: "Our primary section offers comprehensive education from Grade 1-6, combining the national curriculum with Christian education. We follow the Competency-Based Education (CBE) approach, focusing on academic excellence, discipline, and developing well-rounded individuals ready for the next level.",
    features: ["Competency-Based Education (CBE)", "Christian Religious Education", "Co-curricular activities", "Life skills development"],
    icon: BookOpen,
    color: "from-primary to-blue-600"
  },
  {
    title: "Junior Secondary School (JSS)",
    description: "Our Junior Secondary program (Grade 7-9) prepares students for senior secondary education with a focus on competency-based learning. We emphasize critical thinking, practical skills, and spiritual growth.",
    features: ["Competency-Based Curriculum", "Science & Technology focus", "Career guidance", "Leadership development"],
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-500"
  }
];

const whyChooseUs = [
  {
    icon: Heart,
    title: "Christian Values & Spiritual Growth",
    description: "We integrate faith into daily learning, nurturing students spiritually through devotions, chapel services, and Christian teaching."
  },
  {
    icon: Users,
    title: "Qualified & Caring Teachers",
    description: "Our dedicated staff are professionally trained and passionate about nurturing each child's potential in a loving environment."
  },
  {
    icon: Shield,
    title: "Safe & Supportive Environment",
    description: "We provide a secure learning space where children feel valued, protected, and encouraged to excel."
  },
  {
    icon: Music,
    title: "Co-curricular Activities",
    description: "From sports and music to drama and clubs, we develop the whole child through diverse extracurricular programs."
  },
  {
    icon: BookOpen,
    title: "Academic Excellence",
    description: "Our track record of strong academic performance prepares students for success at every educational level."
  },
  {
    icon: GraduationCap,
    title: "Church-School Partnership",
    description: "The close relationship between our church and school creates a unified community focused on children's holistic development."
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Proximity to the CBD makes it much easier and more convenient for parents to get to their children."
  }
];

const admissionDocuments = [
  "Birth certificate (original and copy)",
  "Previous school reports/transcripts",
  "Transfer letter (for transfer students)",
  "Passport photos (4 copies)",
  "Medical records/immunization certificate",
  "Parent/Guardian ID copy"
];

const galleryImages = [
  { src: schoolBuilding, alt: "PCEA St. Ninians School main building" },
  { src: schoolChildren, alt: "Students playing in the school compound" },
  { src: schoolSignboard, alt: "PCEA St. Ninians School signboard" },
  { src: schoolLaboratory, alt: "Science laboratory" },
  { src: schoolClassrooms, alt: "Modern classroom building" }
];

const testimonials = [
  {
    name: "Victor Kiptoo",
    role: "Proud Alumni, Class of 2013",
    quote: "This school gave me a platform to become whom I am today. Special thanks to Madam Jane, Mr. Solomon Ngatia and all the other teachers.",
    initials: "VK"
  },
  {
    name: "Bernard Nyaribo",
    role: "Parent",
    quote: "This school gave my last born girl a good foundation. She is doing her KCSE this year from Bunyore Girls. I strongly recommend.",
    initials: "BN"
  },
  {
    name: "Dennis Kiratu",
    role: "Parent",
    quote: "I am a parent at PCEA St. Ninian's School Nakuru and have maintained my children there because of their excellent performance, arising from the Head Teacher's good guidance, teachers' hard work, commitment to duty and conducive learning environment.",
    initials: "DK"
  }
];

export default function School() {
  return (
    <Layout>
      <SEO title="PCEA St. Ninians Christian School Nakuru | Education is the Way to Go" description="Quality Christian education at PCEA St. Ninians Christian School Nakuru. Motto: Education is the way to go. Call 0721 514 531 or 0769 888 262." path="/school" />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={schoolBuilding}
            alt="PCEA St. Ninians Christian School main building"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))]/90 via-[hsl(var(--navy))]/70 to-[hsl(var(--navy))]/50" />
        </div>
        
        <div className="container-church relative z-10 text-center text-white py-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-up">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Christian Education in Nakuru</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up animation-delay-100">
            PCEA St. Ninians<br />
            <span className="text-accent">Christian School</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 animate-fade-up animation-delay-200">
            Nurturing young minds through Christian values, academic excellence, and holistic growth. 
            Offering Early Childhood Education, Primary School, and Junior Secondary School programs.
          </p>

          <div className="inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm border border-accent/40 px-6 py-3 rounded-full mb-8 animate-fade-up animation-delay-200">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Motto</span>
            <span className="w-px h-4 bg-white/40" />
            <span className="text-white font-serif italic text-base md:text-lg">"Education is the way to go"</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-300">
            <a href="#admissions">
              <Button variant="cta" size="lg" className="gap-2">
                <GraduationCap className="w-5 h-5" />
                Admissions
              </Button>
            </a>
            <a href="#contact-school">
              <Button variant="hero" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Contact School
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Our School</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Building Future Leaders Through Faith & Education
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PCEA St. Ninians Christian School is a ministry of PCEA St. Ninians Millimani Parish, 
                  dedicated to providing quality Christian education in Nakuru. Our school serves as 
                  a beacon of academic excellence and spiritual formation in the community.
                </p>
                <p>
                  We offer comprehensive education from Early Childhood Education (E.C.E) through 
                  Primary School to Junior Secondary School (JSS), ensuring continuity in learning 
                  and character development. Our curriculum integrates faith with academics, 
                  preparing students not just for examinations, but for life.
                </p>
                <p>
                  At St. Ninians, we believe every child is uniquely gifted by God. Our mission is 
                  to discover, nurture, and develop these gifts while instilling Christian values 
                  that will guide them throughout their lives.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">E.C.E</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Primary</span>
                </div>
                <div className="flex items-center gap-2 text-foreground">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Junior Secondary</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up animation-delay-200">
              <img
                src={schoolChildren}
                alt="Students playing at PCEA St. Ninians Christian School"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our School */}
      <section className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Choose PCEA St. Ninians Christian School?
            </h2>
            <p className="text-muted-foreground">
              We provide an environment where children thrive academically, spiritually, and socially. 
              Here's what sets us apart as a leading Christian School in Nakuru.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Sections */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Programs</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Academic Sections
            </h2>
            <p className="text-muted-foreground">
              From early childhood through junior secondary, we offer comprehensive education 
              that prepares students for success at every stage.
            </p>
          </div>
          
          <div className="space-y-8">
            {academicSections.map((section, index) => (
              <div
                key={section.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""} animate-fade-up`}>
                  <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${section.color} text-white px-4 py-2 rounded-full mb-4`}>
                    <section.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{section.title.split(" ")[0]}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{section.description}</p>
                  <ul className="space-y-3">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""} animate-fade-up animation-delay-200`}>
                  <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${section.color} p-1`}>
                    <img
                      src={index === 0 ? schoolChildren : index === 1 ? schoolClassrooms : schoolLaboratory}
                      alt={section.title}
                      className="w-full h-64 md:h-80 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section id="admissions" className="section-padding bg-primary text-primary-foreground">
        <div className="container-church">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">Admissions</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-6">
                Join Our School Family
              </h2>
              <p className="text-white/90 mb-6">
                We welcome applications for all levels throughout the year. Our admissions process 
                is designed to be simple and straightforward, ensuring every family can access 
                quality Christian education.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    Who Can Apply?
                  </h3>
                  <p className="text-white/80 ml-7">
                    Children aged 3 years and above for E.C.E, and transfer students at all levels. 
                    We accept students from all backgrounds who are ready to learn in a Christian environment.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-accent" />
                    How to Apply
                  </h3>
                  <ol className="text-white/80 ml-7 space-y-1 list-decimal list-inside">
                    <li>Visit our school office during working hours</li>
                    <li>Complete the admission application form</li>
                    <li>Submit required documents</li>
                    <li>Pay the admission fee</li>
                    <li>Receive confirmation and reporting date</li>
                  </ol>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 animate-fade-up animation-delay-200">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                Required Documents
              </h3>
              <ul className="space-y-3">
                {admissionDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{doc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-4">
                  For more information about admissions, please contact our school office.
                </p>
                <a href="#contact-school">
                  <Button variant="cta" className="w-full">
                    Contact Admissions Office
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">School Life</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              School Gallery
            </h2>
            <p className="text-muted-foreground">
              Glimpses of life at PCEA St. Ninians Christian School – learning, worship, 
              sports, and memorable moments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy))]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-church">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Parents & Alumni Say
            </h2>
            <p className="text-muted-foreground">
              Real voices from our school community sharing their experiences with PCEA St. Ninians Christian School.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <article
                key={t.name}
                className="relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-up border border-border/50 flex flex-col"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" aria-hidden="true" />

                <div className="flex items-center gap-1 mb-4" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-foreground/90 leading-relaxed flex-grow mb-6">
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact School Section */}
      <section id="contact-school" className="section-padding bg-secondary/30">
        <div className="container-church">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Contact the School
              </h2>
              <p className="text-muted-foreground">
                Have questions about admissions or our programs? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-soft text-center animate-fade-up">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-2">Call our school office</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+254721514531" className="text-primary font-medium hover:underline">
                    0721 514 531
                  </a>
                  <a href="tel:+254769888262" className="text-primary font-medium hover:underline">
                    0769 888 262
                  </a>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft text-center animate-fade-up animation-delay-100">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-2">Send us an email</p>
                <a href="mailto:school@stNinians.org" className="text-primary font-medium hover:underline">
                  school@stNinians.org
                </a>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft text-center animate-fade-up animation-delay-200">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Office Hours</h3>
                <p className="text-muted-foreground text-sm mb-2">Visit us during</p>
                <p className="text-primary font-medium">Mon - Fri: 7:30 AM - 4:30 PM</p>
              </div>
              
              <a 
                href="https://www.google.com/maps/place/pcea+st+ninians+church/@-0.2810133,36.0625067,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIDk85_PZQ!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgps-cs-s%2FAHVAweqXxTx5KbYvG366AZiydzc9ez6nM3hBWT9UDgPOtZorpGSsA1-CardcPYz7ta-bPCTi5KNTrk4Tv19ttyQelsRpediBqTCjz07-DgjpDrPrcQxYSII3piWoXLxRvrGU1ugOlSI%3Dw186-h86-k-no!7i4608!8i2128!4m16!1m8!3m7!1s0x18298da34d9df0c7:0xcde904eb7b8e83a6!2spcea+st+ninians+church!8m2!3d-0.2808719!4d36.0628028!10e1!16s%2Fg%2F1tcthvwg!3m6!1s0x18298da34d9df0c7:0xcde904eb7b8e83a6!8m2!3d-0.2808719!4d36.0628028!10e5!16s%2Fg%2F1tcthvwg?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card p-6 rounded-xl shadow-soft text-center animate-fade-up animation-delay-300 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm mb-2">Find us on Google Maps</p>
                <p className="text-primary font-medium">View on Map →</p>
              </a>
            </div>
            
            <div className="mt-12 text-center animate-fade-up animation-delay-300">
              <p className="text-muted-foreground mb-4">
                Visit us at PCEA St. Ninians Church compound, Millimani, Nakuru
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  View Church Location
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block */}
      <section className="py-12 bg-muted/30">
        <div className="container-church">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Quality Christian Education in Nakuru
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              PCEA St. Ninians Christian School is a leading Primary School in Nakuru and 
              Junior Secondary School in Nakuru, offering quality education rooted in Christian values. 
              As one of the best Christian Schools in Nakuru, we provide Early Childhood Education, 
              Primary, and JSS programs. Our school in Millimani, Nakuru combines academic excellence 
              with spiritual formation, making us a top choice for parents seeking holistic education 
              for their children in Nakuru County.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
