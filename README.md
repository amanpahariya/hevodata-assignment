# Getting Started with Create React App

Create react app by the following command:

`npx create-react-app`

### import the component slider component in `App.js` file

```
import SingleSlider from "./components/SingleSlider/SingleSlider";
<SingleSlider
    data={array}
/>
```

Using in component

```
import SingleSlider from "./components/SingleSlider/SingleSlider";

function App() {
    const arr = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MNxTKwV0dK5HP14KV0Muh6piqPGTv8w4PQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ne4fxlOxhGDTycjkVZd_4KxtraQ0WP4DoQ&usqp=CAU"
    ];


    return (
        <div>
            <SingleSlider
                data={arr}
            />
        </div>
    );
}

export default App;
```

By default Slide will change in every 2 seconds.

#### passing timeout prop

```
import SingleSlider from "./components/SingleSlider/SingleSlider";
function App() {
    const arr = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfEjaLquQ38Bmm-2W_Pgu1q6PXB7sC32impg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-MNxTKwV0dK5HP14KV0Muh6piqPGTv8w4PQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsugtuTfilGyAJSbqMxOMl2NnpxZUGnG_UA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ne4fxlOxhGDTycjkVZd_4KxtraQ0WP4DoQ&usqp=CAU"
    ];

    return (
        <div>
            <SingleSlider
                data={arr}
                timeout={5000}
            />
        </div>
    );
}
export default App;
```

timeout props take a time in ms which will use to change the slide

#### props

``
data : this will takes an array of images
``
``
timeout : this takes ms to change the slide
``
