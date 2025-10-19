"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import { Lightbulb, BarChart, Smartphone, Star, Heart, Smile } from "lucide-react";

const assetMap = [
  {"id":"hero-bg","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Pew Nguyen"},
  {"id":"about-image","url":"https://images.pexels.com/photos/6340698/pexels-photo-6340698.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Five people uniting hands indoors, symbolizing teamwork and unity."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Flatlay of a business analytics report, keyboard, pen, and smartphone on a wooden desk."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A person uses a digital tablet with a stylus indoors in a warm, cozy setting."},
  {"id":"testimonials-image","url":"https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Four colleagues smiling and shaking hands in a bright office setting."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Services", id: "services" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="Webild"
            buttonText="Join Now"
            buttonVariant="hover-magnetic"
          />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Webild"
            description="Build modern web experiences effortlessly with our platform."
            imageSrc={assetMap.find(a => a.id === 'hero-bg')?.url}
            buttons={[
              { text: "Get Started", href: "https://example.com" },
              { text: "Learn More", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="Discover our mission and values. We're committed to delivering excellence."
            bulletPoints={[
              { title: "Innovation", description: "Leading with new ideas", icon: Lightbulb },
              { title: "Quality", description: "Striving for the best" }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-image')?.url}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            description="Explore the tools that set us apart."
            features={[
              { title: "Advanced Analytics", description: "Gain insights into your business.", icon: BarChart, button: { text: "Learn More", href: "#" } },
              { title: "Mobile Design", description: "Create responsive layouts effortlessly.", icon: Smartphone, button: { text: "Try Now", href: "#" } }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            title="Customer Reviews"
            description="Hear from our satisfied clients."
            testimonials={[
              { id: "1", name: "Sarah Johnson", role: "CEO", testimonial: "An incredible experience from start to finish.", icon: Star },
              { id: "2", name: "Michael Chen", role: "CTO", testimonial: "A game-changer in our workflow.", imageSrc: assetMap.find(a => a.id === 'testimonials-image')?.url },
              { id: "3", name: "Emily Rodriguez", role: "Marketing Director", testimonial: "Absolutely loved the user interface.", icon: Heart },
              { id: "4", name: "David Kim", role: "Product Manager", testimonial: "Highly recommended for any business.", icon: Smile }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for weekly updates."
            onSubmit={console.log}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
