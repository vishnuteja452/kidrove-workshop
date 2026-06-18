import express, { Request, Response } from 'express';
import cors from 'cors';
import { z } from 'zod';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits")
});

app.post('/api/enquiry', (req: Request, res: Response) => {
  try {
    const validatedData = enquirySchema.parse(req.body);
    
    // Simulate processing time
    setTimeout(() => {
      res.status(200).json({
        success: true,
        message: 'Registration successful!',
        data: validatedData
      });
    }, 1000);

  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Internal server error'
      });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
