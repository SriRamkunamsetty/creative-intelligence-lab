# Creative Intelligence Lab

A creative-performance analysis workspace that makes content learnings searchable, reviewable, and statistically honest.

## What it demonstrates

- Structured creative-feature tagging: hook timing, CTA, duration, captions, talent, audio, and format.
- Matched comparisons that adjust for platform, duration, audience, and paid status.
- A strict distinction between an observed association and a causal result.
- Experiment design with primary metrics, guardrails, and minimum sample size.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`. The seeded workspace illustrates an opening-hook finding and the correct next action: run a test.

## Product workflow

1. Ingest authorized asset metadata and performance observations.
2. Generate AI tags, then provide reviewer correction and confidence tracking.
3. Build comparable cohorts and calculate feature associations.
4. Promote a finding to an A/B-test hypothesis—not an automatic content rule.
5. Link final experiment results back to the learning library.

## Key APIs

| Route | Purpose |
| --- | --- |
| `GET /api/v1/projects/creative-intelligence-lab/workspace` | Finding and experiment contract |
| `POST /api/v1/actions` | Audit a drafted test |
| `POST /api/v1/reports` | Queue a creative-performance brief |

## Production safeguards

- Preserve source asset IDs and model/tag versions.
- Require human correction for labels used in client-facing analysis.
- Record confidence intervals and sample size; label correlations explicitly.
- Never claim incrementality or causality without experimental or credible causal-design evidence.

## Validation

```bash
npm run check
npm test
docker compose up --build
```
