import cinema from '../assets/cinema.jpg'
import post from '../assets/post1.png'
import country from '../assets/country.jpg'
import youtube from '../assets/youtube.jpg'
 export const projectsData = [
    {
        id: 1,
        name: 'Post MERN App',
        desk: 'it is a full stack application for creating posts with the ability to authenticate the user',
        tags: ['React', 'TailWindCss', 'Redux', 'Express'],
        code: 'https://github.com/Kunduz-rahat/mern_blog',
        demo: 'https://mern-blog-front-beige.vercel.app/',
        image: post
    },
    {
        id: 2,
        name: 'YouTube Clone',
        desk: 'A search engine and YouTube video player, made with React.js.',
        tags: ['React',  'Material Ui', 'RapidApi'],
        code: 'https://github.com/Kunduz-rahat/youtube_clone',
        demo: 'https://youtube-clone-pyumwwp86-kunduz-rahat.vercel.app/',
        image: youtube
    },
    {
        id: 3,
        name: 'Country App',
        desk: 'CountryApp is a source code application for getting information about countries, capitals.',
        tags: ['React', 'SaSS', 'Redux', 'TypeScript', 'CountryApi'],
        code: 'https://github.com/Kunduz-rahat/countries_ts',
        demo: 'https://countries-kfewl0kfn-kunduz-rahat.vercel.app/',
        image: country
    },
    {
        id: 4,
        name: 'Movie Application',
        desk: 'A simple application for viewing information about movies, trailers, actors',
        tags: ['React', 'Redux', 'TailwindCss', 'TypeScript', 'TMDBApi'],
        code: 'https://github.com/Kunduz-rahat/movie-ts',
        demo: 'https://movie-h8t66otpc-kunduz-rahat.vercel.app/',
        image: cinema
    }
]
