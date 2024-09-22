# Reading Tracker

A modern web application created using Cursor AI to help you track your reading progress and manage your book collection using data from Goodreads.

## Features

-   View recently read books and currently reading books
-   Browse your complete list of read books
-   Check your "Want to Read" list
-   Display book details including title, author, series, reading status, and personal rating
-   Responsive design for various screen sizes
-   Dark mode support

## Technologies Used

-   Next.js 14
-   React 18
-   Tailwind CSS
-   Papa Parse (for CSV parsing)
-   Custom color palette

## Getting Started

### Prerequisites

-   Node.js (version 14 or later)
-   npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/reading-tracker.git
    cd reading-tracker
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

3. Create a `public/data` folder and add your `goodreads-library.csv` file to it.

4. Start the development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    yarn dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

-   The home page displays books you've read or are currently reading in the last 6 months.
-   Navigate through different sections using the top navigation bar:
    -   Home: Recent books
    -   Currently Reading: Books you're currently reading
    -   Read Books: All books you've finished reading
    -   Want to Read: Your reading wishlist

## Project Structure

-   `src/app`: Contains the main pages of the application
-   `src/components`: Reusable React components
-   `src/pages/api`: API routes for server-side functionality
-   `public/data`: Location for the Goodreads CSV file

## Customization

You can customize the color palette by modifying the `tailwind.config.js` file:
