// Website Data Configuration
// This file contains all the configurable data for the DevFest Bhopal 2025 website
// Edit this file to update event details, speakers, content, etc.

const websiteData = {
  "event": {
    "name": "DevFest Bhopal 2025",
    "date": "November 30, 2025",
    "venue": "Courtyard by Marriott, Bhopal",
    "venueAddress": "Bhopal, India",
    "venueMapUrl": "https://www.google.com/maps/place/Courtyard+by+Marriott+Bhopal/@23.2326746,77.4299369,417m/data=!3m2!1e3!5s0x397c4267483078c3:0xd5e54ffe1575b512!4m9!3m8!1s0x397c4260c8051079:0xa455a4bc62fc4ac2!5m2!4m1!1i2!8m2!3d23.2329088!4d77.4294844!16s%2Fg%2F1tzzsxvw?entry=ttu&g_ep=EgoyMDI1MTEwMi4wIKXMDSoASAFQAw%3D%3D"
  },
  "site": {
    "title": "DevFest Bhopal 2025",
    "logo": {
      "light": "logo.png",
      "text": "GDG Bhopal"
    },
    "mainCta": {
      "text": "Get Tickets",
      "url": "tickets.html"
    },
    "chapterPageUrl": "https://gdg.community.dev/gdg-bhopal/"
  },
  "navigation": [
    { "text": "Home", "url": "index.html" },
    { 
      "text": "About", 
      "submenu": [
        { "text": "About DevFest", "url": "index.html#about" },
        { "text": "Organizers", "url": "index.html#speakers" },
        { "text": "Past Events", "url": "index.html#past-events" },
        { "text": "FAQ", "url": "index.html#faq" }
      ]
    },
    { "text": "Team", "url": "team.html" },
    { "text": "Call for Speakers", "url": "call-for-speakers.html" },
    { "text": "Call for Sponsors", "url": "call-for-sponsors.html" },
    { "text": "Partners", "url": "partners.html" },
  ],
  "hero": {
    "title": "DevFest Bhopal 2025",
    "subtitle": "Join Central India's premier developer festival! Connect with hundreds of developers, designers, and tech enthusiasts for a day of learning, building, and celebrating innovation."
  },
  "about": {
    "title": "Why DevFest?",
    "paragraph1": "DevFest is the world's largest community-driven tech conference, bringing together 800K+ developers across 565+ events in 85+ countries. Experience cutting-edge technologies, inspiring talks, and hands-on workshops led by industry experts and Google Developer Experts.",
    "paragraph2": "Whether you're building your first app or architecting enterprise solutions, DevFest offers something transformative for every developer. Join us to explore emerging technologies like AI/ML, discover best practices in modern development, and connect with Central India's most vibrant tech community."
  },
  "speakers": {
  "title": "Meet The Organizers",
  "list": [
    {
      "name": "Shivam Mishra",
      "title": "GDG Bhopal Organizer",
      "company": "Sansys Informatics",
      "bio": "Passionate volunteer coordinator ensuring smooth event operations and community engagement.",
      "imageUrl": "team image/shivam.png",
      "linkedin": "https://www.linkedin.com/in/shivammishra-styx/",
      "twitter": "#"
    },
    {
      "name": "Atharva Kulkarni",
      "title": "GDG Bhopal Organizer",
      "company": "Vitraya Technologies",
      "bio": "Loves to solve problems by making products and solutions.",
      "imageUrl": "team image/Atharva.jpeg",
      "linkedin": "https://www.linkedin.com/in/atharvakulkarni/",
      "twitter": "#"
    },
    {
      "name": "Aditya Shah",
      "title": "GDG Cloud Bhopal Organizer",
      "company": "WPMUDEV",
      "bio": "Passionate about building inclusive tech communities and empowering developers with cloud technologies.",
      "imageUrl": "https://2.gravatar.com/avatar/781518e3519e07fbdd10503b45b6d203f3fd92de8c9fffd58a4e099069cb3d79?size=512&d=initials",
      "linkedin": "https://www.linkedin.com/in/ethicaladitya/",
      "twitter": "#"
    },
    {
      "name": "Mayur Rathi",
      "title": "GDG Cloud Co-Organizer",
      "company": "Capgemini",
      "bio": "Experienced software engineer with a passion for cloud architecture and developer community engagement.",
      "imageUrl": "https://pbs.twimg.com/profile_images/1378894474718351362/vuLAZU4a_400x400.jpg",
      "linkedin": "https://www.linkedin.com/in/mayurrathi26/",
      "twitter": "#"
    }
  ]
},

  "pastEvents": {
    "title": "From Our Community Archives",
    "cta": {
      "text": "Explore All Events",
      "url": "https://gdg.community.dev/gdg-cloud-bhopal/"
    },
    "events": [
      { "title": "AI Day Bhopal", "description": "A deep dive into the world of Artificial Intelligence with hands-on workshops and expert talks." },
      { "title": "Devfest Bhopal", "description": "Our annual celebration of technology, learning, and community, featuring multiple tracks and speakers." },
      { "title": "Build with AI", "description": "A hands-on workshop focused on building real-world applications using Google's generative AI tools." }
    ]
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "items": [
      {
        "question": "What is DevFest?",
        "answer": "DevFest is the world's largest community-driven tech conference organized by Google Developer Groups (GDGs). It features interactive sessions, workshops, and expert-led discussions on cutting-edge technologies like AI/ML, Android, Web, Cloud, and more."
      },
      {
        "question": "Who can attend DevFest Bhopal?",
        "answer": "Anyone passionate about technology! Whether you're a student, professional developer, designer, startup founder, or tech enthusiast, DevFest welcomes all skill levels. Our content is designed to provide value for beginners to experts."
      },
      {
        "question": "Is there a cost to attend?",
        "answer": "DevFest Bhopal has minimal registration fees to ensure committed attendance and help us deliver a world-class experience. Check the tickets page for current pricing and early-bird offers."
      },
      {
        "question": "What can I expect at DevFest Bhopal?",
        "answer": "Expect technical sessions by Google Developer Experts, hands-on workshops, networking opportunities, swag, food, and a chance to connect with Central India's most innovative developers and tech leaders."
      },
      {
        "question": "Will there be hands-on workshops?",
        "answer": "Yes! DevFest features interactive workshops covering various Google technologies. Bring your laptop and get ready to build, learn, and experiment with cutting-edge tools and frameworks."
      }
    ]
  },
  "testimonials": {
    "title": "What Developers Say About DevFest",
    "items": [
      {
        "quote": "DevFest is a fantastic opportunity to meet amazing developers and discover the latest in Google technologies. The energy and learning opportunities are unmatched.",
        "author": "Barry Pollard",
        "title": "Web Performance Developer Advocate, Google",
        "avatar": "https://developers.google.com/static/community/devfest/images/pollard.png"
      },
      {
        "quote": "DevFest showcases awesome new features for building solutions on Google platforms. It's the perfect place to learn about cutting-edge developer tools.",
        "author": "Chanel Greco", 
        "title": "Google Workspace Developer Advocate",
        "avatar": "https://developers.google.com/static/community/devfest/images/greco.png"
      },
      {
        "quote": "An amazing way to learn about the best developer tools Google offers and connect with fellow professionals. The community spirit is incredible.",
        "author": "Prakhar Srivastav",
        "title": "Software Engineer",
        "avatar": "https://developers.google.com/static/community/devfest/images/srivastav.png"
      }
    ]
  },
  "conduct": {
    "title": "Our Commitment to a Safe Community",
    "codeOfConduct": {
      "title": "Code of Conduct",
      "text": "We are dedicated to providing a harassment-free event experience for everyone. We do not tolerate harassment of participants in any form. All communication should be appropriate for a professional audience. Be kind to others. Behave professionally.",
      "link": { "text": "Read the full policy", "url": "#" }
    },
    "communityGuidelines": {
      "title": "Community Guidelines",
      "text": "Our community is an open, respectful, and inclusive environment. We expect all participants to be considerate of fellow attendees, speakers, and staff. Engage in constructive discussions and help us create a welcoming space for all.",
      "link": { "text": "Learn more", "url": "#" }
    }
  },
  "footer": {
    "quickLinks": [
      { "text": "About", "url": "#about" },
      { "text": "Speakers", "url": "#speakers" },
      { "text": "Team", "url": "team.html" },
      { "text": "FAQ", "url": "#faq" }
    ],
    "communityLinks": [
      { "text": "Code of Conduct", "url": "#conduct" },
      { "text": "Community Guidelines", "url": "#conduct" },
      { "text": "Become a Member", "url": "https://gdg.community.dev/gdg-cloud-bhopal/" }
    ],
    "socials": [
        { "name": "Twitter", "url": "https://www.twitter.com/BhopalCoders", "iconPath": "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" },
        { "name": "LinkedIn", "url": "https://www.linkedin.com/company/gdgbhopal", "iconPath": "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
        { "name": "Instagram", "url": "https://www.instagram.com/gdgbhopal", "iconPath": "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
        { "name": "Website", "url": "https://gdgbhopal.com/", "iconPath": "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }
    ],
  "copyright": "Made with ❤️ by GDG Bhopal"
  },
  "team": {
    "organizers": [
      {
        "name": "Aditya Shah",
        "role": "GDG Organizer & Lead",
        "company": "Incsub LLC",
        "bio": "Passionate about building inclusive tech communities and empowering developers with cloud technologies.",
        "profileUrl": "https://www.linkedin.com/in/ethicaladitya/",
        "imageUrl": "https://2.gravatar.com/avatar/781518e3519e07fbdd10503b45b6d203f3fd92de8c9fffd58a4e099069cb3d79?size=512&d=initials",
        "skills": ["Community Building", "Development Operations", "Developer Relations"]
      },
      {
        "name": "Mayur Rathi",
        "role": "Co-Organizer",
        "company": "Capgemini",
        "bio": "Experienced software engineer with a passion for cloud architecture and developer community engagement.",
        "profileUrl": "https://www.linkedin.com/in/mayurrathi26/",
        "imageUrl": "https://pbs.twimg.com/profile_images/1378894474718351362/vuLAZU4a_400x400.jpg",
        "skills": ["Cloud Architecture", "DevOps", "Team Leadership"]
      },
      {
      "name": "Shivam Mishra",
      "role": "GDG Organizer",
      "company": "Sansys Informatics",
      "bio": "Passionate volunteer coordinator ensuring smooth event operations and community engagement.",
      "imageUrl": "team image/shivam.png",
      "profileUrl": "https://www.linkedin.com/in/shivammishra-styx/",
      "skills": ["React", "WordPress", "Team Leadership"]
      },
      {
        "name": "Atharva Kulkarni",
        "role": "GDG Organizer",
        "company": "Vitraya Technologies",
        "bio": "Loves to solve problems by making products and solutions.",
        "imageUrl": "team image/Atharva.jpeg",
        "profileUrl": "https://www.linkedin.com/in/atharvakulkarni/",
        "skills": ["UX & Software Design", "Startups & Entrepreneurship","No-Code Development"]
      }
    ],
    "coreTeam": [

      {
        "name": "Sanidhya Sahu",
        "role": "GDGoC Organizer & Lead",
        "company": "SATI, Vidisha",
        "bio": "Passionate about building inclusive tech communities and empowering developers with cloud technologies.",
        "profileUrl": "https://www.linkedin.com/in/sanidhya-sahu/",
        "imageUrl": "team image/sanidhya.jpeg",
        "skills": ["Community Building", "Development Operations", "Developer Relations"]
      },
      {
        "name": "Pramanya Rajput",
        "role": "GDGoC Organizer & Lead",
        "company": "SOIT, Bhopal",
        "bio": "Experienced software engineer with a passion for cloud architecture and developer community engagement.",
        "profileUrl": "https://www.linkedin.com/in/pramanya-rajput/",
        "imageUrl": "team image/pramanya.jpeg",
        "skills": ["Cloud Architecture", "DevOps", "Team Leadership"]
      },
      {
      "name": "Chandra Prakash Ojha",
      "role": "GDGoC Organizer & Lead",
      "company": "OIST, Bhopal",
      "bio": "Passionate volunteer coordinator ensuring smooth event operations and community engagement.",
      "imageUrl": "team image/chandra prakash.jpeg",
      "profileUrl": "https://www.linkedin.com/in/cpojha17/",
      "skills": ["React", "WordPress", "Team Leadership"]
      },
      {
        "name": "Deepti Rai",
        "role": "GDGoC Core Member",
        "company": "SATI, Vidisha",
        "bio": "Loves to solve problems by making products and solutions.",
        "imageUrl": "team image/deepti.jpeg",
        "profileUrl": "https://www.linkedin.com/in/deepti-rai-77517a2a2/",
        "skills": ["UX & Software Design", "Startups & Entrepreneurship","No-Code Development"]
      },
      {
        "name": "Tofique Lohar",
        "role": "GDGoC Core Member",
        "company": "SATI, Vidisha",
        "bio": "Dedicated team member contributing to community growth and development.",
        "profileUrl": "https://www.linkedin.com/in/taufiq-lohar-3023ab344/",
        "imageUrl": "team image/taufiq.jpeg",
        "skills": ["Community Building", "Event Management", "Technical Support"]
      }
    ]
  },
  /*
  "schedule": {
    "title": "Conference Schedule",
    "subtitle": "Sunday, August 3rd, 2025 at Kushabhau Thakre International Convention Centre (Minto Hall), Bhopal",
    "sessions": [
      {
        "category": "Morning Session",
        "items": [
          {
            "time": "9:00 AM - 10:00 AM",
            "title": "Registration & Networking",
            "description": "Attendees arrive, complete registration, and connect with peers.",
            "type": "general"
          },
          {
            "time": "10:00 AM - 10:25 AM",
            "title": "Inaugural Keynote & Organizers' Remarks",
            "description": "Conference officially begins with a welcome address from the organizing committee, setting the stage for the day.",
            "type": "keynote"
          },
        ]
      },
      {
        "category": "Technical Sessions - Block 1: The Agentic Age & AI Applications",
        "items": [
          {
            "time": "10:30 AM - 10:55 AM",
            "title": "Session 1: NotebookLM to Conquer Complex Topics",
            "speaker": "Ashish Kolarkar",
            "speakerTitle": "CEO, Datatrack",
            "type": "talk"
          },
          {
            "time": "11:00 AM - 11:25 AM",
            "title": "Session 2: Mastering Google Gemini: Your All-in-One Career Co-Pilot",
            "speaker": "Kripesh Adwani",
            "speakerTitle": "CEO, UpSkillAI",
            "type": "talk"
          },
          {
            "time": "11:30 AM - 11:55 AM",
            "title": "Session 3: From Pretrained to Powerful: Fine-Tune Gemma on GCP Vertex AI",
            "speaker": "Geeta Kakrani",
            "speakerTitle": "CEO, Founder, Kanishka IT",
            "type": "talk"
          },
          {
            "time": "12:00 PM - 12:25 PM",
            "title": "Session 4: Building Next-Gen Intelligent Self-Service on Google Cloud",
            "speaker": "Saurabh Mishra",
            "speakerTitle": "DevOps Lead, TSYS",
            "type": "talk"
          }
        ]
      },
      {
        "category": "Family Photo Session outside the auditorium",
        "items": [
          {
            "time": "12:50 PM",
            "title": "Family Photo",
            "description": "Group photo session for all attendees, speakers, and organizers.",
            "type": "general"
          }
        ]
      },
      {
        "category": "Lunch Break",
        "items": [
          {
            "time": "12:45 PM - 2:15 PM",
            "title": "Lunch & Networking",
            "description": "A dedicated break for attendees to enjoy lunch, engage in further networking.",
            "type": "break"
          }
        ]
      },
      {
        "category": "Technical Sessions - Block 2: Cloud Infrastructure, Operations & Modern Development",
        "items": [
          {
            "time": "2:15 PM - 2:40 PM",
            "title": "Session 5: How to Secure AI Workload",
            "speaker": "Biswanath Giri",
            "speakerTitle": "Cloud and AI Principal Architect, LTIMindtree",
            "type": "talk"
          },
          {
            "time": "2:45 PM - 3:10 PM",
            "title": "Session 6: Kubernetes for Beginners: Your First Step into Cloud-Native",
            "speaker": "Parth Arora",
            "speakerTitle": "Senior Software Engineer, IBM India",
            "type": "talk"
          },
          {
            "time": "3:15 PM - 3:40 PM",
            "title": "Session 7: No server, No stress: Build smart cloud workflows the low code way",
            "speaker": "Jyoti Mishra",
            "speakerTitle": "SDE-4, Evertz Microsystems",
            "type": "talk"
          },
          {
            "time": "3:45 PM - 4:10 PM",
            "title": "Session 8: Cloud Intelligence Dashboard",
            "speaker": "Anand Mehta",
            "speakerTitle": "Senior FinOps Specialist, Nasdaq",
            "type": "talk"
          },
          {
            "time": "4:15 PM - 4:30 PM",
            "title": "Session 9: Design Thinking and Transforming Business",
            "speaker": "Poorvi Arora",
            "speakerTitle": "Delivery Manager, Technoduxx",
            "type": "talk"
          }
        ]
      },
      {
        "category": "Panel Discussion",
        "items": [
          {
            "time": "4:35 PM - 5:15 PM",
            "title": "The Agentic Age & Future Workforce: An Ecosystem Dialogue with IT Leaders, Founders, and Skill Development Pioneers",
            "description": "A dynamic 40-minute discussion with diverse experts, including IT company leaders, startup founders, coaching institute representatives, and the founder/director of the Global Skill Park.",
            "type": "panel"
          }
        ]
      },
      {
        "category": "Concluding Session",
        "items": [
          {
            "time": "5:15 PM - 5:30 PM",
            "title": "Closing Remarks & Vote of Thanks",
            "description": "Organizers provide a summary of the day, express gratitude to speakers, sponsors, and attendees, and announce future events.",
            "type": "general"
          },
          {
            "time": "5:30 PM onwards",
            "title": "Swag Distribution, Networking & Departure",
            "description": "Final opportunities for networking before attendees depart.",
            "type": "general"
          }
        ]
      }
    ]
  },
  */
  "communityPartners": {
    "title": "Partners",
    "subtitle": "Meet our amazing partners who make DevFest Bhopal 2025 possible through their collaboration and support",
    "categories": [
      {
        "name": "Community Partners",
        "partners": [
          {
            "name": "WordPress Bhopal",
            "description": "The WordPress Bhopal community is dedicated to empowering developers, designers, and content creators with WordPress skills and knowledge.",
            "logoUrl": "https://bhopal.wordcamp.org/2025/files/2025/05/Group-16.png",
            "websiteUrl": "https://wpbhopal.org/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "#",
              "instagram": "#"
            }
          },
          {
            "name": "I am Startup",
            "description": "Empowering entrepreneurs and startups across India with mentorship, resources, and networking opportunities to build successful ventures.",
            "logoUrl": "https://media.licdn.com/dms/image/v2/D4D03AQFg8LELuH7syg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686288397402?e=1758153600&v=beta&t=OmKVw-7v6gUP1mUqHflNXZFvCGkiBFUz3oa8fiZFb94",
            "websiteUrl": "https://www.linkedin.com/in/i-am-startup-community-india/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/in/i-am-startup-community-india/",
              "instagram": "#"
            }
          },
          {
            "name": "GDG on Campus - SATI Vidisha",
            "description": "GDG on Campus at SATI Vidisha empowers students with cutting-edge Google technologies, fostering innovation through workshops, hackathons, and community-driven tech events.",
            "logoUrl": "Community-Partner-Logo/sati.jpeg",
            "websiteUrl": "https://www.linkedin.com/company/gdgoc-sati/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/company/gdgoc-sati/",
              "instagram": "https://www.instagram.com/gdgoc.sati"
            }
          },
          {
            "name": "GDG on Campus - OIST",
            "description": "GDG on Campus at OIST encourages innovation and technical growth among students through Google developer programs, events, and collaborative learning opportunities.",
            "logoUrl": "Community-Partner-Logo/oist.jpg",
            "websiteUrl": "https://www.linkedin.com/company/gdgcoist/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/company/gdgcoist/",
              "instagram": "#"
            }
          },
          {
            "name": "GDG on Campus - LNCTS",
            "description": "GDG on Campus at LNCTS connects students passionate about technology, offering resources, mentorship, and events centered around Google technologies and developer best practices.",
            "logoUrl": "Community-Partner-Logo/lncts.jpg",
            "websiteUrl": "https://www.linkedin.com/company/google-developer-students-club-lncts/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/company/google-developer-students-club-lncts/",
              "instagram": "#"
            }
          },
          {
            "name": "GDG on Campus - SOIT RGPV",
            "description": "GDG on Campus at SOIT RGPV inspires students to explore Android, cloud computing, and other Google technologies through interactive sessions and collaborative projects.",
            "logoUrl": "Community-Partner-Logo/soit.jpg",
            "websiteUrl": "https://www.linkedin.com/company/google-developer-student-clubs-soit-rgpv/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/company/google-developer-student-clubs-soit-rgpv/",
              "instagram": "#"
            }
          },
          {
            "name": "GDG on Campus - SISTec",
            "description": "GDG on Campus at SISTec brings together aspiring developers to learn, build, and grow with Google technologies through workshops, talks, and community events.",
            "logoUrl": "Community-Partner-Logo/sistec.jpg",
            "websiteUrl": "https://www.linkedin.com/company/gdgsistec/",
            "socialMedia": {
              "twitter": "#",
              "linkedin": "https://www.linkedin.com/company/gdgsistec/",
              "instagram": "#"
            }
          }
        ]
      }
    ]
  }
};