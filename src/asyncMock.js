

const products = [
    {
        id: '1',
        name: 'Call of Duty MW2',
        price: 10000,
        category: 'shooter',
        img: 'https://blog.latam.playstation.com/tachyon/sites/3/2022/06/763672f00bdbec568bc58cd106f721cb040be956.jpg?resize=1088%2C612&crop_strategy=smart',
        stock: 25,
        description: 'Es un videojuego de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision, contiene su propio Battle Royale Warzone'
        
    },
    {
        id: '2',
        name: 'Counter Strike Global Ofensive 2',
        price: 0,
        category: 'shooter',
        img: 'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1696359298',
        stock: 'Ilimitado',
        description: 'Counter-Strike: Global Offensive fue un videojuego de disparos en primera persona desarrollado por Valve Corporation y Hidden Path Entertainment. Es el cuarto juego de la saga Counter-Strike. Fue lanzado al mercado en agosto de 2012 para las plataformas de Microsoft Windows, macOS y Xbox 360 y PlayStation 3.'
      
    },
    {
      id: '3',
      name: 'Valorant',
      price: 0,
      category: 'shooter',
      img: 'https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-b88adde6a57e40aa85818820aa87a6cd',
      stock: 'Ilimitado',
      description: 'Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019. Fue lanzado para Microsoft Windows el 2 de junio de 2020 después de su beta cerrada lanzada el 7 de abril de 2020.'
      
    },
    {
      id: '4',
      name: 'Bordelands 3',
      price: 13000,
      category: 'shooter',
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/2323/p50N4PBK9rNanGYKFecTvac5.png',
      stock: 8,
      description: 'Borderlands 3 es un videojuego de disparos en primera persona con elementos de rol, se trata de la secuela del videojuego de 2012, Borderlands 2. Fue desarrollado por Gearbox Software y distribuido por 2K Games para las plataformas Google Stadia, Microsoft Windows, PlayStation 4, Xbox One y Pc.'
      
    },
    {
      id: '5',
      name: 'Battlefield 2042',
      price: 16000,
      category: 'shooter',
      img: 'https://image.api.playstation.com/vulcan/ap/rnd/202106/0117/I558OkMNBieAq24dzWwjjE4K.png',
      stock: 30,
      description: 'Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por EA Digital Illusion CE, Criterion Games, Ripple Effect y distribuido por Electronic Arts.​'
      
    },
    {
        id: '6',
        name: 'NBA 2k24',
        price: 20000,
        category: 'sports',
        img: 'https://img.asmedia.epimg.net/resizer/MwQiqBWGH2vNAWjk1Z8AScdLwgs=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/5C7AX24SGRERBA6KWUYCCAZOAI.jpg' ,
        stock: 15,
        description: 'La serie NBA 2K es una serie de videojuegos de baloncesto desarrollada y publicada anualmente. Desde 1999 a 2001, la serie NBA 2K era exclusiva para la Sega Dreamcast. La serie fue originalmente publicada por Sega, bajo la etiqueta de Sega Sports y ahora es publicada por 2K Sports.'
    },
    {
        id: '7',
        name: 'FC 24',
        price: 12000,
        category: 'sports',
        img: 'https://elduendemall.com/blog/wp-content/uploads/2023/08/Blog-duende-2.png' ,
        stock: 15,
        description: 'EA Sports FC 24​ es un videojuego de fútbol, desarrollado por EA, y publicado por EA Sports. Este juego marca la primera entrega de la serie EA Sports FC, ​ tras la conclusión de la asociación de EA con FIFA.'
    },
    {
        id: '8',
        name: 'MLB The Show 23',
        price: 22000,
        category: 'sports',
        img: 'https://image.api.playstation.com/vulcan/ap/rnd/202301/2100/dGL72jgmD2ObMCtBgJtWvznC.jpg' ,
        stock: 17,
        description: 'MLB The Show 23 es un videojuego de béisbol de San Diego Studio y publicado por Sony Interactive Entertainment, basado en Major League Baseball. Está disponible en PlayStation 4 y PlayStation 5, así como en Xbox One, Xbox Series X/S y Nintendo Switch.'
    },
    {
        id: '9',
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

