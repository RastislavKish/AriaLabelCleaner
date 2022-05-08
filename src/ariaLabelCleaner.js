/*
* Copyright (C) 2021 Rastislav Kish
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, version 3.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program. If not, see <https://www.gnu.org/licenses/>.
*/

// ==UserScript==
// @name         Aria-label cleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes aria-label attributes according to the user's input
// @author       Rastislav Kish
// @match        *://*/*
// @grant        none
// @run-at          context-menu
// ==/UserScript==

(function() {
    'use strict';

    let targetAriaLabel=prompt("Enter the aria label to be removed.")

    if (targetAriaLabel==null || targetAriaLabel=="")
    return

    let elements=document.querySelectorAll(`[aria-label*="${targetAriaLabel}"]`)

    for (const element of elements)
    element.removeAttribute("aria-label")

    })()
