# UPV RePowered
**Chrome:**

[![Chrome Web Store][chrome-badge-version]][chrome-extension]
[![Chrome Web Store][chrome-badge-users]][chrome-extension]
[![Chrome Web Store][chrome-badge-rating]][chrome-extension]

**Firefox:**

[![Mozilla Add-on][mozilla-badge-version]][mozilla-addon]
[![Mozilla Add-on][mozilla-badge-users]][mozilla-addon]
[![Mozilla Add-on][mozilla-badge-rating]][mozilla-addon]

**Github:**

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/ArnyminerZ/UPV-RePowered?label=stable%20version&style=flat-square)][latest-release-page]
[![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/ArnyminerZ/UPV-RePowered?color=orange&include_prereleases&label=preview%20version&style=flat-square)][github-releases]\
[![Firefox Download](https://img.shields.io/badge/download-firefox-green?style=flat-square&logo=firefox)][latest-release-firefox]
[![Chrome Download](https://img.shields.io/badge/download-chrome-green?style=flat-square&logo=googlechrome)][latest-release-chrome]

Extends the info provided by the UPV in the Intranet panel.

Based on: https://gist.github.com/ArnyminerZ/820e40b2584b7368f4782d91f0420595

Current functionalities:
* Provides stats on the marks of the students:
  * Number of students.
  * Number of students that went to the exam.
  * Percentage of students that went to the exam in correlation with the ones who didn't.
  * Mean of the marks of the students.
  * Percentage of students that got a mark greater or equal to 5.

Supported languages:
* 🇦🇩 Catalan (`ca`)
* 🇪🇸 Spanish (`es`)

# Installation instructions
## Extensions Store
### Chrome
*Coming soon*

### Firefox
1. Enter the Firefox's Addon Store, and search for "UPV-RePowered" or press [this link][mozilla-addon].

2. Press the "Add to Firefox" button\
![Add to Firefox](docs/install-firefox-1.png)

3. Press the "Add" button on the popup window.\
![Add to Firefox](docs/install-firefox-2.png)

4. You are ready! Just access a marks screen on [intranet.upv.es](https://intranet.upv.es/pls/soalu/sic_asi.Notes_TemaAlu_Asi?P_IDIOMA=c&p_vista=intranet).

## Manual install
### Chrome
1. Download the [latest release][latest-release-chrome].
2. Go to [chrome://extensions/](chrome://extensions/).
3. Drag and drop the downloaded zip file into this page.
4. You are ready! Just access a marks screen on [intranet.upv.es](https://intranet.upv.es/pls/soalu/sic_asi.Notes_TemaAlu_Asi?P_IDIOMA=c&p_vista=intranet).

### Firefox
1. Download the [latest release][latest-release-firefox].
2. Press <kbd>Ctrl+Shift+A</kbd> or open the dropdown menu on the top right side, and choose "Add-ons and Themes".\
![Add-ons and themes](docs/manual-install-firefox-1.png)

3. Press the cog icon to the right of "Manage your extensions".\
![Add-ons and themes](docs/manual-install-firefox-2.png)

4. Select the downloaded zip file.
5. You are ready! Just access a marks screen on [intranet.upv.es](https://intranet.upv.es/pls/soalu/sic_asi.Notes_TemaAlu_Asi?P_IDIOMA=c&p_vista=intranet).

# Changelog
## 1.0.1 - Localization
Added localized messages in Catalan and Spanish.
## 1.0.0 - Initial Release
**Current functionalities**
Provides stats on the marks of the students:
* Number of students.
* Number of students that went to the exam.
* Percentage of students that went to the exam in correlation with the ones who didn't.
* Mean of the marks of the students.
* Percentage of students that got a mark greater or equal to 5.

---
[chrome-extension]: https://example.com
[mozilla-addon]: https://addons.mozilla.org/ca/firefox/addon/upv-repowered/

[chrome-badge-version]: https://img.shields.io/chrome-web-store/v/npfnhbnfidlfkkoafboojlabnjaoldip?label=version&style=flat-square
[chrome-badge-users]: https://img.shields.io/chrome-web-store/users/npfnhbnfidlfkkoafboojlabnjaoldip?style=flat-square
[chrome-badge-rating]: https://img.shields.io/chrome-web-store/rating/npfnhbnfidlfkkoafboojlabnjaoldip?style=flat-square

[mozilla-badge-version]: https://img.shields.io/amo/v/upv-repowered?label=version&style=flat-square
[mozilla-badge-users]: https://img.shields.io/amo/users/upv-repowered?style=flat-square
[mozilla-badge-rating]: https://img.shields.io/amo/rating/upv-repowered?style=flat-square

[latest-release-chrome]: https://github.com/ArnyminerZ/UPV-RePowered/releases/latest/download/UPV-RePowered-Chrome.zip
[latest-release-firefox]: https://github.com/ArnyminerZ/UPV-RePowered/releases/latest/download/UPV-RePowered-Firefox.zip

[latest-release-page]: https://github.com/ArnyminerZ/UPV-RePowered/releases/latest
[github-releases]: https://github.com/ArnyminerZ/UPV-RePowered/releases
