export const projects = [
  {
    slug: "campaign-command-center", number: "01", accent: "#8b5cf6", icon: "◈",
    name: "Campaign Command Center", kicker: "Launch measurement",
    description: "A cross-channel launch room for the streaming-series campaign 'Orbitfall'.",
    objective: "Move budget and creative decisions from weekly hindsight to daily action.",
    kpis: [{ label: "Qualified views", value: "4.82M", delta: "+18.4%" }, { label: "Completion rate", value: "41.8%", delta: "+6.1 pts" }, { label: "Paid CPV", value: "$0.042", delta: "−12.0%" }, { label: "Earned engagement", value: "286K", delta: "+22.6%" }],
    chart: [32, 45, 39, 58, 71, 67, 88, 94, 82, 106, 125, 118],
    dimensions: ["Platform", "Audience", "Format", "Organic / Paid", "Market"],
    insight: "YouTube trailers account for 54% of qualified views while TikTok creator cut-downs generate 2.3× more shares per view. Shift 12% of paid reach budget into creator amplification for the final launch week.",
    evidence: "Last 14 days · US, UK, IN · 92% data completeness",
    actions: ["Approve final-week creator boost", "Inspect TikTok completion cohort", "Export client scorecard"],
    table: [["YouTube", "Trailer", "2.61M", "47.2%", "$0.038"], ["TikTok", "Creator cut-down", "1.19M", "38.1%", "$0.046"], ["Instagram", "Reel", "0.72M", "35.4%", "$0.051"], ["X", "Cast clip", "0.30M", "21.8%", "$0.067"]]
  },
  {
    slug: "release-hype-radar", number: "02", accent: "#ec4899", icon: "◌",
    name: "Release Hype Radar", kicker: "Social listening",
    description: "Detect and explain audience conversation shifts around entertainment releases.",
    objective: "Turn a spike in conversation into a verified response plan before momentum is lost.",
    kpis: [{ label: "Mentions", value: "186.4K", delta: "+241%" }, { label: "Positive sentiment", value: "71%", delta: "+9 pts" }, { label: "Share of voice", value: "38.6%", delta: "+11 pts" }, { label: "Alert SLA", value: "8 min", delta: "within target" }],
    chart: [18, 20, 24, 22, 31, 37, 45, 116, 130, 96, 88, 75],
    dimensions: ["Topic", "Sentiment", "Market", "Creator", "Platform"],
    insight: "A cast-interview clip drove 68% of the incremental conversation. Subtitle complaints represent 61% of negative mentions in India; publish localized accessibility guidance and route support queries to the regional team.",
    evidence: "Detected 09:42 IST · 6,438 sampled mentions · confidence: high",
    actions: ["Open evidence sample", "Create regional response brief", "Track topic decay"],
    table: [["Cast interview", "+324%", "84% positive", "TikTok", "High"], ["Subtitle quality", "+186%", "22% positive", "X", "High"], ["Soundtrack", "+91%", "89% positive", "Instagram", "Medium"], ["Release date", "+42%", "63% positive", "YouTube", "Low"]]
  },
  {
    slug: "creative-intelligence-lab", number: "03", accent: "#14b8a6", icon: "✦",
    name: "Creative Intelligence Lab", kicker: "Creative analytics",
    description: "A searchable evidence base for creative patterns and audience response.",
    objective: "Help creative teams learn which observable choices travel across formats and audiences.",
    kpis: [{ label: "Assets tagged", value: "1,284", delta: "+128 this week" }, { label: "Winning patterns", value: "14", delta: "+3 validated" }, { label: "Median hold rate", value: "42.6%", delta: "+5.2 pts" }, { label: "Review coverage", value: "96.8%", delta: "above target" }],
    chart: [22, 27, 34, 41, 39, 54, 63, 69, 66, 81, 87, 93],
    dimensions: ["Hook", "Duration", "CTA", "Talent", "Audio", "Audience"],
    insight: "Assets showing the lead character within the first 1.5 seconds are associated with a 7.4-point higher 3-second hold rate among 18–34 viewers. This is an association, not a causal claim; prioritize it as the next A/B test.",
    evidence: "n=284 comparable vertical-video assets · mixed-effects analysis · reviewed tags",
    actions: ["View matched cohort", "Draft test hypothesis", "Correct AI tags"],
    table: [["Character in first 1.5s", "+7.4 pts hold", "284 assets", "High", "Test next"], ["Captions on", "+4.1 pts completion", "612 assets", "Medium", "Adopt"], ["CTA after 12s", "+2.8 pts CTR", "177 assets", "Medium", "Validate"], ["Trend audio", "+1.2 pts shares", "303 assets", "Low", "Monitor"]]
  },
  {
    slug: "creator-measurement-studio", number: "04", accent: "#f59e0b", icon: "◇",
    name: "Creator Measurement Studio", kicker: "Influencer intelligence",
    description: "Evaluate creator partnerships on fit, qualified attention, safety, and results.",
    objective: "Choose partners with defensible audience fit—not only the largest follower count.",
    kpis: [{ label: "Shortlisted creators", value: "24", delta: "+6 qualified" }, { label: "Audience fit", value: "78/100", delta: "+8 pts" }, { label: "Qualified CPV", value: "$0.061", delta: "−16%" }, { label: "Safety reviews", value: "100%", delta: "complete" }],
    chart: [31, 35, 29, 46, 48, 57, 60, 55, 73, 86, 84, 98],
    dimensions: ["Creator", "Audience overlap", "Cost", "Brand safety", "Market"],
    insight: "Three mid-tier creators reach 42% less duplicated audience than the two highest-reach candidates and project a 19% lower qualified CPV. Keep all recommendations explainable: fit, overlap, recent quality, and safety are scored separately.",
    evidence: "30-day performance window · sample audience match · manually reviewed safety flags",
    actions: ["Compare shortlists", "Review safety evidence", "Generate negotiation brief"],
    table: [["Maya Reviews", "86/100", "12% overlap", "$0.054", "Clear"], ["The Cut Room", "82/100", "17% overlap", "$0.059", "Clear"], ["FrameByFrame", "79/100", "21% overlap", "$0.063", "Review"], ["ScreenSense", "74/100", "34% overlap", "$0.071", "Clear"]]
  },
  {
    slug: "executive-narrative-copilot", number: "05", accent: "#3b82f6", icon: "▣",
    name: "Executive Narrative Copilot", kicker: "Decision reporting",
    description: "Convert approved metrics into accountable, evidence-linked leadership reporting.",
    objective: "Make every executive statement traceable to a metric definition, filter set, and source refresh time.",
    kpis: [{ label: "Report readiness", value: "94%", delta: "+12 pts" }, { label: "Verified claims", value: "18/18", delta: "complete" }, { label: "Time to draft", value: "21 min", delta: "−63%" }, { label: "Actions tracked", value: "7", delta: "+2 new" }],
    chart: [26, 28, 37, 48, 51, 58, 64, 76, 71, 85, 93, 103],
    dimensions: ["Executive goal", "Claim status", "Campaign", "Channel", "Period"],
    insight: "The weekly narrative is publish-ready because all 18 claims resolve to approved definitions and source queries. The recommended action—creator amplification—is linked to its owner, due date, and post-action measurement plan.",
    evidence: "Report period: Oct 21–27 · metric dictionary v1.4 · analyst review complete",
    actions: ["Open evidence ledger", "Export leadership brief", "Assign recommendation owner"],
    table: [["Qualified views rose 18.4%", "Verified", "Metric QV-01", "Analyst", "Ready"], ["TikTok creative is most shareable", "Verified", "Post performance", "Analyst", "Ready"], ["Shift 12% budget", "Recommendation", "Scenario model", "Media lead", "Assigned"], ["Subtitle concern requires action", "Verified", "Listening alert", "Regional lead", "Assigned"]]
  }
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug) ?? projects[0];
}
