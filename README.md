# bookee-test
Could not get the POST request working in my ios device or simulator due to http request being blocked( The only explanation that I found on the internet ), so to mock the data for some request being booked and some not in API file ( mockShifts.js, line 7 ) I changed the createMockShift function to:

```
const createMockShift = (values) => {
  var tempBooked = false;
  if (Math.random() < 0.5) {
    tempBooked = true
  }
  return Object.assign({
    id: uuid(),
    booked: tempBooked,
  }, values);
}
```

Application uses EXPO.

Both tabs are present in /screens folder.

The Components, Icons and Redux present in /src folder.

## Npm Packages:
- axios for API calls.
- moment for date/time management.
- redux/redux-thunk for state management.

## Steps to start the application
- Run the API server locally ( nmp start ).
- Download dependencies for bookee-test ( npm/yarn install ).
- Run bookee-test ( npm run ios / npm run android ).

## Side Note
- GET request were working so the data is being pulled by the API only.
- Since POST request was not working, so the button clicks just show loader for 2 seconds just to simulate the loading.
