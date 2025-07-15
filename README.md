# er1nz_firefox-user.js
**Comprehensive configuration file for Firefox and Zen-based browsers, meticulously crafted to enhance privacy, security, and performance.**

**Serves as a personal collection of tweaks and settings, combining the best practices from popular hardening projects like Betterfox and Arkenfox, along with custom user overrides.
Tested on a Windows PC, Zen Browser.**

**Key Features:**
1. Performance Boost (Fastfox): Optimizes network settings, adjusts cache parameters, and disables speculative loading to provide a faster, more responsive browsing experience.
2. Enhanced Security (Securefox): Aggressively disables telemetry, crash reporting, and data collection. It hardens browser security by disabling the built-in password and form managers, enforcing strict certificate pinning, and blocking remote Safe Browsing checks to minimize data leaks.
3. Privacy Focused: Implements strict tracking protection, disables Firefox Sync and Pocket integration, and blocks access to sensitive permissions like geolocation, camera, and notifications by default.
4. Decluttered UI (Peskyfox & Customizations): Cleans up the user interface by removing sponsored content, disabling intrusive recommendations, hiding unnecessary UI elements like the bookmark bar, and streamlining the new tab page. It also includes quality-of-life improvements like text-only zoom and disabling annoying popups.
5. User Control: Provides a solid foundation for users to build upon. The file is well-documented, with clear sections for different configurations, making it easy to customize and add personal overrides.
This user.js is ideal for users who want to take full control of their browser, prioritizing a secure, private, and efficient web experience over default features.

**Quick Installation Guide:**
1. Open your browser (Firefox, Zen, or any other fork).
2. Navigate to the about:profiles page by typing it into the address bar and pressing Enter.
You will see a list of one or more profiles. Identify the profile that is currently in use (it will usually say "This is the profile in use and it cannot be deleted.").
3. Click the "Open Directory" button next to the "Root Directory" path for that profile. This will open your profile folder in your system's file explorer.
4. Download or copy the user.js file into this folder. If a user.js file already exists, you can overwrite it (be sure to back it up first if you have custom settings you want to save).
5. Restart your browser completely for the new settings to take effect.
To make any lasting changes, you must edit the user.js file directly, as any modifications made in about:config will be overwritten by the user.js on the next restart.

**Recomended browser extensions:**

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) with [my settings](https://github.com/er1nz/er1nz_firefox-user.js/blob/ff2aa7e0051fbd12d97217065c61d169348db597/my-ublock-backup_2025-07-16_01.15.49.txt) 

- [Bitwarden Password Manager](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [Cookie AutoDelete](https://addons.mozilla.org/en-US/firefox/addon/cookie-autodelete/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [I still don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/istilldontcareaboutcookies/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [LocalCDN](https://addons.mozilla.org/en-US/firefox/addon/localcdn-fork-of-decentraleyes/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [Port Authority](https://addons.mozilla.org/en-US/firefox/addon/port-authority/)

- [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)

- [SponsorBlock](https://addons.mozilla.org/ru/firefox/addon/sponsorblock/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)
  
- [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)

- [Bonjourr](https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)
  
- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)

- [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)

- [Riffle](https://addons.mozilla.org/ru/firefox/addon/riffle-searchable-heading/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (Optional)
