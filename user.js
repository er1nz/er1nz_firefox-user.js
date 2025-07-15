/*** My Firefox user.js overrides ***/
/* er1nz <https://t.me/er1nz01> */

//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * BetterZen                                                                *
 * "Ex nihilo nihil fit"                                                    *
 * version: 140                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
****************************************************************************/
/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** NETWORK ***/
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.speculative-parallel-limit", 20);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("browser.places.speculativeConnect.enabled", true);
user_pref("network.prefetch-next", true);

/****************************************************************************
 * SECTION: TEST FIXES                                                     *
****************************************************************************/

/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.jsbc_compression_level", 3);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);


/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true);

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);

/****************************************************************************
 * END: TEST FIXES                                                        *
****************************************************************************/

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** SECUREFOX ***/
user_pref("signon.rememberSignons", false); // disable password manager
user_pref("extensions.formautofill.addresses.enabled", false); // disable address manager
user_pref("extensions.formautofill.creditCards.enabled", false); // disable credit card manager
user_pref("browser.urlbar.suggest.recentsearches", false);  // unselect "Show recent searches" for clean UI
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
//user_pref("browser.urlbar.groupLabels.enabled", false); // hide Firefox Suggest label in URL dropdown box
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening
user_pref("signon.autofillForms", false); // unselect "Autofill logins and passwords" for clean UI
user_pref("signon.generation.enabled", false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("signon.firefoxRelay.feature", ""); // unselect suggestions from Firefox Relay for clean UI
user_pref("browser.safebrowsing.downloads.enabled", false); // deny SB to scan downloads to identify suspicious files; local checks only
user_pref("browser.safebrowsing.downloads.remote.url", ""); // enforce no remote checks for downloads by SB
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.allowOverride", false); // do not allow user to override SB
user_pref("browser.search.update", false); // do not update opensearch engines
user_pref("network.trr.confirmationNS", "skip"); // skip TRR confirmation request
user_pref("extensions.webextensions.restrictedDomains", ""); // remove Mozilla domains so adblocker works on pages
user_pref("identity.fxaccounts.enabled", false); // disable Firefox Sync
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}"); // disable the Firefox View tour from popping up for new profiles
user_pref("accessibility.force_disabled", 1); // disable Accessibility features
user_pref("security.cert_pinning.enforcement_level", 2); // strict public key pinning
user_pref("captivedetect.canonicalURL", ""); // disable captive portal detection
user_pref("network.captive-portal-service.enabled", false); // disable captive portal detection
user_pref("network.connectivity-service.enabled", false); // disable captive portal detection

/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);

/** DISK AVOIDANCE ***/
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.quicksuggest.enabled", false);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
user_pref("permissions.manager.defaultsUrl", "");


/** PESKYFOX ***/
user_pref("devtools.accessibility.enabled", false); // removes un-needed "Inspect Accessibility Properties" on right-click
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Settings>Home>Firefox Home Content>Recent Activity>Shortcuts>Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Settings>Home>Firefox Home Content>Recent Activity>Recommended by Pocket>Sponsored Stories  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // Settings>Home>Firefox Home Content>Recent Activity>Bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // Settings>Home>Firefox Home Content>Recent Activity>Most Recent Download
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Settings>Home>Firefox Home Content>Recent Activity>Visited Pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Settings>Home>Firefox Home Content>Recent Activity>Pages Saved to Pocket
//user_pref("browser.download.useDownloadDir", true); // use direct downloads
//user_pref("browser.download.folderList", 0); // 0=desktop, 1=downloads, 2=last used
user_pref("browser.toolbars.bookmarks.visibility", "never"); // always hide bookmark bar
user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.urlbar.suggest.history", false); // Browsing history; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.bookmark", false); // Bookmarks; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage", false); // Open tabs; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.topsites", false); // Shortcuts; disable dropdown suggestions with empty query
user_pref("browser.urlbar.suggest.engines", false); // Search engines; tab-to-search
user_pref("browser.urlbar.quicksuggest.enabled", false); // hide Firefox Suggest UI in the settings
//user_pref("browser.urlbar.maxRichResults", 1); // minimum suggestion needed for URL bar autofill
user_pref("browser.bookmarks.max_backups", 0); // minimize disk use; manually back-up
user_pref("view_source.wrap_long_lines", true);  // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping", true);  // wrap lines in devtools
user_pref("browser.zoom.full", false); // text-only zoom, not all elements on page
//user_pref("pdfjs.sidebarViewOnLoad", 2); // force showing of Table of Contents in sidebar for PDFs (if available)
user_pref("layout.word_select.eat_space_to_next_word", false); // do not select the space next to a word when selecting a word
//user_pref("browser.tabs.loadInBackground", false); // CTRL+SHIFT+CLICK for background tabs; Settings>General>Tabs>When you open a link, image or media in a new tab, switch to it immediately
user_pref("browser.tabs.loadBookmarksInTabs", true); // force bookmarks to open in a new tab, not the current tab
user_pref("ui.key.menuAccessKey", 0); // remove underlined characters from various settings
user_pref("general.autoScroll", true); // disable unintentional behavior for middle click
user_pref("reader.parse-on-load.enabled", false); // disable reader mode
//user_pref("reader.color_scheme", "auto"); // match system theme for when reader is enabled
//user_pref("browser.urlbar.openintab", true); // stay on current site and open new tab when typing in URL bar

/****************************************************************************
 * START: ZEN-SPECIFIC OVERRIDES                                            *
****************************************************************************/
// Remove the slashes to enable the prefs

// PREF: re-enable Windows efficiency mode
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", true);

// PREF: disable new tab preload since they are off by default
//user_pref("browser.newtab.preload", false);

// PREF: show Enhance Tracking Protection shield in URL bar
// Currently bugged if you click to view what's blocked
//user_pref("zen.urlbar.show-protections-icon", true);

// PREF: Disable the Picture in picture pop-out when changing tabs
//user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);

// PREF: Disable the Picture in picture pop-out when changing tabs
//user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/TeamDominant/Betterfox/wiki/Recommended-Overrides
// Do not remove the following lines until you know what you are doing:
// user_pref("zen.theme.gradient.show-custom-colors", true);
// user_pref("zen.theme.accent-color", "#989898");
// user_pref("zen.urlbar.replace-newtab", false); // revert blank-newtab page to Mozilla's original newtab page. if true, searchbar wont be in focus on newtab page
// user_pref("browser.startup.homepage", "https://homepage.teamdominant.ru/"); // setting a custom homepage
// user_pref("browser.tabs.tabMinWidth", 45);
// user_pref("browser.uidensity", 1);
user_pref("layout.frame_rate", -1); // probably not needed
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:
/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// Reset Zen's custom scrolling prefs to their Firefox defaults before making changes!
// [1] Zen changes: https://github.com/zen-browser/desktop/blob/3932ec21f5661440c4b20796f90341a6ac725818/src/browser/app/profile/zen-browser.js#L297-L312
// [2] Firefox defaults: https://searchfox.org/mozilla-release/source/modules/libpref/init/StaticPrefList.yaml
// Then apply an example from Smoothfox
// [3] https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:


/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/


/****************************************************************************
 * START: ARKENFOX                                                          *
****************************************************************************/

/* Configure general browser settings */
user_pref("browser.tabs.closeWindowWithLastTab", false); // Prevent closing the browser when the last tab is closed
user_pref("browser.tabs.warnOnClose", false); // Disable warning when closing multiple tabs
user_pref("datareporting.usage.uploadEnabled", false); // Disable telemetry data upload
user_pref("browser.search.region", "US"); // Set the default search region to the United States

/* Configure full-screen mode settings */
user_pref("full-screen-api.warning.timeout", 0); // Remove full-screen warning timeout

/* Configure Firefox Accounts toolbar settings */
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.relayEnabled", false); // Disable Firefox Relay feature
user_pref("identity.fxaccounts.toolbar.pxiToolbarEnabled.vpnEnabled", false); // Disable VPN feature
user_pref(
  "identity.fxaccounts.toolbar.pxiToolbarEnabled.monitorEnabled",
  false
); // Disable Firefox Monitor feature

/* Disable URL bar suggestions */
user_pref("browser.urlbar.suggest.addons", false); // Disable addon suggestions
user_pref("browser.urlbar.suggest.clipboard", false); // Disable clipboard suggestions
user_pref("browser.urlbar.suggest.fakespot", false); // Disable FakeSpot suggestions
user_pref("browser.urlbar.suggest.mdn", false); // Disable MDN suggestions
user_pref("browser.urlbar.suggest.pocket", false); // Disable Pocket suggestions
user_pref("browser.urlbar.suggest.quickactions", false); // Disable quick action suggestions
user_pref("browser.urlbar.suggest.trending", false); // Disable trending suggestions
user_pref("browser.urlbar.suggest.weather", false); // Disable weather suggestions
user_pref("browser.urlbar.suggest.yelp", false); // Disable Yelp suggestions
user_pref("browser.urlbar.suggest.remotetab", false); // Disable remote tab suggestions


/* Disable saving passwords; KeePassXC */
user_pref("signon.firefoxRelay.feature", "disabled"); // Disable Firefox Relay password feature

/* Disable annoyances */
user_pref("browser.preferences.moreFromMozilla", false); // Disable "More from Mozilla" section
user_pref("browser.translations.automaticallyPopup", false); // Disable automatic translation popups

/* Customize New Tab page settings */
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Disable top sites on New Tab page
user_pref("browser.newtabpage.activity-stream.showSearch", false); // Disable search bar on New Tab page
user_pref("browser.newtabpage.activity-stream.showWeather", false); // Disable weather info on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Disable top stories on New Tab page
user_pref(
  "browser.newtabpage.activity-stream.discoverystream.sendToPocket.enabled",
  false
); // Disable "Send to Pocket" option

/* Disable Pocket integration */
user_pref("extensions.pocket.enabled", false); // Disable Pocket extension
user_pref("extensions.pocket.api", ""); // Clear Pocket API endpoint
user_pref("extensions.pocket.site", ""); // Clear Pocket site URL
user_pref("extensions.pocket.oAuthConsumerKey", ""); // Clear Pocket OAuth consumer key

/* Disable access permissions */
user_pref("permissions.default.geo", "2"); // Block location access by default
user_pref("permissions.default.camera", "2"); // Block camera access by default
user_pref("permissions.default.desktop-notification", "2"); // Block desktop notifications by default
user_pref("permissions.default.xr", "2"); // Block virtual/augmented reality device access by default

/****************************************************************************
 * END: ARKENFOX                                                            *
****************************************************************************/