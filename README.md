# Test Tube Rack Manager

The application will allow users to input details for each test tube and then display how these tubes are organized into racks, adhering to the specified constraints (unique age, company, city district, and vision defect).

In this solution:
- The TubeInputForm component allows users to input the details of a test tube's associated patient. Upon submission, it clears the input fields for the next entry.
- The RackManager component manages the state for both the individual test tubes and the racks. It includes the sorting logic within the sortTubesIntoRacks function, which organizes tubes into racks based on the constraints provided.
- The canPlaceTubeInRack function is used to determine if a tube can be placed into a specific rack without violating any of the constraints related to age, company, city district, or vision defect.
- The sortTubesIntoRacks function iterates over each tube, attempting to place it in an existing rack or creating a new rack if necessary.

This React application provides a functional user interface.

## Available Scripts

In the project directory, you can run:

### `npm install`

This command installs a package and any packages that this project depends on.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Runs all tests.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

