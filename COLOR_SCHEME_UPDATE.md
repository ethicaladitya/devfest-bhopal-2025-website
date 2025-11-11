# Google Material Design Color Scheme Update

## Summary
Updated the entire website color palette from custom DevFest colors to Google's official Material Design standard theme colors.

## Color Changes

### Primary Brand Colors
| Element | Old Color | New Color | Name |
|---------|-----------|-----------|------|
| Blue | `#4285F4` | `#4285F4` | Google Blue (unchanged) |
| Red | `#EA4335` | `#DB4437` | Material Red |
| Yellow | `#FBBC04` | `#F4B400` | Material Yellow |
| Green | `#34A853` | `#0F9D58` | Material Green |

### New Material Design Variables Added
- **Primary Blue Variants**: `#1A73E8` (primary), `#1765CC` (dark), `#4285F4` (light)
- **Secondary Colors**: Green `#1E8E3E`, Yellow `#F9AB00`, Red `#D93025`
- **Grey Scale**: 10 shades from `#F8F9FA` (grey-50) to `#202124` (grey-900)
- **Text Colors**: Primary, secondary, disabled, and hint states
- **Border Colors**: Light, medium, and dark variants

### Gradient Updates
| Gradient | Old | New |
|----------|-----|-----|
| Primary | `#4285F4 → #34A853 → #FBBC04 → #EA4335` | `#4285F4 → #0F9D58 → #F4B400 → #DB4437` |
| Hero | `#4285F4 → #9C27B0 → #EA4335` | `#1A73E8 → #1E8E3E → #D93025` |

## Files Modified

### CSS Files
- `style.css` - Main stylesheet with comprehensive color system update

### HTML Files
- `index.html` - Hero section gradient backgrounds
- `partners.html` - Gradient background
- `tickets.html` - CSS variables, hero gradient, and border gradients

## Benefits of Material Design Colors

1. **Official Google Branding**: Aligns with Google's design language
2. **Better Accessibility**: Material colors meet WCAG contrast requirements
3. **Consistent Experience**: Matches Google products (Search, Chrome, Android)
4. **Professional Appearance**: Industry-standard color palette
5. **Future-Proof**: Based on Google's maintained design system

## Browser Compatibility
All color changes are backward compatible and work with:
- Chrome 49+
- Firefox 54+
- Safari 10+
- Edge 79+

## Legacy Support
The old DevFest color variables are maintained as aliases to ensure no breaking changes for existing code.

---
**Updated**: November 4, 2025
**Applied to**: DevFest Bhopal 2025 Website
