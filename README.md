# svg-container

Never wrestle with messy, lengthy SVG codes again! This project puts the power in your hands without the hassle. Simply select your desired SVG icon, and voilà! No more copying and pasting long, tangled codes. Let us handle the heavy lifting while you enjoy clean, efficient rendering right from page load. It's the antidote to cluttered code chaos!

## Installation

1. Download the project files.
2. Extract the files to your server directory.
3. import the JS and CSS files on the pages using the link and script tags

```html

// css
<link rel="stylesheet" href="css/style.css">

// JS
<script src="js/svg.js"></script>

```

## Usage

Once the files has been linked you can proceed to make use of the icons like:

```html

<i svg="home" svg-width="25px" svg-class="svg-dark"></i>

<i svg="archive" svg-width="25px" svg-class="svg-dark"></i>

<i svg="calendar-edit" svg-width="25px" svg-class="svg-white" ></i>

```
**svg=""** should contain the name of the icon you want to use

**svg-width=""** should contain the with you want to set your icon at

**svg-class=""** should contains all class names you want to apply to the svg

## Contributions

As this project contins few svg icons located at **js/resources/icons.json**, contributions to this project are welcomed! Feel free to fork the repository, make improvements, and submit pull requests.

##Dependencies

This project does not rely on any external dependencies, making it easy to set up and use.

## License

This project is licensed under the [MIT License](LICENSE).



