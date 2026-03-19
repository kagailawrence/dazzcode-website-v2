"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, CheckCircle2, ChevronRight, Clock, Video } from "lucide-react";

// UX: 3-step progressive commitment funnel.
// Reduces cognitive load by asking one simple question at a time.
const INTENTS = [
    { id: "mvp", title: "I want to launch an MVP", desc: "From idea to live product in 4-6 weeks." },
    { id: "audit", title: "I need to fix my codebase", desc: "Clear technical debt and improve performance." },
    { id: "scale", title: "I need to scale my platform", desc: "SOC2-ready architecture and dedicated team." },
];

const BUDGETS = [
    { id: "tier1", amount: "$3k - $6k", desc: "Typical for MVPs" },
    { id: "tier2", amount: "$8k - $15k", desc: "Standard for Growth" },
    { id: "tier3", amount: "$15k+", desc: "Enterprise Scale" },
];

export default function BookingFlow() {
    const [step, setStep] = useState(1);
    const [intent, setIntent] = useState("");
    const [budget, setBudget] = useState("");
    const [isBooked, setIsBooked] = useState(false);

    const handleNext = () => setStep((s) => s + 1);
    const handleBack = () => setStep((s) => Math.max(1, s - 1));

    // UX: Simulated calendar booking to complete the flow seamlessly without external redirects
    const handleBooking = () => {
        setIsBooked(true);
    };

    if (isBooked) {
        // UX: "Make successful completion clearly visible"
        // Also eliciting implementation intentions (telling them exactly what happens next)
        return (
            <div className="bg-background border border-primary/20 rounded-3xl p-6 md:p-12 max-w-2xl mx-auto shadow-[0_0_50px_-15px_var(--color-primary)]">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">You're booked.</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                    Your strategy call is confirmed. Here is exactly what happens next:
                </p>
                <div className="space-y-6 text-left">
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center font-bold text-white shrink-0">1</div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Prep Questionnaire</h4>
                            <p className="text-muted-foreground text-sm md:text-base">Check your inbox. We've sent a 3-minute form so we don't waste time on the call gathering basic context.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center font-bold text-white shrink-0">2</div>
                        <div>
                            <h4 className="font-bold text-white text-lg">The Call (30 mins)</h4>
                            <p className="text-muted-foreground text-sm md:text-base">We'll review your architecture, validate your roadmap, and identify execution risks. <strong className="text-white">Zero sales pitch.</strong></p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-secondary/50 flex items-center justify-center font-bold text-white shrink-0">3</div>
                        <div>
                            <h4 className="font-bold text-white text-lg">Proposal & Kickoff</h4>
                            <p className="text-muted-foreground text-sm md:text-base">If there's a fit, we'll send a fixed-price proposal. We typically start writing code within 48 hours of approval.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div id="book-call" className="bg-secondary/10 border border-white/5 rounded-3xl p-5 md:p-12 max-w-3xl mx-auto">
            {/* UX: Make Progress Visible */}
            <div className="flex items-center justify-between mb-8">
                {step > 1 ? (
                    <button onClick={handleBack} className="text-muted-foreground hover:text-white flex items-center text-sm transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-1" /> Back
                    </button>
                ) : (
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Strategy Call</div>
                )}
                <span className="text-xs font-bold text-primary">Step {step} of 3</span>
            </div>

            {/* Step 1: Intent */}
            {step === 1 && (
                <div className="animate-fade-in">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">What's your primary goal?</h3>
                    <p className="text-muted-foreground mb-8">Select the option that best describes your current stage.</p>
                    <div className="grid gap-4">
                        {INTENTS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setIntent(item.title);
                                    handleNext();
                                }}
                                className="text-left p-6 rounded-2xl border border-white/5 bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group flex items-center justify-between"
                            >
                                <div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                </div>
                                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors -translate-x-2 group-hover:translate-x-0" />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Budget */}
            {step === 2 && (
                <div className="animate-fade-in">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">What is your allocated budget?</h3>
                    <p className="text-muted-foreground mb-8">This helps us recommend the right architectural approach.</p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {BUDGETS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setBudget(item.amount);
                                    handleNext();
                                }}
                                className="text-left p-6 rounded-2xl border border-white/5 bg-background hover:border-primary/50 hover:bg-primary/5 transition-all group flex flex-col items-center justify-center text-center"
                            >
                                <span className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">{item.amount}</span>
                                <span className="text-sm text-muted-foreground">{item.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Calendar */}
            {step === 3 && (
                <div className="animate-fade-in text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Pick a time</h3>
                    <p className="text-muted-foreground mb-8">
                        {/* Elicit implementation intentions */}
                        Select a 30-minute slot. We'll send a prep questionnaire. No sales pitch.
                    </p>

                    <div className="bg-background border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm mx-auto shadow-2xl">
                        <div className="flex flex-col items-center mb-6 border-b border-white/5 pb-6">
                            <div className="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                <Video className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="text-lg font-bold">Engineering Strategy Call</h4>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 30 min</span>
                                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Google Meet</span>
                            </div>
                        </div>

                        {/* Dummy Calendar UI for visual completeness without external scripts */}
                        <div className="text-left mb-6">
                            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block">Available Tomorrow</label>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-3 border border-white/10 rounded-lg hover:border-primary hover:text-primary text-sm font-medium transition-colors">10:00 AM</button>
                                <button className="p-3 border border-white/10 rounded-lg hover:border-primary hover:text-primary text-sm font-medium transition-colors bg-primary/10 text-primary">11:30 AM</button>
                                <button className="p-3 border border-white/10 rounded-lg hover:border-primary hover:text-primary text-sm font-medium transition-colors">2:00 PM</button>
                                <button className="p-3 border border-white/10 rounded-lg hover:border-primary hover:text-primary text-sm font-medium transition-colors">4:30 PM</button>
                            </div>
                        </div>

                        <Button onClick={handleBooking} className="w-full h-12 text-lg shadow-[0_0_20px_-5px_var(--color-primary)]">
                            Confirm Appointment
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
