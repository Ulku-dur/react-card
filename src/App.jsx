import "./App.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/200/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
        />
        <Card
          imgAlt="Card Image 2"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/211/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          buttonText="Learn More"
          link="card1"
        />
        <Card
          imgSrc="https://picsum.photos/id/250/300/200"
          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />
      </div>
      <div className="col">
        <Card
          imgSrc="https://picsum.photos/id/106/300/200"
          imgAlt="Card Image 1"
          buttonText="Learn More"
          link="card1"
        />

        <Card
          imgSrc="https://picsum.photos/id/193/300/200"
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />
      </div>
    </div>
  );
}

export default App;