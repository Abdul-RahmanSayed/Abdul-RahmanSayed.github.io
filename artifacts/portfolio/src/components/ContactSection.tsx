import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';

const FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() ||
  'https://formsubmit.co/ajax/abdulsayed9@gmail.com';
const REQUEST_TIMEOUT_MS = 15000;

type FormStatus = {
  state: 'idle' | 'submitting' | 'success' | 'error';
  message: string;
};

export function ContactSection() {
  const [formStatus, setFormStatus] = React.useState<FormStatus>({
    state: 'idle',
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const honey = String(formData.get('_honey') ?? '');

    if (!name || !email || !message) {
      setFormStatus({
        state: 'error',
        message: 'Please complete all fields before sending your message.',
      });
      return;
    }

    setFormStatus({ state: 'submitting', message: 'Sending your message...' });

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio message from ${name}`,
          _template: 'table',
          _honey: honey,
          _url: window.location.href,
        }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => null) as {
        success?: boolean | string;
      } | null;
      const providerRejected = result?.success === false || result?.success === 'false';

      if (!response.ok || providerRejected) {
        throw new Error('Form provider rejected the submission.');
      }

      form.reset();
      setFormStatus({
        state: 'success',
        message: 'Thanks! Your message was submitted successfully.',
      });
    } catch (error) {
      const timedOut = error instanceof DOMException && error.name === 'AbortError';

      setFormStatus({
        state: 'error',
        message: timedOut
          ? 'The request timed out. Please try again.'
          : 'Your message could not be sent. Please try again or email me directly.',
      });
    } finally {
      window.clearTimeout(timeoutId);
    }
  };

  const isSubmitting = formStatus.state === 'submitting';

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hello, my inbox is always open.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <a href="mailto:abdulsayed9@gmail.com" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-email">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">Email</span>
          </a>
          
          <a href="https://linkedin.com/in/abdul-sayed-84643513a/" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-linkedin">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">LinkedIn</span>
          </a>

          <a href="https://github.com/Abdul-RahmanSayed" target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-colors group" data-testid="contact-card-github">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6" />
            </div>
            <span className="font-medium text-foreground">GitHub</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card border border-border rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-left"
        >
          <form className="space-y-6" onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                type="text"
                id="contact-company"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
              <textarea 
                id="message" 
                name="message"
                rows={5}
                required
                maxLength={3000}
                disabled={isSubmitting}
                className="w-full bg-background border border-border rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                placeholder="Hello, I'd like to talk about..."
                data-testid="input-message"
              ></textarea>
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-white" size="lg" data-testid="button-submit-contact">
              {isSubmitting ? (
                <>
                  Sending Message <Loader2 className="ml-2 w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
            {formStatus.state !== 'idle' && (
              <div
                className={`flex items-center justify-center gap-2 text-sm text-center ${
                  formStatus.state === 'success'
                    ? 'text-secondary'
                    : formStatus.state === 'error'
                      ? 'text-destructive'
                      : 'text-muted-foreground'
                }`}
                role={formStatus.state === 'error' ? 'alert' : 'status'}
                aria-live="polite"
                data-testid="contact-form-status"
              >
                {formStatus.state === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                {formStatus.state === 'error' && <AlertCircle className="w-4 h-4 shrink-0" />}
                {formStatus.state === 'submitting' && <Loader2 className="w-4 h-4 shrink-0 animate-spin" />}
                <p>
                  {formStatus.message}
                  {formStatus.state === 'error' && (
                    <>
                      {' '}
                      <a href="mailto:abdulsayed9@gmail.com" className="underline hover:text-foreground">
                        Email Abdul-Rahman directly
                      </a>
                      .
                    </>
                  )}
                </p>
              </div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
