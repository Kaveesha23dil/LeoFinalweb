export const contactInfo = {
  address: {
    title: "Visit Us",
    lines: [
      "Leo Club of SLTC",
      "Sri Lanka Technological Campus",
      "Uva Wellassa University Premises",
      "Padukka, Sri Lanka"
    ],
    coordinates: {
      lat: 6.8402,
      lng: 80.0990
    }
  },
  phone: {
    title: "Call Us",
    numbers: [
      {
        label: "Main Office",
        number: "+94 11 234 5678",
        available: "Mon - Fri, 9:00 AM - 5:00 PM"
      },
      {
        label: "Emergency",
        number: "+94 77 123 4567",
        available: "24/7"
      }
    ]
  },
  email: {
    title: "Email Us",
    addresses: [
      {
        label: "General Inquiries",
        email: "info@leosltc.org"
      },
      {
        label: "President",
        email: "president@leosltc.org"
      },
      {
        label: "Projects & Events",
        email: "projects@leosltc.org"
      },
      {
        label: "Membership",
        email: "membership@leosltc.org"
      }
    ]
  },
  socialMedia: [
    {
      name: "Facebook",
      url: "https://facebook.com/leosltc",
      icon: "facebook",
      color: "text-blue-500"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/leosltc",
      icon: "instagram",
      color: "text-pink-500"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/leosltc",
      icon: "twitter",
      color: "text-blue-400"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/company/leosltc",
      icon: "linkedin",
      color: "text-blue-600"
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@leosltc",
      icon: "youtube",
      color: "text-red-500"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/94771234567",
      icon: "whatsapp",
      color: "text-green-500"
    }
  ],
  workingHours: [
    {
      day: "Monday - Friday",
      hours: "9:00 AM - 5:00 PM"
    },
    {
      day: "Saturday",
      hours: "10:00 AM - 2:00 PM"
    },
    {
      day: "Sunday",
      hours: "Closed"
    }
  ]
};

export const contactFormFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    placeholder: "Enter your first name"
  },
  {
    name: "lastName",
    label: "Last Name", 
    type: "text",
    required: true,
    placeholder: "Enter your last name"
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "Enter your email address"
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: false,
    placeholder: "Enter your phone number (optional)"
  },
  {
    name: "subject",
    label: "Subject",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select a subject" },
      { value: "membership", label: "Membership Inquiry" },
      { value: "volunteer", label: "Volunteer Opportunities" },
      { value: "partnership", label: "Partnership & Collaboration" },
      { value: "events", label: "Events & Programs" },
      { value: "donation", label: "Donations & Sponsorship" },
      { value: "media", label: "Media & Press" },
      { value: "general", label: "General Inquiry" },
      { value: "other", label: "Other" }
    ]
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    placeholder: "Tell us how we can help you..."
  }
];