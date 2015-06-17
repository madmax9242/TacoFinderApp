# Some Like It Hot
Finding Great Tacos in the Austin area

## General Information
This Ruby on Rails app helps users find taco places in Austin.  Users can add new restaurants to the list if they register and can view the location of the taco place on Google Maps by clicking "Show" in the listing.

## Installing and running the app
Prior to installing this app, you'll first need Ruby and Ruby on Rails installed on your machine. For more information, refer to Rails Guides chapter 3.1: [Installing Rails](http://guides.rubyonrails.org/getting_started.html#installing-rails).

When downloading the ZIP file, maintain the existing folder structure to assure files link correctly.

Change the directory to `taco_app`

Run `rake db:create` to create a database on your local machine. You can also run `rake db:seed` to load sample restaurants.

Start the web server using `rails server` (or `rails s`). Visit the default port in your favorite web browser (most likely `http://localhost:3000`) and you'll see the app homepage.

## Technologies Used
Some Like It Hot is built on Ruby on Rails, using [Sorcery](https://github.com/NoamB/sorcery) for authentication and a PostgreSQL database. We used the Google Maps API to show where the taco places are on the map.  We used AJAX to find the geographical coordinates for the restaurant clicked and then fed those into the map builder so it focused on the taco place specifically.  We also included a marker to identify the location.


## Links
[User Storyboards](https://trello.com/b/OHE4NcQn/some-like-it-hot "User Storyboards for Some Like It Hot Ruby on Rails app.")

[ERDs](https://goo.gl/photos/Dsmdz4837nJbQfw77 "ERDs - user and restaurant database tables")

[Wireframes](
https://goo.gl/photos/MuhQjBovN82Lk3pQ8)
