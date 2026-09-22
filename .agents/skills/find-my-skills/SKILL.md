---
name: find-my-skills
description: >-
  Discover and install AI agent skills to achieve any development, design, or workflow goal.
  Use when the user asks to source, discover, install, or manage agent skills from skills.sh
  or requests specialized agent abilities.
---

# Find My Skills

This skill empowers Antigravity to discover, source, and install AI agent skills from the open skills ecosystem (`skills.sh`).

## Procedures

### 1. Search for Skills
To find skills matching any goal or technology:
```powershell
npx.cmd -y skills find "<keyword>"
```
Examples:
- `npx.cmd -y skills find "deploy"`
- `npx.cmd -y skills find "seo"`
- `npx.cmd -y skills find "testing"`

### 2. Install a Skill
To install an open agent skill into the project:
```powershell
npx.cmd -y skills add <owner>/<repo> --skill <skill-name> -y
```
Example:
```powershell
npx.cmd -y skills add heredotnow/skill --skill here-now -y
```

### 3. List Installed Skills
```powershell
npx.cmd -y skills list
```
