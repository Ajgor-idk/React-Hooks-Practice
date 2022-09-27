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
