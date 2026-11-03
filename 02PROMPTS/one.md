Act as a Senior UI/UX Designer and Front-End Architect with strong expertise in:

- Astro
- React
- Server-side JavaScript
- HTML5
- CSS / SCSS
- Responsive Web Design
- Accessibility / WCAG
- Enterprise financial-services website UX
- Component-driven frontend architecture

I am attaching the existing implementation of a "Contact Us" page from our Astro-based website.

The website uses Astro with server-side JavaScript and React-based components where required.

Your task is to analyze the attached page and redesign/improve the UI and layout of the "Contact Us" page while STRICTLY maintaining consistency with the existing website theme.

IMPORTANT:
Do not create an entirely new visual design language.
First understand the existing design system from the supplied code/assets and then improve the page within that system.

==================================================
1. FIRST ANALYZE THE EXISTING PAGE
==================================================

Before proposing changes, inspect the attached source carefully and identify:

- Existing page structure
- Astro components
- React components
- Shared/layout components
- CSS/SCSS/Tailwind or other styling approach
- Design tokens
- Primary and secondary colors
- Typography hierarchy
- Font sizes and font weights
- Border radius
- Shadows
- Spacing system
- Grid/container widths
- Button styles
- Card styles
- Iconography
- Form-control styling
- Header/navigation pattern
- Breadcrumb pattern
- Footer pattern
- Mobile/responsive behavior

Also identify reusable components already available in the implementation.

Do NOT unnecessarily introduce new UI libraries or dependencies.

==================================================
2. REDESIGN THE CONTACT US PAGE
==================================================

Improve the page so that it feels:

- Modern
- Premium
- Clean
- Trustworthy
- Professional
- Financial-services appropriate
- Easy to scan
- Mobile friendly
- Consistent with the rest of the website

The new design should NOT look like a standalone microsite.

It should feel like a natural improvement of the existing website.

==================================================
3. PROPOSE A BETTER INFORMATION ARCHITECTURE
==================================================

Evaluate whether the page should follow a structure similar to:

A. Breadcrumb
Home > Contact Us

B. Hero / Intro Section
- "Contact Us" heading
- Short supportive description
- Optional contextual visual/icon only if consistent with existing theme

C. Quick Contact / Help Options

Create visually attractive cards or tiles for the primary ways customers can get help.

Potential options may include:

- Customer Support
- Call Us
- Chat / Virtual Assistant
- Email / Write to Us
- Locate a Branch
- Existing Customer Support
- New Product Enquiry

Do NOT invent telephone numbers, email addresses, URLs, timings, SLAs, branch counts, or support information.

Reuse only values present in the supplied implementation/data.

D. "How can we help you?" Section

Where appropriate, allow users to select their requirement through cards, tabs, accordions, or another suitable interaction.

Examples could include:

- Loans
- Fixed Deposits
- Cards
- Insurance
- Investments
- Payments
- Account / Profile
- Other Requests

Only use categories supported by the existing implementation or supplied data.

E. Existing Customer Help

If relevant, provide a prominent path for existing customers to:

- Access account support
- Raise a service request
- Track an existing request
- Find commonly required help

F. Additional Help

Consider whether the page requires links/cards for:

- FAQs / Help Centre
- Branch Locator
- Grievance Redressal
- Complaints / Escalation

Again, don't fabricate links or information.

G. Bottom CTA

Finish with a clean assistance section such as:

"Still need help?"

Provide only CTAs supported by existing functionality.

==================================================
4. UX IMPROVEMENTS
==================================================

Improve the user journey, not merely the visual styling.

Focus on:

- Reducing cognitive load
- Clear visual hierarchy
- Making primary actions immediately visible
- Reducing unnecessary text
- Logical grouping of contact methods
- Strong CTA hierarchy
- Progressive disclosure
- Avoiding excessive cards
- Avoiding excessive borders
- Appropriate whitespace
- Readable content widths
- Clear hover/focus/active states

A customer should be able to understand within a few seconds:

1. Where to get help
2. Which contact channel to use
3. What action to take next

==================================================
5. RESPONSIVE DESIGN
==================================================

Design the page mobile-first.

Consider these approximate breakpoints unless the existing project already defines its own:

Mobile:
320px - 767px

Tablet:
768px - 1023px

Desktop:
1024px+

Reuse existing project breakpoints whenever available.

Desktop layouts may use 3 or 4-column card arrangements where appropriate.

Tablet may use 2 columns.

Mobile should normally stack components vertically.

Ensure:

- No horizontal scrolling
- Comfortable touch targets
- Suitable spacing
- Responsive typography
- Cards resize naturally
- Buttons remain easy to tap

==================================================
6. ACCESSIBILITY
==================================================

Ensure the improved page follows good WCAG practices.

Specifically check:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Color contrast
- Form labels
- ARIA attributes only where necessary
- Accessible link/button labels
- Minimum practical touch-target sizing
- Screen-reader friendly structure

Do not sacrifice accessibility for visual appearance.

==================================================
7. PERFORMANCE AND ASTRO ARCHITECTURE
==================================================

The implementation must respect Astro's architecture.

Prefer:

- Static Astro components for static content
- React only where client-side interaction is actually necessary
- Minimal client-side JavaScript
- Existing shared components
- Existing design tokens
- Existing CSS strategy

Avoid unnecessarily converting the entire page to React.

Avoid unnecessary hydration.

Where React islands are used, recommend the most appropriate Astro directive such as:

client:load
client:idle
client:visible

Use them only where justified.

==================================================
8. DO NOT BREAK EXISTING FUNCTIONALITY
==================================================

Preserve:

- Existing business logic
- Existing URLs
- Existing API integration
- Existing analytics/tracking
- Existing server-side behavior
- Existing SEO metadata
- Existing form submission
- Existing validation
- Existing routing
- Existing component interfaces

If you recommend changing any of these, explain why before modifying them.

==================================================
9. VISUAL DESIGN DIRECTION
==================================================

Use the existing website as the source of truth.

Improve the design through:

- Better spacing
- Strong typography hierarchy
- Consistent card heights
- Better icon positioning
- Clear CTAs
- Subtle borders
- Restrained shadows
- Consistent border radius
- Better section separation
- Improved alignment
- Cleaner content density

Avoid:

- Random gradients
- Excessive shadows
- Glassmorphism unless already used
- Oversized hero banners
- Too many colors
- Decorative animation
- Generic SaaS-dashboard styling
- Unnecessary carousels/sliders
- Completely new design tokens

==================================================
10. OUTPUT REQUIRED
==================================================

Provide the response in the following sequence.

STEP 1: Existing UI Audit
Explain the current:
- Layout
- Components
- Theme
- UX issues
- Visual inconsistencies
- Responsive issues

STEP 2: Recommended Layout
Show the proposed page structure clearly.

For example:

Breadcrumb
↓
Contact Us Hero
↓
Quick Help / Contact Options
↓
How Can We Help?
↓
Product / Service Support
↓
Existing Customer Support
↓
FAQ / Branch / Grievance Options
↓
Still Need Help CTA

Adjust this structure based on the actual supplied implementation.

STEP 3: Desktop Wireframe
Provide a simple text-based structural wireframe showing the page hierarchy.

STEP 4: Mobile Wireframe
Show how the same interface should reorganize for mobile.

STEP 5: UI/UX Improvement Summary
Create a table with:

Current Issue | Recommended Change | UX Benefit | Priority

Use priorities:
P0 = critical
P1 = important
P2 = enhancement

STEP 6: Implementation
Provide production-quality Astro / React / CSS code for the redesigned page.

IMPORTANT:
Modify the supplied implementation rather than producing disconnected sample code.

Reuse existing:
- Components
- imports
- utilities
- design tokens
- classes
- data structures
- URLs

Clearly identify any new files/components you introduce.

STEP 7: Code Change Summary
For each file provide:

File
What Changed
Reason
Potential Impact

STEP 8: Validation Checklist
Verify:

[ ] Desktop responsive
[ ] Tablet responsive
[ ] Mobile responsive
[ ] Keyboard accessible
[ ] WCAG-friendly
[ ] Astro SSR compatible
[ ] Minimal hydration
[ ] Existing navigation preserved
[ ] Existing tracking preserved
[ ] Existing APIs/business logic preserved
[ ] No unnecessary dependencies added
[ ] Theme consistency maintained

==================================================
FINAL REQUIREMENT
==================================================

The final result should look like an evolution of the existing website, NOT a completely redesigned website.

Prioritize:

Existing Design System
        +
Improved Information Architecture
        +
Modern UI
        +
Clear Contact Journeys
        +
Responsive UX
        +
Accessibility
        +
Astro Performance

Before generating code, thoroughly inspect every supplied file and base your recommendation on the actual implementation rather than assumptions.