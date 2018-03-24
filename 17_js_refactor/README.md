# Flatiron Pokemon Trainers
Hey there you! This time you are gonna see all of our Flatiron instructors having
Pokemon! Except, they can lose Pokemon along their journey due to a Nuzlocke challenge.

## Example
![Gif example of app running by clicking on trainer and then releasing pokemon](assets/trainer_example.gif)

## Deliverables
- The user needs to see a list of all trainers available.
- Whenever they click on a particular trainer, it should **show** the trainer's name and the list of their pokemon.
- Whenever the user sees a trainer, they can "release" a pokemon and it should be persistent with the backend and be removed from the frontend.

## The API
Go into your `pokemon-backend` and you can simply run `bin/setup` and it will:
1. Install all dependencies `bundle install`
2. Start up/reset the database `rails db:reset`
3. Remove any logs or temporary files generated
4. Start our server `rails s`

All requests can be made on `http://localhost:3000`. You will just be
sure to append your endpoints to this url.

**Getting all trainers**
You can find all of the trainers plus their respective Pokemon team
```
# Example Request
GET /trainers

# Example Response
[
	{
		"id": 1,
		"name": "Natalie",
		"pokemon": [
			{
				"id": 1,
				"nickname": "Theresia",
				"species": "Hitmonlee"
			},
			{
				"id": 3,
				"nickname": "Paris",
				"species": "Dratini"
			},
			{
				"id": 4,
				"nickname": "Emiliano",
				"species": "Moltres"
			},
			{
				"id": 6,
				"nickname": "Rhianna",
				"species": "Lapras"
			}
		]
	},
  ...
]
```

**Releasing a Pokemon**
When you want to release a particular Pokemon.
```
# Example Request
DELETE /pokemons/:id

# Example Response
{
	"id": 4,
	"nickname": "Emiliano",
	"species": "Moltres"
}
```
