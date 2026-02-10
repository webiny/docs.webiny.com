# Webiny 6.0.x Developer Documentation

This folder contains the developer documentation for Webiny 6.0.x. Below is an overview of what's covered and what you might be missing from the Webiny basics.

## 📚 What's Documented

### Get Started
- **Welcome** - Introduction to Webiny developer documentation
- **Install Webiny** - Installation guide and setup instructions

### Basic Concepts
- **Result Pattern** - Error handling without exceptions using the Result pattern
- **Dependency Injection** - Creating abstractions and implementations in Webiny

### Headless CMS
Complete documentation for extending and customizing the Headless CMS:

#### Event Handlers
- **Group Events** - Create, update, delete group event handlers
- **Model Events** - Create, update, delete, clone model event handlers
- **Entry Events** - Create, publish, unpublish, delete entry event handlers
- **Entry Extended Events** - Revision lifecycle events (create, update, delete, publish, unpublish, request changes, request review)

#### Use Cases
- **Group Use Cases** - Creating, updating, listing, getting, and deleting groups
- **Model Use Cases** - Creating, updating, listing, getting, and deleting models
- **Entry Use Cases** - Creating, publishing, unpublishing, listing, getting, and deleting entries

#### Builders
- **Group Builder** - Programmatically create content groups
- **Model Builder** - Define content models using the builder pattern

#### Examples
- **Private Model** - Creating models not exposed through GraphQL
- **Single Entry Model** - Creating singleton models for unique content

### GraphQL
- **About** - Overview of Webiny's GraphQL architecture
- **Reference** - GraphQL Schema Factory API reference
- **Example** - Complete implementation example with type definitions and resolvers

### Background Tasks
- **About** - Introduction to asynchronous task execution
- **Reference** - Task Definition API and lifecycle hooks
- **Management** - Triggering and monitoring tasks

## 🆕 Recently Added

### Dependency Injection (`basic/di.mdx`)
**Status: ✅ FULLY DOCUMENTED**

Comprehensive documentation covering Webiny's dependency injection system powered by `@webiny/di`:
- **Creating Abstractions** - Using `createAbstraction()` with prefixed naming (e.g., `Library/BookRepository`)
- **Namespace Pattern** - Organizing types with namespaces to export `Interface`, `Input`, `Error`, `Return`, and domain types
- **Creating Implementations** - Using `Abstraction.createImplementation()` with dependency arrays
- **Decorator Pattern** - Using `Abstraction.createDecorator()` to extend behavior without modification
- **Result Pattern Integration** - Proper error handling with `.isFail()` and `.value`
- **Type Safety** - Using `.Interface` types from abstractions for constructor parameters
- **Generic Examples** - Book/Author/Category domain for easy understanding
- **Import Conventions** - Correct usage of `webiny/api` and `webiny/api/logger` imports

This documentation assumes readers understand SOLID principles and focuses on Webiny's specific implementation patterns.

## 🚨 What's Missing from Webiny Basics

Based on the current documentation structure, here are the fundamental Webiny concepts that should be documented but are not yet covered:

### Critical Missing Topics

1. **✅ Dependency Injection System** - **FULLY DOCUMENTED** (`basic/di.mdx`)
   - Creating abstractions with `createAbstraction()`
   - Understanding the namespace pattern and `.Interface` types
   - Using `createImplementation()` and `createDecorator()`
   - Dependency ordering and injection
   - Result pattern integration
   - Export patterns

2. **Factory Pattern Architecture**
   - Understanding Factory interfaces
   - How factories register implementations
   - The relationship between abstractions and implementations
   - (Partially covered in Headless CMS Builders section)

3. **Event System Architecture**
   - How event dispatching works
   - Creating custom events
   - Event handler lifecycle
   - Event priorities and ordering
   - (Event handlers documented in Headless CMS section, but core event system not explained)

4. **Logger Service**
   - Using the Logger interface
   - Log levels and formatting
   - Custom log transports
   - Debugging best practices
   - (Used in examples but not documented standalone)

5. **Security & Authentication**
   - Identity system
   - Authentication handlers
   - Authorization and permissions
   - Security context

6. **Webiny Project Structure**
   - Folder organization
   - Extensions vs plugins
   - Application architecture
   - Configuration files

7. **TypeScript Patterns**
   - Namespace pattern usage
   - Interface segregation
   - Type definitions
   - Generic types and constraints

8. **Testing**
   - Unit testing patterns
   - Integration testing
   - Mocking dependencies
   - Testing event handlers

9. **Error Handling**
   - WebinyError class
   - Error codes and types
   - Error propagation
   - Custom error classes

10. **Context & Scoping**
    - Request context
    - Tenant context
    - Locale context
    - User context

11. **Database Layer**
    - Repository pattern
    - Data models
    - Querying and filtering
    - Transactions

12. **File Manager Integration**
    - File uploads
    - Image transformations
    - File management APIs

13. **API Gateway & Lambda**
    - Lambda handlers
    - API routes
    - Middleware
    - Request/response handling

14. **Admin UI Extension**
    - React components
    - Admin plugins
    - UI composition
    - State management

15. **Validation**
    - Schema validation
    - Custom validators
    - Input validation patterns

## 💡 Suggested Documentation Order

For a complete developer onboarding experience, consider adding documentation in this order:

1. **✅ Dependency Injection Basics** - **COMPLETED** - Foundation for understanding all other code
2. **✅ Result Pattern** - **COMPLETED** - Error handling without exceptions
3. **Logger Service** - Needed for debugging and examples (currently used but not documented)
4. **TypeScript Patterns** - Namespace usage, interface patterns, generics (partially covered in DI docs)
5. **Factory Pattern Overview** - Core architectural pattern (partially covered in Builders)
6. **Event System Architecture** - How events work (handlers documented, system not explained)
7. **Error Handling & WebinyError** - Complements the Result pattern
8. **Project Structure** - Understanding where code lives and how to organize extensions
9. **Context System** - Request, tenant, locale scoping
10. **Testing Strategies** - Essential for development
11. **Security Basics** - Authentication and authorization fundamentals
12. **Database Layer** - Repository pattern for custom data persistence

## 🔍 Quick Reference

- **Basic Concepts**: `/basic/`
- **Headless CMS**: `/headless-cms/`
- **GraphQL**: `/graphql/`
- **Background Tasks**: `/tasks/`
- **Navigation**: `navigation.tsx`

## 📖 Documentation Patterns

All documentation files follow these conventions:
- Frontmatter with `id`, `title`, and `description`
- "What You'll Learn" alert section with clear learning objectives
- Overview section explaining the concept concisely
- Code examples with proper TypeScript types (minimal or no comments in code)
- Real-world usage scenarios using generic examples (Book/Author/Category, not CMS-specific)
- Proper import patterns: `webiny/api`, `webiny/api/logger`, etc.
- Result pattern for error handling
- Dependency injection using abstraction methods: `Abstraction.createImplementation()`
- Namespace pattern for exporting types: `Abstraction.Interface`, `Abstraction.Input`, etc.
- Prefixed abstraction names for domain organization (e.g., `Library/BookRepository`, `Store/CreateOrder`)

## 🤝 Contributing

When adding new documentation:
1. Follow the existing file structure
2. Include working code examples
3. Use the Result pattern for error handling
4. Show dependency injection
5. Add the page to `navigation.tsx`

