import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  // Example: handle contact form submission
  const { name, email, message } = req.body;
  // Here you would typically save to DB or send an email
  res.json({ success: true, message: 'Contact form received', data: { name, email, message } });
});

export default router;
