/**
 * OPTIMIZELY — JOB LISTINGS DATA
 * ---------------------------------------------------------
 * This is the single place where jobs live. To add a new job,
 * copy one of the objects below and change the values.
 * To close a job, change status from "open" to "closed".
 * To remove a job, delete its object from the array.
 *
 * Every page (home, jobs, job details) reads from this file,
 * so you never have to edit HTML to update a listing.
 * ---------------------------------------------------------
 */

const JOBS = [
  {
    id: "remote-customer-service-associate",
    title: "Remote Customer Service Associate",
    status: "open", // "open" or "closed"
    type: "Remote",
    experience: "0–3 Years",
    candidatePreference: "Female candidate preferable",
    eligibility: "Freshers can apply",
    shortDescription:
      "Support customers from anywhere, no experience required. A great fit for freshers looking to start a career in customer service.",
    description:
      "We're looking for a Remote Customer Service Associate to join Optimizely and help us deliver a great experience to every customer who reaches out. This is a fully remote role open to freshers as well as candidates with up to 3 years of experience.",
    responsibilities: [
      "Respond to customer queries in a timely, friendly, and professional manner",
      "Help resolve customer issues and escalate where needed",
      "Keep accurate records of customer interactions",
      "Work with the team to improve the overall customer experience",
    ],
    requirements: [
      "0–3 years of relevant experience (freshers welcome)",
      "Comfortable working remotely with a stable internet connection",
      "Good written and verbal communication skills",
    ],
    preferredQualifications: [
      "Not specified in the job posting — will be shared during the interview process if applicable.",
    ],
    applicationInstructions:
      "Apply directly through our website using the Apply Now button below. Please have your CV ready to upload.",
  },
  {
    id: "social-media-coordinator",
    title: "Social Media Coordinator",
    status: "closed",
    type: "Hybrid",
    experience: "1–2 Years",
    candidatePreference: "Not specified",
    eligibility: "Not specified",
    shortDescription:
      "Plan and publish content across our social channels and help grow the Optimizely community.",
    description:
      "This role focused on planning, creating, and publishing content across Optimizely's social channels, working closely with the design and marketing teams.",
    responsibilities: [
      "Plan and schedule content across social platforms",
      "Track engagement and report on performance",
      "Coordinate with design and marketing on campaigns",
    ],
    requirements: [
      "1–2 years of experience in social media or marketing",
      "Familiarity with common scheduling and analytics tools",
    ],
    preferredQualifications: [
      "Not specified in the job posting.",
    ],
    applicationInstructions:
      "This position is closed and no longer accepting applications.",
  },
  {
    id: "junior-data-entry-clerk",
    title: "Junior Data Entry Clerk",
    status: "closed",
    type: "Remote",
    experience: "0–1 Years",
    candidatePreference: "Not specified",
    eligibility: "Freshers can apply",
    shortDescription:
      "Accurately enter and organize data to support daily operations across teams.",
    description:
      "The Junior Data Entry Clerk supported day-to-day operations by keeping records accurate, organized, and up to date across internal systems.",
    responsibilities: [
      "Enter and update records accurately and on time",
      "Check data for errors and correct discrepancies",
      "Maintain confidentiality of sensitive information",
    ],
    requirements: [
      "0–1 years of experience (freshers welcome)",
      "Strong attention to detail",
      "Comfortable working with spreadsheets",
    ],
    preferredQualifications: [
      "Not specified in the job posting.",
    ],
    applicationInstructions:
      "This position is closed and no longer accepting applications.",
  },
  {
    id: "hr-coordinator",
    title: "HR Coordinator",
    status: "closed",
    type: "On-site",
    experience: "2–4 Years",
    candidatePreference: "Not specified",
    eligibility: "Not specified",
    shortDescription:
      "Support recruitment and onboarding to help new hires get off to a great start.",
    description:
      "The HR Coordinator supported the recruitment and onboarding process, working closely with hiring managers to bring new team members on board.",
    responsibilities: [
      "Coordinate interview scheduling with hiring managers",
      "Support onboarding for new hires",
      "Maintain accurate employee records",
    ],
    requirements: [
      "2–4 years of experience in an HR or coordination role",
      "Strong organizational skills",
    ],
    preferredQualifications: [
      "Not specified in the job posting.",
    ],
    applicationInstructions:
      "This position is closed and no longer accepting applications.",
  },
];

// Make available to other scripts
if (typeof module !== "undefined") {
  module.exports = JOBS;
}
