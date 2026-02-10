# Common Components

This folder contains reusable components that can be used across the entire application.

## Components

### Button
**File**: `Button.tsx`
**Description**: A versatile button component with multiple variants and sizes.

**Props**:
- `children`: React.ReactNode - Button content
- `href?`: string - If provided, renders as a Link
- `onClick?`: () => void - Click handler for button
- `variant?`: "primary" | "secondary" | "outline" - Button style variant
- `size?`: "sm" | "md" | "lg" - Button size
- `className?`: string - Additional CSS classes
- `type?`: "button" | "submit" | "reset" - Button type

**Usage**:
```tsx
import Button from "@/components/common/Button";

// As a link
<Button href="/services" variant="primary">Read More</Button>

// As a button
<Button onClick={handleClick} variant="outline" size="sm">Click Me</Button>
```

---

### FAQAccordion
**File**: `FAQAccordion.tsx`
**Description**: An accordion component for displaying FAQ items with expand/collapse functionality.

**Props**:
- `items`: FAQItem[] - Array of FAQ items
- `defaultOpenIndex?`: number - Index of the item that should be open by default

**FAQItem Interface**:
```tsx
interface FAQItem {
    id: string;
    question: string;
    answer: string;
}
```

**Usage**:
```tsx
import FAQAccordion, { FAQItem } from "@/components/common/FAQAccordion";

const faqItems: FAQItem[] = [
    { id: "1", question: "Your question?", answer: "Your answer" }
];

<FAQAccordion items={faqItems} defaultOpenIndex={0} />
```

---

### PageHero
**File**: `PageHero.tsx`
**Description**: A reusable hero banner component for page headers with background image, title, and optional subtitle.

**Props**:
- `title`: string - Main heading text
- `subtitle?`: string - Optional subtitle text
- `backgroundImage`: string - Path to background image
- `height?`: "sm" | "md" | "lg" - Hero section height (default: "md")

**Usage**:
```tsx
import PageHero from "@/components/common/PageHero";

<PageHero
    title="About Us"
    subtitle="Your trusted partner in smart mobility solutions"
    backgroundImage="/images/about/hero-banner.jpg"
    height="md"
/>
```

---

## Adding New Common Components

When adding new reusable components to this folder:

1. Create the component file in this directory
2. Export the component as default
3. Export any related types/interfaces
4. Document the component in this README
5. Use the component across the application with consistent imports
