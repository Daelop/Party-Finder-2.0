## Testing Log for
# Party Finder

## Test 1: Testing Bad Data

### Test Description

Input a random string of characters to event creation and application forms to see if they are still passed to the backend. Ideally, forms should not accept unintelligible data.

### Test Results

Test failed; Data is successfully posted to the database.

### Recommended Actions

Add/improve form validation.

## Test 2: Testing Conditional Rendering of Event Listings

### Test Description

Viewing the /events/[id] page as different users to check conditional rendering. If successful, the following results are expected.
- If user is not logged in, the message "Please log in to apply" should be rendered.
- If user is logged in, but is not the creator of the event, the [ApplyButton](/party-finder/app/components/Events/ApplyButton.tsx) component should render as an apply button.
- if the user is logged in and is the creator of the event, the ApplyButton component should render as a settings button.

### Test Results

Test was successful.

### Recommended Actions

N/A

## Test 3: Testing Event Creation and Listing

### Test Description

Creating an event using the [Event Creation Form](/party-finder/app/components/Events/EventCreationForm.tsx) and checking that it is added to the [Event Listings Page](/party-finder/app/events/page.tsx). If successful, a card should be rendered for the created event. This would show that the data is posted and retrieved from the database correctly.

### Test Results

Test is successful.

### Recommended Actions

N/A

## Test 4: Testing Event Settings

### Test Description

Editing the settings of an event in [event Settings](/party-finder/app/events/[id]/settings/page.tsx) and checking that the updated event details are being rendered. This will show that events are updated successfully.

### Test Results

Test was successful.

### Recommended Actions

N/A

## Test 5: Testing Participant Applications

### Test Description

Creating an event application on the [event application page](/party-finder/app/events/[id]/apply/page.tsx) and checking that it is listed in the applications sections of the event settings page. If successful, demonstrates that applications are received by the database correctly.

### Test Results

Test was successful, however, there was no indication to users that their application was submitted.

### Recommended Actions

Route users to a page that tells them that their application has been received upon successful application.

## Test 6: Testing Application Acceptance

### Test Description

Accepting an application on the event settings page. If the accept button is functioning correctly, the application should be deleted from the applications section and a participant should be added in the participants section with the same information.

### Test Results

Partial success. The application was successfully converted to a participant, however, the page needed to be refreshed for this to be shown.

### Recommended Actions

Trigger a rerender when applications are accepted.

<!-- ## Test 1: Testing Bad Data

### Test Description

### Test Results

### Recommended Actions -->