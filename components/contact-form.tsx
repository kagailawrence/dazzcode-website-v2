"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);

    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPending(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            company: formData.get("company"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setPending(false);
        }
    }

    if (success) {
        return (
            <div className="bg-secondary/10 border border-primary/20 rounded-xl p-8 text-center max-w-lg mx-auto">
                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                    Thanks for reaching out. A member of our team will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setSuccess(false)}>Send Another Message</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@example.com" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" name="company" placeholder="Acme Inc." />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                />
            </div>

            {error && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm">
                    {error}
                </div>
            )}

            <Button type="submit" className="w-full h-12 text-base" disabled={pending}>
                {pending ? "Sending..." : (
                    <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
}
