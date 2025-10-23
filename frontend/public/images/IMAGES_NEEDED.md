# Required Images for UPS Digital Sales Assistant

Please place the following images in their respective folders to complete the UI.

## Logo & Branding

### `/public/images/`

- `ups-logo.png` - UPS shield logo (brown and gold)
  - Dimensions: 200x200px or larger (will be scaled)
  - Format: PNG with transparent background
  - Used in: Header, Loader

## Chatbot

### `/public/images/`

- `eia-avatar.jpg` - Avatar for Eia chatbot assistant
  - Dimensions: 200x200px
  - Format: JPG or PNG
  - Style: Friendly, professional female avatar with warm tones
  - Fallback: System will show gradient circle if not provided

## People/Contacts

### `/public/images/people/`

All contact photos should be:

- Dimensions: 300x300px
- Format: JPG or PNG
- Style: Professional headshots with neutral backgrounds

**Under Armour Contacts:**

- `shawn-curran.jpg` - Shawn Curran (Chief Supply Chain Officer)
- `kevin-plank.jpg` - Kevin A. Plank (CEO & Co-founder)
- `dave-bergman.jpg` - Dave Bergman (CFO)
- `eric-liedtke.jpg` - Eric Liedtke (Brand President)
- `yassine-saidi.jpg` - Yassine Saidi (Chief Product Officer)

**LinkedIn Connections:**

- `sarah-mitchell.jpg` - Sarah Mitchell (Nike VP of Logistics)
- `james-chen.jpg` - James Chen (adidas Director of Supply Chain)

**UPS Connections:**

- `robert-thompson.jpg` - Robert Thompson (UPS Capital Account Executive)
- `lisa-anderson.jpg` - Lisa Anderson (UPS Solutions Architect)

## Competitor Logos

### `/public/images/competitors/`

All competitor logos should be:

- Format: PNG with transparent background
- Height: ~100-200px (will be scaled to fit)
- Style: Official brand logos

**Required logos:**

- `nike.png` - Nike swoosh logo
- `adidas.png` - adidas logo
- `puma.png` - Puma logo
- `lululemon.png` - Lululemon logo

## Additional Assets

### `/public/images/`

- `qr-code.png` - QR code for email signature
  - Dimensions: 200x200px
  - Format: PNG
  - Used in: Email draft modal signature

### `/public/audio/`

- `sales-insights-podcast.mp3` - AI-generated sales insights podcast
  - Format: MP3
  - Bitrate: 128kbps or higher recommended
  - Length: 2-10 minutes suggested
  - Used in: Home page AI Podcast Player
  - Content: AI analysis of company insights and sales opportunities

## Fallback Behavior

The application has built-in fallbacks for all images:

- **Logos**: Will show colored background squares
- **Avatars**: Will show gradient circles with initials
- **QR Code**: Will show gray placeholder

This means the app will function properly even without images, but providing them will enhance the visual experience.

## Image Sources

You can use:

1. Professional stock photos from sites like Unsplash, Pexels
2. AI-generated avatars from tools like ThisPersonDoesNotExist
3. Company official photos (for UPS logo)
4. Generated QR codes from any QR code generator

## Quick Setup

1. Create the folder structure:

   ```
   public/
     images/
       people/
   ```

2. Add images with the exact filenames listed above

3. Restart the development server to see the changes
