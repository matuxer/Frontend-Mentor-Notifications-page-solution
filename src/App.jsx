import Header from "./Components/Header";
import Read from "./Components/Read";
import Unread from "./Components/Unread";

function App() {
  return (
    <div className="App h-full mx-auto flex flex-row justify-center items-center md:container md:py-14">
      <div className="mx-auto px-4 h-max py-5 bg-white md:container md:drop-shadow-lg md:max-w-3xl md:rounded-lg md:px-6">
        {/* Notifications Header */}
        <Header />

        {/* Unread Notifications */}
        <Unread />

        {/* Read Notifications */}
        <Read />
      </div>
    </div>
  );
}

export default App;
