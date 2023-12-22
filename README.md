[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![TailwindCSS][TailwindCSS.svg]][TailwindCSS-url]
[![Supabase][Supabase.svg]][Supabase-url]
[![PostgreSQL][PostgreSQL.svg]][PostgreSQL-url]
[![Stripe][Stripe.svg]][Stripe-url]
[![License: MIT][license.svg]][license-url]

<div align="center">
  <h1 align="center">Spotify Clone</h1>

  <p align="center">
    Built with Next, React, Tailwind, Supabase, PostgreSQL, Stripe
    <br />
    <br />
    <a href="https://nextjs14-spotify-clone.vercel.app/">View Demo</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
    <img src="public/readme/spotify-clone-demo.gif" alt="demo-gif" style="width: 90%">
</div>

Spotify Clone is a music web app, that replicates the core functionality of the Spotify app:
[![Spotify][Spotify.svg]][Spotify-url]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

You will need to have NPM installed on your computer:

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo and go into the repository
   ```sh
   git clone https://github.com/jhuboo/spotify-clone.git
   cd spotify-clone
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Setup your environment variables in a `.env` file

   ```bash
    # Update these with your own Supabase credentials from https://app.supabase.io
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=
    SUPABASE_SERVICE_ROLE_KEY=

    # Note: Stripe Environment variables are not required for the app to function
    # They need only be added if you want to test payments functionality
    # Update these with your Stripe credentials from https://dashboard.stripe.com/apikeys
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
    STRIPE_SECRET_KEY=
    STRIPE_WEBHOOK_SECRET=
   ```

4. Run Development Server

   ```sh
   npm run dev
   ```

5. Open http://localhost:3000 to see a running dev version of the app

6. [Optional] - Click on the CirclePlus icon, next to the Your Library on the left sidebar to upload a song from your computer.
   - See the demo in above gif to see how to do this!

<!-- ROADMAP -->

## Features Implemented

- [x] Upload Song
- [x] Tailwind design
- [x] Responsiveness for all devices
- [x] Authentication with Supabase
- [x] Github authentication integration
- [ ] TODO: Google & Apple authentication integration
- [x] File and image upload using Supabase storage
- [x] Client form validation and handling using react-hook-form
- [x] Server error handling with react-toast
- [x] Play song audio
- [x] Favorites system
- [x] Playlists / Liked songs system
- [x] Advanced Player component
- [x] Fetch data in server React components by directly accessing the database
- [x] Handling relations between Server and Child components in a real-time environment

<!-- CONTRIBUTING -->

## Contributing

If you have a suggestion, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->

## Contact

- Anvesh G. Jhuboo - anvesh (dot) jhuboo (at) gmail.com

- Project Link: [https://github.com/jhuboo/spotify-clone](https://github.com/jhuboo/spotify-clone)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Code with Antonio | Antonio Erdeljac](https://www.youtube.com/watch?v=2aeMRB8LL4o&t=6034s)
- [NCS | NoCopyrightSounds](https://ncs.io)
- [ Pixabay ](https://pixabay.com/music/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/anveshjhuboo
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TailwindCSS.svg]: https://img.shields.io/badge/TailwindCSS-black?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[TailwindCSS-url]: https://tailwindcss.com/
[Supabase.svg]: https://img.shields.io/badge/Supabase-black?style=for-the-badge&logo=supabase&logoColor=570DF8
[Supabase-url]: https://supabase.io/
[PostgreSQL.svg]: https://img.shields.io/badge/PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=336791
[PostgreSQL-url]: https://www.postgresql.org/
[Stripe.svg]: https://img.shields.io/badge/Stripe-black?style=for-the-badge&logo=stripe&logoColor=white
[Stripe-url]: https://stripe.com/
[license.svg]: https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge
[license-url]: https://opensource.org/licenses/MIT
[Spotify.svg]: https://img.shields.io/badge/Spotify-black?style=for-the-badge&logo=spotify&logoColor=1ED760
[Spotify-url]: https://spotify.com/
