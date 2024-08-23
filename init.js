const fs = require('fs');
const path = require('path');

// Define the base directory
const baseDir = './build';

// Define the structure of directories to be created
const directories = [
    path.join(baseDir, 'assets'),
    path.join(baseDir, 'assets', 'css'),
    path.join('./src', 'assets', 'css'),
    path.join(baseDir, 'assets', 'js')
];

// Function to create directories if they do not exist
const createDirectories = (dirs) => {
    dirs.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
            console.log(`Created directory: ${dir}`);
        } else {
            console.log(`Directory already exists: ${dir}`);
        }
    });
};

// Create the directories
createDirectories(directories);