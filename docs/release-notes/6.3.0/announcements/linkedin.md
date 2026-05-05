Webiny 6.3.0 is here 🚀

This release introduces AI PowerUps — a major new capability that brings AI-powered content generation directly into the Website Builder. You can now configure OpenAI or Anthropic providers in Admin settings, then use natural language prompts to generate page sections and content. Images uploaded to the File Manager are automatically enriched with AI-generated tags and descriptions, making your media library more searchable without manual effort.

For developers building custom admin interfaces, there's a new FormModel API that lets you define forms declaratively with full support for layout primitives, field validation, computed fields, and conditional logic. Page Settings in the Website Builder has been completely rebuilt on this architecture, with new extension points that let you add custom settings groups or inject fields into existing ones without modifying core code.

The SDK gains a new tasks module for managing background tasks from external applications — list definitions, trigger executions, retrieve logs, and abort running tasks. Input validation has been significantly improved across all SDK methods, returning descriptive errors for type mismatches and misspelled fields instead of silently failing. On the infrastructure side, there's now a built-in encryption service using AES-256-GCM, properly typed Pulumi extension handlers, and the Infra.Env.useEnv hook for reading deployment environment names in your extensions.

This release also includes TypeScript 6.0.3 with bundler resolution, Storybook 10, self-cleaning background tasks, mailer configuration via webiny.config.ts, and fixes for Tailwind CSS builds that were leaking filesystem paths into production bundles.

Give 6.3.0 a try and let us know how it works for your projects. We're excited to see what you build with AI PowerUps.

Changelog: https://www.webiny.com/docs/release-notes/6.3.0/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/6.3.0/upgrade-guide
