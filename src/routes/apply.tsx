import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, Mail, AlertCircle } from "lucide-react";
import { pageHead } from "@/lib/seo";
import { site } from "@/data/site";
import { PROGRAM_CATEGORIES } from "@/data/universities";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/apply")({
  head: () =>
    pageHead({
      title: "Apply or book a free call | PathwayItalia",
      description:
        "Tell us about your plans to study a bachelor's degree in Italy, or book a free consultation call with PathwayItalia.",
      path: "/apply",
    }),
  component: ApplyPage,
});

type Status =
  { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

function ApplyPage() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // spam honeypot

    // No form service configured yet: open the visitor's email app with the answers filled in.
    if (!site.web3formsKey) {
      const lines = [
        "name",
        "email",
        "nationality",
        "residence",
        "start",
        "subject",
        "message",
      ].map((k) => `${k[0].toUpperCase()}${k.slice(1)}: ${String(data.get(k) ?? "")}`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Application enquiry from ${data.get("name")}`,
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
      setStatus({ kind: "sent" });
      return;
    }

    setStatus({ kind: "sending" });
    data.append("access_key", site.web3formsKey);
    data.append("subject", `New PathwayItalia enquiry from ${data.get("name")}`);
    data.append("from_name", "PathwayItalia website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = (await res.json()) as { success?: boolean; message?: string };
      if (!res.ok || !json.success) throw new Error(json.message || "The form could not be sent.");
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "The form could not be sent.",
      });
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title={
          <>
            Ready to <span className="accent-serif">begin?</span>
          </>
        }
        lead="Tell us a little about yourself and we'll reply by email. Prefer to talk? Book a free call instead."
      />

      <section className="section pt-10 lg:pt-14">
        <div className="container-page grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <div className="card p-6 sm:p-8 lg:p-10">
            <h2 className="font-display text-3xl text-ocean">Your details</h2>
            {status.kind === "sent" ? (
              <div
                className="mt-6 flex gap-3 rounded-xl bg-[color-mix(in_srgb,var(--sage)_14%,transparent)] p-5 text-ocean"
                role="status"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-sage" aria-hidden="true" />
                <div>
                  <p className="font-semibold">Thank you. Your details are on their way.</p>
                  <p className="mt-1 text-ink-soft">
                    {site.web3formsKey
                      ? "We'll get back to you by email soon."
                      : "Your email app should have opened with your answers. Press send there to reach us."}
                  </p>
                  <button
                    type="button"
                    className="link-arrow mt-4"
                    onClick={() => setStatus({ kind: "idle" })}
                  >
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mt-6 grid gap-5 sm:grid-cols-2"
                noValidate={false}
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <Field label="Full name" name="name" autoComplete="name" required />
                <Field label="Email" name="email" type="email" autoComplete="email" required />
                <Field
                  label="Nationality"
                  name="nationality"
                  placeholder="e.g. Pakistani"
                  required
                />
                <Field
                  label="Country you live in"
                  name="residence"
                  autoComplete="country-name"
                  placeholder="e.g. UAE"
                />
                <label className="block">
                  <span className="field-label">When do you want to start?</span>
                  <select name="start" className="field-input" defaultValue="2027/28">
                    <option>2027/28</option>
                    <option>2028/29</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="block">
                  <span className="field-label">Subject area</span>
                  <select name="subject" className="field-input" defaultValue="">
                    <option value="">Not sure yet</option>
                    {PROGRAM_CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="field-label">
                    Anything else? <span className="font-normal text-ink-soft">(optional)</span>
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={2000}
                    className="field-input"
                    placeholder="Universities you're considering, questions, your current grades…"
                  />
                </label>
                <label className="flex items-start gap-3 text-sm text-ink-soft sm:col-span-2">
                  <input
                    type="checkbox"
                    name="consent"
                    required
                    className="mt-0.5 h-5 w-5 shrink-0 accent-[var(--ocean)]"
                  />
                  I agree that PathwayItalia may use these details to reply to my enquiry.
                </label>
                {status.kind === "error" && (
                  <p
                    className="flex gap-2 text-sm font-medium text-[#9b1c1c] sm:col-span-2"
                    role="alert"
                  >
                    <AlertCircle size={18} className="shrink-0" aria-hidden="true" />{" "}
                    {status.message} You can also email us at {site.email}.
                  </p>
                )}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                    disabled={status.kind === "sending"}
                  >
                    {status.kind === "sending" ? "Sending…" : "Send my details"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-ocean p-6 text-ivory sm:p-8">
              <span className="icon-tile icon-tile-on-dark">
                <CalendarDays size={22} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-3xl">Book a free call</h2>
              <p className="mt-3 text-ivory/85">
                Pick a time that suits you for a free introductory video call with {site.founder}.
                We'll talk through your goals, options and timeline.
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-accent mt-6 w-full"
              >
                Choose a time
              </a>
              <p className="mt-3 text-center text-sm text-ivory/70">
                Opens our booking page on Cal.com
              </p>
            </div>
            <div className="card p-6 sm:p-8">
              <span className="icon-tile">
                <Mail size={22} aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-2xl text-ocean">Prefer email?</h2>
              <p className="mt-2 text-ink-soft">
                Write to us any time and we'll reply as soon as we can.
              </p>
              <a href={`mailto:${site.email}`} className="link-arrow mt-4">
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        maxLength={160}
        className="field-input"
      />
    </label>
  );
}
