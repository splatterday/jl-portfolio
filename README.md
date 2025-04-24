# John Lee – Front-End Engineer Portfolio

This portfolio site is built with **Next.js, React, TypeScript, Tailwind CSS**, and includes testing with **Vitest** and CI/CD through **GitHub Actions**.

It's designed not just as a portfolio but as a reflection of how I approach real production work:
- **Accessible, responsive markup** (ARIA, role attributes, WCAG considerations)
- **SSR/SSG readiness** using Next.js
- **Automated testing and deploy pipeline** via GitHub Actions

While this is not a "complex app," I treat even simple projects as an opportunity to maintain best practices across the stack.

## 🚀 Technologies
- [x] React (w/ TypeScript)
- [x] Next.js (with SSG/SSR support)
- [x] Tailwind CSS (with custom palette)
- [x] Shadcn/ui component primitives
- [x] Vitest + React Testing Library
- [x] GitHub Actions for CI/CD

## 🧪 Testing Philosophy
This project includes basic unit tests for key interactive components (menus, toggle behavior, experience selection).  
Animations are disabled during tests to ensure reliable assertions.

All tests run automatically in the CI pipeline on **push and pull request to main**.

> ⚠️ This repo is not intended as a full-featured application. It’s here to represent my approach to maintainability, accessibility, and build hygiene.

## 🔒 CI/CD Status
![CI](https://github.com/splatterday/jl-portfolio/actions/workflows/test.yml/badge.svg)
