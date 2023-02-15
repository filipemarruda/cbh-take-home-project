# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

getShiftsByFacility(id) -> QuarterShifts -> Agent's metadata
generateReport(Shifts) -> PDF

``` 

Facility  <- (1) --------- (1-*) ->  Shift  <-(1.*)-----------(1)->  Agent

```

### Ticket 1: Change database
- acceptance criteria
  - Add `custom_id` column to the `Agent` table
  - This column should be an uuid, nullable, and unique
- time/effort estimates
  - 0.5 hour
- implementation details
  - Adds `custom_id` to `Agent`'s table
  - Creates new migration file
  
### Ticket 2: Change agent type
- acceptance criteria
  - Add `custom_id` field to the `Agent`'s graphql type
  - This field should be an String
- time/effort estimates
  - 0.5 hour
- implementation details
  - Adds `custom_id` to `Agent`'s type in types file.

### Ticket 3: Change agent resolvers
- acceptance criteria
  - Add search by `custom_id` to the `Agent`'s search resolvers
  - Add `custom_id` to the `Agent`'s mutations resolvers
- time/effort estimates
  - 1 hour
- implementation details
  - Adds `custom_id` to `Agent`'s querie's file.

### Ticket 4: Change getShiftsByFacility function
- acceptance criteria
  - Add `custom_id` to the `Agent`'s metadata
- time/effort estimates
  - 0.5 hour
- implementation details
  - Adds `custom_id` to `getShiftsByFacility` return object.

### Ticket 5: Change generateReport function
- acceptance criteria
  - Add `custom_id`  column to report's PDF file
- time/effort estimates
  - 1 hour
- implementation details
  - Uses data returned by `getShiftsByFacility` to print the new `custom_id` column to the PDF.