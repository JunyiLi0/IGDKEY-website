# EmailJS Setup Guide

This guide will help you configure EmailJS to receive contact form submissions from your website.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. You'll get 200 emails/month on the free tier

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail is recommended)
4. Follow the authentication steps for your email provider
5. Note down the **Service ID**

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template:

**Template Name:** Contact Form
**Subject:** New Contact Form Submission from {{name}}

**Content:**
```
You have received a new message from your website contact form.

From: {{name}}
Email: {{email}}

Message:
{{message}}

---
This email was sent from your website contact form.
```

4. Set **To Email** to: `junyi4000@gmail.com`
5. Note down the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it

## Step 5: Configure in Your Project

1. Create a `.env` file in the root directory of your project
2. Add the following variables:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id_here
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs from EmailJS.

## Step 6: Test Locally

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your email at `junyi4000@gmail.com`

## Deployment Notes

**For GitHub Pages:** GitHub Pages doesn't support environment variables. You have two options:

1. **Hardcode the values** in your code (not recommended for security)
2. **Use Vercel** instead, which fully supports environment variables

To deploy on Vercel:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Add the environment variables in the Vercel dashboard
4. Deploy

## Troubleshooting

- If emails aren't arriving, check the EmailJS logs in your dashboard
- Make sure Gmail OAuth is properly configured if using Gmail
- Verify that the `.env` file is in the root directory
- Restart your dev server after creating/modifying `.env`

## Need Help?

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Support](https://www.emailjs.com/support/)

