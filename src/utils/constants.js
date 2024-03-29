
export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const NETFLIX_USER = "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

export const YOUTUBE_LINK = "https://www.youtube.com/embed/";

export const YOUTUBE_LINK_AUTOMUTE = "?&autoplay=1&mute=1";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
        {code:"en", name:"English"},
        {code:"hi", name:"Hindi"},
        {code:"es", name:"Spanish"},
        {code:"jp", name:"Japanese"}
    ]