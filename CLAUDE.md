## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Before answering architecture or codebase questions, read graphify-out/GRAPH_REPORT.md for god nodes and community structure
- If graphify-out/wiki/index.md exists, navigate it instead of reading raw files
- After modifying code files in this session, run `python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"` to keep the graph current

## memory (two-tier)

This project uses a two-tier memory system. On session start:
1. Read `./memory/MEMORY.md` (project-specific — symlinked to auto-memory)
2. Read `/Users/charantej/charan_personal_projects/memory/MEMORY.md` (unified cross-project)

When saving new memories:
- Project-specific (WIP, bugs, decisions scoped to this repo) → `./memory/`
- Cross-cutting (applies to multiple projects, user preferences, reusable patterns) → unified folder

Use Obsidian-flavored `[[wikilinks]]` in memory files so the vault graph stays connected.
