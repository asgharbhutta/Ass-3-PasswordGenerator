# Ass-3-PasswordGenerator

# Purpose of this project
This project was intended to teach us how to utilize the javascript basics we learned in
the lesson and during our virtual classes.  Unfortunately Javascript cannot be taught
through just 2 courses and a lengthy lesson exercise that looses its appeal very fast.

We were asked to build a password generator that would allow the user to choose
how long the password will be, if it will contain lower case letters, upper case letters,
numbers or special characters (symbols)

# What to expect from the application
When you open index.html you are presented with a button to generate a password, the user
will be prompted to enter the length of their password, it must be greater than 8 characters and less than 128 characters.  The following prompt will then ask the user to decide what type of character set they would like in their finished password, lower case, upper case, numbers or symbols.  Each of these options is a prompt that will store the user confirmation.  For example, if the user choose lower case and numbers, the final password will omit uppercase and symbols.  If the user choose none of the 4 possibilities
the program will loop until at least 1 character set is chosen.

# Output
The output will be a randomely generated password based on the length entered by the user and the character sets chosen by the user.  The password will be displayed in the middle
of the page after all the conditions have been met.