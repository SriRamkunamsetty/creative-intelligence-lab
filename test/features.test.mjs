import test from "node:test";
import assert from "node:assert/strict";
import { workspaceFor } from "../src/features.mjs";

test("each product exposes a distinct decision workflow", () => {
  const slugs = ["campaign-command-center", "release-hype-radar", "creative-intelligence-lab", "creator-measurement-studio", "executive-narrative-copilot"];
  const kinds = slugs.map((slug) => workspaceFor(slug)?.kind);
  assert.equal(new Set(kinds).size, 5);
  assert.equal(workspaceFor("release-hype-radar").detection.method, "rolling z-score");
  assert.equal(workspaceFor("creative-intelligence-lab").finding.causalStatus, "association_only");
  assert.equal(workspaceFor("creator-measurement-studio").policy.automatedScoreCannotAutoApprove, true);
});
