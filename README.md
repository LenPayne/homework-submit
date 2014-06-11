Homework Submit Tool
====================

Developed by [@LenAtLambton](https://twitter.com/LenAtLambton) from [www.LenPayne.ca](http://www.lenpayne.ca)

This tool will be a Node.js Web Interface for students to submit homework and receive immediate feedback on success/failure.

Planned Features
----------------

* Submission Console
    * User Login
    * List of Open Drop Boxes
        * Assignment Description
        * Countdown Clock to Submission Close
        * Submission Panel
    * List of Past Drop Boxes
        * Assignment Description
        * Feedback
        * Access to Files - Download or View
* Receiving Files and Storing to Disk
    * Automatic Storage and Backup of Submissions
    * Running Appropriate Marking Script (Assignment Specific)
    * Running Appropriate Style Checker (Language Specific)
    * Returning JSON Data with Meaningful Results
* Administrative Console
    * Add/Remove Users
    * Manage User Groups (Classes)
    * Build a New Drop Box
    * Manage Drop Box Results
        * Grades
        * Academic Dishonesty Cross-Checking
        * Export to D2L CSV

Biggest Concerns
----------------

* Submission Privacy
    * Session Hijacking
    * SQL Injection
    * Data Table Retrieval

Technical Tools
---------------

* Use MEAN Stack
* Use Express req.files to handle Submissions
* Use Appropriate Language Style Checkers
    * [Checkstyle](http://checkstyle.sourceforge.net/)
    * [PMD](http://pmd.sourceforge.net/)
    * [OCLint](http://oclint.org/)
    * [ocstyle](https://github.com/Cue/ocstyle)
