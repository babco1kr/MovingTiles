# Moving Tiles

This application pulls images from a MySQL database. You hover over an image to make it grow and as a result of growing the other images shift around it. 

[Link to Application](https://moving-tiles-kb1993.herokuapp.com/)

## Application
![Tiles](./client/assets/gifs/MyMovingTiles.gif)

## Technlogies Used 
* React
* Flexbox
* MySQL
* Sequelize
* Express
* Axios

## Development

I ultimately used flexbox but my original development consisted of CSS grid being used with flex box. However, on hover I was making the image span 2 columns and 2 rows. The images wouldn't span up if in the 2nd or 4th row unless specified. That would also require the images to know what column they are in when they are dynamically created.

As a result I swapped to just using flexbox. The images are obtained through a database query and then split into 2 groups. Each group is passed through the imageCard component, and a different div is returned depending on the id of the image.

When a user hovers over an image it adds a class of hovered that increases the size of the image and changes the background of the image. It also has an animation with keyframes to show it growing. Before it grows it gets all images in that same row and removes the class of hovered from them if any others have it, allowing only one image per row to be big at a time. 

### Changes

I started out using CSS Grid and then went away from it. I would like to learn more about CSS Grid and be able to use it in a way that benefits this application. There is also a different way to get the on hover with toggles that I need to learn and use as I believe it will be less code to accomplish the same effect.

The application also doesn't work 100% as it should. The images don't shift around each other. If certain images get hovered there is an odd number of images on each side when there should only be an even number of images. The images that arent hovered also don't transition back into position when a new image gets hovered.