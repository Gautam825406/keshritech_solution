"use client";

import { FormEvent, useState } from "react";
import { useToast } from "@/components/providers/ToastProvider";
import { Button } from "@/components/ui/Button";

const WHATSAPP_NUMBER = "916203094055";
const EMAIL = "keshritechsolutions@gmail.com";

export function ContactForm() {
  const { showToast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "₹25k - ₹50k",
    message: "",
  });

  const submitToWhatsApp = (event: FormEvent) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hello KeshriTechSolution!\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\nMessage: ${form.message}`,
    );
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    showToast("Redirecting to WhatsApp...");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Service Inquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={submitToWhatsApp} className="glass space-y-4 rounded-2xl p-6">
      <input required placeholder="Name" value={form.name} onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900" />
      <input required type="email" placeholder="Email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900" />
      <input required placeholder="Phone" value={form.phone} onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900" />
      <select value={form.service} onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900">
        <option>Web Development</option>
        <option>App Development</option>
        <option>Video Editing</option>
      </select>
      <select value={form.budget} onChange={(event) => setForm((prev) => ({ ...prev, budget: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900">
        <option>₹25k - ₹50k</option>
        <option>₹50k - ₹1L</option>
        <option>₹1L+</option>
      </select>
      <textarea required placeholder="Message" rows={4} value={form.message} onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))} className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm outline-none dark:border-slate-700 dark:bg-slate-900" />

      <div className="flex flex-wrap gap-3">
        <Button type="submit">Submit via WhatsApp</Button>
        <Button type="button" variant="secondary" onClick={sendEmail}>Send via Email</Button>
      </div>
    </form>
  );
}