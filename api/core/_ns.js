/*
 * Copyright (C) 2017 Nethesis S.r.l.
 * http://www.nethesis.it - nethserver@nethesis.it
 *
 * This script is part of NethServer.
 *
 * NethServer is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * NethServer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with NethServer.  If not, see COPYING.
 */

/**
 * The nethserver module defines the API to access a NethServer system
 *
 * Namespace definition
 *
 *
 * @namespace nethserver
 */
var nethserver = {};

if(window && window.top) {
    if(window.top.nethserver) {
        // bind to the already-defined object
        nethserver = window.top.nethserver;
    } else {
        // Create the namespace for the first time
        window.top.nethserver = nethserver;
    }
}
