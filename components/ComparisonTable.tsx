import { Check, X, AlertTriangle } from "lucide-react";

export default function ComparisonTable() {
    return (
        <section className="py-24 border-t border-white/5 bg-background">
            <div className="container px-4 md:px-6 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    {/* UX: Framing "Why founders choose us" instead of "We are better" to build trust */}
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Founders Choose Dazzcode</h2>
                    <p className="text-xl text-muted-foreground">The actual cost of your engineering options.</p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-secondary/5">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="border-b border-white/10 bg-black/40">
                                <th className="p-6 text-lg font-medium text-muted-foreground w-1/4">Feature</th>
                                <th className="p-6 text-xl font-bold text-white w-1/4 bg-primary/10 border-x border-primary/20">
                                    Dazzcode
                                    <span className="block text-xs font-normal text-primary mt-1">Institutional Grade</span>
                                </th>
                                <th className="p-6 text-lg font-medium text-white w-1/4">Freelancer</th>
                                <th className="p-6 text-lg font-medium text-white w-1/4">In-House Hire</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-medium text-muted-foreground">Time to Ship</td>
                                {/* UX: Showing ROI outcome (weeks to launch) */}
                                <td className="p-6 bg-primary/5 border-x border-primary/10 font-bold text-white">4 - 6 Weeks</td>
                                <td className="p-6 text-muted-foreground">3 - 6 Months</td>
                                <td className="p-6 text-muted-foreground">6+ Months (inc. hiring)</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-medium text-muted-foreground">Cost Predictability</td>
                                <td className="p-6 bg-primary/5 border-x border-primary/10 text-white flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" /> Fixed rate
                                </td>
                                <td className="p-6 text-muted-foreground flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-amber-500" /> Hourly overruns
                                </td>
                                <td className="p-6 text-muted-foreground flex items-center gap-2">
                                    <X className="h-5 w-5 text-red-500" /> High burn rate
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-medium text-muted-foreground">Code Quality</td>
                                <td className="p-6 bg-primary/5 border-x border-primary/10 text-white">
                                    {/* UX: Use plain language "Survives due diligence" */}
                                    Survives due diligence
                                </td>
                                <td className="p-6 text-muted-foreground">Unpredictable</td>
                                <td className="p-6 text-muted-foreground">Depends on the hire</td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-medium text-muted-foreground">IP Ownership</td>
                                <td className="p-6 bg-primary/5 border-x border-primary/10 text-white flex items-center gap-2">
                                    <Check className="h-5 w-5 text-primary" /> 100% Yours
                                </td>
                                <td className="p-6 text-muted-foreground flex items-center gap-2">
                                    <AlertTriangle className="h-5 w-5 text-amber-500" /> Often messy
                                </td>
                                <td className="p-6 text-muted-foreground flex items-center gap-2">
                                    <Check className="h-5 w-5 text-muted-foreground" /> Yours
                                </td>
                            </tr>
                            <tr className="hover:bg-white/[0.02] transition-colors">
                                <td className="p-6 font-medium text-muted-foreground">Ongoing Support</td>
                                <td className="p-6 bg-primary/5 border-x border-primary/10 text-white">
                                    Dedicated Slack & Retention
                                </td>
                                <td className="p-6 text-muted-foreground">Subject to availability</td>
                                <td className="p-6 text-muted-foreground">High flight risk</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
