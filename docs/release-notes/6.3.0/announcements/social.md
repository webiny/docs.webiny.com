Webiny 6.3.0 is here, and it's one of our most feature-rich releases yet 🚀

This release introduces AI PowerUps, bringing intelligent content generation directly into the Website Builder. Configure OpenAI or Anthropic in your Admin settings, then use natural language prompts to generate page sections and content. The File Manager also gets smarter — uploaded images are now automatically enriched with AI-generated tags and descriptions, making your media library instantly more searchable without manual effort.

The admin interface sees several quality-of-life improvements. A new Dev Tools sidebar section consolidates the GraphQL Playground and SDK Playground links with proper permission controls. The new DatePicker component supports everything from simple date selection to date ranges and multiple selections. Page Settings has been completely rebuilt using our new FormModel architecture, making it far easier to extend with custom settings groups and fields.

For developers, this release brings a powerful new FormModel API for building declarative admin forms with tabs, validation, computed fields, and conditional logic. The SDK now includes a tasks module for triggering and managing background tasks from external applications. Speaking of background tasks, they can now be configured to clean up after themselves automatically. We've also added a built-in encryption service using AES-256-GCM, and the mailer now supports configuration directly in webiny.config.ts.

On the infrastructure side, TypeScript has been upgraded to 6.0.3, Storybook to version 10, and numerous dependency updates improve security and compatibility. The upgrade command now includes a force flag and better default logging, while old Pulumi plugin versions are automatically cleaned up to save disk space.

We're excited to see what you build with these new capabilities. Give 6.3.0 a try and let us know what you think.

Changelog: https://www.webiny.com/docs/release-notes/6.3.0/changelog
Upgrade guide: https://www.webiny.com/docs/release-notes/6.3.0/upgrade-guide
