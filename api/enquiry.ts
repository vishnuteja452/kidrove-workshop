import type { VercelRequest, VercelResponse } from '@vercel/node';

interface EnquiryBody {
  name?: string;
  email?: string;
  phone?: string;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, phone } = req.body as EnquiryBody;

  // Validate required fields
  const errors: string[] = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Invalid email address');
  }

  if (!phone || typeof phone !== 'string' || phone.replace(/\D/g, '').length < 10) {
    errors.push('Phone number must be at least 10 digits');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors
    });
  }

  // Success response
  return res.status(200).json({
    success: true,
    message: 'Registration successful! We will contact you shortly.',
    data: { name: name!.trim(), email: email!.trim(), phone: phone!.trim() }
  });
}
