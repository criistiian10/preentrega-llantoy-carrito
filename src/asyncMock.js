

const products = [
    {
        id: '1',
        name: 'Call of Duty',
        price: 10000,
        category: 'shooter',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/2400/ac505d57a46e24dd96712263d89a150cb443af288c025ff2.jpg',
        stock: 25,
        description: 'Juego Battle Royale Warzone'
    },
    {
        id: '2',
        name: 'FC 24',
        price: 12000,
        category: 'sports',
        img: 'https://elduendemall.com/blog/wp-content/uploads/2023/08/Blog-duende-2.png' ,
        stock: 15,
        description: 'Juego de Futbol Online'
    },
    {
        id: '3',
        name: 'Resident Evil 4 Remake',
        price: 13000,
        category: 'Rompecabezas, Terror',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png',
        stock: 10,
        description: 'Juego de Terror con historia'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  
  export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 500);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Filtrar productos por categoría
        const filteredProducts = products.filter((prod) =>
          prod.category === category
        );
        resolve(filteredProducts);
      }, 500);
    });
  };

