import './App.css';
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
