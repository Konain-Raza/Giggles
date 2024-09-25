import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import axios from "axios";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const categoryData = {
    Any: {
      image: "/assets/images/any.png",
      gradient: "bg-gradient-to-r from-orange-500 to-orange-700",
    },
    Misc: {
      image: "/assets/images/misc.png",
      gradient: "bg-gradient-to-r from-purple-700 to-purple-950",
    },
    Programming: {
      image: "/assets/images/programming.png",
      gradient: "bg-gradient-to-r from-blue-600 to-blue-900",
    },
    Dark: {
      image: "/assets/images/dark.png",
      gradient: "bg-gradient-to-r from-stone-500 to-stone-700",
    },
    Pun: {
      image: "/assets/images/pun.png",
      gradient: "bg-gradient-to-r from-yellow-500 to-red-600",
    },
    Spooky: {
      image: "/assets/images/spooky.png",
      gradient: "bg-gradient-to-r from-gray-700 to-gray-800",
    },
    Christmas: {
      image: "/assets/images/christmas.png",
      gradient: "bg-gradient-to-r from-red-700 to-red-500",
    },
  };

  const getCategories = async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_JOKE_API_CATEGORIES
      );
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const getJoke = async () => {
    setLoading(true);
    try {
      const url = selectedCategory
        ? `${
            import.meta.env.VITE_JOKE_API
          }?type=single&category=${selectedCategory}`
        : `${import.meta.env.VITE_JOKE_API}?type=single`;

      const response = await axios.get(url);
      setJoke(response.data.joke);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
    getJoke();
  }, [selectedCategory]);

  const backgroundGradient = selectedCategory
    ? categoryData[selectedCategory]?.gradient
    : categoryData.Any.gradient;

  return (
    <div
      className={`${backgroundGradient} min-h-screen flex flex-col items-center justify-items-start h-max w-full overflow-hidden`}
    >
      <Navbar
        categories={categories}
        fetchJokeByCategory={setSelectedCategory}
      />
      <Hero
        joke={joke}
        regenerateJoke={getJoke}
        selectedCategory={selectedCategory}
        categoryImage={
          categoryData[selectedCategory]?.image || categoryData.Any.image
        }
      />
      <Footer />
    </div>
  );
};

export default App;
