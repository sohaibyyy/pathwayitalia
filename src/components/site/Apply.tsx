import { useState } from "react";

export function Apply() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="apply" className="relative py-28 lg:py-40 bg-gradient-to-br from-ivory via-[#F8E9C8] to-gold/40 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blush/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-terracotta/30 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <span className="reveal text-xs tracking-[0.3em] uppercase text-terracotta">Begin</span>
        <h2 className="reveal mt-4 font-display text-5xl sm:text-6xl lg:text-7xl text-ocean leading-tight">
          Ready to <em className="text-terracotta not-italic">Begin?</em>
        </h2>
        <p className="reveal mt-6 text-lg text-ocean/75">
          Applications are open. Join students from around the world building
          their future in Italy.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="reveal mt-12 bg-ivory/70 backdrop-blur-md border border-border rounded-3xl p-6 sm:p-10 shadow-xl"
        >
          {submitted ? (
            <div className="py-12">
              <div className="text-5xl mb-4">🌅</div>
              <h3 className="font-display text-3xl text-ocean">Grazie!</h3>
              <p className="mt-3 text-ocean/70">
                We've received your details. Your pathway begins soon.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Field name="name" label="Full Name" placeholder="Your name" />
                <Field name="email" type="email" label="Email" placeholder="you@example.com" />
                <div className="sm:col-span-2">
                  <Field name="nationality" label="Nationality" placeholder="e.g. Pakistani" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-8 w-full sm:w-auto rounded-full bg-ocean text-gold px-10 py-4 text-sm font-medium tracking-wide hover:bg-ocean/90 hover:scale-[1.02] transition-all"
              >
                Start Your Application →
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-ocean/60">{label}</span>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={120}
        className="mt-2 w-full bg-transparent border-0 border-b border-ocean/30 px-0 py-2.5 text-ocean placeholder:text-ocean/30 focus:outline-none focus:border-gold transition-colors"
      />
    </label>
  );
}
