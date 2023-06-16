@@@@@
title: "Scanning for DOM Vulnerabilities using Rust and Chromiumoxide"
date: "2022/01"
summary: "Scanning for DOM based vulns can be tricky, as they rely on a working browser. Well let me show you how I used Rust to overcome that challenge."
author: "Cory Sabol"
tags: rust,bugbounty,tools,dom,appsec
@@@@@

# But Why Tho?
Prototype pollution, DOM XSS, DOM Clobbering. These are some DOM based vulnerabilites that traditional web applicatoin scanning tools can have a hard time identifying. Why is that?
Well because typically to identify these flaws you need to be able to have the context of a working web browser in your scanner. The page needs to be fully loaded up and allowed to execute.
Then you often need to trace your input in some manner. With DOM XSS this is finding sinks, with DOM Clobbering and Prototype Pollution this means checking if you modified the global scope.

# So, How Can I Scan for DOM Based Vulns
Easy! You just gotta use a headless web browser like Chrome and the Chome Devtools Protocol. Oh, and Rust, because this is a post about doing this using Rust 🦀

