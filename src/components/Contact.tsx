import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "We'll get back to you within 24 hours."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  return <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
            Get In Touch
          </div>
          <h2 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
            Let's Bring Your <span className="gradient-accent bg-clip-text text-transparent text-5xl">Vision</span> to Life
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Ready to start your next project? Fill out the form below or reach out directly
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input id="name" value={formData.name} onChange={e => setFormData({
                ...formData,
                name: e.target.value
              })} placeholder="Your full name" required className="mt-2 bg-background/50" />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={e => setFormData({
                ...formData,
                email: e.target.value
              })} placeholder="your.email@example.com" required className="mt-2 bg-background/50" />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea id="message" value={formData.message} onChange={e => setFormData({
                ...formData,
                message: e.target.value
              })} placeholder="Tell us about your project..." rows={5} required className="mt-2 bg-background/50" />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-500 font-bold shadow-glow hover:shadow-glow-accent transition-all duration-300">
                Request Quote
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">084 090 7869</p>
                </div>
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/10 p-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground">splash2711@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-yellow/10 p-3">
                  <MapPin className="h-6 w-6 text-yellow" />
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Durban, South Africa</p>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>;
};