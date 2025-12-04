# Animation Implementation Guide

This portfolio app now features smooth, eye-catching animations using **Framer Motion** and **GSAP**.

## Installed Packages

```bash
npm install framer-motion gsap
```

## Animation Features by Component

### 🎯 Navbar (`src/components/Navbar.jsx`)

- **GSAP**: Navbar slides down from top on page load
- **Framer Motion**:
  - Logo fades in from left
  - Menu items stagger in from top
  - Mobile menu smooth height animation
  - Mobile menu items slide in sequentially

### 🎨 Banner (`src/pages/Home/Banner.jsx`)

- **GSAP**:
  - Image scales up with bounce effect
  - Floating badges have continuous floating animation
- **Framer Motion**:
  - Social icons pop in with scale animation
  - Text content fades up sequentially
  - Waving hand emoji has continuous wave animation
  - "Say Hello" button has hover scale effect
  - Scroll indicator bounces continuously

### 📖 About Section (`src/pages/Home/AboutSection.jsx`)

- **GSAP with ScrollTrigger**:
  - Stats cards animate in when scrolled into view
- **Framer Motion**:
  - Section title fades up
  - Lottie animation slides in from left
  - Stats cards have hover lift effect
  - Download button scales on hover

### 💻 Skills (`src/pages/Home/Skills.jsx`)

- **GSAP with ScrollTrigger**:
  - Tech stack icons spin and scale in when visible
- **Framer Motion**:
  - Section titles fade up
  - Skill cards slide in from sides
  - Cards lift up on hover with shadow effect
  - Tech icons have hover scale and rotate

### 📧 Contact (`src/pages/Home/Contact.jsx`)

- **Framer Motion**:
  - Section title fades up
  - Contact cards slide in from left with stagger
  - Form fields fade up sequentially
  - Cards lift on hover
  - Submit button scales on hover/tap

### 🔗 Footer (`src/pages/Home/Footer.jsx`)

- **Framer Motion**:
  - Social icons pop in with scale
  - Icons rotate 360° on hover
  - Copyright text fades up

## Animation Patterns Used

### 1. Fade In + Slide Up

```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### 2. Slide In from Side

```javascript
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

### 3. Scale Pop In

```javascript
initial={{ opacity: 0, scale: 0 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

### 4. Hover Effects

```javascript
whileHover={{ scale: 1.05, y: -5 }}
whileTap={{ scale: 0.95 }}
```

### 5. Continuous Animation

```javascript
animate={{ y: [0, 10, 0] }}
transition={{ duration: 1.5, repeat: Infinity }}
```

### 6. GSAP Scroll Trigger

```javascript
gsap.from(element, {
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 0.6,
});
```

## Performance Tips

- ✅ `viewport={{ once: true }}` - Animations trigger only once
- ✅ Stagger delays for sequential animations
- ✅ Hardware-accelerated properties (transform, opacity)
- ✅ Minimal animation duration (0.3s - 0.8s)
- ✅ GSAP for complex timeline animations
- ✅ Framer Motion for React component animations

## Key Benefits

1. **Smooth Performance**: Hardware-accelerated animations
2. **Eye-Catching**: Subtle but noticeable effects
3. **Professional**: Consistent animation timing
4. **Responsive**: Works on all screen sizes
5. **Minimal**: Not overwhelming, enhances UX

## Customization

To adjust animation speed, modify the `duration` values:

- Fast: `0.3s`
- Normal: `0.5s - 0.6s`
- Slow: `0.8s - 1s`

To adjust delays between staggered items:

```javascript
delay: index * 0.1; // 100ms between each item
```
