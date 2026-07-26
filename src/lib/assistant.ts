import { profile, projects, skillTree, achievements, socials, careerLevels } from "@/data/portfolio";

function findProject(query: string) {
  return projects.find((p) => query.includes(p.name.toLowerCase()) || query.includes(p.id.replace("-", " ")));
}

/**
 * Structured, deterministic responder. This intentionally does not call any
 * AI/LLM API — it answers purely from the data already on the page, so the
 * assistant can never say anything that isn't reflected in the site itself.
 */
export function answerQuery(rawQuery: string): string {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return "Ask me about projects, skills, background, or how to get in touch.";

  const project = findProject(q);
  if (project) {
    return `${project.name} — ${project.tagline}. ${project.description} Built with ${project.tech.join(", ")}. Status: ${project.status}.`;
  }

  if (/(project|built|built anything|work|portfolio pieces)/.test(q)) {
    const names = projects.map((p) => p.name).join(", ");
    return `Abhishek has shipped ${projects.length} main projects: ${names}. Ask about any one of them by name for details.`;
  }

  if (/(skill|tech stack|stack|language|know|good at)/.test(q)) {
    const top = [...skillTree].sort((a, b) => b.xp - a.xp).slice(0, 6).map((s) => s.name);
    return `Core skills: ${top.join(", ")}. Full breakdown is in the Skills section, with an XP level for each.`;
  }

  if (/(contact|reach|email|hire|talk|connect)/.test(q)) {
    return `You can reach Abhishek at ${profile.email}, on GitHub (${socials.github}), or LinkedIn (${socials.linkedin}). There's also a contact form at the bottom of the page.`;
  }

  if (/(resume|cv)/.test(q)) {
    return "The resume is available from the button in the top navigation, the hero section, or the contact links below.";
  }

  if (/(about|who are you|background|education|study|college|location|where)/.test(q)) {
    return `${profile.name} is a ${profile.roles.join(", ")} based in ${profile.location}, studying ${profile.education}. Focus: ${profile.focus}.`;
  }

  if (/(achievement|award|unlock)/.test(q)) {
    return `Unlocked achievements: ${achievements.map((a) => a.title).join(", ")}.`;
  }

  if (/(journey|career|experience|history|level)/.test(q)) {
    const current = careerLevels[careerLevels.length - 1];
    return `Currently at Level ${current.level}: ${current.title}. ${current.description}`;
  }

  if (/(github)/.test(q)) {
    return `GitHub activity is pulled live in the GitHub section — repos, stars, and contribution history at ${socials.github}.`;
  }

  if (/(status|available|open|opportunit)/.test(q)) {
    return `${profile.status} — currently looking at ${profile.currentGoal}.`;
  }

  return "I can answer questions about projects, skills, background, achievements, or how to get in touch — try one of the suggestions below.";
}
