1/ Webiny 6.3.0 is here and it's our biggest AI release yet 🚀

AI-powered page content generation is now built into Website Builder — configure OpenAI or Anthropic, then generate entire page sections using natural language prompts.

Your prompts become live content automatically.

2/ File Manager just got smarter — every image you upload is now automatically enriched with AI-generated tags and descriptions.

Better searchability without the manual work. Runs in background tasks so uploads stay fast.

3/ The new SDK Tasks module lets external apps interact with Webiny Background Tasks programmatically.

List definitions, query task runs, trigger new executions, retrieve logs, abort running tasks — all with full TypeScript support.

4/ Major DX improvements: TypeScript upgraded to 6.0.3 with bundler module resolution. New `FormModel` API for building admin forms declaratively — tabs, validation, computed fields, conditional visibility, the works.

5/ Infrastructure got attention too ✨

Built-in AES-256-GCM encryption service. `Infra.Env.useEnv` hook for environment-aware extensions. Proper TypeScript typing for CorePulumi/ApiPulumi/AdminPulumi handlers. Old Pulumi plugin versions now auto-cleaned.

6/ Background tasks can now self-clean after completion — task records, logs, and child tasks removed automatically. Enable with `selfClean: true` in your task definition.

7/ Headless CMS: model field compression for large schemas, refactored entry filtering internals, and hidden system models to declutter the Admin UI.

8/ Website Builder: Page Settings completely rebuilt on the new FormModel architecture with proper extension points — `PageSettingsGroup` for new tabs, `PageSettingsGroupModifier` to inject fields into existing ones.

9/ Plus: new `DatePicker` component with 11 picker types, Mailer configuration now via `webiny.config.ts`, Storybook upgraded to v10, SDK input validation with descriptive errors, and a pile of documentation.

10/ Release notes & upgrade guide:
Changelog: https://www.webiny.com/docs/release-notes/6.3.0/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/6.3.0/upgrade-guide
