
# Nxt Watch – Video Streaming Application

Nxt Watch is a React-based video streaming application inspired by YouTube. It provides users with an interface to explore videos, browse trending and gaming content, watch individual videos, and save videos for later viewing.

The application integrates REST APIs to retrieve video data and authenticate users. It uses JWT-based authentication, React Context API for global state management, and React Player for video playback. It also supports light and dark themes across the application.

## Live Demo

[View Live Application](YOUR_DEPLOYED_WEBSITE_URL)

Login: {"Username": "rahul", "Password": "rahul@2021"}

## Features

### Authentication
- User login through a REST API.
- JWT-based authentication using browser cookies.
- Protected routes for authenticated users.
- Automatic redirection to the login page when authentication is unavailable.
- Logout functionality with a confirmation popup.
- Show and hide password functionality.

### Home
- Fetch and display videos from an external API.
- Search videos by title.
- Display video thumbnails, channel information, view counts, and publishing dates.
- Display a promotional banner with a close option.
- Handle loading, failure, and empty search-result states.

### Trending Videos
- Fetch trending videos through a dedicated REST API.
- Display video thumbnails and channel information.
- Navigate to individual video details.

### Gaming Videos
- Retrieve gaming videos from an external API.
- Display gaming thumbnails, titles, and worldwide view counts.
- Navigate to individual video details.

### Video Details and Playback
- Fetch individual video information using its video ID.
- Play videos using React Player.
- Display video title, channel information, subscriber count, views, publishing date, and description.
- Like and dislike interactions with mutually exclusive active states.
- Save videos to the Saved Videos list.
- Display loading and failure views with retry functionality.

### Saved Videos
- Display videos saved by the user.
- Navigate to individual video details from the saved videos list.
- Display an empty-state view when no videos have been saved.

### Theme Management
- Toggle between light and dark themes.
- Apply theme changes across application components.
- Dynamically update the website logo and interface styling based on the selected theme.

### Navigation
- Navigate between Home, Trending, Gaming, and Saved Videos.
- Protected routes for authenticated pages.
- Display a Not Found page for invalid routes.
- Responsive header and sidebar navigation.

## Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Routing | React Router DOM |
| State Management | React Context API, React Component State |
| API Integration | REST APIs, Fetch API |
| Authentication | JWT, js-cookie |
| Video Playback | React Player |
| Styling | Styled Components, CSS |
| UI Components | React Icons, React Loader Spinner, ReactJS Popup |
| Date Formatting | date-fns |
| Testing | Jest, React Testing Library |
| Development Tools | CRACO, Create React App |

## Application Architecture

The application follows a component-based React architecture.

- **App.js:** Manages application routes, global theme state, and saved video state through the Context Provider.
- **AppContext:** Shares saved videos, theme preferences, and associated operations across components.
- **ProtectedRoute:** Checks JWT authentication before rendering protected application routes.
- **LoginForm:** Handles user login, password visibility, authentication API requests, and JWT cookie management.
- **Home:** Retrieves and displays videos, handles search functionality, and manages the promotional banner.
- **Trending:** Fetches and displays trending videos.
- **Gaming:** Retrieves and displays gaming videos.
- **VideoItem:** Displays individual video thumbnails and channel information.
- **VideoItemDetails:** Fetches video details, manages video playback, and handles like, dislike, and save interactions.
- **SavedVideos:** Displays the collection of saved videos.
- **TopHeader:** Provides theme switching, website navigation, and logout functionality.
- **SideBar:** Provides navigation between the main application sections.

## Project Structure

```text
NxtWatch/
├── public/
│   ├── img/
│   ├── index.html
│   └── manifest.json
│
├── src/
│   ├── components/
│   │   ├── Gaming/
│   │   ├── Home/
│   │   ├── LoginForm/
│   │   ├── NotFound/
│   │   ├── ProtectedRoute/
│   │   ├── SavedVideos/
│   │   ├── SideBar/
│   │   ├── TopHeader/
│   │   ├── Trending/
│   │   ├── VideoItem/
│   │   └── VideoItemDetails/
│   │
│   ├── Context/
│   │   └── AppContext.js
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── setupTests.js
│
├── package.json
└── README.md
```

## API Integration

The application uses the CCBP REST API to authenticate users and retrieve video information.

Base API URL:

```text
https://apis.ccbp.in
```

| Endpoint | Method | Purpose |
|---|---|---|
| `/login` | POST | Authenticate users and retrieve JWT |
| `/videos/all?search=` | GET | Retrieve videos and search results |
| `/videos/trending` | GET | Retrieve trending videos |
| `/videos/gaming` | GET | Retrieve gaming videos |
| `/videos/:id` | GET | Retrieve individual video details |

Authenticated API requests include the JWT token in the Authorization header.

## State Management

React Context API is used to share application-wide state.

The application context manages:

- `savedVideosList` – Stores videos saved by the user.
- `isThemeDark` – Tracks the currently selected theme.
- `addVideoToList()` – Adds a video to the saved videos collection.
- `toggleTheme()` – Switches between light and dark themes.

Individual components also use React component state to manage API responses, loading states, search input, and video interactions.

## Authentication Workflow

1. The user enters their username and password.
2. The application sends a POST request to the login API.
3. On successful authentication, the API returns a JWT token.
4. The token is stored in a browser cookie using js-cookie.
5. ProtectedRoute checks for the JWT cookie before rendering authenticated pages.
6. The token is included in authenticated API requests.

## Installation and Setup

### Prerequisites

- Node.js
- npm or pnpm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd NxtWatch
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## Testing

The project uses Jest and React Testing Library for component testing.

Run tests using:

```bash
npm test
```

## Production Build

Generate a production build using:

```bash
npm run build
```

## Current Limitations

- Saved videos are maintained in React Context and are not persisted across page reloads.
- Theme preferences are maintained in application state and reset when the application is reloaded.
- Like and dislike interactions update the local UI state; no backend persistence is implemented.
- The saved video implementation supports adding videos, but does not currently implement removing saved videos.
- Video data and authentication depend on the availability of external CCBP APIs.

## Future Improvements

- Persist saved videos using browser storage or a backend database.
- Persist user theme preferences.
- Implement removal of saved videos.
- Integrate backend support for likes and dislikes.
- Add personalized video recommendations.
- Improve search functionality and video discovery.

## Author

**Vinod Badesha**

GitHub: [vinodbadesha](https://github.com/vinodbadesha)
