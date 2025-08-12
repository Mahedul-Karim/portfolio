import React from "react";
import SectionTitle from "./common/SectionTitle";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "karimrupo21@gmail.com",
    color: "text-secondary",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801309645377",
    color: "text-secondary",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+8801309645377",
    color: "text-secondary",
  },
];

const Contact = () => {
  return (
    <section id="section-contact" className="l-container py-8 md:py-16">
      <SectionTitle text="Get In Touch" highlight="Touch" />

      <div className="mt-4">
        <div className="max-w-lg mx-auto">
          <Card className="bg-glass border-border shadow-none">
            <CardContent className="px-4 xs:px-6">
              <div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-lg bg-glass border-border border"
                        >
                          <div
                            className={`p-3 rounded-full bg-zinc-600  shadow-sm ${contact.color}`}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-400">
                              {contact.label}
                            </p>
                            <p className="text-white font-medium group-hover:underline">
                              {contact.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
