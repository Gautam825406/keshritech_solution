import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";

export function FaqSection() {
  return (
    <section className="section-space">
      <div className="container-px">
        <h2 className="section-title">Frequently asked questions</h2>
        <p className="section-subtitle">Answers to common questions before getting started.</p>
        <div className="mt-8 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}