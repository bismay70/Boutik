export const i18n = {
  locales: [
    { code: 'en-US', name: 'English', icon: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', icon: '🇮🇳' },
    { code: 'bn', name: 'বাংলা', icon: '🇧🇩' },
    { code: 'gu', name: 'ગુજરાતી', icon: '🇮🇳' },
    { code: 'mr', name: 'मराठी', icon: '🇮🇳' },
    { code: 'ml', name: 'മലയാളം', icon: '🇮🇳' },
    { code: 'or', name: 'ଓଡ଼ିଆ', icon: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', icon: '🇮🇳' },
    { code: 'ta', name: 'தமிழ்', icon: '🇮🇳' },
  ],
  defaultLocale: 'en-US',
}

export const getDirection = (locale: string) => {
  return 'ltr'
}
export type I18nConfig = typeof i18n
export type Locale = I18nConfig['locales'][number]
