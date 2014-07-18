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
* Use Stanford Plagiarism Checking
	* [MOSS](http://theory.stanford.edu/~aiken/moss/)

HTTPS Web Service API
=====================

Login and Secure Registration

* POST: /login/:user/:password/:admin?sessionKey=XXX => Create User
* GET: /login/:user/:password => Retrieve Session Key
* POST: /group?sessionKey=XXX [Multi-Part Form Data] => Build New Group
* POST: /group/:id/:user?sessionKey=XXX => Add a User to a Group
* GET: /group?sessionKey=XXX => Retrieve All Group IDs
* GET: /group/:id?sessionKey=XXX => Retrieve All User IDs for a Single Group

Assignment Submission and Retrieval

* POST: /submission?sessionKey=XXX [Multi-Part Form Data] => Submit Assignment
* GET: /submission/:id?sessionKey=XXX => Retrieve Results of Assignment

Secure Assignment Management

* POST: /dropbox?sessionKey=XXX [Multi-Part Form Data] => Build New Dropbox
* GET: /dropbox/:id?sessionKey=XXX => Retrieve Submission IDs for a Single Dropbox
* GET: /dropbox/csv/:id?sessionKey=XXX => Retrieve D2L Formatted Grades for Dropbox
* GET: /dropbox?sessionKey=XXX => Retrieve All Dropbox IDs

Data Schema
===========

Logins [Unique Index on user]

    {
      "user": "XXX",
      "first": "John",
      "last": "Smith",
      "hashedPass": "YYY"
    }

Admins [Singleton Entry (Limit to One Document)]

    {
      "users": [
        "XXX", "YYY", "ZZZ"
      ]
    }

Sessions [Unique Index on sessionKey]

    {
      "sessionKey": "XXX",
      "expires": Date(),
      "user": "XXX"
    }

Groups [Unique Index on id]

    {
      "id": 000,
      "name": "XXX",
      "users": [
        "XXX", "YYY", "ZZZ"
      ],
      "dropboxes": [
        1, 2, 3, 4
      ]
    }

Submissions [Unique Index on id]

    {
      "id": 000,
      "user": "XXX",
      "date": Date(),
      "submissionPath": "YYY",
      "techPoints": 0,
      "stylePoints": 0
    }

Dropbox [Unique Index on id]

    {
      "id": 000,
      "name": "XXX",
      "language": "YYY",
      "testScriptPath": "ZZZ"
      "openDate": Date(),
      "closeDate": Date(),
      "maxSubmissions": 0,
      "maxTechPoints": 0,
      "maxStylePoints": 0,
      "submitAfterClose": false,
      "submissions": [
        1, 3, 4, 6
      ]
    }
