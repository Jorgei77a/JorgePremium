import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface NewsletterFormData {
  name: string;
  email: string;
  ministry?: string;
}

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    defaultValues: {
      name: "",
      email: "",
      ministry: "",
    }
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/newsletter", data);
      toast({
        title: "Success!",
        description: "You've been subscribed to the newsletter. Check your email for the free guide.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 bg-primary text-secondary" ref={ref}>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-sf-pro-display">
              Weekly AI Wisdom<br />Delivered to Your Inbox
            </h2>
            
            <p className="text-lg md:text-xl text-secondary/80">
              Stay sharp and Spirit-led with Jorge's 90-second AI tips for ministry and business.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start">
                <div className="text-accent mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>"5 Easy Wins with AI" Free PDF</p>
              </div>
              <div className="flex items-start">
                <div className="text-accent mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>Weekly practical tips</p>
              </div>
              <div className="flex items-start">
                <div className="text-accent mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p>No fluff, no overwhelm</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 bg-secondary/10 p-8 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  {...register("name", { required: "Name is required" })}
                  id="name" 
                  className="w-full px-4 py-3 rounded-md bg-secondary/5 border border-secondary/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-secondary" 
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-md bg-secondary/5 border border-secondary/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-secondary" 
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="ministry" className="block text-sm font-medium mb-2">Ministry/Business Type (Optional)</label>
                <select 
                  {...register("ministry")}
                  id="ministry" 
                  className="w-full px-4 py-3 rounded-md bg-secondary/5 border border-secondary/20 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-secondary"
                >
                  <option value="">Select an option</option>
                  <option value="church">Church Leadership</option>
                  <option value="nonprofit">Non-Profit</option>
                  <option value="education">Education</option>
                  <option value="business">Faith-Based Business</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mt-6">
                <button 
                  type="submit" 
                  className="w-full bg-accent text-white text-lg px-6 py-3 rounded-md font-sf-pro-display hover:bg-accent/90 transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      Subscribe & Get the Guide
                    </span>
                  )}
                </button>
              </div>
              
              <p className="text-xs text-secondary/60 mt-4 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
