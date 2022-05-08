# AriaLabelCleaner

Certain websites tend to incorrectly place aria-label attributes. This mistake typically happens with links opening in a new tab, where the website assigns a value similar to "(opens in a new tab)" to the aria-label attribute of the link.
The aria-label attribute is designed to provide a special label for screenreaders telling them how to name the element, and therefore, the mentioned misuse of the attribute causes them to read the link as "(opens in a new tab)" instead of reading the link text.

AriaLabelCleaner is a Tampermonkey script that allows the user to remove incorrectly assigned aria-label tags from a website.

## Usage

After installation of the script, Aria-label cleaner option should appear in the context menu of the browser, in the Tampermonkey submenu.
In order to remove the problematic attributes from the currently viewed website, the user can activate the option and enter the value of the attributes they want to get rid of.
The script will search up all aria-label attributes containing the entered value on the website and remove them.

