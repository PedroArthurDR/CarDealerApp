# Car Dealer App

This project is a car dealership application built with Next.js, allowing users to filter vehicles by type and model year, and view the results on a separate page. The app leverages Tailwind CSS for styling and integrates with an external API to fetch vehicle data.

## Features

- **Filter Page**: Users can select a vehicle type and model year from dropdown menus to filter available vehicles.
- **Result Page**: Displays the vehicle models available for the selected type and year.
- **Dynamic Routing**: Utilizes Next.js dynamic routing to generate result pages based on the selected vehicle type and year.
- **Suspense Component**: Used to handle loading states while fetching vehicle data.
- **CSS Animations**: Enhanced user experience with CSS transitions and animations.

## Installation

### Prerequisites

- Node.js >= 18.17.0
- npm >= 7.x

### Clone the Repository

```bash
git clone https://github.com/your-username/car-dealer-app.git
cd car-dealer-app
```
---


### Environment Variables

Create a `.env.local` file in the root directory and configure the following environment variables:

```bash
NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/
```
---


### Run the Application

To start the development server:

```bash
npm run dev
```
---


### Lint and Format

To run ESLint and Prettier:

```bash
npm run lint
npm run format
```
---


### Build

To create a production build:

```bash
npm run build
```

