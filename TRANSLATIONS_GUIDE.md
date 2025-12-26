# Translations Guide - Simple & Clean Setup

## ✅ What We Installed

**next-i18next** - The simplest and most popular i18n library for Next.js Pages Router

## 📁 File Structure

```
public/
  locales/
    fr/
      common.json    ← French translations
    en/
      common.json    ← English translations
```

## 🎯 How It Works (Dead Simple)

### 1. **Translation Files** (`public/locales/[locale]/common.json`)
   - Simple JSON files with nested keys
   - Example: `"nav": { "home": "Accueil" }` → Use as `t("nav.home")`

### 2. **In Components/Pages**
   ```jsx
   import { useTranslation } from "next-i18next";
   
   function MyComponent() {
     const { t } = useTranslation("common");
     return <h1>{t("nav.home")}</h1>; // "Accueil" or "Home"
   }
   ```

### 3. **In Pages (requires getStaticProps)**
   ```jsx
   export async function getStaticProps({ locale }) {
     return {
       props: {
         ...(await serverSideTranslations(locale, ["common"])),
       },
   }
   ```

### 4. **Language Switcher**
   - Already added to Navigation component
   - Users click FR/EN buttons to switch languages
   - URL changes automatically (e.g., `/fr/about` → `/en/about`)

## 🚀 How to Add New Translations

### Step 1: Add to JSON files

**`public/locales/fr/common.json`**
```json
{
  "mySection": {
    "title": "Mon Titre",
    "description": "Ma description"
  }
}
```

**`public/locales/en/common.json`**
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My description"
  }
}
```

### Step 2: Use in your component
```jsx
const { t } = useTranslation("common");
<h1>{t("mySection.title")}</h1>
```

## 📝 Variables in Translations

Use `{{variable}}` for dynamic content:

**JSON:**
```json
{
  "welcome": "Welcome, {{name}}!"
}
```

**Component:**
```jsx
{t("welcome", { name: "John" })}
```

## 🔧 Configuration Files

- **`next-i18next.config.js`** - Main config (locales, default language)
- **`next.config.js`** - Includes i18n config
- **`pages/_app.js`** - Wrapped with `appWithTranslation`

## ✨ Features

- ✅ Automatic language detection (browser settings)
- ✅ URL-based routing (`/fr/page`, `/en/page`)
- ✅ Language switcher component
- ✅ Simple JSON-based translations
- ✅ Type-safe (if you add TypeScript later)

## 🎨 Current Status

✅ **Translated:**
- Navigation
- Footer
- Home page (`index.js`)
- About page (`about.js`)

⏳ **Still need translations:**
- Interviews page (`pages/interviews.js`)
- News page (`pages/news.js`)
- Any other components with hardcoded text

## 💡 Pro Tips

1. **Keep keys organized** - Use nested objects like `nav.home`, `footer.description`
2. **One namespace** - We're using `"common"` for everything (simple!)
3. **Add more languages** - Just create new folders (`es/`, `de/`, etc.) and add to config
4. **Test both languages** - Visit `/fr` and `/en` URLs to verify

## 🐛 Troubleshooting

**Translations not showing?**
- Make sure `getStaticProps` is in your page
- Check JSON syntax (valid JSON!)
- Restart dev server after adding translations

**Language switcher not working?**
- Check browser console for errors
- Verify `next-i18next.config.js` has correct locales

---

That's it! Dead simple. Just edit JSON files and use `t("key")` in your components. 🎉

