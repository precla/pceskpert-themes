// ==UserScript==
// @name         PCEkspert Black Theme
// @version      0.1.0 beta
// @namespace    https://github.com/precla/pceskpert-themes/pcekspert_dark_theme.user.js
// @description  very dark forum theme
// @author       precla / pci_e3x
// @license      GPL 3.0
// @include      http://forum.pcekspert.com/
// @include      https://forum.pcekspert.com/
// @match        http://forum.pcekspert.com/*
// @match        https://forum.pcekspert.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_dark_theme.user.js
// @downloadURL  https://raw.githubusercontent.com/precla/pceskpert-themes/master/pcekspert_dark_theme.user.js
// ==/UserScript==

for (let img of document.getElementsByTagName('img')) {
    if (img.src.includes('Forum_title.gif')) {
        img.src = 'data:image/gif;base64,R0lGODlhaABQAMIEABoaGnR0dKKjpNLU1v///////////////yH5BAEKAAcALAAAAABoAFAAAAP+CLrc/jDKuUa4g+rNu5+CMIxB9p1o6g3iyApqLM8A67ohre9aeLslnnCosP1GOaKS5juSTMvoyeh8Sa8datUCxXobyNY2/C0XQ80x0IwNi9U3EVvphqPTrMCc535vfQQvLwJBezF9cG4Ei4uEIo6GKYN+Y2gDjIwjmXqRHIiJdZiiogEwnRKTlGqWo62MhKcPqaA4Ta63gZyxNXe0tYC4uFynk76fwcgWpnPFxr3I0It5bHl4iSGlmtHQ1bpYjqp/4Jfb25bDUsrhVYTZ5e8EeHJ0jrTYIvD5WlZD1TiVF/DlG2gtCZ8SP8BZqjew4Ssny3RwOYKvmMNWLy5oLFX+qkUgQhB35GFH7qIrC9kqYesYcoaySiVNYqpnrJJLhDBlYnpZc9UMnDkvCgLZc1XEFED/xNSXzVpRiF1Q7CPZ0N9TUPNUTIUoYKAgZ3fCOiXhUhVNJO/C2BM7AkwzHDSSImGJZCnGOnbCRgXRpJAMuXPFCLyr16glFXd0jD3LYlRGsU4L02AhMpy8mNWejYzTYpeEdQm7ZtKW6VycvZ7BAIZ6stcRv6kjjIU4ujDU2D1A24BsBzXuB5DvdDRNUaGN3xt8FKlrYjFdnlmRa31z9pXgo7E3at/OPWDCUpv8tOtOvrz589z/cmV8WvohwJfbu9eaEmL9uvP/qmp6A3ah/hTs+YCTQf/JwBNzA/pW4AlAhRBPCwQuiNgbz1Em4U+cJaTghRzM9g+HMaxWC4jTrbIhiXypFRqKUiFE1A/+sbiBEffBJeMHPrzI2Y04krDfiTyC8UiNTwTZoQgYFGfkjEOahd2SwCG5WoRQOkBjODFWyUCORBappSwQipjll0146M2XFehGFpoOeDgSm1Y6WQqcEKQxDp2ocAQknhX8lgAAOw==';
        break;
    }
}

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

// header + footer
addGlobalStyle(".header, .pce-footer { background-image: linear-gradient(to bottom, #3a3a3a 0%, #1a1a1a 100%); }");
// page background
addGlobalStyle("body, center, .page, html body, .alt1, .alt2, .panel, .alt1Active, .vBulletin_editor, html body div div.page div table tbody, .imagebutton, .pce-nav-izbornik-thead, .pce-nav-izbornik-thead a { background: #1a1a1a !important; }");
// borders
addGlobalStyle(".tborder { border: 1px solid #3a3a3a !important; }");
// pce-nav-izbornik : Home, pravila i pomoc...
addGlobalStyle(".pce-nav-izbornik tbody tr td, .thead, .vbmenu_control, .tcat, .button, .vbmenu_control > a, .tfoot, .pce-nav-izbornik-option, .pce-nav-izbornik-option { background-color: #2a2a2a !important; }");
// borders inside & outside tables
addGlobalStyle("html body div div.page div table, html body div div.page div table ~ table, #threadslist, .tborder { background-color: #75757565 !important; }");
// text box for reply, quick reply, new messages, quick reply panel surround:
addGlobalStyle("textarea, .panelsurround, .bginput { background: #3a3a3a !important; }");
// highlight the current page in the open topic:
addGlobalStyle(".pagenav .alt2 { background-color: #6a6a6a !important; text-decoration: underline }");
// qoute box
addGlobalStyle("html body div#posts div div.page div div table tbody tr td div div div table tbody tr td.alt2 { background: #3a3a3a !important; }");
// fonts & text
addGlobalStyle(".pagetitle, page, td, TD, tr, h1, h2, h3, p, a, a *, a:visited, table, tbody, .alt1, .smallfont, .pce-nav-izbornik-gumboff > a, .time, label, legend, .bginput, #vB_Editor_001_textarea { color: #c4c4c4 !important; }");