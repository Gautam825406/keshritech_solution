"use client";

import { FormEvent, useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { useToast } from "@/components/providers/ToastProvider";

type JobCategory = "All" | "Internship" | "Job";

type JobOpening = {
  title: string;
  type: string;
  duration: string;
  skills: string[];
  salary: string;
  description: string;
  category: Exclude<JobCategory, "All">;
  roles?: string[];
  programStructure?: string[];
  salaryNote?: string;
  trainingInvestment?: string[];
  trainingInvestmentNote?: string;
  stipendNote?: string;
  roleSummary?: string;
  preferredExposure?: string[];
  keyResponsibilities?: string[];
  toolsRequirements?: string[];
  eligibility?: string[];
  whatYouWillGain?: string[];
  selectionProcess?: string[];
  applyNowChecklist?: string[];
  applyNowNote?: string;
  portfolioNote?: string;
};

const filters: JobCategory[] = ["All", "Internship", "Job"];

const jobs: JobOpening[] = [
  {
    title: "Video Editing Internship",
    type: "Internship (1 month training + internship)",
    duration: "1 Month (Training + Internship Period)",
    skills: ["Video Editing", "Adobe Premiere Pro (mandatory)"],
    salary: "Stipend based on performance",
    description:
      "This program includes a structured onboarding and training phase, followed by allocation to real editing assignments based on performance and readiness.",
    category: "Internship",
    stipendNote:
      "Performance-Based Stipend: Stipend is offered based on demonstrated capability, consistency, and project contribution during the internship period.",
    roleSummary:
      "We are seeking a Video Editing Intern with strong attention to detail and a keen sense of visual storytelling. The selected candidate will undergo professional training and contribute to real editing projects across digital platforms.",
    preferredExposure: [
      "Adobe After Effects",
      "Basic motion graphics & typography",
      "Audio cleanup and mixing fundamentals",
    ],
    keyResponsibilities: [
      "Edit short-form and long-form video content for digital platforms",
      "Assemble raw footage into high-quality, brand-consistent outputs",
      "Apply clean cuts, pacing, transitions, and basic visual enhancements",
      "Integrate titles, captions/subtitles, and on-screen graphics when required",
      "Ensure audio clarity, sync, and appropriate music placement",
      "Follow internal creative guidelines and brand standards",
      "Maintain timelines and deliver edits within defined deadlines",
      "Coordinate with the content/creative team for revisions and final delivery",
    ],
    toolsRequirements: [
      "Laptop/desktop capable of running Adobe Premiere Pro smoothly (recommended: 8GB+ RAM, SSD preferred)",
      "Adobe Premiere Pro installed and functional",
      "Stable internet connectivity",
      "Headphones (recommended for sound editing accuracy)",
    ],
    eligibility: [
      "Students and fresh graduates",
      "Entry-level candidates building a career in editing",
      "Creators seeking structured industry experience",
    ],
    whatYouWillGain: [
      "Structured training and mentorship",
      "Exposure to professional workflows and quality standards",
      "Real project experience suitable for portfolio building",
      "Internship Certificate upon successful completion",
      "Letter of Recommendation (performance-based)",
      "Potential opportunity for extended internship or full-time engagement",
    ],
    selectionProcess: [
      "Application review",
      "Short screening interaction",
      "Editing assessment task (if required)",
      "Final selection and onboarding",
    ],
    applyNowChecklist: ["Resume / CV", "Portfolio link (if available)", "Contact details"],
    portfolioNote:
      "Portfolio preferred (optional but strongly recommended). A link to sample edits, reels, or prior work will strengthen your application.",
  },
  {
    title: "Training + Internship + Job — IT Roles",
    type: "Training + Internship + Job",
    duration: "Training + Internship Period (duration may vary by learning track and performance)",
    skills: [
      "IT Support Operations",
      "System Administration",
      "Troubleshooting Methodologies",
      "Windows & Linux Fundamentals",
      "Server Fundamentals",
      "Networking Basics",
      "Active Directory Basics",
      "Hardware & Desktop Support",
      "Service Desk Operations",
    ],
    salary: "₹3 LPA – ₹6 LPA",
    description:
      "Our Training + Internship + Placement Program is designed for aspiring IT professionals who are looking to build a strong technical foundation and secure employment in core IT roles.",
    category: "Job",
    roleSummary:
      "This structured pathway includes professional training, hands-on internship experience, and performance-based job placement opportunities. Placement assistance begins upon successful program completion.",
    programStructure: [
      "Phase 1: Professional Training — Industry-oriented training covering core IT infrastructure and support concepts.",
      "Phase 2: Internship — Practical exposure through real-time assignments and technical simulations.",
      "Phase 3: Job Placement — Based on training and internship performance, candidates are recommended for placement opportunities.",
    ],
    salaryNote:
      "Compensation depends on role, technical capability, and interview performance.",
    roles: [
      "System Engineer",
      "System Administrator",
      "IT Support Engineer",
      "Desktop Support Engineer",
      "Service Desk Analyst",
      "Technical Support Engineer",
      "Server Administrator",
      "Infrastructure Support Executive",
      "And other related IT roles",
    ],
    keyResponsibilities: [
      "Installing and configuring computer systems",
      "Monitoring and maintaining servers and infrastructure",
      "Providing technical support to end users",
      "Diagnosing and resolving hardware/software issues",
      "Managing user accounts and permissions",
      "Maintaining system documentation",
      "Escalating and resolving technical incidents",
    ],
    trainingInvestment: [
      "One-time training fee payment",
      "Installment-based payment option",
      "Pay After Placement option (terms & conditions apply)",
    ],
    trainingInvestmentNote:
      "Our placement assistance process is structured to maximize employability outcomes for eligible candidates.",
    eligibility: [
      "Fresh graduates (B.Tech / BCA / B.Sc IT / Diploma / Any graduate interested in IT)",
      "Career switchers entering the IT domain",
      "Entry-level candidates seeking structured industry exposure",
      "Basic computer knowledge is recommended",
    ],
    whatYouWillGain: [
      "Industry-relevant technical training",
      "Practical internship exposure",
      "Interview preparation support",
      "Resume & profile optimization",
      "Placement assistance",
      "Professional certification (upon successful completion)",
    ],
    selectionProcess: [
      "Application Submission",
      "Screening & Counseling Session",
      "Enrollment in Training Program",
      "Internship Evaluation",
      "Placement Support",
    ],
    applyNowChecklist: ["Updated Resume", "Educational Details", "Contact Information"],
    applyNowNote: "Click “Apply Now” to begin your IT career pathway.",
  },
];

const faqItems = [
  {
    question: "Is this open for freshers?",
    answer: "Yes. Freshers can apply for both tracks. Selection is based on interest, communication, and learning ability.",
  },
  {
    question: "How is the interview process conducted?",
    answer: "The process usually includes profile screening, a short discussion, and a practical or task-based round.",
  },
  {
    question: "Can I apply from outside Hazaribagh?",
    answer: "Yes. Some roles support remote or hybrid engagement based on team and project requirements.",
  },
];

export function CareerClient() {
  const { showToast } = useToast();
  const [activeFilter, setActiveFilter] = useState<JobCategory>("All");
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: jobs[0].title,
    city: "",
    experience: "Fresher",
    portfolio: "",
    resumeLink: "",
    message: "",
  });

  const filteredJobs = useMemo(
    () => (activeFilter === "All" ? jobs : jobs.filter((job) => job.category === activeFilter)),
    [activeFilter],
  );

  const selectRoleAndScroll = (role: string) => {
    setForm((prev) => ({ ...prev, role }));
    document.getElementById("career-application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const waMessage = `Hello, I am applying for the position.\n\nName: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nRole: ${form.role}\nExperience: ${form.experience}\n\nPlease review my application.`;
    const encodedMessage = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/916203094055?text=${encodedMessage}`;

    setStatus("Application ready. Redirecting to WhatsApp...");
    showToast("Application submitted. Redirecting to WhatsApp...");

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 650);
  };

  return (
    <section className="section-space">
      <div className="container-px space-y-8">
        <div>
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Career", href: "/career" }]} />
          <h1 className="section-title">Career Opportunities</h1>
          <p className="section-subtitle">
            Build your career with practical training, real projects, and growth-focused roles.
          </p>
        </div>

        <Card>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <Button
                key={item}
                variant={activeFilter === item ? "primary" : "secondary"}
                className="px-4 py-2"
                onClick={() => setActiveFilter(item)}
              >
                {item}
              </Button>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
            <p className="font-medium text-slate-900 dark:text-white">Placement & Training Note</p>
            <p className="mt-2">
              For placement and job opportunities, some roles are directly with KeshriTech Solutions, and some projects are
              delivered through tie-ups with partner companies that support placement. This track includes paid training.
            </p>
          </div>
        </Card>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredJobs.map((job) => (
            <Card key={job.title} className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="mt-1 text-sm text-brand-600">{job.type}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Duration</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.duration}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Salary</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.salary}</p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Skills</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.skills.join(" • ")}</p>
              </div>

              {job.roles ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Roles</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.roles.map((role) => (
                      <li key={role}>{role}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Description</p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.description}</p>
              </div>

              {job.programStructure ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Program Structure</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.programStructure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.stipendNote ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Stipend</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.stipendNote}</p>
                </div>
              ) : null}

              {job.salaryNote ? (
                <p className="text-sm text-slate-700 dark:text-slate-200">{job.salaryNote}</p>
              ) : null}

              {job.roleSummary ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Role Summary</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">{job.roleSummary}</p>
                </div>
              ) : null}

              {job.preferredExposure ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Preferred / Good to Have</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.preferredExposure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.keyResponsibilities ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Key Responsibilities</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.keyResponsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.trainingInvestment ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Training Investment & Payment Options</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
                    This is a paid training program designed to provide structured learning and placement support.
                  </p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.trainingInvestment.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {job.trainingInvestmentNote ? (
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{job.trainingInvestmentNote}</p>
                  ) : null}
                </div>
              ) : null}

              {job.toolsRequirements ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Tools & Requirements</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.toolsRequirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.eligibility ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Eligibility</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.eligibility.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.portfolioNote ? (
                <p className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {job.portfolioNote}
                </p>
              ) : null}

              {job.whatYouWillGain ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">What You Will Gain</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.whatYouWillGain.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.selectionProcess ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Selection Process</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.selectionProcess.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {job.applyNowChecklist ? (
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Apply Now</p>
                  <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">Submit your application with:</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700 dark:text-slate-200">
                    {job.applyNowChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {job.applyNowNote ? <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{job.applyNowNote}</p> : null}
                </div>
              ) : null}

              <Button onClick={() => selectRoleAndScroll(job.title)}>Apply Now</Button>
            </Card>
          ))}
        </div>

        <Card>
          <h2 className="text-xl font-semibold">Why Join Us</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium">Hands-on Learning</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Work on real projects after structured training.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium">Mentorship</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Get guided by experienced professionals in tech and creative domains.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
              <h3 className="font-medium">Career Growth</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Top performers get opportunities for long-term role placement.</p>
            </div>
          </div>
        </Card>

        <Card id="career-application-form">
          <h2 className="text-xl font-semibold">Application Form</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Fill your details and submit. You will be redirected to WhatsApp with your pre-filled application message.
          </p>

          <form className="mt-5 grid gap-4 sm:grid-cols-2" onSubmit={submitApplication}>
            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Full Name *</span>
              <input
                required
                value={form.fullName}
                onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="Enter full name"
              />
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Email *</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="Enter email"
              />
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Phone Number *</span>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="Enter phone number"
              />
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Role Applying For</span>
              <select
                value={form.role}
                onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
              >
                {jobs.map((job) => (
                  <option key={job.title} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">City</span>
              <input
                value={form.city}
                onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="Enter city"
              />
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Experience Level</span>
              <select
                value={form.experience}
                onChange={(event) => setForm((prev) => ({ ...prev, experience: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
              >
                <option>Fresher</option>
                <option>Experienced</option>
              </select>
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Portfolio or LinkedIn Link</span>
              <input
                type="url"
                value={form.portfolio}
                onChange={(event) => setForm((prev) => ({ ...prev, portfolio: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="https://..."
              />
            </label>

            <label className="space-y-1 sm:col-span-1">
              <span className="text-sm font-medium">Resume Link (Google Drive)</span>
              <input
                type="url"
                value={form.resumeLink}
                onChange={(event) => setForm((prev) => ({ ...prev, resumeLink: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="https://drive.google.com/..."
              />
            </label>

            <label className="space-y-1 sm:col-span-2">
              <span className="text-sm font-medium">Message</span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900"
                placeholder="Tell us a little about yourself"
              />
            </label>

            <div className="sm:col-span-2">
              <Button type="submit">Submit Application</Button>
              {status ? <p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">{status}</p> : null}
            </div>
          </form>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold">Career FAQ</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Common questions about training, internship, and placement.</p>
          <div className="mt-5">
            <Accordion items={faqItems} />
          </div>
        </Card>
      </div>
    </section>
  );
}