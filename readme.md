# Gulp Startup Project

This project is a simple setup to use Gulp.js for automating tasks such as compiling Sass, processing JavaScript, including HTML partials, and serving the project with BrowserSync.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tasks](#tasks)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/gulp-startup-project.git
    cd gulp-startup-project
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

## Usage

1. **Run the default Gulp task:**

    ```sh
    npm start
    ```

    This will build the project and start a local server with BrowserSync. The server will automatically reload when changes are made to the source files.

2. **Available tasks:**

    - `gulp includeHTML`: Includes HTML partials and beautifies the HTML.
    - `gulp compileSass`: Compiles Sass files, autoprefixes, and minifies the CSS.
    - `gulp processJs`: Processes JavaScript files by concatenating and minifying them.

## Tasks

- **includeHTML**: This task includes HTML partials using `gulp-file-include` and beautifies the HTML using `gulp-html-beautify`.
- **compileSass**: This task compiles Sass files using `gulp-sass`, applies autoprefixer using `gulp-postcss`, and minifies the CSS using `gulp-clean-css`.
- **processJs**: This task processes JavaScript files by concatenating them into a single file and minifying it using `gulp-terser`.
- **copyAssets**: This task copies assets (excluding JS) from the `src/assets` directory to the `build/assets` directory.
- **serve**: This task initializes a BrowserSync server and watches for changes in the source files to trigger rebuilds and reloads.

## Directory Structure


```
gulp-startup-project/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── ...
│   ├── includes/
│   │   └── ...
│   ├── sass/
│   │   └── ...
│   └── *.html
├── build/
│   ├── assets/
│   │   ├── css/
│   │   ├── js/
│   │   └── ...
│   └── *.html
├── gulpfile.js
└── package.json
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).
```

This should ensure that the directory structure is displayed correctly in the README file.