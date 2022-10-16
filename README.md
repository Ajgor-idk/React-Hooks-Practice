# React Hooks Practice

## UseState Hook

1. While using useState if we make a function where the initial param is set we'll call it once. If we don't want to do that we can reference and initialize the function that does the same thing to run on every page load.

2. If we're dealing with objects the objects that we change is not updated it's just overwritten so if we have two properties and update one the second one will just vanish. To prevent that we need to spread the object and then update the property (e.g setCount(prevState => {...prevState, count: prevState.count - 1})). Also the more desired way is just to make two hooks and store them seperately and then update if we want to. (No bigger example in the fn script here I think it's pretty self explanatory)

## UseEffect Hook

1. That's the hook that is resposible for every change on the site. If you want to change any state or practically anythin use this hook.

2. The function after return is imporant, while we're doing something that requires cleaning it later. (More on this in the expample itself).

3. Remeber about wise selection of when we want to change something in the second param in the hook itself.

## UseContext Hook

1. Quick explanation what is what:

   1.1 ClassContextComponent is just the representation how it was done with class components. You can see a bit of nesting that can be annoying with bigger aps.

   1.2 FunctionContextComponent is the representation how it was done with function components. It's made a more simpler than class component. It has our functionalities to whom context is provided by ThemeContext.

   1.3 ThemeContext is kinda our template that what this part should provide. We will wrap it around what we want to provide this information with. It has two custom hooks (useTheme, useThemeUpdate) that provide information to where want want to have some functionality (here is actually FunctionContextComponent where we press the button and and the theme changes in the styles and toggles(updates)). It basically is there to store all the providers and create contexts there so we don't have to do it in the app itself.

   1.4 UseContextHook the place where we all combine all of that and display it on the page. It's basically an App.js but just not here, because of other examples I have.

2. Done kinda over complicated. There are some more ways you can do easier I could say for example.: In the Context provider we could set our darkTheme and setDarkTheme and wrap the App with AppProvider with our Context.Provider in it.

3. The ClassContext is nice, but not that useful. Good to remeber how it was done, because you know why it done some other way today though.

4. To have deeper understanding this will require some more of examples, but you can get an idea.

## UseRef Hook

1. This hooks is really similar to the useState Hook. The main difference is that it doesn't reload our component once updated. It's a big deal, because we can store our previous values or a selected values without unnecessary component reload.

2. As mentioned above the main thing is to not reload the component, but why we want to do that?

   2.1 The first option is that we want to store some previous value and we can do it in the state, but it's a problem because when the component reloads it's gonna store the value again and it's gonna reload and it's gonna store the value again and it's gonna reload and so on and so on. Sooo we want to have it without the reload part. The useRef is totally separate from our component render cycle so we can change it how much we want it's not gonna render and cause the infinite loop and that's our first use.

   2.2 The second option is that we want to select a HTML element/DOM node (Similar to querySelector in JS.) and later we want to make operations on it like focus it we can make a Ref (Reference if it's not that clear) on it and just whatever we want and that's our second use.

3. Important thing is not to overuse this hook, because it can be problematic later when we'll want to pass some value and then reload component it's not gonna be possible, because the value's gonna disappear and we gonna have bugs. So better stick to useState Hook and use this one responsibly

## UseMemo Hook

1. This nice hook caches the value so it doesn't have to recompute it every time component renders it just checks if the value is the same and only if it's not then it renders it again. You can use it when you have really slow functions and you don't want them to run every time something rerenders so we give the list of dependencies to the hook and place the functions there and when one of those dependencies changes then anything that is in the useMemo will be reruned.

2. Other time we want to use it is when we compare some object. The important thing is that in JS we have something like referencial equality. What it means is that when we have two "same" objects (e.g. const dog = { color: brown } and const dog2 = { color: brown }) you see they're the same, but in JS they're not. The reason is they just look the same for us, but JS doesn't compare its content is just compares the reference place in memory and if it's not the same that's just a different object. So when we have that in mind we just need to wrap and return the obj in useMemo so when something in component where we use that obj changes Memo compares its content to the memorized one and determines if its need to be rerendered or not. Thanks to that we don't rerender the obj that doesn;t change, but requires our memory to render increasing app speed.

## UseCallback Hook

1. Really similar to the useMemo hook. The main difference is that when we use it. We use useCallback when we want to store the entire function and we want to do that when we worry about passing parameters in there. What it does it just takes an entire function and rerenders it when needed unlike useMemo because it wouldn't take an entire function it would just take the return value and then use it later when the value that it listens to changes.

2. The use of it in the cases are practically the same like in useMemo. So when we have referencial equality and we don't want to create a whole new function when some other value changes triggering it to change. You can say we're just aiming more precisely on the listened value and rerender function only if needed.

3. The second option we want to use it, but it a really rare one is the same like in useMemo as well. When we have some slow function and don't want to recreate it every time is referred to and nothing there changes.

## UseReducer Hook

1. UseReducer Hook is complicated. That has to adressed from the start, but it's really useful. We just need to use it in bigger apps. The reason why is in the small projects it just doesn't make any sense to use that. You can see the code files and it's pretty big. Although the code would've been bigger if we wanted to have more funcionalites such as editing, changing the text etc. So when we use that hook we can easily add all of our options to the dispatch and clean up a bit all those props that would've been used with handleSth or something like that. I don't think there is much more to it's theory you just need to use it a bit and try to do some other things with it and it's gonna be much better and not even that hard. The most important are:

   1.1 reducer - a place with all the functions and cases for them of which you want to use.

   1.2 dispatch - you call dispatch to call the reducer passed in UseReducer as a param. The dispatch is used in a deconstructed array just like in useState. More or less like this (const [todos, dispatch] = useReducer(reducer, []);)

   1.3 payload - the param where you just pass all the variables you can have in the fucntions used in reducer.

## UseTransition Hook

1. Good to know hook, while having preformance issues. The key to use is it's simple you just say the transition start and tha's that. The important thing to remember is to use it if really needed. The main concept of React is to take all of the state changes and make a one call then rerender everything what's needs to be rerendered. When we have something that lowers our performence we can degrade it to low priority state change and it will be done after everything else is done. We have that in our example. We first do the state change in our input and make it visible right after typing then we are processing the appeding of the list.

2. Why not to use it all the time then? The main reason is when we have small application and small state changes we just let the React handle it like it should, because we can slow our app down more than before the use of it. When we have the high priority state changes we just make them one after another and the startTransition is the second call to process whatever is in it. So we end up in making two calls rather than one and that's just useless on a small scale, because like I said it's just gonna be slower so we just let the React handle it with ease.

3. The good use case for it is when we want to add on something like our big list a loading state. We can do it by making a loading component and then use isPending that is given in our hook.

## UseDiferredValue Hook

1. It's really similar to useTransition Hook, but it works for values not functions. It also sets priority and just waits for everything to end so it can update it's value. The React is smart enough to know when to update the value so when nothing is going on it will update it right away, because it has time to do it. However when the high priority value is changing it waits until it's done so it can update it later. Long story short by using this hookl we just say what value we want to update now and what we can update after those other values.

## UseLayoutEffect Hook

1. This hook works pretty easily. It works just like a useEffect hook, but the useEffect hook is asynchronous meanwhile our useLayoutEffect hook is synchronous, which means it works and uploads with every other component by default and it doesn't compute everything in the background like asynchronous functions does.

2. The use case I think is self explanatory. We use it when we want to change something in the layout of our DOM document. We do that so we don't have some wierd effects while manipulating in when the user is seeing it. So while doing something that user can see try to use useEffect but when something wierd happends tru useLayoutEffect.

## UseDebugValue Hook

1. The most important thing is this hook is for custom hooks only if we're gonna try to use it in the App.js or sth like that it's just not going to work. Another imporant thing is that we should have an extension in our browser (react devtools) for this to work nicely.

2. The use case of it is when we just want to see some value in our devtools from our custom hook like from where it's from (maybe it's a state maybe it's frm useEffect) and what's the value itself etc.

3. When we use it we need to be careful about checking the values from the slow functions. It's just gonna load eachtime we get it and it lowers our performence. The solution to that is to give it a second parameter. We need to give it a fuction with value we want to give to it and it says that is just to be computed when we're in our devtools and are checking those values. It should look something liek that: useDebugValue(value, value => slowFunction(value)).

## UseImperative Hook

1. We basicly can make our own reference. Sometimes when we do something custom (like custonInput here) we need to make a reference to it. We can do it by using React.forwardRef() and it works just fine, but on the smaller components. When we have multiple funcions inside our custom component we would rather make it nice and clean so we make our own reference and use it how we'd want and need.

2. With our CustomInput we're just doing something small like making an alert or wanting to focus on 1 thing. The good example, however is with the modal. Modal example is good because it's clear to see and complex enough for it to work. When we have multiple button in our modal for each one of them we would need to make a reference and maybe even a state, but with help of our hook you can see how easy it is to do.

## UseId Hook

1. Great hook to sort all the problems with dynamic ids. The main use is when you do server rendering and client side hudration so they can communicate freely. Why not use math.random()? Because we won't have the same ids with math.random on the client side as well as on the server side so they cannot communicate. With useId the generated id is the same as long as everything on page starys the same.

2. This hook also make you do good practices. When you'd like to try to select an element by an id you will be unable to do it, because it starts with colon and it's just impossible. So if you want to select anything you need to use useRef to be able to as React suggests you to do it that way.

3. Also worth mentioning the solution to making multiple ids on the same component. We just make it the same id with something added to it so it's more readable and we don't catch any errors. I just really like the design of this and I thought it's worth mentioning.

# Custom Hooks Practice

## Session1

1. Custom hooks have an easy concept, but they can be hard to make depends on what you want them to do. The concept is to shorten the long/complex code that does someting into a hook so the code will be more readable and we can you it in many places.

2. The imporatnt thing is to remember how to name them. The only thing is to add use before the name of the hook. After that React will know it's a custom hook and will treat it that way.

3. We made two custom hooks here. First is a useLocalStorage and second is useUpdateLogger.

   3.1 The first one is a bit more complex than the second one, but the main function of it is to get and update data in our local storge. We can use it just like useState but we had to modify it by having two parameters to give to the function ratther than one like in useState.

   3.2 The second one is just a simple logger that logs our value in the console.

The main power of custom hooks is that we can make whatever we want as you see. Thanks to that our code will be simpler and cleaner, but still functional just as we wish.

## Session2

1. In useArray we're mostly trying to make the hook that have simple array function so we don't have to worry about working on array itself everytime we want to do something on it. As you can see there's a bit of code there, but it only looks scary at the first glance if you'll read it it's pretty simple to understand. Basically we closed up all the array spreading and state updating there so we can have simple and clear functions.

2. I'm gonna make it a bit out of order, because we need useTimeout in useDebounce hook. So in useTimeout hook we want to set a certain timeout also I added some functions to manipulate that timeout if we need to. The hook takes what we want to do (callback) and after what time we want to do it (delay). I think it simple how timeout works so I'm gonna fouces more on our functions. We have three functions there: set, clear and reset.

   2.1 Our set sets our timeout reference whenever the delay changes updating our callback and making a new timeout.

   2.2 Our clear clears our timeout so it won't do anything anymore after we use it.

   2.3 Our reset clears our timeout with clear fn and sets new timeout with set fn.

3. In useDebouce we wanted to make a component update after certain amount of time. That practically what debounce means. So we just made a simple hook that takes: what we want to do (callback), how long we want to wait (delay) and on which values change we want it to update (dependencies). After we provide that the hook takes the values uses our previous hook (useTimeout) and after that time it resets and makes our callback again.

4. In useToggle we just toggle the boolean after providing some value. We also guaranteed that when the value isn't a boolean we just convert it into one. Then we return the value and the function so we can use it in our component.

5. In useUpdateEffect we wanted to work just like useEffect, but without the effect being activating on the first load. The hook needs to get a callback function and a list of dependencies. After we provide it then we can check if it's our first load. We just make a quick reference and set it to false by default so the useEffect won't fire up and than after loading we set it to true. After that the useEffect works just like it should.

## Session3

1. The useAsync hook can be really often used one. The hooks job is to whether or not something is loading and if the loading succeeded of failed. We do that every time any of our dependencies change.

2. useFetch is a good example of the useAsync hook in action. It's also useful if we want to fetch any data of course. We do it in a very easy way. We just need to provide url, options we want to use for the fetch (mostly we want to get data, but sometimes you'll have to send it so it's necessary) and our dependencies. So firstly we provide essential data and then the hook uses our useAsync hook which processes it and gives back info if we succeeded or not. Then our useFetch hook computes it and check if it's positive or negative unpackage it or throws and error. It does it everytime our dependencies change.

3. The usePrevious hook usage it's pretty broad. It's easy to understand it referances our value and when the new value is inputed the old value becomes other reference (previous reference) and the new value is just our value now. The important thing to say is that when you change any states (like name here) it won't recompute itself.

4. useStateWithHistory hook is a bit more complex. We provide 2 props. First prop is default value and it's value and setValue, because we want to use it a bit like our useState hook. Second prop is capacity which is 10 by default but we can modify that. This hook basically works by taking those props and makig two references (hisotry and pointer). I hope those names suggests what they are. As I said we want it to work a bit like useState so firstly each time our value or capacity changes we check if the value we provieded is the function. If it is we return it and if it isn't we just start the function. Then we chcekck if our our history ref value with pointer ref value doesn't equal our resolvedValue. If it doesn't we check if our pointer ref value is bigger than our history length (-1 because of the indexes). If it isn't we splice hisotry ref value by the pointer ref value +1. Then we push our resolved value to our history and then when the hisotry is bigger than capacity we start to shift the items so the capacity of ours works. Lastly we update the pointer position and set the value. Then later in the hook we just make the functions so we can move inside our history. At the end we return our move functions as well as the setting one.

5. The useStorage hook is pretty simple. We take 3 props. Key (the name of the value in the storage we use), defaultValue and the type of storage we want to use for this time we use the hook (localStorage, sessionStorage). Firslt we check if our item we provided is in the storage. If it isn't (it's null) then we parse it and save it in or storage. If it is there on the other hand we just we use useEffect to check if it's undefined (if it is we remove it). After this condition we set it in our storage whenever the key/value/storage changes. We also check if our value we provide is the function earlier so we can just make it a value or start it as the function. The last bit is just making it posiible to remove items (by making them undefined so then we can remove them with the previous condition) and we just return the value, and the remove possibility.

## Session4

1. useDeepCompareEffect is a hook that comapres the value whenever the dependencies change. Works a bit like useMemo hook, but we can use it to simplify the usage of dependencies so it's just more comfortable. The useEffect as we know compares it to the reference and creates new object so it's also more efficient. As you can see there we just check if the callback is equal to our previous callback and we set it if it't not and then we just start useEffect with that data.

2. The useEventListener hook is really simple, but I think is one of the coolest ones. We can also use events on our elements in React, but when we need to you some more of them or just do it somewhere else we can use this magnificent hook. We just make our callbackRef and check if it's our callback just to be sure and then we make it so we can use it as normal useEventListener with all the options we want.

3. The useOnScreen is also really cool. I had it done with pure JS in my JS30 challange, but here it is done with React. We just check if our element is visible on website by IntersectionObserver which is the browser implemented function which checks if our element is visible. We can set it when to make it visible as you can see there by adding rootMargin. Lastly we check if it's not null and unobserve our ref so we don't use our browsers' memory and return if it is visible or not.

4. useScript is also an easy to use hook. We just provide our url and then we make an asynchronous request and we use our previous useAsync hook to see if it's loading, if it has loaded and if it has gotten any errors. If not we make a new promise so we can check if it has loaded we can resolve and if we've got an error we can reject and show it in our document.

5. useWindowSize is pretty self explainatory. It just measures our window and make an object with width and height of it and returns it so we can have those values.

## Session5

1. The useEffectOnce hook is really simple. If you just want to make an element load just once you make this one simple one liner and you're done. The hook just uses the simple useEffect and unchcecks it after a first use so the callback fn won't start anymore.

2. The useGeolocation Hook has many use cases so we can use it anywhere we want to be honest. The hooks structure is plain and simple. We just three states: loading, error and data. Then we use useEffect hook so we can handle diffrent outcomes. On success we set our geolocation,, diable error and finish loading. On error we just set an error and finish loading. And then we just get the current position with the handlers and options if we pass some. At last we create an id so we check if the location of the user changes whenever the option changes and if it does watch position with our hanclers, update it and then dissconect so we don't watch it when we don't have to.

3. The useMediaQuery hook can be useful when we want to do some CSS in React. It provides an option so we can make our components and it contents adapt to the size of the window. We just pass how we want to watch (the break point) and chceck if the size if correct using browser fn (matchMedia). Then we update it using our useEventListener hook so we can check if our window matches each time we change mediaQueryList.

4. The useSize hook is a quick one. We use it to check the size of an element as you could've guessed. We just check if we have a ref if we don't have one we set an observer which checks our parameters and sets them to our size then we disconnect it so it doesn't do it multiple times and return our size.

5. The useStateValidation is a really cool hook which helps us validate stuff in forms for example. We just pass our requierment (function) and initial value. Each time the validation fn changes we just our state that we pass in the callback is a function (and run it if it is) or the value which we return. Then we set our value and check it by running it in our validation function and return the state, the check and if it's valid.

## Session6

1. Does not work. The React updates cahnges the basics of the workflow of this hook. I'll try to fix it later.

2. The useDarkMode hook is really common used and it's easy to implement. The hooks works by making a data in localStorage and than toggling it to the users' page body. We initially check users' preference by useMediaQuery and than make a enable value which is the initial user preference if we haven't chanaged the mode or the toggled preference. And each time it changes we toggle the class to the body.

3. The useCopyToClipboard hook is pretty easy. We just set what was copied (value), and if it was successfully copied (success). Then we just make a fn which takes our text and some options and starts the copy fn with the provided parameters. The if we have a result (boolean) from that fn we set our value to that result (so the text that we want) and our success to that result (if it was true or false). Lastly we just retun the fn and the value with the success.

4. The useCookie hook doesn't need much explanation. It works pretty much the same as sessionStorage and localStorage but with cookies. The simplicity of that is thank to the Cookie npm so here we just need to worry about setting it all just like those two I said about earilier.

5. The useTranslations Hook is pretty broad. We start with setting default langs in the localStorage. So the default lang is english and our fallback lang is english. Then we make a translate function which takes the key. We set our key to the keys value and sometimes we don't know if it gonna be a nested value so we just split it with the dot. Then we return the getNestedTranslation fn which takes lang and keys. It return the reduced keys so we get an exact object with our key or just our key each time the translation with lang index changes. long story short getNestedTranslation fn just gives us back the values from our translations which we have in translations folder. Coming back to our translate fn it return the values with our set language and if we don't have those values it gives us back the values from our fallback language and if we don't have those it just returns the key with which we wanted to get the values. Lastly we return all of the langs and options to setting them as well as the translate fn.

## Session7

1. useDebugInformation is a pretty useful debugging tool. it's a bit complicated hook, but it works by taking two properties. First one is componentName which is pretty understandable second one is props which takes our props we were cahnging and we want to know how they changed. We create some variables which can help us provide further information:

   1.1 count - just counts how many times we rendered that component. It's a custom hook so explanation is down there.
   1.2 changedProps - those are the props that we changed. By default it's an empty obj.
   1.3 previousProps - our initial props / props before the change.
   1.4 lastRenderTimestamp - the time we rendered the component.

So then we make a props key so we can have a name of every prop. After that we just make a simple reduce which makes puts all the data that changed in to another obj. We create info variable which is just an organised informations we gathered. Lastly we update everyting put it in the console and return the info to the us.

2. useHover it's really simple hook. It's not useful if you think about it from the CSS point of view, but we don't have to use it for styling we can you it so when we hover over sth we can mount so element or do sth else. It just takes the reference and toggles the state whenever we hover over sth or we leave the area.

3. useLongPress is also simple. It takes the ref and the callback fn and delay optionally. The it just takes the reset and clear fn for the timer. We claer the timer for the first time the hook starts. And lastly we just operate on eventlisteners. So when we press the timer restart and start, but when we leave the area or stop pressing it stops.

4. useOnlineStatus quick hook which toggles the states when the user if online and offline. We can do so interesing effects with that one I think.

5. useRenderCount is a debugging tool also. You can see how it works in the useDebugInformation hook. Basicly it creates ref and each time the component renders it increments so we can see how many times it does and maybe why.
