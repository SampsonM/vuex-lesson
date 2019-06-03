# Vuex Lessons


## What?

"[Vuex](https://vuex.vuejs.org/) is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion."


## Why?

Managing state or data within a large vue app can become difficult, the day will come when you need to figure out why you kWh unit is saved into the postcode field in your data object within your component and is shown as the date of birth on the POST request...


With Vuex you can find out using the devtools and time travel ability between function calls within the app, of course you can do this in chrome dev tools but this is far better. You also may be familiar with passing props down several components deep... then passing data back up?

This is unnecessary. Vuex cleans this up and gives A SINGLE SOURCE OF TRUTH [Oooooo](https://media.giphy.com/media/nVXzt7FSJlX7W/giphy.gif)
  
## How?

- install the [vue-cli](https://cli.vuejs.org/guide/) tool and create an app

```bash
npm install -g @vue/cli


vue create vuex-lesson
```

- choose to 'manually select features' and select 'Vuex'

- Decide if you want to save this as a preset for future

You will now have a basic vue app with a basic store structure set up.

Navigate to 'src/store.js', this is where your vuex store lives.

#

## State?

### What is it?

- State is the equivalent of your data objects from your components/ views collated into one place, this provides a single source of truth for your app.

### How do I access it?

- To access state in your components you can access it directly through the store object within your component

- You can also mapState into your computed properties, the mapState function returns an object that can be assigned to the computed property directly, but more than likely you will have other computed functions in your component so to get around this you can use the spread operator to assign the contents of the returned object to the computed property.

- mapState allows for creating aliases to rename properties or even change the retrieved using a function


```JavaScript
computed: {
	turtles() {
		return this.$store.state.turtles
	}
}

//or 

import { mapState } from 'vuex'

computed: {
	...mapState([
		'turtles'
	]),
	...mapState({
		newTurtles: 'turtles',
		getTurtlesStatus(state) {
			if (state.turtles.isLiked) {
				return 'I like turtles'
			}
		}
	})
}
```


#

## Actions?

### What are they?

- Actions are functions that are 'dispatched' within components or other actions, they should handle your asynchronous and synchronous functionality and be the only place you commit a mutation as this improves debugging.

### How do I trigger them?

- To trigger actions in your component you can access them through the store object or using the mapActions

- If you use the mapActions function you can trigger this function within your template as you would with any other method

```javascript
import { mapActions } from 'vuex'

methods: {
	updateTurtleStatus() {
		this.$store.dispatch('updateTurtleStatus', true)
	},
	...mapActions([
		'updateTurtleStatus'
	])
}
```

#

## Mutations?

### What are they?

- Mutations are synchronous functions that update the state via the commit method and can accept a payload to update the state with. It is good practice to define mutation types as constants to allow new developer to see what mutations the app has and to make use of IDE linters preventing typos.

### Why do I 'commit' a mutation?

- Commiting a mutation is how we invoke the mutation handler, by passing the mutation type to the commit method we are triggering the debugger in Vue devtools and making it difficult for a developer to accidentally trigger an update of a state by directly calling a mutation

### How do I commit a mutation?

- To commit a mutation you can access it directly within the component using mapMutations or store.commit(''), but preferably to keep a consistent pattern call it within a designated action

```javascript
actions: {
	updateTurtleStatus(context, payload) {
		context.commit('UPDATE_TURTLE_STATUS', payload)
	}
},
mutations: {
	UPDATE_TURTLE_STATUS(state, payload) {
		state.turtles.isLiked = payload
	}
}
```

#

## Getters?

*These aren't initially seen in the demo but can be added with the same syntax as  the actions, state etc*

### What are they?

- Getters are app wide computed functions, they are functions that return some data from the state and are then cached and only update if a dependency changes

### How do I access a getter?

- To access a getter function you can either call it straight from this.$store or using the mapGetters helper from vuex

```javascript
import { mapGetters } from 'vuex'

computed: {
	doTheyLikeTurtles() {
		return this.$store.getters.doTheyReallyLikeTurtles
	},
	...mapGetters([
		'doTheyReallyLikeTurtles'
	])
}
```

#

## What Next?!

### Score Tracker

- Use your new knowledge to create a score tracker vue app to track the scores of some game, create two components to input the scores and a display for the scores they should use the Vuex store to handle updating, gettings and storing the scores.


