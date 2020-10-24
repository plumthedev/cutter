# ✂️ Cutter

Cutter is a Google Chrome extension to cut content on websites where copying or selecting text is difficult or impossible and save it to clipboard.  

## Usage

You need to install this extension as developer. You need to install `dist` directory.  
More information about this process [you can find here.](https://developer.chrome.com/extensions/getstarted)

Commands allow user to interact with extension.

| Action                             | MacOs       | Windows, Linux |
|------------------------------------|-------------|----------------|
| Enabled/Disable selection          | Cmd+Shift+1 | Ctrl+Shift+1   |
| Copy selected content to clipboard | Cmd+Shift+2 | Ctrl+Shift+2   |


## Installation

Use Git to clone this repository.

```bash
$ git clone https://github.com/plumthedev/cutter.git
```

Install all dependencies.

```bash
$ npm install
```

Start development.

```bash
$ npm run start
```

Build.

```bash
$ npm run build
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
If any problems occurred, let me know in Issues tab. 

## Roadmap
The first version is for internal use. I plan to extend the next versions with the settings of CSS selector for selection. 
Also add tests with Jest. 

## License
[MIT](https://choosealicense.com/licenses/mit/)
