import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const newsletterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  ministry: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for newsletter signup
  app.post("/api/newsletter", async (req, res) => {
    try {
      // Validate request body
      const validatedData = newsletterSchema.parse(req.body);
      
      // Store subscriber in our database
      const subscriber = await storage.createSubscriber(validatedData);
      
      // Return success response
      res.status(200).json({
        message: "Successfully subscribed to the newsletter",
        subscriber,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        message: "Failed to subscribe to the newsletter" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
