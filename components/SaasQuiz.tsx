"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const QUESTIONS = [
    {
        question: "Do you have a defined MVP scope?",
        options: [
            { text: "Yes, fully specced out", score: 20 },
            { text: "Rough idea, needs refinement", score: 10 },
            { text: "No, just a concept", score: 0 },
        ],
    },
    {
        question: "Do you have a technical co-founder?",
        options: [
            { text: "Yes", score: 10 },
            { text: "No, but I have advisors", score: 15 },
            { text: "No, I'm non-technical", score: 20 }, // High matching for agency model
        ],
    },
    {
        question: "Have you validated the problem with target users?",
        options: [
            { text: "Yes, people are waiting to pay", score: 20 },
            { text: "Yes, but no revenue commitments yet", score: 10 },
            { text: "No, building first", score: 0 },
        ],
    },
    {
        question: "What is your allocated budget for engineering?",
        options: [
            { text: "$10k+", score: 20 },
            { text: "$3k - $10k", score: 15 },
            { text: "Under $3k", score: 0 },
        ],
    },
    {
        question: "What is your timeline to launch?",
        options: [
            { text: "ASAP (Under 4 weeks)", score: 10 },
            { text: "1 - 3 months", score: 20 },
            { text: "No rush", score: 10 },
        ],
    },
];

export default function SaasQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [score, setScore] = useState(0);
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const totalSteps = QUESTIONS.length;

    const handleOptionSelect = (optionScore: number) => {
        setScore((prev) => prev + optionScore);
        setCurrentStep((prev) => prev + 1);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsComplete(true);
        }, 1200);
    };

    const getRecommendation = () => {
        if (score >= 80) return "SaaS Growth Package ($8k+)";
        if (score >= 50) return "SaaS MVP Package ($3k-$6k)";
        return "SaaS Strategy Consultation (Free) & Validation";
    };

    return (
        <div className="bg-secondary/10 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto">
                {!isComplete && currentStep <= totalSteps && (
                    <div className="mb-8">
                        {/* UX: Progression visibility - "Make progress visible" */}
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                Readiness Score
                            </span>
                            <span className="text-xs font-bold text-primary">
                                Step {Math.min(currentStep + 1, totalSteps + 1)} of {totalSteps + 1}
                            </span>
                        </div>
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary transition-all duration-500 ease-in-out"
                                style={{ width: `${(Math.min(currentStep, totalSteps) / totalSteps) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}

                {currentStep < totalSteps && (
                    <div className="animate-fade-in">
                        {/* UX: Hook Model Investment step. Effort builds engagement. */}
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                            {QUESTIONS[currentStep].question}
                        </h3>
                        <div className="space-y-3">
                            {QUESTIONS[currentStep].options.map((option, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleOptionSelect(option.score)}
                                    className="w-full text-left p-4 rounded-xl border border-white/10 bg-background/50 hover:bg-white/5 hover:border-primary/50 transition-all text-muted-foreground hover:text-white flex items-center justify-between group"
                                >
                                    <span className="font-medium">{option.text}</span>
                                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {currentStep === totalSteps && !isComplete && (
                    <div className="animate-fade-in text-center">
                        <h3 className="text-3xl font-bold mb-4">You're almost there.</h3>
                        <p className="text-muted-foreground mb-8">
                            We've calculated your Readiness Score. Enter your email to view your score and personalized launch recommendation.
                        </p>
                        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
                            <input
                                type="email"
                                placeholder="founder@startup.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-background/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                ) : (
                                    "Show My Results"
                                )}
                            </Button>
                        </form>
                    </div>
                )}

                {isComplete && (
                    <div className="animate-fade-in text-center">
                        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6">
                            <span className="text-4xl font-bold text-primary">{score}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Your SaaS Readiness Score</h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Based on your answers, we recommend the <strong className="text-white">{getRecommendation()}</strong>.
                        </p>

                        {/* UX: Successful completion visible, direct action follows */}
                        <div className="p-6 bg-black/40 rounded-2xl border border-white/5 max-w-md mx-auto">
                            <div className="flex items-center gap-3 mb-4 text-left">
                                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-sm text-white font-medium">Results sent to {email}</span>
                            </div>
                            <Button
                                onClick={() => window.location.href = '#book-call'}
                                className="w-full shadow-[0_0_20px_-5px_var(--color-primary)]"
                            >
                                Book a Strategy Call
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
