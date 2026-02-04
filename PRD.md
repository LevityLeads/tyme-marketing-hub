# Tyme Marketing Hub - Product Requirements Document

## Overview

**Product Name:** Tyme Marketing Hub  
**Tagline:** Your marketing agency in your pocket  
**Purpose:** AI-powered marketing content creation platform for TymeBank's brand and marketing teams

## Problem Statement

Marketing teams need to create consistent, on-brand content across multiple channels quickly. Traditional workflows involve multiple tools, agencies, and approval cycles that slow down content production.

## Solution

A centralized AI-powered hub where marketing teams can:
- Generate on-brand content instantly
- Maintain brand consistency across all channels
- Create, edit, and export content for social, SEO, paid ads, and video
- Access brand assets and guidelines in one place

## Target Users

- TymeBank Marketing Team
- Content Creators
- Social Media Managers
- Performance Marketing Specialists

## Core Features

### 1. Social Content Studio
- AI-generated social media posts
- Platform-specific formatting (Instagram, Twitter/X, LinkedIn, Facebook, TikTok)
- Hashtag suggestions
- Carousel/multi-image post creator
- Caption generator with brand voice

### 2. SEO Content Engine
- Blog post generator
- Meta description writer
- Keyword optimization suggestions
- Content briefs and outlines
- Long-form article creation

### 3. Video Maker
- Short-form video creator (Reels, TikTok, Shorts)
- Text-to-video generation
- Template library
- Animated text overlays
- Background music integration

### 4. Paid Ads Creator
- Ad copy generator (Google, Meta, LinkedIn)
- A/B variant creator
- Headline/description combinations
- Ad preview mockups
- Performance-focused copy suggestions

### 5. Brand Assets Library
- Logo variations
- Color palette reference
- Typography guidelines
- Image library
- Template downloads

### 6. Analytics Dashboard
- Content performance tracking
- Engagement metrics
- Top performing content
- Publishing calendar
- Team activity

## Design Requirements

### Brand Guidelines (TymeBank)

**Colors:**
- Primary Background: `#0A0A0A` (near black)
- Secondary Background: `#1A1A1A` (dark grey)
- Card Background: `#1F1F1F` (slightly lighter)
- Primary Accent: `#00E5CC` (cyan/turquoise)
- Secondary Accent: `#00B8A3` (darker cyan)
- Text Primary: `#FFFFFF` (white)
- Text Secondary: `#9CA3AF` (grey)
- Border/Lines: `#2A2A2A` (subtle grey)

**Typography:**
- Headings: Bold, sans-serif (Inter or similar)
- Body: Regular weight, clean sans-serif
- Large, impactful headlines
- Clear hierarchy

**Visual Elements:**
- Dark mode only
- Thin grey wavy/curved decorative lines
- Subtle gradients (cyan glow effects)
- Rounded corners on cards
- Clean, minimal iconography
- Glassmorphism effects where appropriate

**Logo:**
- TymeBank stacked lines logo (header)
- Cyan accent version for dark backgrounds

## Technical Requirements

### Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Vercel

### Pages

1. **Dashboard** (`/`)
   - Welcome message
   - Quick action cards for each feature
   - Recent activity feed
   - Stats overview

2. **Social Studio** (`/social`)
   - Post creator interface
   - Platform selector
   - Generated content preview
   - Export options

3. **SEO Content** (`/seo`)
   - Content type selector
   - AI generation interface
   - Editor preview
   - SEO score indicator

4. **Video Maker** (`/video`)
   - Template gallery
   - Video editor interface
   - Preview player
   - Export options

5. **Paid Ads** (`/ads`)
   - Platform selector
   - Ad copy generator
   - Preview mockups
   - Variant comparisons

6. **Brand Assets** (`/brand`)
   - Asset categories
   - Download options
   - Usage guidelines

## Prototype Scope

This is a **visual prototype only** - functionality is simulated:
- AI generation shows placeholder/demo content
- Forms accept input but don't process
- Navigation works between pages
- UI interactions (hover, click) are functional
- No backend required

## Success Metrics (Future)

- Content creation time reduction
- Brand consistency score
- User adoption rate
- Content output volume
- Team satisfaction

## Timeline

**Prototype (Today):** Visual demo for stakeholder presentation  
**Phase 1:** Core features with AI integration  
**Phase 2:** Analytics and collaboration features  
**Phase 3:** Advanced video and automation

---

*Document created for TymeBank partnership demonstration*
